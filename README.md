# AChart

AChart is a computer/tablet-based optometry test chart, built as a single self-contained
web page (`index.html`). It's meant to replace a physical wall chart with a screen that an
examiner calibrates (viewing distance + a physical reference line measured with a ruler)
and then uses to run a handful of standard eye tests:

- **Visual acuity ("VA")** — a configurable letter chart supporting several optotypes
  (Snellen, Sloan, Landolt C, Tumbling E, Vanishing Sloan, Shapes) and alphabets/notations
  (Metres, Feet, logMAR, Decimal), with mirroring, shuffling, crowding, colour/contrast
  options, and per-line score boxes (tap a line's score to isolate it).
- **Refraction** — includes the Ishihara colour vision deficiency test plates
  (`plates/1.gif`–`plates/6.gif`), a bullseye/astigmatic dial chart, a septum (dissociation)
  chart, and a duochrome (red/green) test.
- **Binocular vision** — fixation disparity, a Worth 4-dot test, and phoria arrows.
- **Misc.** — a plain/blank chart for room darkening etc.

It's wrapped with [Capacitor](https://capacitorjs.com/) (`capacitor.config.json`, appId
`com.newmoons.achart`) so it can also be packaged as a native iOS/Android app.

## Running it in dev

```bash
npm install
npm start
```

This starts a Vite dev server serving the root `index.html` directly (with hot reload).

## Building

```bash
npm install
npm run build
```

This runs `vite build`, which bundles the root `index.html` (and the `plates/*.gif`
images it references) into `dist/`, matching the `webDir: "dist"` Capacitor expects.
`dist/` can then be opened directly, or synced into the native projects with
`npx cap sync` once the relevant Capacitor platform packages are added.

## Logging results

The chart includes a small "Test results" panel (the icon below the settings hamburger
in the sidebar). While running the letter chart, tap a line's score to isolate it (the
line the patient read correctly), then use "Log current line" to record it with an
optional label (e.g. "Right eye (OD)"). Logged entries persist locally and can be
exported as a CSV file for a patient record.

## Project layout

- `index.html` — the entire app: markup, styles and logic (this is intentionally a
  single hand-written file, not a component framework build).
- `plates/*.gif` — Ishihara colour vision test plates used by the Refraction charts.
- `capacitor.config.json` / `package.json` — Capacitor + Vite build configuration.
