
import { useMemo } from 'react';
import { blogData } from '@/data/blog';
import { useTranslatedContent } from './useTranslatedContent';
import { BlogPost } from '@/types/blog';

/**
 * Hook para gerenciar dados do blog
 */
export const useBlogData = () => {
  const { translate } = useTranslatedContent();

  /**
   * Traduz um post do blog
   */
  const translateBlogPost = (post: BlogPost) => ({
    ...post,
    title: translate(post.title),
    excerpt: translate(post.excerpt),
    content: post.content ? translate(post.content) : undefined,
    category: translate(post.category)
  });

  /**
   * Obtém posts traduzidos e ordenados
   */
  const getBlogPosts = useMemo(() => {
    return blogData.posts
      .filter(post => post.status === 'published')
      .sort((a, b) => a.order - b.order)
      .map(translateBlogPost);
  }, [translate]);

  /**
   * Obtém posts em destaque
   */
  const getFeaturedPosts = useMemo(() => {
    return getBlogPosts.filter(post => post.featured);
  }, [getBlogPosts]);

  /**
   * Obtém post por ID
   */
  const getBlogPostById = (id: string) => {
    const post = blogData.posts.find(post => post.id === id);
    return post ? translateBlogPost(post) : null;
  };

  /**
   * Obtém estatísticas do blog
   */
  const getBlogStats = () => ({
    totalPosts: blogData.posts.filter(post => post.status === 'published').length,
    featuredPosts: blogData.posts.filter(post => post.featured && post.status === 'published').length,
    categories: blogData.categories.length,
    tags: blogData.tags.length
  });

  return {
    blogPosts: getBlogPosts,
    featuredPosts: getFeaturedPosts,
    getBlogPostById,
    getBlogStats
  };
};
