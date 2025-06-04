
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { getAsyncDataLoader } from '@/services/asyncDataLoader';
import { TestimonialsData, Testimonial } from '@/types/testimonials';
import { useTranslatedContent } from '../useTranslatedContent';

/**
 * Hook para carregamento assíncrono de dados dos depoimentos
 */
export const useAsyncTestimonials = () => {
  const queryClient = useQueryClient();
  const { translate } = useTranslatedContent();
  const dataLoader = getAsyncDataLoader(queryClient);

  const {
    data: testimonialsData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['testimonials'],
    queryFn: () => dataLoader.loadTestimonialsData(),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  /**
   * Traduz um depoimento
   */
  const translateTestimonial = (testimonial: Testimonial) => ({
    ...testimonial,
    position: translate(testimonial.position),
    company: translate(testimonial.company),
    content: translate(testimonial.content)
  });

  /**
   * Obtém depoimentos traduzidos e ordenados
   */
  const getTestimonials = () => {
    if (!testimonialsData) return [];
    
    return testimonialsData.testimonials
      .sort((a, b) => a.order - b.order)
      .map(translateTestimonial);
  };

  /**
   * Obtém depoimentos verificados
   */
  const getVerifiedTestimonials = () => {
    return getTestimonials().filter(testimonial => testimonial.verified);
  };

  /**
   * Obtém depoimentos por avaliação mínima
   */
  const getTestimonialsByRating = (minRating: number = 4) => {
    return getTestimonials().filter(testimonial => 
      testimonial.rating && testimonial.rating >= minRating
    );
  };

  /**
   * Obtém depoimento por ID
   */
  const getTestimonialById = (id: string) => {
    if (!testimonialsData) return null;
    const testimonial = testimonialsData.testimonials.find(t => t.id === id);
    return testimonial ? translateTestimonial(testimonial) : null;
  };

  /**
   * Obtém estatísticas dos depoimentos
   */
  const getTestimonialsStats = () => {
    if (!testimonialsData) return null;
    
    const testimonials = testimonialsData.testimonials;
    const ratingsWithValues = testimonials.filter(t => t.rating);
    
    return {
      totalTestimonials: testimonials.length,
      verifiedTestimonials: testimonials.filter(t => t.verified).length,
      averageRating: ratingsWithValues.length > 0 
        ? ratingsWithValues.reduce((sum, t) => sum + (t.rating || 0), 0) / ratingsWithValues.length
        : 0,
      withSocialLinks: testimonials.filter(t => t.socialUrl).length
    };
  };

  return {
    testimonialsData,
    isLoading,
    error,
    refetch,
    testimonials: getTestimonials(),
    verifiedTestimonials: getVerifiedTestimonials(),
    getTestimonialsByRating,
    getTestimonialById,
    getTestimonialsStats
  };
};
