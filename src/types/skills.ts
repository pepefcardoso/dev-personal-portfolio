
import { SkillLevel, SkillCategory, OrderableItem } from './common';

/**
 * Tipos relacionados a habilidades técnicas
 */
export interface Skill extends OrderableItem {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  description?: string;
  yearsOfExperience?: number;
  certifications?: string[];
}

export interface SkillsData {
  skills: Skill[];
  categories: {
    [key in SkillCategory]: {
      name: string;
      description?: string;
      color?: string;
    };
  };
}
