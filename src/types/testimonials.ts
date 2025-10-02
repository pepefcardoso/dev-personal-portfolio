
import { TranslatableString, OrderableItem } from './common';

/**
 * Tipos relacionados a depoimentos
 */
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
