import { testimonialsData } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonials";
import { translate, useTranslatedData } from "./useData";

const translateTestimonial = (t: Testimonial, lang: string) => ({
  ...t,
  position: translate(t.position, lang),
  content: translate(t.content, lang),
});

export type TranslatedTestimonial = ReturnType<typeof translateTestimonial>;

export function useTestimonialsData() {
  const testimonials = useTranslatedData(
    testimonialsData.testimonials,
    translateTestimonial,
    { sort: (a, b) => a.order - b.order },
  );

  return {
    testimonials,
    getById: (id: string) => testimonials.find((t) => t.id === id) || null,
  };
}
