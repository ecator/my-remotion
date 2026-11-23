> ## Documentation Index
> Fetch the complete documentation index at: https://hyperframes.heygen.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Product updates

> The HyperFrames changes that matter when you create, edit, and render projects.

This page explains meaningful product changes in human terms. Use [Weekly updates](https://hyperframes.heygen.com/weekly-updates.md) for the detailed digest and films, or the [complete release archive](https://hyperframes.heygen.com/changelog.md) for every versioned change.

## July 2026

### Media that previews reliably

Studio, published projects, and the render pipeline can prepare compatible preview versions of difficult video formats automatically. This particularly helps with HEVC and other files that a browser may not decode even though FFmpeg can render them.

What this means:

* fewer black video frames in Studio;
* preview and render use consistent media decisions;
* published projects can include the prepared media;
* projects can opt out when automatic proxying is not wanted.

### A clearer Studio inspector

The flatter Studio inspector is now the normal editing surface. Text, layout, style, motion, media, grade, and element-specific controls are easier to scan without navigating several competing panels.

### More reliable rendering and long-running work

Recent releases improved software-GPU capture, Windows behavior, browser worker reuse, failure diagnostics, audio handling, and composition synchronization.

For most users, the result is simple: fewer cases where a long or media-heavy render stalls or produces a frame that differs from preview.

### Better storyboard and agent review

Storyboard review now has clearer handoff behavior, safer history navigation, and a more explicit relationship between human comments and the next agent pass.

### Safer agent-created motion

Lint and validation now catch more animation problems involving seek order, hidden initial states, conflicting writers, relative values, and SVG drawing.

## Keep your project current

Scaffolded projects can pin a HyperFrames version for reproducibility. Ask your agent to check the project before render-affecting work, or run:

```bash theme={null}
npx hyperframes@latest upgrade --project . --check
```

Read the [release archive](https://hyperframes.heygen.com/changelog.md) before upgrading a production workflow with custom integrations.

## Related topics

* [Read the complete release archive](https://hyperframes.heygen.com/changelog.md)
* [Make your first video](https://hyperframes.heygen.com/quickstart.md)
* [Review and edit a project in Studio](https://hyperframes.heygen.com/studio.md)


## Related topics

- [Changelog process](https://hyperframes.heygen.com/contributing/changelog-process.md)
- [Weekly updates](https://hyperframes.heygen.com/weekly-updates.md)
- [Changelog](https://hyperframes.heygen.com/changelog.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.