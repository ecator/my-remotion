> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Persistence

> Autosave composition edits through pluggable adapters — filesystem, memory, or your own storage backend.

When you pass a `persist` adapter to `openComposition`, the SDK subscribes to every `change` event and schedules an async write automatically. You never call a save method after each edit — the adapter handles it.

```typescript theme={null}
import { openComposition } from "@hyperframes/sdk";
import { createFsAdapter } from "@hyperframes/sdk/adapters/fs";

const adapter = createFsAdapter({ root: "./project" });

const comp = await openComposition(html, {
  persist: adapter,
  persistPath: "composition.html", // default; can be omitted
});

comp.setText("hf-title", "Draft title");
// Autosaved on the next tick — no explicit save call needed.
```

## Options

**persist** `PersistAdapter`

The storage adapter. The SDK calls `adapter.write(persistPath, html)` after every change. Omit to skip persistence (headless / agent use).

**persistPath** `string`

The path key passed to the adapter on every write. Default: `"composition.html"`. Immutable for the session lifetime — changing the path mid-session is not supported.

## Flushing pending writes

The persist queue coalesces rapid edits, so the last write may be deferred when your application closes. Call `flush()` to drain any pending write before exit:

```typescript theme={null}
// Ensure the latest state is committed before the process exits.
await comp.flush();
comp.dispose();
```

`flush()` resolves when the in-flight write completes. If there is nothing pending it resolves immediately. It is a no-op when no `persist` adapter was provided.

## Handling write failures

Write errors are emitted as events rather than thrown exceptions — a failed autosave must not crash an interactive session. Subscribe with `comp.on('persist:error', …)` to handle them:

```typescript theme={null}
comp.on("persist:error", ({ error }) => {
  console.error("Autosave failed:", error.message, error.cause);
  showToast("Could not save — retrying next change.");
});
```

The event carries `{ error: { message: string; hint?: string; cause?: unknown } }`. The SDK retries on the next `change` event, so transient errors recover automatically.

## Shipped adapters

### `createMemoryAdapter()` — tests and demos

An in-process store — no file I/O, no Node.js required. Use it in unit tests, demos, or browser sessions where you want version history without disk access.

```typescript theme={null}
import { createMemoryAdapter } from "@hyperframes/sdk";

const adapter = createMemoryAdapter();

const comp = await openComposition(html, {
  persist: adapter,
});

comp.setText("hf-title", "v1");
await comp.flush();
comp.setText("hf-title", "v2");
await comp.flush();

const versions = await adapter.listVersions("composition.html");
// versions[0] is newest — key "v2", versions[1] is "v1"

const v1Html = await adapter.loadFrom("composition.html", versions[1].key);
```

`createMemoryAdapter()` also exposes `injectFault(message)` — a test helper that makes the next write fire `persist:error` instead of committing. This lets you exercise your error-handling path without real I/O failures.

### `createFsAdapter(opts)` — Node.js local dev

Writes to the filesystem and keeps a rolling version history under `.hf-versions/`. Node.js only — do not use in browser builds.

> [!NOTE]
>
> `createFsAdapter` is imported from the `@hyperframes/sdk/adapters/fs` **subpath**, not the main barrel like `createMemoryAdapter`. The fs adapter pulls in Node's `fs` module, so keeping it on a separate subpath lets browser bundles tree-shake it away — importing it from the root would drag `node:fs` into a browser build.

```typescript theme={null}
import { createFsAdapter } from "@hyperframes/sdk/adapters/fs";

const adapter = createFsAdapter({
  root: "./project",   // required — directory for composition files
  maxVersions: 20,     // optional — versions to retain per file (default: 20)
});
```

**root** `string`

Root directory. The adapter writes `{root}/{persistPath}` and keeps version files under `{root}/.hf-versions/{persistPath}/`.

**maxVersions** `number`

Maximum version snapshots to retain per file. Oldest are pruned automatically. Default: `20`.

**Listing and restoring versions:**

