# FysiskLivsstil.dk

Advertorial-side for hjemmetræning, der sender trafik til [jaafit.dk](https://jaafit.dk).
Bygget med Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

## Sider

- `/` — Bedst i test: hjemmetræningsudstyr (testvinder: JAAFIT PRO)
- `/massageroller` — Landingsside for MassageRoller (Mini / Pro / Bundle)
- `/elastikker-vs-vaegt` — Elastikker vs. frie vægte
- `/styrketraening-fordele` — 5 fordele ved styrketræning
- `/traening-guide` — Full-body træningsguide

## Kør lokalt

```bash
npm install
npm run dev        # udvikling på http://localhost:8080
npm run build      # produktion -> /dist
npm run preview    # forhåndsvis build
```

## Deploy på Vercel

1. Push dette repo til GitHub.
2. På vercel.com: **Add New → Project → Import** dit GitHub-repo.
3. Vercel detekterer automatisk Vite (alt er sat i `vercel.json`):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - SPA-routing håndteres af rewrites i `vercel.json`.
4. Deploy. Tilføj dit domæne `fysisklivsstil.dk` under **Settings → Domains**.

## Design

- **Fonte:** Bebas Neue (overskrifter) + Montserrat (brødtekst)
- **Farver:** navy `#14124b` med gradient-accenter (`#4685ed`, `#707cf0`, `#62fc61`)
- Design-tokens ligger i `src/index.css`, brand-farver i `tailwind.config.ts`.

## Tilpasning

- Affiliate-/produktlinks: `src/lib/links.ts`
- Logo: `public/brand/logo.png` (mørk) + `logo-white.png` (lys, til footer)
- Produktdata i sammenligninger: `src/components/ComparisonTable.tsx` og `src/pages/MassageRoller.tsx`
