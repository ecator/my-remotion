> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Continue a Claude Code or Codex project in Studio

> Open a HyperFrames project you started with Claude Code, Codex or another agent in the Studio app, keep its conversation (on Mac), and hand it back to your agent when you're done.

Started a video in Claude Code, Codex or another agent? Open the same folder in the Studio app and keep going there:
the preview sits beside the chat, and you can point, draw and comment on the picture. Nothing is copied or moved,
so your agent and the app work on the same files.

## From your agent: one command (Mac)

Inside a Claude Code, Codex or Grok session, in the project folder, run (or ask your agent to run it):

```bash theme={null}
npx hyperframes open
```

```text theme={null}
◇  Opening Spring Launch in the HyperFrames desktop app
   Its chat picks up this Claude Code conversation.
   When the person is back here, run npx hyperframes catch-up to see what they did in the app.
```

The app opens the project, and because the command ran inside your agent's session, its chat carries on that
conversation, so you don't explain the video again. Run it from a plain terminal instead and the app still opens the
project, with a fresh chat.

This hand-off works on Mac today. On Windows and Linux, and wherever the app isn't installed yet, the command prints
the download link instead.

## From the app: Import projects

<video aria-label="The sidebar's Import projects opens a list of the projects on this computer" poster="/public/images/studio-app/spots/import-projects-v2.jpg" playsInline preload="none" />

The app looks for HyperFrames projects on your computer. The ones it hasn't opened yet are under **Import projects** in the
sidebar, with their count. Choose **Import** on one, or **Import all**.

Importing adds a project to HyperFrames without moving it: it stays in its folder, and your changes are saved there.

The first time, macOS asks before the app looks in Documents, Downloads and Desktop. Have one somewhere else? Choose
**File** > **Open Folder…** (<kbd>⌘</kbd> <kbd>O</kbd>, or <kbd>Ctrl</kbd> <kbd>O</kbd> on Windows and Linux), or drop the folder on the sidebar.

## Back to your agent: catch up

When you go back to your terminal, ask your agent to catch up, or run:

```bash theme={null}
npx hyperframes catch-up
```

It lists what happened in the app since the hand-off: what you asked, what Framey did, and which files changed.
Your agent reads it and carries on from there. Catch-up works after `npx hyperframes open` ran inside your agent's
session; for a project opened from a plain terminal or imported in the app, there's no hand-off to catch up on.

## Related topics

* [Connect your agent](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)
* [The project screen](https://hyperframes.heygen.com/studio-app/workspace.md)
* [Install HyperFrames in your agent](https://hyperframes.heygen.com/guides/plugins.md)


## Related topics

- [Make your first video](https://hyperframes.heygen.com/quickstart.md)
- [Find your way around a project](https://hyperframes.heygen.com/studio-app/workspace.md)
- [Connect your agent](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.