import crypto from "node:crypto";
import fs from "node:fs";
import zlib from "node:zlib";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function paethPredictor(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

/**
 * Pure-Node PNG parser (zlib + crypto): validates PNG signature, IHDR,
 * full 5-filter scanline reconstruction (None/Sub/Up/Average/Paeth),
 * computes luminance entropy & color buckets, and computes raw decoded pixel SHA-256.
 */
export function inspectPng(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf.length < 33 || !buf.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error(`Invalid PNG signature in ${filePath}`);
  }

  let offset = 8;
  let ihdr = null;
  let plte = null;
  const idatChunks = [];
  let sawIend = false;

  while (offset + 8 <= buf.length) {
    const length = buf.readUInt32BE(offset);
    const type = buf.subarray(offset + 4, offset + 8).toString("ascii");
    const dataStart = offset + 8;
    const dataEnd = dataStart + length;
    const crcEnd = dataEnd + 4;
    if (crcEnd > buf.length) {
      throw new Error(`Truncated PNG chunk '${type}' in ${filePath}`);
    }
    const data = buf.subarray(dataStart, dataEnd);

    if (type === "IHDR") {
      if (length !== 13) {
        throw new Error(`Invalid IHDR length ${length} in ${filePath}`);
      }
      ihdr = {
        width: data.readUInt32BE(0),
        height: data.readUInt32BE(4),
        bitDepth: data.readUInt8(8),
        colorType: data.readUInt8(9),
        compression: data.readUInt8(10),
        filterMethod: data.readUInt8(11),
        interlace: data.readUInt8(12),
      };
    } else if (type === "PLTE") {
      plte = data;
    } else if (type === "IDAT") {
      idatChunks.push(data);
    } else if (type === "IEND") {
      sawIend = true;
      break;
    }

    offset = crcEnd;
  }

  if (!ihdr) {
    throw new Error(`Missing IHDR chunk in ${filePath}`);
  }
  if (!sawIend) {
    throw new Error(`Missing IEND chunk in ${filePath}`);
  }
  if (ihdr.bitDepth !== 8) {
    throw new Error(`Unsupported PNG bitDepth=${ihdr.bitDepth} (expected 8)`);
  }
  if (ihdr.compression !== 0 || ihdr.filterMethod !== 0 || ihdr.interlace !== 0) {
    throw new Error(
      `Unsupported PNG compression/filter/interlace (${ihdr.compression}/${ihdr.filterMethod}/${ihdr.interlace})`,
    );
  }

  const bppMap = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 };
  const bpp = bppMap[ihdr.colorType];
  if (!bpp) {
    throw new Error(`Unsupported PNG colorType=${ihdr.colorType}`);
  }
  if (ihdr.colorType === 3 && !plte) {
    throw new Error(`Indexed PNG missing PLTE chunk in ${filePath}`);
  }

  const inflated = zlib.inflateSync(Buffer.concat(idatChunks));
  const stride = ihdr.width * bpp;
  const expectedLen = ihdr.height * (1 + stride);
  if (inflated.length !== expectedLen) {
    throw new Error(
      `Unexpected inflated PNG buffer size ${inflated.length} (expected ${expectedLen})`,
    );
  }

  const rgba = Buffer.allocUnsafe(ihdr.width * ihdr.height * 4);
  let prevRow = new Uint8Array(stride);
  let currRow = new Uint8Array(stride);

  // Metrics accumulators
  const bucketCounts = new Map();
  let sumLum = 0;
  let sumLumSq = 0;
  let sampleCount = 0;

  for (let y = 0; y < ihdr.height; y++) {
    const rowOffset = y * (1 + stride);
    const filterType = inflated[rowOffset];

    for (let x = 0; x < stride; x++) {
      const raw = inflated[rowOffset + 1 + x];
      const left = x >= bpp ? currRow[x - bpp] : 0;
      const up = y > 0 ? prevRow[x] : 0;
      const upLeft = x >= bpp && y > 0 ? prevRow[x - bpp] : 0;

      let val;
      if (filterType === 0) {
        val = raw;
      } else if (filterType === 1) {
        val = (raw + left) & 0xff;
      } else if (filterType === 2) {
        val = (raw + up) & 0xff;
      } else if (filterType === 3) {
        val = (raw + ((left + up) >> 1)) & 0xff;
      } else if (filterType === 4) {
        val = (raw + paethPredictor(left, up, upLeft)) & 0xff;
      } else {
        throw new Error(`Invalid PNG filterType=${filterType} at row ${y}`);
      }
      currRow[x] = val;
    }

    // Expand row to canonical RGBA and sample statistics (step 2 pixels for speed)
    for (let x = 0; x < ihdr.width; x++) {
      let r, g, b, a;
      if (ihdr.colorType === 6) {
        const idx = x * 4;
        r = currRow[idx];
        g = currRow[idx + 1];
        b = currRow[idx + 2];
        a = currRow[idx + 3];
      } else if (ihdr.colorType === 2) {
        const idx = x * 3;
        r = currRow[idx];
        g = currRow[idx + 1];
        b = currRow[idx + 2];
        a = 255;
      } else if (ihdr.colorType === 0) {
        r = g = b = currRow[x];
        a = 255;
      } else if (ihdr.colorType === 4) {
        const idx = x * 2;
        r = g = b = currRow[idx];
        a = currRow[idx + 1];
      } else {
        const pIdx = currRow[x] * 3;
        r = plte[pIdx];
        g = plte[pIdx + 1];
        b = plte[pIdx + 2];
        a = 255;
      }

      const outIdx = (y * ihdr.width + x) * 4;
      rgba[outIdx] = r;
      rgba[outIdx + 1] = g;
      rgba[outIdx + 2] = b;
      rgba[outIdx + 3] = a;

      if ((x & 1) === 0 && (y & 1) === 0) {
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        sumLum += lum;
        sumLumSq += lum * lum;
        sampleCount++;

        const bucket = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
        bucketCounts.set(bucket, (bucketCounts.get(bucket) ?? 0) + 1);
      }
    }

    const tmp = prevRow;
    prevRow = currRow;
    currRow = tmp;
  }

  const meanLum = sumLum / sampleCount;
  const varianceLum = Math.max(0, sumLumSq / sampleCount - meanLum * meanLum);
  const stdDevLum = Math.sqrt(varianceLum);

  let maxBucketCount = 0;
  for (const cnt of bucketCounts.values()) {
    if (cnt > maxBucketCount) maxBucketCount = cnt;
  }
  const nonBgRatio = 1 - maxBucketCount / sampleCount;

  const pixelSha256 = crypto.createHash("sha256").update(rgba).digest("hex");

  return {
    width: ihdr.width,
    height: ihdr.height,
    bitDepth: ihdr.bitDepth,
    colorType: ihdr.colorType,
    stdDevLum,
    meanLum,
    uniqueColorBuckets: bucketCounts.size,
    nonBgRatio,
    pixelSha256,
  };
}
