# MileZero Portfolio — Handoff

Vite + React 18 + react-router 7 + Tailwind v4 portfolio site.
Live: https://milezero-portfolio.vercel.app

## Quick start
```bash
npm install           # or pnpm install / yarn
npm run dev           # http://localhost:5173
npm run build         # production build → dist/
```

## Site passwords
- **Admin** (sees all projects): `MZport@`
- **Viewer** (hides project id 2 — Museum of Tolerance): `MZport!`

## Project structure
- `src/app/components/PortfolioGrid.tsx` — home grid; add/reorder projects here (`projects: Project[]`).
- `src/app/components/ProjectDetail.tsx` — full-bleed iframe page for embedded projects (Figma, Vimeo, YouTube, external sites). Uses `cropTop` / `cropBottom` per project to hide external chrome.
- `src/app/components/<Project>Case.tsx` — bespoke case-study pages (DeepInstinctCase, AbraKadablueCase, BondsCase, OutOfScopeCase, BluehatCase, MicrosoftCollection).
- `src/app/components/PasswordProtection.tsx` — password gate + role (admin/viewer) via OutletContext.
- `src/app/router.tsx` — route table.
- `public/` — runtime assets (videos, thumbnails, microsoft-collection PNGs, bonds.html).

## Adding a new project
1. Append to `projects` in `PortfolioGrid.tsx` (needs `id`, `name`, `label`, `year`, `category`, and either `url` for embed or `to` for a bespoke case-study route).
2. For an embedded project (Figma / Vimeo / YouTube / external site): also append to `projects` in `ProjectDetail.tsx` with the same `id` + the embed URL. Use `cropTop`/`cropBottom` if you need to hide chrome.
3. For a bespoke case-study: create a new `<Project>Case.tsx` under `src/app/components/`, add its route to `router.tsx`, and set `to: '/<slug>'` on the grid entry.

## Figma embed rules (already wired in ProjectDetail.tsx)
- URL must be `https://embed.figma.com/deck/<ID>?embed-host=share` (from Figma → Share → Get embed code).
- `sandbox="allow-same-origin allow-scripts allow-popups allow-forms"` + `allowFullScreen` — required for slides to advance and fullscreen to work.
- Wrapper is `position: fixed; inset: 0; width: 100vw; height: 100dvh`; no padding, margin, transforms.
- If a CSP is added later, must include: `frame-src https://embed.figma.com https://*.figma.com;`

## Deploy
Vercel. Once linked (`npx vercel link`):
```bash
npm run build
npx vercel deploy --prod
```
Stable production alias: `milezero-portfolio.vercel.app`.

## Design tokens
- Background: `#FCF9F4` (warm cream)
- Text: `#050505` (near-black)
- Floating chrome pattern: `rgba(252,249,244,0.92)` bg, `backdrop-filter: blur(10px)`, `1px solid rgba(5,5,5,0.16)`.
