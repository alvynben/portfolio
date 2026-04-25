# Portfolio — Claude Code Notes

## Stack

- **Framework**: Next.js 14 App Router (TypeScript)
- **Blog**: MDX via `next-mdx-remote/rsc`, posts in `content/blog/*.mdx`
- **Styling**: Custom CSS design system (`portfolio-v2.css`) + Bootstrap (legacy routes only)
- **Deployment**: Firebase Hosting (`firebase.json`, `.firebaserc`)

## Key Files

| File | Purpose |
|------|---------|
| `src/views/PortfolioV2/PortfolioV2.tsx` | Main homepage (`"use client"`). All sections: Hero, Work, Writing, About, Contact. Contains `PROJECTS` array, `Pattern` SVG thumbnails, `theme`/`workVariant` state. |
| `src/views/PortfolioV2/portfolio-v2.css` | Full design system CSS — OKLCH color tokens, Fraunces/Geist typography, layout, dark mode. All styles scoped to `.site-v2`. |
| `app/page.tsx` | Next.js entry point — renders `PortfolioV2` |
| `app/blog/[slug]/page.tsx` | Blog post renderer — MDX, sticky TOC, reading progress bar, share links |
| `app/blog/page.tsx` | Blog listing page |
| `app/layout.tsx` | Root layout — loads Google Fonts, Bootstrap, legacy CSS, `RootShell` |
| `src/lib/posts.ts` | File-based MDX post loader |
| `content/blog/*.mdx` | Blog post source files |
| `public/alvin-ben-abraham-resume.pdf` | Resume PDF served as static asset |

## Design Tokens

OKLCH color system defined as CSS custom properties on `.site-v2`. Key tokens:
- `--bg`, `--bg-elev`, `--bg-sunk` — backgrounds
- `--ink`, `--ink-soft`, `--ink-mute` — text hierarchy
- `--accent` — terracotta `oklch(60% 0.18 38)` by default
- `--rule`, `--rule-soft` — borders

Dark mode via `[data-theme="dark"]` on `<html>`.

Fonts: Fraunces (display, variable axes SOFT 30), Geist (sans), Geist Mono — loaded via Google Fonts in `app/layout.tsx`.

## Legacy Routes

`/about` and `/play` still use the old CRA/Bootstrap components under `src/views/`. Do not remove Bootstrap from `app/layout.tsx`.

## Conventions

- Server components by default; `"use client"` only where interactivity is needed
- New homepage sections go in `PortfolioV2.tsx` + `portfolio-v2.css`
- Blog post MDX components are registered in `app/blog/[slug]/page.tsx` (`mdxComponents`)
- Commits are small and focused; commit messages follow `type: description` format
