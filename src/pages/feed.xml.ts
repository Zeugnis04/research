import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postUrl, description } from '@/lib/site';
import type { APIContext } from 'astro';
export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).sort((a,b) => +b.data.date - +a.data.date);
  return rss({ title: 'Yeongbin Kwon — Research notes', description, site: context.site!, items: posts.map(post => ({ title: post.data.title, pubDate: post.data.date, link: postUrl(post), description: post.data.description ?? post.data.title, categories: post.data.tags })) });
}
