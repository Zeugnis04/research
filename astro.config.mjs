import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  site: process.env.SITE_URL || 'https://zeugnis04.github.io',
  base: process.env.BASE_PATH ?? '/research',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
