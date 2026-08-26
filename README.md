# AChart

A computer/tablet-based optometry test chart, built as a single self-contained web page (`index.html`). An examiner calibrates it (viewing distance + a physical reference line measured with a ruler) and then runs a set of standard eye tests:

- **Visual acuity (VA)** - a configurable letter chart with several optotypes (Snellen, Sloan, Landolt C, Tumbling E, Vanishing Sloan, Shapes) and notations (metres, feet, logMAR, decimal), with mirroring, shuffling, crowding, colour/contrast options, and per-line score boxes.
- **Refraction** - Ishihara colour vision deficiency plates (`plates/1.gif`-`plates/6.gif`), a bullseye/astigmatic dial chart, a septum (dissociation) chart, and a duochrome (red/green) test.
- **Binocular vision** - fixation disparity, a Worth 4-dot test, and phoria arrows.
- **Misc.** - a plain/blank chart for room darkening etc.

Wrapped with [Capacitor](https://capacitorjs.com/) (`capacitor.config.json`, appId `com.newmoons.achart`) so it can also be packaged as a native iOS/Android app.

## Installation

```bash
npm install
```

## Usage

Dev server with hot reload:

```bash
npm start
```

Build (bundles `index.html` and `plates/*.gif` into `dist/`, matching Capacitor's `webDir`):

```bash
npm run build
```

`dist/` can be opened directly, or synced into native projects with `npx cap sync` once the relevant Capacitor platform packages are added.

## Logging results

Tap a line's score to isolate it (the line the patient read correctly), then use the "Test results" panel (icon below the settings hamburger in the sidebar) to log it with a label, e.g. "Right eye (OD)". Logged entries persist locally and can be exported as CSV.

## Project layout

- `index.html` - the entire app: markup, styles and logic in one hand-written file.
- `plates/*.gif` - Ishihara colour vision test plates.
- `capacitor.config.json` / `package.json` - Capacitor + Vite build configuration.
