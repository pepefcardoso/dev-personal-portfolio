
import { z } from 'zod';
import { SkillLevel, SkillCategory, TimelineType } from '@/types/common';

// Schema base para strings traduzíveis - en e pt são obrigatórios
export const TranslatableStringSchema = z.object({
  en: z.string().min(1),
  pt: z.string().min(1),
  es: z.string().min(1),
  fr: z.string().optional(),
  it: z.string().optional(),
  zh: z.string().optional()
}).strict();

// Schema base para itens ordenáveis
export const OrderableItemSchema = z.object({
  id: z.string().min(1),
  order: z.number()
}).strict();

// Schema para itens com destaque
export const FeaturedItemSchema = z.object({
  featured: z.boolean()
}).strict();

// Schema para itens com intervalo de datas
export const DateRangeItemSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  period: TranslatableStringSchema
}).strict();

// Schema para Habilidades
export const SkillSchema = OrderableItemSchema.extend({
  name: z.string().min(1),
  level: z.nativeEnum(SkillLevel),
  category: z.nativeEnum(SkillCategory),
  description: z.string().optional(),
  yearsOfExperience: z.number().optional(),
  certifications: z.array(z.string()).optional()
}).strict();

export const SkillsDataSchema = z.object({
  skills: z.array(SkillSchema),
  categories: z.record(z.nativeEnum(SkillCategory), z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    color: z.string().optional()
  }).strict())
}).strict();

// Schema para Timeline
export const TimelineItemSchema = OrderableItemSchema.extend({
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
    name: z.string().min(1),
    url: z.string().url()
  }).strict()).optional()
}).strict();

export const TimelineDataSchema = z.object({
  experience: z.array(TimelineItemSchema),
  education: z.array(TimelineItemSchema)
}).strict();

// Schema para Blog
export const BlogPostSchema = OrderableItemSchema.extend({
  featured: z.boolean(),
  title: TranslatableStringSchema,
  excerpt: TranslatableStringSchema,
  content: TranslatableStringSchema.optional(),
  date: z.string().min(1),
  readTime: z.number(),
  image: z.string().optional(),
  url: z.string().optional(),
  category: TranslatableStringSchema,
  tags: z.array(z.string()).optional(),
  author: z.object({
    name: z.string().min(1),
    avatar: z.string().optional()
  }).strict().optional(),
  status: z.enum(['published', 'draft', 'archived']).optional()
}).strict();

export const BlogDataSchema = z.object({
  posts: z.array(BlogPostSchema),
  categories: z.array(z.string()),
  tags: z.array(z.string())
}).strict();

// Schema para Projetos
export const ProjectSchema = OrderableItemSchema.extend({
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
}).strict();

export const ProjectsDataSchema = z.object({
  projects: z.array(ProjectSchema),
  categories: z.array(z.string()),
  tags: z.array(z.string())
}).strict();

// Schema para Depoimentos
export const TestimonialSchema = OrderableItemSchema.extend({
  name: z.string().min(1),
  position: TranslatableStringSchema,
  company: TranslatableStringSchema,
  content: TranslatableStringSchema,
  image: z.string().optional(),
  socialUrl: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
  date: z.string().optional(),
  verified: z.boolean().optional()
}).strict();

export const TestimonialsDataSchema = z.object({
  testimonials: z.array(TestimonialSchema)
}).strict();

// Schema para Idiomas
export const LanguageSchema = OrderableItemSchema.extend({
  code: z.string().min(1),
  name: TranslatableStringSchema,
  nativeName: z.string().min(1),
  flag: z.string().optional(),
  isDefault: z.boolean(),
  rtl: z.boolean()
}).strict();

export const LanguagesDataSchema = z.object({
  supported: z.array(LanguageSchema)
}).strict();

// Schema para Informações Pessoais
export const LanguageSkillSchema = z.object({
  language: TranslatableStringSchema,
  level: TranslatableStringSchema,
  proficiency: z.enum(['native', 'fluent', 'advanced', 'intermediate', 'basic'])
}).strict();

export const PersonalInfoSchema = z.object({
  name: z.string().min(1),
  title: TranslatableStringSchema,
  description: TranslatableStringSchema,
  avatar: z.string().optional(),
  bio: TranslatableStringSchema,
  languages: z.array(LanguageSkillSchema),
  location: TranslatableStringSchema.optional()
}).strict();

export const SocialMediaLinkSchema = z.object({
  platform: z.string().min(1),
  url: z.string().url(),
  username: z.string().optional(),
  icon: z.string().optional()
}).strict();

export const ContactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  location: TranslatableStringSchema.optional(),
  socialMedia: z.array(SocialMediaLinkSchema),
  resume: z.object({
    downloadUrl: z.string().url(),
    filename: TranslatableStringSchema
  }).strict().optional()
}).strict();
