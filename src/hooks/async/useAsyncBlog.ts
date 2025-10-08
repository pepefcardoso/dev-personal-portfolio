import { useMemo } from "react";
import { useAsyncData } from "./useAsyncData";
import { useTranslatedContent } from "../useTranslatedContent";
import { BlogPost, BlogData } from "@/types/blog";

export const useAsyncBlog = () => {
  const { translate } = useTranslatedContent();

  const {
    data: blogData,
    isLoading,
    error,
    refetch,
  } = useAsyncData<BlogData>({
    queryKey: ["blog"],
    queryFn: (loader) => loader.loadBlogData(),
  });

  const translateBlogPost = (post: BlogPost) => ({
    ...post,
    title: translate(post.title),
    excerpt: translate(post.excerpt),
    content: post.content ? translate(post.content) : undefined,
    category: translate(post.category),
  });

  const publishedPosts = useMemo(() => {
    if (!blogData) return [];
    return blogData.posts
      .filter((post) => post.status === "published")
      .sort((a, b) => a.order - b.order)
      .map(translateBlogPost);
  }, [blogData, translate]);

  const featuredPosts = useMemo(() => {
    return publishedPosts.filter((post) => post.featured);
  }, [publishedPosts]);

  const getBlogPostById = (id: string) => {
    if (!blogData) return null;
    const post = blogData.posts.find((p) => p.id === id);
    return post ? translateBlogPost(post) : null;
  };

  const blogStats = useMemo(() => {
    if (!blogData) return null;
    return {
      totalPosts: blogData.posts.filter((post) => post.status === "published")
        .length,
      featuredPosts: blogData.posts.filter(
        (post) => post.featured && post.status === "published"
      ).length,
      categories: blogData.categories.length,
      tags: blogData.tags.length,
    };
  }, [blogData]);

  return {
    blogData,
    isLoading,
    error,
    refetch,
    publishedPosts,
    featuredPosts,
    getBlogPostById,
    blogStats,
  };
};
