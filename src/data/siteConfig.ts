export const siteConfig = {
  name: 'The Margin',
  tagline: 'Notes on design, craft, and the art of slow living',
  description:
    'An independent digital journal devoted to thoughtful writing on design, culture, craft, and the quieter currents of modern life.',
  issue: 'Issue No. 14',
  foundedYear: 2024,
  editor: 'The Editors',
  social: {
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    rss: '#',
  },
};

export const categories = [
  { slug: 'design', name: 'Design', description: 'On objects, spaces, and the thinking that shapes them.' },
  { slug: 'craft', name: 'Craft', description: 'The patient pursuit of making things well.' },
  { slug: 'culture', name: 'Culture', description: 'Ideas, movements, and the texture of everyday life.' },
  { slug: 'essay', name: 'Essays', description: 'Long-form reflections on living deliberately.' },
  { slug: 'travel', name: 'Travel', description: 'Places that change the way you see.' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];
