# elkhorn-digital

The public marketing site for Elkhorn Digital, LLC. Live at https://elkhorndigital.com.

## Pushing to main publishes to production

GitHub Pages, legacy build, source `main` branch at `/`. There is no build step, no CI, and no
staging. A push to `main` is a deploy to the live site. Preview locally first.

```
node serve.mjs    # http://localhost:5173
```

## Stack

Hand-written static HTML and CSS. No framework, no bundler, no dependencies.

- `index.html`, `terms.html`, `privacy.html`, `style.css`
- `images/timberline/` holds the product screenshots (desk and phone views, plus one per style
  preset) that carry the pitch
- `tools/topo.mjs` generates `images/topo.svg`
- `CNAME`, `robots.txt`, `sitemap.xml` are deploy infrastructure, not content

## What the site is arguing

Timberline is the main draw: the plans and the live demo. Golden Valley Guns is the proof that
the work is real. Keep that ordering. The site sells a solo operator's steady, dependable
service, not a scaling agency.

## Rules

**Always "Elkhorn Digital", never bare "Elkhorn"**, anywhere visible.

**No em dashes.** Anywhere in site copy.

**`legal/*.pdf` are signed-against contract versions: never edit, regenerate, or rewrite one.**
Each Order Form links to its exact dated PDF. Current = `msa-2026-11-04.pdf` + `fee-schedule-2026-11-04.pdf`
(final per Braeden 2026-11-07: the attorney-reviewed 10-14 terms with only the pay-in-full option
removed). 2AC Guns signed under `msa-2026-10-14.pdf`, so those stay at their links forever. A terms
change is a new dated PDF, published before any Order Form that points to it is sent.

**Design bar: real imagery and editorial layout.** No icon-and-card grids, no cutesy badges, no
templated section rhythm. This site is the portfolio for the design work being sold, so a
generic pass here costs more than it does anywhere else.
