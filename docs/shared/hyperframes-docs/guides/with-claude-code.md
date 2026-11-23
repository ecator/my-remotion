> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Make videos with Claude Code

> Install the HyperFrames plugin in Claude Code, ask for a video in plain words, then preview and render it to MP4 on your computer.

Install the HyperFrames plugin, then ask Claude Code for a video. Claude Code
writes an HTML project in your folder, opens a live preview, and renders the MP4
on your computer.

```bash theme={null}
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
```

## Before you start

* [Claude Code](https://code.claude.com/docs), signed in with your Claude account
  or an Anthropic Console account. Its usage bills to that account.
* Node.js 22 or newer, and npm.
* FFmpeg, for rendering MP4 files. Run `npx hyperframes doctor` to check.

## Install

> [tab] Plugin (recommended)
>
> Run the two commands above in your terminal. Then start a new Claude Code
> session, or run `/reload-plugins` in the current one.
>
> To get updates on their own, run `/plugin`, open **Marketplaces**, select
> **hyperframes**, and choose **Enable auto-update**. See
> [Install the HyperFrames plugin](https://hyperframes.heygen.com/guides/plugins.md#claude-code) for manual updates and
> removal.

> [tab] Standalone skills
>
> Run this in your project folder and choose **Core Skills**:
>
> ```bash theme={null}
> npx skills add heygen-com/hyperframes
> ```
>
> Or install the core set for your user, with no picker:
>
> ```bash theme={null}
> npx hyperframes skills update
> ```
>
> Start a new Claude Code session afterwards. See
> [Install and update agent skills](https://hyperframes.heygen.com/guides/skills.md).

## Ask for your first video

Open Claude Code in an empty folder and paste:

```text theme={null}
Using /hyperframes:hyperframes, make a 10-second product intro for https://example.com.
```

With standalone skills, the skill is `/hyperframes` instead of
`/hyperframes:hyperframes`. Replace the URL with the page you want the video to
show.

## What happens

1. Claude Code reads the HyperFrames guide for your kind of video, such as a product
   launch or an explainer, and builds the project in your folder. For a longer
   film that tells a story, it first offers three storylines to pick from.
2. It checks the project and opens a local preview.

Watch the first version and say what to change, in the same conversation.

## Preview and render

To reopen the preview later, run this inside the project folder:

```bash theme={null}
npx hyperframes preview
```

The preview opens in the browser editor, where you can also edit the video by
hand. To make the MP4 yourself:

```bash theme={null}
npx hyperframes render --output final.mp4
```

You can also ask Claude Code to render it.

## Prefer an app?

The [HyperFrames Studio app](https://hyperframes.heygen.com/studio-app.md) for Mac, Windows and Linux can use Claude Code
as its agent. It installs Claude Code for you and gives you a chat, a preview,
and an editor in one window. To create inside the Claude chat app instead, with
nothing installed, use the [hosted connector](https://hyperframes.heygen.com/guides/mcp.md).

## If something goes wrong

* **Claude Code does not see the skill.** Start a new session or run
  `/reload-plugins`. For standalone skills, run `npx hyperframes skills check`.
* **The render fails.** Run `npx hyperframes doctor` and fix what it reports.
* **Anything else.** See [Troubleshooting](https://hyperframes.heygen.com/help.md).

## Related topics

* [Make your first video](https://hyperframes.heygen.com/quickstart.md)
* [Choose what to make](https://hyperframes.heygen.com/workflows.md)
* [Write better prompts](https://hyperframes.heygen.com/prompting/overview.md)


## Related topics

- [Make videos with Codex](https://hyperframes.heygen.com/guides/with-codex.md)
- [Make your first video](https://hyperframes.heygen.com/quickstart.md)
- [Make videos with Cursor](https://hyperframes.heygen.com/guides/with-cursor.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.