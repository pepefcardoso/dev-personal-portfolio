import { useMemo } from "react";
import { blogData } from "@/data/blog";
import { useOrderedData } from "./useDataWithTranslation";
import { BlogPost } from "@/types/blog";
import { TranslatableString } from "@/types/common";

export type TranslatedBlogPost = Omit<
  BlogPost,
  "title" | "excerpt" | "content" | "category"
> & {
  title: string;
  excerpt: string;
  content?: string;
  category: string;
};

export const useBlogData = () => {
  const translateBlogPost = (
    post: BlogPost,
    translate: (content: TranslatableString) => string
  ): TranslatedBlogPost => ({
    ...post,
    title: translate(post.title),
    excerpt: translate(post.excerpt),
    content: post.content ? translate(post.content) : undefined,
    category: translate(post.category),
  });

  const { data: blogPosts, getById } = useOrderedData<
    BlogPost,
    TranslatedBlogPost
  >(blogData.posts, translateBlogPost, (post) => post.status === "published");

  const featuredPosts = useMemo(
    () => blogPosts.filter((item) => item.featured),
    [blogPosts]
  );

  const getBlogStats = () => ({
    totalPosts: blogData.posts.filter((p) => p.status === "published").length,
    featuredPosts: blogData.posts.filter(
      (p) => p.featured && p.status === "published"
    ).length,
    categories: blogData.categories.length,
    tags: blogData.tags.length,
  });

  return {
    blogPosts,
    featuredPosts,
    getBlogPostById: getById,
    getBlogStats,
  };
};
