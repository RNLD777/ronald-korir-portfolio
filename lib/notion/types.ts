export interface WritingPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  featured: boolean;
  published: boolean;
  cover?: string;
  notionUrl: string;
}