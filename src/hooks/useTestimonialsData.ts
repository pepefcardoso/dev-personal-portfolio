import { useMemo } from "react";
import { testimonialsData } from "@/data/testimonials";
import { useTranslatedContent } from "./useTranslatedContent";
import { Testimonial } from "@/types/testimonials";

export const useTestimonialsData = () => {
  const { translate } = useTranslatedContent();

  const translateTestimonial = (testimonial: Testimonial) => ({
    ...testimonial,
    position: translate(testimonial.position),
    content: translate(testimonial.content),
  });

  const getTestimonials = useMemo(() => {
    return testimonialsData.testimonials
      .sort((a, b) => a.order - b.order)
      .map(translateTestimonial);
  }, [translate]);

  const getTestimonialById = (id: string) => {
    const testimonial = testimonialsData.testimonials.find((t) => t.id === id);
    return testimonial ? translateTestimonial(testimonial) : null;
  };

  return {
    testimonials: getTestimonials,
    getTestimonialById,
  };
};
