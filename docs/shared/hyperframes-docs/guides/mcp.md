> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Create through an AI chat

> Use the hosted HyperFrames MCP connector to create and render without installing the local CLI.

HyperFrames MCP is a hosted connector for supported AI chat products. It lets
the chat call HyperFrames creation and rendering tools through your HeyGen
account without installing the local CLI.

> [!NOTE]
>
> This path is in beta. Availability, interface wording, features, credits, and plan requirements
> can change.

<video aria-label="Making and revising a video inside an AI chat, then rendering it" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/mcp-flow-demo-v2.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/mcp-flow-demo-v2.jpg" playsInline preload="metadata" />

An illustration of the flow, labelled as such on screen: describe the video,
revise it in plain language, and the MP4 comes back. Nothing is installed locally.

## Choose hosted or local

Use the hosted connector when you want:

* no local HyperFrames setup;
* a conversational creation flow;
* cloud rendering;

Use the [local Quickstart](https://hyperframes.heygen.com/quickstart.md) when you need:

* full project files;
* local rendering;
* direct editing in the browser editor and in the source;
* custom automation or deployment;
* precise debugging and validation.

## Connect HyperFrames

The production MCP address is:

```text theme={null}
https://mcp.heygen.com/mcp/hyperframes/
```

You need a HeyGen account and access to the HyperFrames connector.

Each host controls where custom connectors appear and which plans or workspace
roles can add them. Use the steps below as orientation, then follow the linked
host documentation when its interface differs.

> [tab] Claude
>
> HyperFrames by HeyGen is listed in Claude's [connector directory](https://claude.com/connectors/hyperframes-heygen).
>
> 1. Open **Customize → Connectors** and choose **Discover**.
> 2. Search **HyperFrames** and choose **Connect** on HyperFrames by HeyGen.
> 3. Complete the HeyGen sign-in.
>
> If a chat doesn't use it, check that HyperFrames is switched on under **+ → Connectors** in that chat.
>
> To add it by address instead, choose **+ Add → Add custom connector** in **Customize → Connectors** and enter the MCP address above.
>
> See [Anthropic’s current connector instructions](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) for plan and workspace requirements.

> [tab] ChatGPT
>
> Custom MCP servers work on ChatGPT Business, Enterprise and Edu, on ChatGPT web. On Business, only workspace admins and owners can add one.
>
> 1. Open **Plugins**.
> 2. Select the **+** button, then **Add custom MCP server**.
> 3. Enter a name, and the MCP address above as the server URL.
> 4. Set up authentication, accept the risk warning, and select **Create as a plugin**.
> 5. Complete HeyGen authorization.
>
> See [OpenAI’s current instructions](https://help.openai.com/en/articles/12584461).

> [tab] Grok
>
> 1. Open [grok.com/connectors](https://grok.com/connectors).
> 2. Choose **New Connector → Custom**.
> 3. Enter the MCP address above.
> 4. Complete HeyGen authorization.
>
> See [xAI’s current connector instructions](https://docs.x.ai/grok/connectors) for workspace requirements.

Host products change their connector interfaces independently. If a menu or button is missing, check that host’s current plan and workspace permissions before treating it as a HyperFrames failure.

## Create a first composition

Describe the video as you would to an editor, and name HyperFrames so the chat app uses the connector instead of
writing its own video code:

```text theme={null}
Use HyperFrames to make a 15-second vertical product intro for a meditation app.
Audience: people who have trouble falling asleep.
Style: quiet, spacious, and warm.
Show the breathing timer and end with “Rest starts here.”
```

The connector proposes and builds the composition through the tools exposed in
that chat. Follow the returned tool result rather than expecting a specific
preview widget: hosts present MCP output differently.

## Revise it conversationally

Continue in the same conversation:

```text theme={null}
Reveal the product two seconds earlier.
Keep the current colors.
Make the captions smaller and slow down the final transition.
```

Name the visible problem and desired outcome. Avoid restarting the full brief for every revision.

## Get the MP4

Each run renders an MP4 on its own when it finishes, so there is no separate export step. Ask for the download link:

```text theme={null}
Send me the MP4 download link.
```

The hosted connector renders MP4 at its default settings. To choose the frame rate, 4K, or a WebM or MOV file (for transparent overlays or another editor), make the video with the [local skills](https://hyperframes.heygen.com/quickstart.md) and render it on your computer.

The connector renders on hosted infrastructure. Keep any composition or render
identifier the tool returns so you can refer to the same work in a follow-up.

OAuth connects the server to your current HeyGen account. Plans, limits, and
billing can change independently of HyperFrames, so confirm them in the account
before starting repeated or long renders.

## Current limits

* Rendering runs on HeyGen infrastructure. Use the local path when you need local rendering or self-hosting.
* The exact tool list and result presentation depend on the deployed server and the chat host.
* Hosted output does not give you the same local project folder, browser editor surface, or debugging access as the local path.
* Precise source and pixel-level editing belongs in the local project and the browser editor.

## Troubleshooting

If authorization loops:

1. confirm the production MCP address;
2. disconnect and reconnect HyperFrames;
3. confirm that your host plan and workspace permit the connector;
4. confirm that pop-ups and the HeyGen sign-in window are not blocked.

If a create or render action stalls:

1. keep the last tool result and any identifier it returned;
2. retry from a new chat if the host session has expired;
3. report the prompt, expected result, actual result, host, and identifier.

Use [Share feedback](https://hyperframes.heygen.com/help.md#share-feedback) when the failure belongs to HyperFrames. Use the host product’s support when the connector cannot be installed or invoked at all.

> [!WARNING]
>
> Only connect the production HyperFrames server shown on this page. As with any external connector,
> review the permissions and do not send secrets or private material that the destination should not
> receive.

## Related topics

* [Make a locally editable first video](https://hyperframes.heygen.com/quickstart.md)
* [Three ways to start](https://hyperframes.heygen.com/quickstart.md)
* [Share connector feedback](https://hyperframes.heygen.com/help.md#share-feedback)


## Related topics

- [Let an agent drive Studio](https://hyperframes.heygen.com/guides/webmcp.md)
- [HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)
- [AI Chat Reveal](https://hyperframes.heygen.com/catalog/blocks/ai-chat-reveal.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.