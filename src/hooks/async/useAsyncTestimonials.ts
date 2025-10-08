import { useMemo } from "react";
import { useAsyncData } from "./useAsyncData";
import { useTranslatedContent } from "../useTranslatedContent";
import { TestimonialsData, Testimonial } from "@/types/testimonials";

export const useAsyncTestimonials = () => {
  const { translate } = useTranslatedContent();

  const {
    data: testimonialsData,
    isLoading,
    error,
    refetch,
  } = useAsyncData<TestimonialsData>({
    queryKey: ["testimonials"],
    queryFn: (loader) => loader.loadTestimonialsData(),
  });

  const translateTestimonial = (testimonial: Testimonial) => ({
    ...testimonial,
    position: translate(testimonial.position),
    content: translate(testimonial.content),
  });

  const testimonials = useMemo(() => {
    if (!testimonialsData) return [];
    return testimonialsData.testimonials
      .sort((a, b) => a.order - b.order)
      .map(translateTestimonial);
  }, [testimonialsData, translate]);

  const testimonialsStats = useMemo(() => {
    if (!testimonialsData) return null;
    const allTestimonials = testimonialsData.testimonials;
    return {
      totalTestimonials: allTestimonials.length,
      withSocialLinks: allTestimonials.filter((t) => t.socialUrl).length,
    };
  }, [testimonialsData]);

  const getTestimonialById = (id: string) => {
    if (!testimonialsData) return null;
    const testimonial = testimonialsData.testimonials.find((t) => t.id === id);
    return testimonial ? translateTestimonial(testimonial) : null;
  };

  return {
    testimonialsData,
    isLoading,
    error,
    refetch,
    testimonials,
    testimonialsStats,
    getTestimonialById,
  };
};
