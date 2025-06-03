
import { TranslatableString, OrderableItem } from './common';

/**
 * Tipos relacionados a depoimentos
 */
export interface Testimonial extends OrderableItem {
  name: string;
  position: TranslatableString;
  company: TranslatableString;
  content: TranslatableString;
  image?: string;
  socialUrl?: string;
  rating?: number;
  date?: string;
  verified?: boolean;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}
