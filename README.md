# Evolving Machines Lab

The website for **Evolving Machines Lab** — building intelligence that grows through interaction.

Public website: [Evolving Machines Lab](https://zhangzaibin.github.io/evolving-machines/)

## Development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run check
npm run build
npm run preview
```

## Content

Research content is kept separate from page components:

- `src/data/projects.json` — open systems and project links
- `src/data/publications.json` — selected publication index
- `src/data/news.json` — dated updates

Every record needs a unique `id`. Collection schemas live in `src/content.config.ts`; update a schema before introducing a new field.

## Design system

Global tokens, typography, spacing, grids, and common list/card patterns live in `src/styles/global.css`. The main palette is warm paper, near-black ink, and one sunset-coral signal color. Motion must remain low-frequency and respect `prefers-reduced-motion`.

Project images are stored as compressed WebP assets in `public/projects`. Use descriptive alt text for meaningful new images; decorative project covers should use an empty alt attribute.

## Deployment

The output is fully static and can be deployed to GitHub Pages, Vercel, Netlify, or any static host.

Deployment notes:

1. GitHub Actions publishes every push to `main` through the Pages artifact workflow.
2. The Astro base path is `/evolving-machines`; keep it aligned with the repository name.
3. Add analytics only after choosing a privacy policy.
4. Run `npm run build` and test `dist/` with `npm run preview`.

## Search discovery

The shared layout identifies Evolving Machines Lab through page titles, descriptions, Open Graph metadata, and linked `ResearchOrganization`, `WebSite`, and `WebPage` structured data. Canonical URLs match the trailing-slash URLs in the generated sitemap.

After deployment, the site owner can request indexing:

1. Add the URL-prefix property `https://zhangzaibin.github.io/evolving-machines/` in [Google Search Console](https://search.google.com/search-console/) and complete ownership verification using the supplied HTML file or meta tag.
2. Submit `https://zhangzaibin.github.io/evolving-machines/sitemap-index.xml` in Sitemaps.
3. Inspect the homepage URL and select **Request indexing**. Crawling and inclusion in search results are controlled by Google and are not immediate or guaranteed.
4. Link to the lab website by its full name from relevant profiles and project pages.

The effective robots file is `https://zhangzaibin.github.io/robots.txt`, managed by the personal-site repository. A robots file inside `/evolving-machines/` would not control crawling. The domain-root file currently allows crawling; its sitemap declaration covers the personal site, so submit the lab sitemap separately.

Google supports a distinct search-result **site name** at the domain or subdomain level, not for a subdirectory. These pages can still be indexed under their page titles. A dedicated lab domain or subdomain would make a distinct site name eligible; it would require updating the site/base settings and configuring redirects. See [Google's site-name guidance](https://developers.google.com/search/docs/appearance/site-names).

## Brand use

The E/M node mark represents intelligence growing through contact and connection. Keep it monochrome with the sunset-coral nodes; do not add gradients, robot imagery, or unrelated accent colors.
# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
