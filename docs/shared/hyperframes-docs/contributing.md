> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Contribute to HyperFrames

> Set up the repository, make a focused change, and open a pull request.

## Set up the repository

```bash theme={null}
git clone https://github.com/YOUR_USERNAME/hyperframes.git
cd hyperframes
bun install
bun run build
```

HyperFrames uses Bun for workspace operations. Do not add a `pnpm-lock.yaml` or replace `bun.lock`.

Start Studio while working on UI or composition behavior:

```bash theme={null}
bun run dev
```

Studio listens on `http://localhost:5190` when run from the monorepo.

## Check your change

Run the smallest relevant test while iterating, then the repository gates before opening a pull request:

```bash theme={null}
bun run lint
bun run format:check
bun run --filter '*' typecheck
bun run test
```

For a composition, run the gates from the project directory, or pass it:

```bash theme={null}
npx hyperframes lint ./my-video
npx hyperframes check ./my-video
```

Registry items need a different command. They ship as `<name>.html` or
`demo.html`, and the CLI resolves a project by looking for `index.html`, so
pointing it at an item directory fails with "No composition found" — which is
how two `gsap_non_transform_motion` errors once reached `main` unlinted. Use the
script that mounts each item into a throwaway project first, exactly where
`hyperframes add` would put it:

```bash theme={null}
bun run lint:registry-items              # every item
bun run lint:registry-items my-block     # just one
```

The pre-commit hooks format staged files and run checks for the files you changed.

## Work in the right package

| Surface | Package or directory |
| - | - |
| Composition parsing, runtime, types | `packages/core` and `packages/parsers` |
| Browser frame capture | `packages/engine` |
| Encoding and audio/render orchestration | `packages/producer` |
| Command line | `packages/cli` |
| Browser editor | `packages/studio` and `packages/studio-server` |
| Embeddable player | `packages/player` |
| Headless editing API | `packages/sdk` |
| AWS and GCP distributed rendering | `packages/aws-lambda` and `packages/gcp-cloud-run` |
| Reusable blocks and snippets | `registry` |
| Agent instructions | `skills` |

For Studio changes, verify the behavior in the browser and preserve the source-patching and capability-gate contracts described in the [Studio docs](https://hyperframes.heygen.com/studio/index.md).

## Pull request requirements

* Keep the change focused and explain the user-visible reason for it.
* Add or update tests when behavior changes.
* Use a conventional PR title such as `fix: preserve audio after seeking`.
* Run formatting, lint, typecheck, and relevant tests.
* Include screenshots or a short capture for visual changes.
* Target prerelease-only work to the branch described in [Release channels](https://hyperframes.heygen.com/contributing/release-channels.md).

Use [GitHub Issues](https://github.com/heygen-com/hyperframes/issues) for bugs and proposals. A useful bug report includes the smallest reproduction, the first exact error, `npx hyperframes info`, and the operating system.

By contributing, you agree that your work is licensed under the [Apache 2.0 License](https://github.com/heygen-com/hyperframes/blob/main/LICENSE) and follows the [Code of Conduct](https://github.com/heygen-com/hyperframes/blob/main/CODE_OF_CONDUCT.md).

## Related topics

* [Test local CLI changes](https://hyperframes.heygen.com/contributing/testing-local-changes.md)
* [Contribute a Catalog item](https://hyperframes.heygen.com/contributing/catalog.md)
* [Understand release channels](https://hyperframes.heygen.com/contributing/release-channels.md)


## Related topics

- [HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)
- [What is HyperFrames?](https://hyperframes.heygen.com/introduction.md)
- [Build on HyperFrames](https://hyperframes.heygen.com/developers/index.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.