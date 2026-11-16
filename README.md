# houseofcosmos.co

Website for House of Cosmos, Thane. Static site built with [Astro](https://astro.build), hosted on Netlify (project `houseofcosmos-g5ju`). Migrated from WordPress on 16 Nov 2026.

## Run it

```bash
npm install
npm run dev     # local preview at http://localhost:4321
npm run build   # static site in dist/
```

## Where things are

| What | Where |
| --- | --- |
| Contact details, nav, projects, stats, amenities, jobs | `src/data/site.js` |
| Blog posts (title, SEO title, date, cover, HTML body) | `src/data/posts.json` |
| Which photo goes where | `src/data/media.json` |
| Images and video | `public/media/` |
| Page templates | `src/pages/` (one file per page; `[slug].astro` renders every blog post) |
| Shared blocks (forms, FAQ, Trividh sections, cards) | `src/components/` |
| Layout, header, footer, SEO tags | `src/layouts/Base.astro` |
| Styles | `src/styles/global.css` |
| Old WordPress URL redirects | `public/_redirects` |

Forms use Netlify Forms (`enquiry`, `channel-partner`, `career`); submissions appear in the Netlify dashboard.

Decision record and roadmap: `claude/houseofcosmos-migration-and-scalability.md` in the "One click portfolio" Claude project.
