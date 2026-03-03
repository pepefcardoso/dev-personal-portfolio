import { blogData } from "@/data/blog";
import { translate, useTranslatedData } from "./useData";
import { useMemo } from "react";
import { BlogPost, TranslatedBlogPost } from "@/types/blog";

export function useBlogData() {
  const translatePost = (post: BlogPost, lang: string): TranslatedBlogPost => ({
    ...post,
    title: translate(post.title, lang),
    excerpt: translate(post.excerpt, lang),
    content: post.content ? translate(post.content, lang) : undefined,
    category: translate(post.category, lang),
  });

  const posts = useTranslatedData<BlogPost, TranslatedBlogPost>(
    blogData.posts,
    translatePost,
    {
      filter: (p) => p.status === "published",
      sort: (a, b) => a.order - b.order,
    },
  );

  const featured = useMemo(() => posts.filter((p) => p.featured), [posts]);

  const getById = (id: string) => posts.find((p) => p.id === id) || null;

  return { posts, featured, getById };
}
