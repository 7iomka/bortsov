# Bortsov frontend (Vite migration)

This project was modernized from a Create React App (`react-scripts`) setup to **Vite**.

## Migration summary

### What changed
- Replaced `react-scripts` with Vite (`vite` + `@vitejs/plugin-react`).
- Switched app bootstrap to React 18 `createRoot` API in `src/index.js`.
- Added modern ESLint flat config (`eslint.config.js`).
- Replaced legacy `node-sass` with `sass`.
- Added `vite-tsconfig-paths` so legacy absolute imports (based on `jsconfig.json` `baseUrl: src`) continue to work.
- Moved HTML entrypoint from `public/index.html` to root `index.html` (Vite convention).
- Added `.env.example` documenting Vite env variable format.

### What was removed
- `react-scripts`
- CRA-specific scripts (`start`, `test`, `eject`)
- CRA-only `eslintConfig` and `browserslist` package.json sections
- `public/index.html` (replaced by root `index.html`)
- stale `package-lock.json` tied to CRA-era dependency graph

### What was upgraded
- `react` / `react-dom` to 18.x
- `@reduxjs/toolkit`, `react-redux`, `i18next`, `react-i18next`, `classnames`, `reset-css`
- Tooling: ESLint 9 + Vite 5

### Intentionally left untouched
- App architecture and component structure
- Router API (`react-router-dom@5`) to avoid unnecessary business-logic rewrites
- Existing state management and translations

## Run instructions

### Requirements
- Node.js **20+**
- npm (chosen for migration documentation; repository currently contains `yarn.lock` from legacy setup)

### Commands
```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Compatibility notes

### Breaking / behavior changes
- Environment variables must now use `VITE_` prefix and be accessed via `import.meta.env`.
- Dev server default port changed from CRA default (`3000`) to Vite default (`5173`) unless overridden.

### Remaining technical debt
- Some dependencies are older UI packages and may need future replacement if ESM support issues appear.
- No active test suite files exist in the repository; test tooling was not reintroduced in this migration.
- `react-router-dom` remains on v5 for compatibility and can be migrated later to v6 in a separate change.

## Audit snapshot (before migration)
- React: 17.0.1
- react-scripts: 4.0.3
- Package managers present before migration: npm (`package-lock.json`) and Yarn artifacts (`yarn.lock`, `.yarn/`, `.yarnrc.yml`)
- Babel/Webpack customizations: none (standard CRA)
- `.env` usage: no `REACT_APP_*` usage found in source
- Routing: `BrowserRouter`, `react-router-dom` v5 hooks + `react-router-hash-link`
- State management: Redux Toolkit + react-redux
- Styling: SCSS via `node-sass`
- Tests: CRA testing-library deps present but no test files
- Absolute imports: `jsconfig.json` with `baseUrl: src`
- Assets: mixed `src/assets/*` imports + static files in `public/`
