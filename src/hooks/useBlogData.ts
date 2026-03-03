import { blogData } from "@/data/blog";
import { translate, useTranslatedData } from "./useData";
import { useMemo } from "react";
import { BlogPost } from "@/types/blog";

const translatePost = (post: BlogPost, lang: string) => ({
  ...post,
  title: translate(post.title, lang),
  excerpt: translate(post.excerpt, lang),
  content: post.content ? translate(post.content, lang) : undefined,
  category: translate(post.category, lang),
});

export type TranslatedBlogPost = ReturnType<typeof translatePost>;

export function useBlogData() {
  const posts = useTranslatedData(blogData.posts, translatePost, {
    filter: (p) => p.status === "published",
    sort: (a, b) => a.order - b.order,
  });

  const featured = useMemo(() => posts.filter((p) => p.featured), [posts]);

  const getById = (id: string) => posts.find((p) => p.id === id) || null;

  return { posts, featured, getById };
}
