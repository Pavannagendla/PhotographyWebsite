# Hacker Camerawork — Pavan Kumar Nagendla Photography

Portfolio site: https://pavannagendla.github.io/PhotographyWebsite/

Built with React (Create React App) and hosted on GitHub Pages.

## Run locally

```bash
npm install
npm start          # http://localhost:3000/PhotographyWebsite
```

## Add new photos

Photos are **not** imported at full camera resolution — they are resized for the web first.

1. Put full-size JPEGs in `originals/<Category>/` (e.g. `originals/Wildlife/leopard.jpg`).
   Categories: `Wildlife`, `Birds`, `Street`, `Portraits`, `Nature`. The `originals/` folder is git-ignored.
2. Run `npm run optimize-images -- originals` (needs Python 3 and `pip install pillow`).
   This writes resized copies to `public/photos/` and adds them to `src/data/photos.json`.
3. Open `src/data/photos.json` and edit each new photo's `title`
   (shown in the lightbox and used as alt text). Move entries up or down to change
   their order, and set `"featured": true` to show a photo on the home page.

Exhibitions, contact details and social links live in `src/data/site.js`.

## Deploy

Publishing is automatic: every push or merge to `main` runs the
**Deploy to GitHub Pages** workflow (`.github/workflows/deploy.yml`), which runs the
tests, builds the site and publishes it to the `gh-pages` branch. The site updates
a minute or two later. You can watch progress (or re-run it) in the repository's **Actions** tab.

To publish manually from your computer instead:

```bash
npm run deploy     # builds and publishes to the gh-pages branch
```