```typescript theme={null}
const versions = await adapter.listVersions("composition.html");
// [ { key: "1751234567890-0003", timestamp: 1751234567890 }, ... ]
// Entries are newest-first.

const olderHtml = await adapter.loadFrom("composition.html", versions[2].key);
if (olderHtml) {
  // Re-open the old snapshot.
  const restored = await openComposition(olderHtml, { persist: adapter });
}
```

Version keys are `{timestamp}-{counter}` strings. `listVersions` returns entries newest-first; `timestamp` is the Unix milliseconds at the time of the write.

## Implementing a custom adapter

Any object that satisfies the `PersistAdapter` interface works as a drop-in. The interface is:

```typescript theme={null}
export interface PersistAdapter {
  read(path: string): Promise<string | undefined>;
  write(path: string, content: string): Promise<void>;
  flush(): Promise<void>;
  listVersions(path: string): Promise<PersistVersionEntry[]>;
  loadFrom(path: string, versionKey: string): Promise<string | undefined>;
  on(event: "persist:error", handler: (event: PersistErrorEvent) => void): () => void;
}
```

**Contract:**

* `read()` returns `undefined` for a path that has never been written.
* `write()` is idempotent — a second write to the same path overwrites.
* `flush()` resolves when any queued writes are committed. Return `Promise.resolve()` if writes are synchronous.
* `listVersions()` returns entries newest-first. Entries without stored `content` are valid — `loadFrom` is called lazily by the consumer.
* `loadFrom()` returns `undefined` when the version key is not found.
* `on('persist:error', handler)` registers an error listener. Errors **must not** propagate as thrown exceptions — surface them through the event instead. Returns an unsubscribe function.

**Minimal example — an HTTP / S3-style adapter:**

```typescript theme={null}
import type { PersistAdapter, PersistVersionEntry, PersistErrorEvent } from "@hyperframes/sdk";

export function createHttpAdapter(baseUrl: string): PersistAdapter {
  const errorHandlers: Array<(e: PersistErrorEvent) => void> = [];

  return {
    async read(path) {
      const res = await fetch(`${baseUrl}/${path}`);
      if (res.status === 404) return undefined;
      return res.text();
    },

    async write(path, content) {
      try {
        await fetch(`${baseUrl}/${path}`, {
          method: "PUT",
          body: content,
          headers: { "Content-Type": "text/html" },
        });
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        errorHandlers.forEach((h) => h({ error: { message, cause: err } }));
      }
    },

    async flush() {
      // No queuing — writes are immediate.
    },

    async listVersions(path): Promise<PersistVersionEntry[]> {
      const res = await fetch(`${baseUrl}/${path}/versions`);
      if (!res.ok) return [];
      return res.json() as Promise<PersistVersionEntry[]>;
    },

    async loadFrom(path, versionKey) {
      const res = await fetch(`${baseUrl}/${path}/versions/${versionKey}`);
      if (!res.ok) return undefined;
      return res.text();
    },

    on(event, handler) {
      if (event !== "persist:error") return () => {};
      errorHandlers.push(handler);
      return () => {
        const i = errorHandlers.indexOf(handler);
        if (i !== -1) errorHandlers.splice(i, 1);
      };
    },
  };
}
```

> [!NOTE]
>
> `write()` must never throw — catch errors and emit them through `on('persist:error', …)` instead. The SDK trusts that writes are fire-and-forget from its side; thrown exceptions break the internal persist queue.

> [card] [Adapter reference](https://hyperframes.heygen.com/sdk/reference/adapters.md)
>
> Full `PersistAdapter`, `PersistVersionEntry`, and `PreviewAdapter` type definitions.

> [card] [openComposition reference](https://hyperframes.heygen.com/sdk/reference/open-composition.md)
>
> All `OpenCompositionOptions` fields including `persist`, `persistPath`, `preview`, and `overrides`.


## Related topics

- [@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)
- [Edit a composition with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)
- [Embedded Override Mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.