
import { TranslatableString, FeaturedItem, OrderableItem } from './common';

/**
 * Tipos relacionados a projetos
 */
export interface Project extends OrderableItem, FeaturedItem {
  title: TranslatableString;
  description: TranslatableString;
  tags: string[];
  image?: string;
  images?: string[];
  demoUrl?: string;
  codeUrl?: string;
  category?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  startDate?: string;
  endDate?: string;
  responsibilities?: TranslatableString[];
  technologies?: string[];
}

export interface ProjectsData {
  projects: Project[];
  categories: string[];
  tags: string[];
}
