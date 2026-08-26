import { defineConfig } from 'vite';

// The real app is the root-level index.html (plus plates/), not the unused
// @capacitor/create-app scaffold that used to live under src/. Building from
// the project root means `npm run build` produces the actual AChart app in
// dist/, matching capacitor.config.json's webDir: "dist".
export default defineConfig({
  build: {
    outDir: 'dist',
    minify: false,
    emptyOutDir: true,
  },
});
