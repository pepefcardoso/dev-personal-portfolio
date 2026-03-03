import { testimonialsData } from "@/data/testimonials";
import { Testimonial, TranslatedTestimonial } from "@/types/testimonials";
import { translate, useTranslatedData } from "./useData";

export function useTestimonialsData() {
  const translateTestimonial = (
    t: Testimonial,
    lang: string,
  ): TranslatedTestimonial => ({
    ...t,
    position: translate(t.position, lang),
    content: translate(t.content, lang),
  });

  const testimonials = useTranslatedData<Testimonial, TranslatedTestimonial>(
    testimonialsData.testimonials,
    translateTestimonial,
    { sort: (a, b) => a.order - b.order },
  );

  return {
    testimonials,
    getById: (id: string) => testimonials.find((t) => t.id === id) || null,
  };
}
