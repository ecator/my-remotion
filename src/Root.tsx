import { Composition } from "remotion";
import { HelloWorld, helloWorldSchema } from "./videos/HelloWorld";
import {
  HfEp01IntroAndQuickstart,
  hfEp01Schema,
} from "./videos/HfEp01IntroAndQuickstart";
import { EP01_TOTAL_FRAMES } from "./videos/HfEp01IntroAndQuickstart/captions";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HfEp01IntroAndQuickstart"
        component={HfEp01IntroAndQuickstart}
        durationInFrames={EP01_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp01Schema}
        defaultProps={{
          episodeCode: "EP.01",
          episodeTitle: "重新定义网页转视频：什么是 HyperFrames 与三大起步路径",
          brandColor: "#10B981",
          accentColor: "#06B6D4",
          showSubtitles: true,
          bgmVolume: 0.18,
        }}
      />
      <Composition
        // You can take the "id" to render a video:
        // pnpm remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
        schema={helloWorldSchema}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        defaultProps={{
          titleText: "灰原哀 · CODENAME: SHERRY",
          titleColor: "#F1F5F9",
          logoColor1: "#E11D48",
          logoColor2: "#38BDF8",
          quoteText: "「時間は待ってくれないわよ… 科学も、運命もね」",
          quoteSubText: "“时间可不会等人哦……无论是科学，还是命运。” —— 灰原 哀",
        }}
      />
    </>
  );
};
