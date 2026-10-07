# Aswad Granites — Demo Website (Next.js)

Premium granite company demo built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Hero, best sellers, services, instant quote estimator, CTA
- `/products` — Searchable + filterable granite collections (demo data in `src/data/products.ts`)
- `/about` — Quarries, plant, company story
- `/contact` — Quote request form (front-end demo, no backend)

## Notes

- Images use Unsplash remote URLs (allowed in `next.config.ts`).
- Prices in INR / sq.ft are indicative demo values.
- Project folder name contains a space (`Aswad Granites`) so `create-next-app` could not be used directly — this project was scaffolded manually with `package.json` name `aswad-granites-demo`.
