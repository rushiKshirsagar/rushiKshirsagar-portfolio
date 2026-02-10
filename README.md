# Portfolio

Minimal single-page portfolio (React + Vite). Left drawer with anchor links, smooth scroll, Apple-inspired layout.

## Edit your content

Update **`src/data/content.js`** with your name, experience, projects, education, skills, and links (GitHub, npm, etc.).

## Local development

```bash
npm install   # if you hit cache errors: npm cache clean --force && npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`. To test the production build locally:

```bash
npm run build && npm start
```

## Deploy to Heroku

1. Create an app: `heroku create your-app-name`
2. Push: `git push heroku main`
3. Heroku runs `npm install`, then `heroku-postbuild` (i.e. `npm run build`), then `npm start` (serves `dist/` via Express).

Ensure the app has a `Procfile` (included) and that `package.json` has `"start": "node server.cjs"` and `"heroku-postbuild": "npm run build"`.
