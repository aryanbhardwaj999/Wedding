# Wedding Wardrobe Planner — animated reel

A 9:16 animated "wardrobe planner" for Rajat & Ashana's wedding (Jaipur, 3–5 Dec 2026).
React + Vite + GSAP (`useGSAP`) + Tailwind (base) + lucide-react.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Views / controls

- Default: **stamp reel** (stamps → event cards → camera → finale), ~61 s loop.
- `?v=classic` — the earlier street-scene reel (Hawa Mahal / tailor shop).
- `?clean` — hide the UI (for screen-recording a reel).
- `?t=12` — freeze at 12 s (debug / stills).
- Play/pause, prev/next scene, replay, scrub bar, tap left/right/centre, keyboard (Space, ←, →).

## Edit content

- Stamp reel: `src/stamp/stampData.js` (names, dates, palettes, dress codes, garments) and `src/stamp/stampTimeline.js` (timing).
- Classic reel: `src/data/eventsData.js`.
- Optional couple photos for the classic reel: `public/people/rajat.jpg`, `public/people/ashana.jpg`.

## Deploy (Vercel)

Import the repo in Vercel — it is detected as a Vite project (build `npm run build`, output `dist`). No env vars needed.

## Image credits

Photos and garment cutouts are from Wikimedia Commons under CC licences (CC BY / CC BY-SA / CC0).
Attribution lists: `public/photos/CREDITS.md` and `public/cutouts/CREDITS.md`.
Cutouts have backgrounds removed; faces were blanked; some colours are hue-shifted copies.
If you publish this, keep the credits (CC BY-SA also asks that derivatives stay under the same licence for those images).
