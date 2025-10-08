import { testimonialsData } from "@/data/testimonials";
import { useOrderedData } from "./useDataWithTranslation";
import { Testimonial } from "@/types/testimonials";
import { TranslatableString } from "@/types/common";

export const useTestimonialsData = () => {
  const translateTestimonial = (
    testimonial: Testimonial,
    translate: (content: TranslatableString) => string
  ) => ({
    ...testimonial,
    position: translate(testimonial.position),
    content: translate(testimonial.content),
  });

  const { data: testimonials, getById } = useOrderedData(
    testimonialsData.testimonials,
    translateTestimonial
  );

  return {
    testimonials,
    getTestimonialById: getById,
  };
};
