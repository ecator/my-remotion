import { Composition } from "remotion";
import { HelloWorld, helloWorldSchema } from "./videos/HelloWorld";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
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
