export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const postUrl = (post: { data: { category: string; slug: string } }) => url(`blog/${post.data.category}/${post.data.slug}/`);
export const dateLabel = (date: Date) => date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
export const description = 'Yeongbin Kwon — research in environmental fluid mechanics, coastal processes, and machine learning for climate and energy systems.';
