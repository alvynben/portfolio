# Alvin Ben Abraham Portfolio

Next.js static-export portfolio deployed with Firebase Hosting.

## Local development

- `npm install`
- `npm run dev`

## Production build

- `npm run build`
- Output is generated to `out/` (configured via Next static export).

## Firebase deploy

- `npm run deploy:hosting`

This command always builds before deploy so Hosting never serves stale content.

## Domain and crawlability checklist

Use `alvinben.com` as canonical host everywhere:

1. Firebase Hosting custom domain `alvinben.com` points to the live site.
2. `www.alvinben.com` is configured in Firebase to redirect to `https://alvinben.com`.
3. `NEXT_PUBLIC_SITE_URL` is set to `https://alvinben.com` for builds.
4. `https://alvinben.com/robots.txt`, `https://alvinben.com/sitemap.xml`, and
   `https://alvinben.com/llms.txt` all return 200.
