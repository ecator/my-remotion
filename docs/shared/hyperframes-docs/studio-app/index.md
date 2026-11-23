> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Install the Studio app

> Download the HyperFrames Studio app for Mac, Windows or Linux, open it for the first time, and sign in with your HeyGen account.

The HyperFrames Studio app for Mac, Windows and Linux is the easiest way to make a video with HyperFrames. You describe the video, an
agent on your computer builds it, and you change it by typing, pointing at the picture, drawing, or commenting.
You do not need to write code. Framey, the small
green guide, points you to the next step along the way.

* **Free.** You sign in with a free HeyGen account.
* **Mac:** Apple Silicon or Intel. **Linux:** 64-bit Intel and AMD, as a .deb or an AppImage.
* **Windows:** 64-bit Intel and AMD, as a zip. Windows on Arm runs the same download through Windows' built-in
  emulation.

![The HyperFrames Studio app's Home screen: the Make something box and the Remix from inspiration feed](https://mintcdn.com/hyperframes/NPYo6ccLFQ7ztD9h/public/images/studio-app/home.jpg?fit=max\&auto=format\&n=NPYo6ccLFQ7ztD9h\&q=85\&s=6c94e122fea75f4e504f69110efb4912)

Home: the Make something box with its Make, Reference and Script tabs, and Remix from inspiration beside it.

## Download and install

> [tab] Mac
>
> **1. Download**
>
> [Download the app for Mac](https://hyperframes.studio/studio/download?os=mac\&src=docs-install). One file works on
> Apple Silicon and Intel Macs.
>
> **2. Install**
>
> Open the downloaded disk image and double-click **Install HyperFrames**. The installer copies the app into
> Applications and shows **Checking it is really from HeyGen**, which can take a minute or two. When it says
> **HyperFrames is in Applications**, choose **Open HyperFrames**.
>
> If your Mac's Applications folder is locked for your account, the installer puts the app in the Applications
> folder inside your home folder instead. If it says **The download looks damaged**, choose **Download again**. If
> it says the check **took too long**, nothing was installed: choose **Try again**.

> [tab] Windows
>
> **1. Download**
>
> [Download the app for Windows](https://hyperframes.studio/studio/download?os=windows\&src=docs-install). You get
> `HyperFrames-win-x64.zip`.
>
> **2. Unzip it and open it**
>
> Right-click the zip and choose **Extract All**. Open the `HyperFrames-win32-x64` folder it makes and
> double-click `HyperFrames.exe`. The app updates itself from there.

> [tab] Linux
>
> **1. Download**
>
> [Download the app for Linux](https://hyperframes.studio/studio/download?os=deb\&src=docs-install).
> You get `HyperFrames-amd64.deb` for 64-bit Intel and AMD computers on Debian, Ubuntu and their
> relatives.
>
> **2. Install it and open it**
>
> In a terminal, in the folder you downloaded it to:
>
> ```bash theme={null}
> sudo apt install ./HyperFrames-amd64*.deb
> ```
>
> Then open **HyperFrames** from your app menu.
>
> Prefer one portable file, or not on a Debian-based system? [Download the AppImage](https://hyperframes.studio/studio/download?os=linux\&src=docs-install)
> instead, then in the folder you downloaded it to:
>
> ```bash theme={null}
> chmod +x HyperFrames-x86_64*.AppImage
> ./HyperFrames-x86_64*.AppImage
> ```
>
> The AppImage is the whole app. Keep it anywhere you like and open it the same way next time.

## First launch

1. A short survey asks what you want to make and which agent you use. Every answer is optional, and **Skip all**
   counts as an answer. What you pick decides where **Build your video** opens. The agent you name starts your first
   chat if it is already set up.
2. Home opens with the **Create your first video** card. See
   [Make your first video](https://hyperframes.heygen.com/studio-app/first-video.md).

A notice also explains what usage data the app records. Choose **Got it** to dismiss it.

## Sign in with HeyGen

On first launch, the app asks you to sign in the first time you click something after the survey.

1. Choose **Continue with HeyGen**. Your browser opens hyperframes.dev.
2. Sign in there within 10 minutes. The browser sends you back to the app, which shows **You're in!** and carries
   on with what you clicked.

If the sign-in runs out of time, choose **Continue with HeyGen** again. If you choose **Not now**, the app asks
again on your next click.
You can sign in or out at any time from **Settings** > **Account**.

## Updates

<video aria-label="Settings, Updates: Check for updates" poster="/public/images/studio-app/spots/settings-updates-v2.jpg" playsInline preload="none" />

The app updates itself. When a new version is ready, a round button appears in the bottom-right corner; click it and
the app restarts as soon as nothing is running, reopening the project you had open. To check by hand, use
**Settings** > **Updates** > **Check for updates**. If an update stalls, click the button again and choose **Try
again**, or **Download it instead**.

## Where your work is kept

* **Projects**: the hidden `.hyperframes-studio` folder in your home folder, or the folder you imported them from.
  Each one is a normal HyperFrames project, so it also opens in the [browser editor](https://hyperframes.heygen.com/studio/index.md) and the
  [command line](https://hyperframes.heygen.com/developers/cli.md).
* **Exported videos**: your Downloads folder.
* **Settings and sign-in**: `~/Library/Application Support/HyperFrames` on a Mac, `%APPDATA%\HyperFrames` on Windows,
  `~/.config/HyperFrames` on Linux.

## Related topics

* [Connect your agent](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)
* [Make your first video](https://hyperframes.heygen.com/studio-app/first-video.md)
* [Troubleshooting](https://hyperframes.heygen.com/help.md#in-the-studio-app)


## Related topics

- [Make your first video](https://hyperframes.heygen.com/quickstart.md)
- [HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)
- [Troubleshooting](https://hyperframes.heygen.com/help.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.