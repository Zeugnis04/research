import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';
import rehypeMathjax from 'rehype-mathjax';

const renderMath = rehypeMathjax();
const acronyms = new Map([
  ['AGU25', 'AGU25 Annual Meeting'],
  ['AI', 'artificial intelligence'],
  ['AURORA', 'Microsoft Aurora weather model'],
  ['CELAB', 'Coastal Engineering Laboratory'],
  ['CV', 'curriculum vitae'],
  ['ECMWF', 'European Centre for Medium-Range Weather Forecasts'],
  ['ERA5', 'ECMWF Reanalysis v5'],
  ['GIS', 'geographic information system'],
  ['HTML', 'HyperText Markup Language'],
  ['IAHR-APD', 'International Association for Hydro-Environment Engineering and Research – Asia and Pacific Division'],
  ['JGR', 'Journal of Geophysical Research'],
  ['LaTeX', 'LaTeX document preparation system'],
  ['LID', 'low-impact development'],
  ['MATLAB', 'MATLAB technical computing environment'],
  ['PDF', 'Portable Document Format'],
  ['RSS', 'Really Simple Syndication'],
  ['RTK', 'real-time kinematic'],
  ['SNU', 'Seoul National University'],
  ['SWMM', 'Storm Water Management Model'],
  ['CSS', 'Cascading Style Sheets'],
]);
const acronymPattern = new RegExp(`\\b(${[...acronyms.keys()].join('|')})\\b`, 'g');
const acronymText = {
  name: 'acronym-text',
  text(node, context) {
    const parent = context.parent(node);
    if (['code', 'pre', 'script', 'style'].includes(parent?.tagName)) return;

    const matches = [...node.value.matchAll(acronymPattern)];
    if (matches.length === 0) return;

    const children = [];
    let position = 0;
    for (const match of matches) {
      if (match.index > position) children.push({ type: 'text', value: node.value.slice(position, match.index) });
      children.push({
        type: 'element',
        tagName: 'abbr',
        properties: { className: ['acronym'], title: acronyms.get(match[0]) },
        children: [{ type: 'text', value: match[0] }],
      });
      position = match.index + match[0].length;
    }
    if (position < node.value.length) children.push({ type: 'text', value: node.value.slice(position) });
    context.replaceNode(node, children);
  },
};
const restoreDisplayMath = {
  name: 'restore-display-math',
  element: {
    filter: ['pre'],
    visit(node, context) {
      const code = node.children?.find(child => child.type === 'element' && child.tagName === 'code');
      const tex = code ? context.textContent(code) : '';
      if (!/(?:\\(?:frac|rho|omega|cosh|sinh|tanh|left|right|quad|coth|mathrm)\b|^\([A-Za-z_ ]+\)_\d\s*=)/.test(tex)) return;
      context.replaceNode(node, {
        type: 'element',
        tagName: 'pre',
        properties: {},
        children: [{
          type: 'element',
          tagName: 'code',
          properties: { className: ['language-math', 'math-display'] },
          children: [{ type: 'text', value: tex }],
        }],
      });
    },
  },
};
const mathjax = {
  name: 'mathjax',
  after(root, context) {
    // Sätteri exposes a read-only HAST view; MathJax expects a mutable tree.
    const tree = JSON.parse(JSON.stringify(root));
    renderMath(tree, {
      message(message) {
        throw new Error(message);
      },
    });
    context.replaceNode(root, tree);
  },
};

export default defineConfig({
  site: process.env.SITE_URL || 'https://zeugnis04.github.io',
  base: process.env.BASE_PATH ?? '/research',
  integrations: [mdx()],
  markdown: {
    processor: satteri({
      features: { math: true },
      hastPlugins: [restoreDisplayMath, acronymText, mathjax],
    }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
