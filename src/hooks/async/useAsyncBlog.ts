
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { getAsyncDataLoader } from '@/services/asyncDataLoader';
import { BlogData, BlogPost } from '@/types/blog';
import { useTranslatedContent } from '../useTranslatedContent';

/**
 * Hook para carregamento assíncrono de dados do blog
 */
export const useAsyncBlog = () => {
  const queryClient = useQueryClient();
  const { translate } = useTranslatedContent();
  const dataLoader = getAsyncDataLoader(queryClient);

  const {
    data: blogData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['blog'],
    queryFn: () => dataLoader.loadBlogData(),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

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
  const getBlogPosts = () => {
    if (!blogData) return [];
    
    return blogData.posts
      .filter(post => post.status === 'published')
      .sort((a, b) => a.order - b.order)
      .map(translateBlogPost);
  };

  /**
   * Obtém posts em destaque
   */
  const getFeaturedPosts = () => {
    return getBlogPosts().filter(post => post.featured);
  };

  /**
   * Obtém post por ID
   */
  const getBlogPostById = (id: string) => {
    if (!blogData) return null;
    const post = blogData.posts.find(post => post.id === id);
    return post ? translateBlogPost(post) : null;
  };

  /**
   * Obtém estatísticas do blog
   */
  const getBlogStats = () => {
    if (!blogData) return null;
    
    return {
      totalPosts: blogData.posts.filter(post => post.status === 'published').length,
      featuredPosts: blogData.posts.filter(post => post.featured && post.status === 'published').length,
      categories: blogData.categories.length,
      tags: blogData.tags.length
    };
  };

  return {
    blogData,
    isLoading,
    error,
    refetch,
    blogPosts: getBlogPosts(),
    featuredPosts: getFeaturedPosts(),
    getBlogPostById,
    getBlogStats
  };
};
