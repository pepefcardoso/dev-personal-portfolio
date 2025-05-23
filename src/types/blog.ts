
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  readTime: number; // minutes
  image?: string;
  url: string;
  category: string;
}
