import { Composition } from "remotion";
import { HelloWorld, helloWorldSchema } from "./videos/HelloWorld";
import {
  HfEp01IntroAndQuickstart,
  hfEp01Schema,
} from "./videos/HfEp01IntroAndQuickstart";
import { EP01_TOTAL_FRAMES } from "./videos/HfEp01IntroAndQuickstart/captions";
import {
  EP02_DEFAULT_PROPS,
  HfEp02StudioDesktopApp,
  hfEp02Schema,
} from "./videos/HfEp02StudioDesktopApp";
import { EP02_TOTAL_FRAMES } from "./videos/HfEp02StudioDesktopApp/captions";
import {
  EP03_DEFAULT_PROPS,
  HfEp03BrowserEditorNle,
  hfEp03Schema,
} from "./videos/HfEp03BrowserEditorNle";
import { EP03_TOTAL_FRAMES } from "./videos/HfEp03BrowserEditorNle/captions";
import {
  EP04_DEFAULT_PROPS,
  HfEp04BrandAndExplainerFlows,
  hfEp04Schema,
} from "./videos/HfEp04BrandAndExplainerFlows";
import { EP04_TOTAL_FRAMES } from "./videos/HfEp04BrandAndExplainerFlows/captions";
import {
  EP05_DEFAULT_PROPS,
  HfEp05MediaDataAndDevFlows,
  hfEp05Schema,
} from "./videos/HfEp05MediaDataAndDevFlows";
import { EP05_TOTAL_FRAMES } from "./videos/HfEp05MediaDataAndDevFlows/captions";
import {
  EP06_DEFAULT_PROPS,
  HfEp06PromptAnatomyAndMotion,
  hfEp06Schema,
} from "./videos/HfEp06PromptAnatomyAndMotion";
import { EP06_TOTAL_FRAMES } from "./videos/HfEp06PromptAnatomyAndMotion/captions";
import {
  EP07_DEFAULT_PROPS,
  HfEp07AudioVoiceAndCaptions,
  hfEp07Schema,
} from "./videos/HfEp07AudioVoiceAndCaptions";
import { EP07_TOTAL_FRAMES } from "./videos/HfEp07AudioVoiceAndCaptions/captions";
import {
  EP08_DEFAULT_PROPS,
  HfEp08ColorVfxAnd3d,
  hfEp08Schema,
} from "./videos/HfEp08ColorVfxAnd3d";
import { EP08_TOTAL_FRAMES } from "./videos/HfEp08ColorVfxAnd3d/captions";
import {
  EP09_DEFAULT_PROPS,
  HfEp09HtmlContractAndGsap,
  hfEp09Schema,
} from "./videos/HfEp09HtmlContractAndGsap";
import { EP09_TOTAL_FRAMES } from "./videos/HfEp09HtmlContractAndGsap/captions";
import {
  EP10_DEFAULT_PROPS,
  HfEp10VariablesAndBatchTemplates,
  hfEp10Schema,
} from "./videos/HfEp10VariablesAndBatchTemplates";
import { EP10_TOTAL_FRAMES } from "./videos/HfEp10VariablesAndBatchTemplates/captions";
import {
  EP11_DEFAULT_PROPS,
  HfEp11VsRemotionAndMigration,
  hfEp11Schema,
} from "./videos/HfEp11VsRemotionAndMigration";
import { EP11_TOTAL_FRAMES } from "./videos/HfEp11VsRemotionAndMigration/captions";
import {
  EP12_DEFAULT_PROPS,
  HfEp12SdkPlayerAndCloudDeploy,
  hfEp12Schema,
} from "./videos/HfEp12SdkPlayerAndCloudDeploy";
import { EP12_TOTAL_FRAMES } from "./videos/HfEp12SdkPlayerAndCloudDeploy/captions";

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
        id="HfEp02StudioDesktopApp"
        component={HfEp02StudioDesktopApp}
        durationInFrames={EP02_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp02Schema}
        defaultProps={EP02_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp03BrowserEditorNle"
        component={HfEp03BrowserEditorNle}
        durationInFrames={EP03_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp03Schema}
        defaultProps={EP03_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp04BrandAndExplainerFlows"
        component={HfEp04BrandAndExplainerFlows}
        durationInFrames={EP04_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp04Schema}
        defaultProps={EP04_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp05MediaDataAndDevFlows"
        component={HfEp05MediaDataAndDevFlows}
        durationInFrames={EP05_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp05Schema}
        defaultProps={EP05_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp06PromptAnatomyAndMotion"
        component={HfEp06PromptAnatomyAndMotion}
        durationInFrames={EP06_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp06Schema}
        defaultProps={EP06_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp07AudioVoiceAndCaptions"
        component={HfEp07AudioVoiceAndCaptions}
        durationInFrames={EP07_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp07Schema}
        defaultProps={EP07_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp08ColorVfxAnd3d"
        component={HfEp08ColorVfxAnd3d}
        durationInFrames={EP08_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp08Schema}
        defaultProps={EP08_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp09HtmlContractAndGsap"
        component={HfEp09HtmlContractAndGsap}
        durationInFrames={EP09_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp09Schema}
        defaultProps={EP09_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp10VariablesAndBatchTemplates"
        component={HfEp10VariablesAndBatchTemplates}
        durationInFrames={EP10_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp10Schema}
        defaultProps={EP10_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp11VsRemotionAndMigration"
        component={HfEp11VsRemotionAndMigration}
        durationInFrames={EP11_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp11Schema}
        defaultProps={EP11_DEFAULT_PROPS}
      />
      <Composition
        id="HfEp12SdkPlayerAndCloudDeploy"
        component={HfEp12SdkPlayerAndCloudDeploy}
        durationInFrames={EP12_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
        schema={hfEp12Schema}
        defaultProps={EP12_DEFAULT_PROPS}
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
