# Yeongbin Kwon — Research

An Astro research website with a custom responsive theme, Gill Sans via Adobe Fonts, light and dark modes, and optimized PhotoSwipe galleries.

## Development

Requires Node.js 22.12+.

```sh
npm ci
npm run dev
```

Open http://localhost:4321/research/. Run `npm run build` for type checking and a production build, then `npm run preview` to inspect it.

The default public URL is `https://zeugnis04.github.io/research/`. For a custom domain or root deployment, set `SITE_URL=https://your-domain.example BASE_PATH=/` when building. Internal links and downloads respect this prefix. The GitHub Pages workflow obtains the actual origin and base path from Pages configuration. Publishing uses GitHub Actions as the repository’s Pages source.

## Editing

- Homepage: `src/pages/index.astro`
- Featured projects: `src/lib/projects.ts`
- Research and news articles: `src/content/posts/`
- CV text: `src/content/cv.mdx`; PDF: `public/assets/YeongbinKwonCV202602.pdf`
- Theme, typography, and responsive styles: `src/styles/global.css`
- Adobe Fonts kit and shared header/footer: `src/layouts/BaseLayout.astro`

The original six articles, CV, download URLs, RSS endpoint, and `/blog/<category>/<slug>` routes are preserved. Jekyll sources in the repository root are retained as migration references; Astro reads only `src/` and `public/`. Edit the Astro files going forward. Original static assets under `assets/` are retained; deployed copies live in `public/assets/`.

## Articles and galleries

Create an MDX file in `src/content/posts/`:

```mdx
---
title: "Field observations"
date: 2026-09-08
category: research
slug: field-observations
tags: [coastal-engineering]
description: "Notes from a coastal field experiment."
---

import Gallery from '@/components/Gallery.astro';
import Figure from '@/components/Figure.astro';
import { url as siteUrl } from '@/lib/site';

Write Markdown here. Inline `$math$` and display math are supported.

<Gallery base="fieldwork" images={[
  { src: 'coast.webp', caption: 'The observation site', alt: 'Breaking waves near the coast' },
  { src: 'camera.webp', caption: 'Stereo camera deployment' },
]} />

<Figure base="fieldwork" src="coast.webp" caption="A standalone photograph" />

<a href={siteUrl('assets/report.pdf')}>Download report</a>
```

Images for these components live in `src/assets/img/<base>/`. Galleries preserve aspect ratios in justified rows, provide responsive WebP thumbnails, and open capped 2400px WebP copies. Each gallery has its own slideshow, captions, swipe gestures, keyboard navigation, and zoom. Standalone figures open individually. Images remain ordinary links if JavaScript is unavailable. Use `targetLineRatio` and `maxPerLine` to tune rows. Captions accept inline Markdown.

Use `url()` for internal links and files so project and custom-domain deployments both work. Never put Jekyll/Liquid tags in new content.

The theme initially follows the operating system and saves an explicit user choice. Gill Sans uses the supplied Adobe Fonts kit `isv6esg`, with locally installed Gill Sans and sans-serif fallbacks if the kit is unavailable. Adobe kit domain permissions must include the deployed hostname.

## Validation

```sh
npm run build
npx playwright test
```

Browser tests start a production preview and cover navigation, theme persistence, responsive overflow, search, and gallery keyboard behavior. Install Chromium with `npx playwright install chromium` if needed.

Astro references: [content collections](https://docs.astro.build/en/guides/content-collections/) and [GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/).
