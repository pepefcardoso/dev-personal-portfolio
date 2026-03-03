import { TranslatableString, OrderableItem } from "./common";

export interface Testimonial extends OrderableItem {
  name: string;
  position: TranslatableString;
  content: TranslatableString;
  image?: string;
  socialUrl?: string;
}

export interface TranslatedTestimonial
  extends Omit<Testimonial, "position" | "content"> {
  position: string;
  content: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}
