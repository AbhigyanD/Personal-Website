# abhigyand.github.io/Personal-Website

My portfolio site: [abhigyand.github.io/Personal-Website](https://abhigyand.github.io/Personal-Website/)

Built with React 19, Vite and framer-motion. Deploys to GitHub Pages on every push to `main` via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Run locally

```bash
npm install
npm run dev     # http://localhost:5173/Personal-Website/
npm run build   # production build into dist/
npm run lint
```

## Editing content

- Projects: [src/data/projects.js](src/data/projects.js). Entries with `featured: true` render full-width above the grid.
- Stack: the `groups` array in [src/components/Stack.jsx](src/components/Stack.jsx).
- Colours and theme tokens: [src/index.css](src/index.css).
