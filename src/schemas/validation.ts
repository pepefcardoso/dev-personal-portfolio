
import { z } from 'zod';
import { SkillLevel, SkillCategory, TimelineType } from '@/types/common';

// Schema base para strings traduzíveis - en e pt são obrigatórios
export const TranslatableStringSchema = z.object({
  en: z.string(),
  pt: z.string(),
  es: z.string(),
  fr: z.string().optional(),
  it: z.string().optional(),
  zh: z.string().optional()
});

// Schema base para itens ordenáveis
export const OrderableItemSchema = z.object({
  id: z.string(),
  order: z.number()
});

// Schema para itens com destaque
export const FeaturedItemSchema = z.object({
  featured: z.boolean()
});

// Schema para itens com intervalo de datas
export const DateRangeItemSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  period: TranslatableStringSchema
});

// Schema para Habilidades
export const SkillSchema = z.object({
  id: z.string(),
  order: z.number(),
  name: z.string(),
  level: z.nativeEnum(SkillLevel),
  category: z.nativeEnum(SkillCategory),
  description: z.string().optional(),
  yearsOfExperience: z.number().optional(),
  certifications: z.array(z.string()).optional()
});

export const SkillsDataSchema = z.object({
  skills: z.array(SkillSchema),
  categories: z.record(z.nativeEnum(SkillCategory), z.object({
    name: z.string(),
    description: z.string().optional(),
    color: z.string().optional()
  }))
});

// Schema para Timeline
export const TimelineItemSchema = z.object({
  id: z.string(),
  order: z.number(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  period: TranslatableStringSchema,
  title: TranslatableStringSchema,
  organization: TranslatableStringSchema,
  description: TranslatableStringSchema,
  type: z.nativeEnum(TimelineType),
  location: TranslatableStringSchema.optional(),
  achievements: z.array(TranslatableStringSchema).optional(),
  technologies: z.array(z.string()).optional(),
  links: z.array(z.object({
    name: z.string(),
    url: z.string()
  })).optional()
});

export const TimelineDataSchema = z.object({
  experience: z.array(TimelineItemSchema),
  education: z.array(TimelineItemSchema)
});

// Schema para Blog
export const BlogPostSchema = z.object({
  id: z.string(),
  order: z.number(),
  featured: z.boolean(),
  title: TranslatableStringSchema,
  excerpt: TranslatableStringSchema,
  content: TranslatableStringSchema.optional(),
  date: z.string(),
  readTime: z.number(),
  image: z.string().optional(),
  url: z.string().optional(),
  category: TranslatableStringSchema,
  tags: z.array(z.string()).optional(),
  author: z.object({
    name: z.string(),
    avatar: z.string().optional()
  }).optional(),
  status: z.enum(['published', 'draft', 'archived']).optional()
});

export const BlogDataSchema = z.object({
  posts: z.array(BlogPostSchema),
  categories: z.array(z.string()),
  tags: z.array(z.string())
});

// Schema para Projetos
export const ProjectSchema = z.object({
  id: z.string(),
  order: z.number(),
  featured: z.boolean(),
  title: TranslatableStringSchema,
  description: TranslatableStringSchema,
  tags: z.array(z.string()),
  image: z.string().optional(),
  images: z.array(z.string()).optional(),
  demoUrl: z.string().optional(),
  codeUrl: z.string().optional(),
  category: z.string().optional(),
  status: z.enum(['completed', 'in-progress', 'planned']).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  responsibilities: z.array(TranslatableStringSchema).optional(),
  technologies: z.array(z.string()).optional()
});

export const ProjectsDataSchema = z.object({
  projects: z.array(ProjectSchema),
  categories: z.array(z.string()),
  tags: z.array(z.string())
});

// Schema para Depoimentos
export const TestimonialSchema = z.object({
  id: z.string(),
  order: z.number(),
  name: z.string(),
  position: TranslatableStringSchema,
  company: TranslatableStringSchema,
  content: TranslatableStringSchema,
  image: z.string().optional(),
  socialUrl: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
  date: z.string().optional(),
  verified: z.boolean().optional()
});

export const TestimonialsDataSchema = z.object({
  testimonials: z.array(TestimonialSchema)
});

// Schema para Idiomas
export const LanguageSchema = z.object({
  id: z.string(),
  order: z.number(),
  code: z.string(),
  name: TranslatableStringSchema,
  nativeName: z.string(),
  flag: z.string().optional(),
  isDefault: z.boolean(),
  rtl: z.boolean()
});

export const LanguagesDataSchema = z.object({
  supported: z.array(LanguageSchema)
});

// Schema para Informações Pessoais
export const LanguageSkillSchema = z.object({
  language: TranslatableStringSchema,
  level: TranslatableStringSchema,
  proficiency: z.enum(['native', 'fluent', 'advanced', 'intermediate', 'basic'])
});

export const PersonalInfoSchema = z.object({
  name: z.string(),
  title: TranslatableStringSchema,
  description: TranslatableStringSchema,
  avatar: z.string().optional(),
  bio: TranslatableStringSchema,
  languages: z.array(LanguageSkillSchema),
  location: TranslatableStringSchema.optional()
});

export const SocialMediaLinkSchema = z.object({
  platform: z.string(),
  url: z.string(),
  username: z.string().optional(),
  icon: z.string().optional()
});

export const ContactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  location: TranslatableStringSchema.optional(),
  socialMedia: z.array(SocialMediaLinkSchema),
  resume: z.object({
    downloadUrl: z.string(),
    filename: TranslatableStringSchema
  }).optional()
});
