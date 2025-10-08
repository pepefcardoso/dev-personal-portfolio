export interface TranslatableString {
  en: string;
  pt: string;
  es: string;
  fr?: string;
  it?: string;
  zh?: string;
}

export interface TranslatableContent {
  [key: string]: TranslatableString | string | number | boolean | undefined;
}

export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
}

export enum SkillLevel {
  BEGINNER = 1,
  BASIC = 2,
  INTERMEDIATE = 3,
  ADVANCED = 4,
  EXPERT = 5,
}

export enum SkillCategory {
  FRONTEND = "frontend",
  BACKEND = "backend",
  TOOLS = "tools",
  LANGUAGES = "languages",
}

export enum TimelineType {
  EDUCATION = "education",
  EXPERIENCE = "experience",
}

export interface OrderableItem {
  id: string;
  order: number;
}

export interface FeaturedItem {
  featured: boolean;
}

export interface DateRangeItem {
  startDate?: string;
  endDate?: string;
  period: TranslatableString;
}
