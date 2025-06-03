
/**
 * Tipos fundamentais para conteúdo traduzível e estruturas de dados
 */

// Tipo para conteúdo que pode ser traduzido
export interface TranslatableString {
  en: string;
  pt: string;
  es: string;
  fr?: string;
  it?: string;
  zh?: string;
}

// Tipo para conteúdo mais complexo que pode incluir múltiplos campos traduzíveis
export interface TranslatableContent {
  [key: string]: TranslatableString | string | number | boolean | undefined;
}

// Tipo para configuração de idiomas
export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
}

// Enum para níveis de habilidade
export enum SkillLevel {
  BEGINNER = 1,
  BASIC = 2,
  INTERMEDIATE = 3,
  ADVANCED = 4,
  EXPERT = 5
}

// Enum para categorias de habilidades
export enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  TOOLS = 'tools',
  LANGUAGES = 'languages'
}

// Enum para tipos de timeline
export enum TimelineType {
  EDUCATION = 'education',
  EXPERIENCE = 'experience'
}

// Interface base para itens que podem ser ordenados
export interface OrderableItem {
  id: string;
  order: number;
}

// Interface base para itens que podem ser destacados
export interface FeaturedItem {
  featured: boolean;
}

// Interface base para itens com datas
export interface DateRangeItem {
  startDate?: string;
  endDate?: string;
  period: TranslatableString;
}
