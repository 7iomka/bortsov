# Bortsov (Vite + React)

Legacy storefront project migrated to **React 19 + Vite + PostCSS + Sass**.

## Stack

- React 19
- Redux Toolkit + React Redux
- i18next / react-i18next
- Vite
- Sass (`sass` package, without `node-sass`)
- PostCSS + Autoprefixer

## Requirements

- Node.js 20+
- npm 10+ (or yarn)

## Scripts

```bash
npm run dev
```
Runs dev server (Vite). Default URL: `http://localhost:5173`.

```bash
npm run build
```
Builds production bundle to `dist/`.

```bash
npm run preview
```
Serves production build locally.

## Project notes

- Static assets from `public/` are served by Vite as-is.
- App entrypoint is `src/main.jsx`.
- Global styles are in `src/styles/styles.scss`.
- Theme colors are CSS variables in `src/styles/variables.scss`:
  - `--color-orange`
  - `--color-white`

## Migration notes

- Create React App (`react-scripts`) removed.
- `node-sass` removed and replaced with `sass`.
- `package-lock.json` removed by design.
