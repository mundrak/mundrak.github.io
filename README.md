# Khushi Mundra

Personal portfolio site, in two versions:

- `/` — chooser page (`index.html`): pick focus or fun
- `/focus/` — the short, calm version (`focus/index.html`, plain HTML and CSS)
- `/fun/` — Coffee par Charcha, the full version (`fun/index.html`, React app in `src/`)

Each version links to the other from its top bar and footer.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs static files to `dist/`; the fun site is pre-rendered into `dist/fun/index.html` — deploy that folder anywhere that serves static files (Vercel, Netlify, GitHub Pages, etc).

## Structure

- `src/components/` — one component per page section (Nav, Hero, Chat, Work, Writing, Wandering, Footer)
- `src/assets/photos/` — real photos, extracted from the Claude Design prototype's image slots
- `public/khushi-mundra-resume.pdf` — linked from the "grab my resume" button
