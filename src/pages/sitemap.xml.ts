import { getCollection } from 'astro:content';
import { url, postUrl } from '@/lib/site';
import type { APIContext } from 'astro';
export async function GET({ site }: APIContext) {
  const paths = ['', 'research/', 'blog/blog-list/', 'cv.html', 'tags/'].map(url).concat((await getCollection('posts')).map(postUrl));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${new URL(path, site)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
