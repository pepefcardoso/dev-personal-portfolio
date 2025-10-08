import { testimonialsData } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonials";
import { translate, useTranslatedData } from "./useData";

export function useTestimonialsData() {
  const translateTestimonial = (t: Testimonial, lang: string) => ({
    ...t,
    position: translate(t.position, lang),
    content: translate(t.content, lang),
  });

  const testimonials = useTranslatedData(
    testimonialsData.testimonials,
    translateTestimonial,
    { sort: (a, b) => a.order - b.order }
  );

  return {
    testimonials,
    getById: (id: string) => testimonials.find((t) => t.id === id) || null,
  };
}
