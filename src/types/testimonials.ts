import { TranslatableString, OrderableItem } from "./common";

export interface Testimonial extends OrderableItem {
  name: string;
  position: TranslatableString;
  content: TranslatableString;
  image?: string;
  socialUrl?: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}
