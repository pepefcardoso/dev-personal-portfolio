import { TranslatableString, FeaturedItem, OrderableItem } from "./common";

export interface BlogPost extends OrderableItem, FeaturedItem {
  title: TranslatableString;
  excerpt: TranslatableString;
  content?: TranslatableString;
  date: string;
  readTime: number;
  image?: string;
  url?: string;
  category: TranslatableString;
  tags?: string[];
  author?: {
    name: string;
    avatar?: string;
  };
  status?: "published" | "draft" | "archived";
}

export interface BlogData {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
}
