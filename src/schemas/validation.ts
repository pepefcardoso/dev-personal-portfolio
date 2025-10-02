import { z } from "zod";
import { SkillLevel, SkillCategory, TimelineType } from "@/types/common";

// =================================================================
// ==                      SCHEMAS BASE                           ==
// =================================================================

// Schema base para strings traduzíveis - en e pt são obrigatórios
export const TranslatableStringSchema = z.object({
  en: z.string().min(1),
  pt: z.string().min(1),
  es: z.string().min(1),
  fr: z.string().optional(),
  it: z.string().optional(),
  zh: z.string().optional(),
});

// Schema base para itens ordenáveis
export const OrderableItemSchema = z.object({
  id: z.string().min(1),
  order: z.number(),
});

// Schema para itens com destaque
export const FeaturedItemSchema = z.object({
  featured: z.boolean(),
});

// Schema para itens com intervalo de datas
export const DateRangeItemSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  period: TranslatableStringSchema,
});

// =================================================================
// ==                   SCHEMAS DE DADOS                          ==
// =================================================================

// Schema para Habilidades
export const SkillSchema = OrderableItemSchema.extend({
  name: z.string().min(1),
  level: z.nativeEnum(SkillLevel),
  category: z.nativeEnum(SkillCategory),
  description: z.string().optional(),
  yearsOfExperience: z.number().optional(),
  certifications: z.array(z.string()).optional(),
});

export const SkillsDataSchema = z.object({
  skills: z.array(SkillSchema),
  categories: z.record(
    z.nativeEnum(SkillCategory),
    z.object({
      name: z.string().min(1),
      description: z.string().optional(),
      color: z.string().optional(),
    })
  ),
});

// Schema para Timeline (Usando .merge() para compor schemas base)
export const TimelineItemSchema = OrderableItemSchema.merge(
  DateRangeItemSchema
).extend({
  title: TranslatableStringSchema,
  organization: TranslatableStringSchema,
  description: TranslatableStringSchema,
  type: z.nativeEnum(TimelineType),
  location: TranslatableStringSchema.optional(),
  achievements: z.array(TranslatableStringSchema).optional(),
  technologies: z.array(z.string()).optional(),
  links: z
    .array(
      z.object({
        name: z.string().min(1),
        url: z.string().url(),
      })
    )
    .optional(),
});

export const TimelineDataSchema = z.object({
  experience: z.array(TimelineItemSchema),
  education: z.array(TimelineItemSchema),
});

// Schema para Blog (Usando .merge() para compor schemas base)
export const BlogPostSchema = OrderableItemSchema.merge(
  FeaturedItemSchema
).extend({
  title: TranslatableStringSchema,
  excerpt: TranslatableStringSchema,
  content: TranslatableStringSchema.optional(),
  date: z.string().min(1),
  readTime: z.number(),
  image: z.string().url().optional(),
  url: z.string().url().optional(),
  category: TranslatableStringSchema,
  tags: z.array(z.string()).optional(),
  author: z
    .object({
      name: z.string().min(1),
      avatar: z.string().optional(),
    })
    .optional(),
  status: z.enum(["published", "draft", "archived"]).optional(),
});

export const BlogDataSchema = z.object({
  posts: z.array(BlogPostSchema),
  categories: z.array(z.string()),
  tags: z.array(z.string()),
});

// Schema para Projetos (Usando .merge() para compor schemas base)
export const ProjectSchema = OrderableItemSchema.merge(
  FeaturedItemSchema
).extend({
  title: TranslatableStringSchema,
  description: TranslatableStringSchema,
  tags: z.array(z.string()),
  image: z.string().url().optional(),
  images: z.array(z.string().url()).optional(),
  demoUrl: z.string().url().optional(),
  codeUrl: z.string().url().optional(),
  category: z.string().optional(),
  status: z.enum(["completed", "in-progress", "planned"]).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  responsibilities: z.array(TranslatableStringSchema).optional(),
  technologies: z.array(z.string()).optional(),
});

export const ProjectsDataSchema = z.object({
  projects: z.array(ProjectSchema),
  categories: z.array(z.string()),
  tags: z.array(z.string()),
});

// Schema para Depoimentos
export const TestimonialSchema = OrderableItemSchema.extend({
  name: z.string().min(1),
  position: TranslatableStringSchema,
  company: TranslatableStringSchema,
  content: TranslatableStringSchema,
  image: z.string().url().optional(),
  socialUrl: z.string().url().optional(),
  rating: z.number().min(1).max(5).optional(),
  date: z.string().optional(),
  verified: z.boolean().optional(),
});

export const TestimonialsDataSchema = z.object({
  testimonials: z.array(TestimonialSchema),
});

// Schema para Idiomas
export const LanguageSchema = OrderableItemSchema.extend({
  code: z.string().min(1),
  name: TranslatableStringSchema,
  nativeName: z.string().min(1),
  flag: z.string().optional(),
  isDefault: z.boolean(),
  rtl: z.boolean(),
});

export const LanguagesDataSchema = z.object({
  supported: z.array(LanguageSchema),
});

// Schema para Informações Pessoais e Contato
export const LanguageSkillSchema = z.object({
  language: TranslatableStringSchema,
  level: TranslatableStringSchema,
  proficiency: z.enum([
    "native",
    "fluent",
    "advanced",
    "intermediate",
    "basic",
  ]),
});

export const PersonalInfoSchema = z.object({
  name: z.string().min(1),
  title: TranslatableStringSchema,
  description: TranslatableStringSchema,
  avatar: z.string().url().optional(),
  bio: TranslatableStringSchema,
  languages: z.array(LanguageSkillSchema),
  location: TranslatableStringSchema.optional(),
});

export const SocialMediaLinkSchema = z.object({
  platform: z.string().min(1),
  url: z.string().url(),
  username: z.string().optional(),
  icon: z.string().optional(),
});

export const ContactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  location: TranslatableStringSchema.optional(),
  socialMedia: z.array(SocialMediaLinkSchema),
  resume: z
    .object({
      downloadUrl: z.string(),
      filename: TranslatableStringSchema,
    })
    .optional(),
});
