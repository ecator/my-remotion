> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Connect your agent

> Pick the agent the HyperFrames Studio app works with: Claude Code, Codex, Grok, Antigravity, GitHub Copilot, or OpenCode for free. The app installs it for you.

The app makes your videos with an agent that runs on your computer. The first time you send a request without one,
the **Connect an agent** sheet opens: choose an agent and the app installs it for you, then helps you sign in.

| Agent | Sign-in | Cost |
| - | - | - |
| Claude Code | Your browser opens Claude's sign-in: a Claude account or an Anthropic Console account. | Billed by Anthropic |
| Codex | Your browser opens Codex's sign-in: your ChatGPT account. | Billed by OpenAI |
| Grok | Grok gives you a code to confirm in your browser. | Billed by xAI |
| Antigravity | Signs in from Terminal: the sheet gives you the command. | Billed by Google |
| GitHub Copilot | Signs in from Terminal: the sheet gives you the command. | Billed by GitHub |
| OpenCode | None: it runs free models. Sign in to a provider from Terminal to add its models. | Free |

Runs bill to the plan of the account your agent is signed in with. To use an API key instead, change **Bill runs
to** in **Settings** > **Permissions**.

## Set one up

<video aria-label="Settings, Permissions: every agent and its state" poster="/public/images/studio-app/spots/settings-permissions-v2.jpg" playsInline preload="none" />

**1. Choose an agent**

In **Connect an agent**, choose **Install** next to the agent you want, or **Use** next to one already on your
computer. The app asks **Install … from …?** and runs that company's official installer. It takes about a minute.

**2. Sign in**

Choose **Sign in to Claude Code** (or your agent's name) and finish in your browser, or follow the sheet's
Terminal step for Antigravity, GitHub Copilot and OpenCode.

**3. Send**

When the agent answers, the app sends the request you started with.

If a step fails, the sheet shows the command to run yourself: choose **Copy**, then **Open Terminal**, and paste it.

| Agent | Install command | Sign in |
| - | - | - |
| Claude Code | `curl -fsSL https://claude.ai/install.sh \| bash` | `claude auth login` |
| Codex | `curl -fsSL https://chatgpt.com/codex/install.sh \| sh` | `codex login` |
| Grok | `curl -fsSL https://x.ai/cli/install.sh \| bash` | `grok login` |
| Antigravity | `curl -fsSL https://antigravity.google/cli/install.sh \| bash` | run `agy` once |
| GitHub Copilot | `curl -fsSL https://gh.io/copilot-install \| bash` | `copilot login` |
| OpenCode | `curl -fsSL https://opencode.ai/v2/install \| bash` | optional: `opencode providers login` |

## Access: Auto or Full access

<video aria-label="Settings, Agent: Auto or Full access" poster="/public/images/studio-app/spots/settings-agent-v2.jpg" playsInline preload="none" />

**Auto**, the default, lets your agent work in your project and use the internet, and blocks risky steps. **Full
access** lets it install and run anything, with no checks. Change it in **Settings** > **Agent**.

GitHub Copilot and OpenCode only run with **Full access**: the first time you send to one, the app asks to **Turn on**
Full access.

## Switch agents

<video aria-label="The agent picker in the chat header" poster="/public/images/studio-app/spots/agent-picker-v2.jpg" playsInline preload="none" />

Open the agent picker in the chat header and choose a ready agent; it's used from your next request. To set the
agent, model and effort for every new request, use **Settings** > **Agent**. **Settings** > **Permissions** lists
every agent with its state (**Ready**, **Not signed in**, **Not installed**, **Needs an update**) and the button that
fixes it.

## Related topics

* [Make your first video](https://hyperframes.heygen.com/studio-app/first-video.md)
* [Troubleshooting](https://hyperframes.heygen.com/help.md#in-the-studio-app)
* Use your agent outside the app: [Claude Code](https://hyperframes.heygen.com/guides/with-claude-code.md), [Codex](https://hyperframes.heygen.com/guides/with-codex.md), [Cursor](https://hyperframes.heygen.com/guides/with-cursor.md)


## Related topics

- [Make videos with a free agent](https://hyperframes.heygen.com/guides/free-agents.md)
- [Make your first video in the Studio app](https://hyperframes.heygen.com/studio-app/first-video.md)
- [Continue a Claude Code or Codex project in Studio](https://hyperframes.heygen.com/studio-app/existing-project.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.