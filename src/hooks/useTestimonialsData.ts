
import { useMemo } from 'react';
import { testimonialsData } from '@/data/testimonials';
import { useTranslatedContent } from './useTranslatedContent';
import { Testimonial } from '@/types/testimonials';

/**
 * Hook para gerenciar dados dos depoimentos
 */
export const useTestimonialsData = () => {
  const { translate } = useTranslatedContent();

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
  const getTestimonials = useMemo(() => {
    return testimonialsData.testimonials
      .sort((a, b) => a.order - b.order)
      .map(translateTestimonial);
  }, [translate]);

  /**
   * Obtém depoimentos verificados
   */
  const getVerifiedTestimonials = useMemo(() => {
    return getTestimonials.filter(testimonial => testimonial.verified);
  }, [getTestimonials]);

  /**
   * Obtém depoimentos por avaliação mínima
   */
  const getTestimonialsByRating = (minRating: number = 4) => {
    return getTestimonials.filter(testimonial => 
      testimonial.rating && testimonial.rating >= minRating
    );
  };

  /**
   * Obtém depoimento por ID
   */
  const getTestimonialById = (id: string) => {
    const testimonial = testimonialsData.testimonials.find(t => t.id === id);
    return testimonial ? translateTestimonial(testimonial) : null;
  };

  /**
   * Obtém estatísticas dos depoimentos
   */
  const getTestimonialsStats = () => ({
    totalTestimonials: testimonialsData.testimonials.length,
    verifiedTestimonials: testimonialsData.testimonials.filter(t => t.verified).length,
    averageRating: testimonialsData.testimonials
      .filter(t => t.rating)
      .reduce((sum, t) => sum + (t.rating || 0), 0) / 
      testimonialsData.testimonials.filter(t => t.rating).length || 0,
    withSocialLinks: testimonialsData.testimonials.filter(t => t.socialUrl).length
  });

  return {
    testimonials: getTestimonials,
    verifiedTestimonials: getVerifiedTestimonials,
    getTestimonialsByRating,
    getTestimonialById,
    getTestimonialsStats
  };
};
