
import { z } from 'zod';
import {
  SkillsDataSchema,
  TimelineDataSchema,
  BlogDataSchema,
  ProjectsDataSchema,
  TestimonialsDataSchema,
  LanguagesDataSchema,
  PersonalInfoSchema,
  ContactInfoSchema
} from '@/schemas/validation';
import { SkillsData } from '@/types/skills';
import { TimelineData } from '@/types/timeline';
import { BlogData } from '@/types/blog';
import { ProjectsData } from '@/types/projects';
import { TestimonialsData } from '@/types/testimonials';
import { LanguagesData } from '@/types/languages';
import { PersonalInfo, ContactInfo } from '@/types/contact';

/**
 * Factory para criar e validar dados da aplicação
 */
export class DataFactory {
  /**
   * Valida e cria dados de habilidades
   */
  static createSkillsData(data: unknown): SkillsData {
    const validated = SkillsDataSchema.parse(data);
    return validated as SkillsData;
  }

  /**
   * Valida e cria dados de timeline
   */
  static createTimelineData(data: unknown): TimelineData {
    const validated = TimelineDataSchema.parse(data);
    return validated as TimelineData;
  }

  /**
   * Valida e cria dados de blog
   */
  static createBlogData(data: unknown): BlogData {
    const validated = BlogDataSchema.parse(data);
    return validated as BlogData;
  }

  /**
   * Valida e cria dados de projetos
   */
  static createProjectsData(data: unknown): ProjectsData {
    const validated = ProjectsDataSchema.parse(data);
    return validated as ProjectsData;
  }

  /**
   * Valida e cria dados de depoimentos
   */
  static createTestimonialsData(data: unknown): TestimonialsData {
    const validated = TestimonialsDataSchema.parse(data);
    return validated as TestimonialsData;
  }

  /**
   * Valida e cria dados de idiomas
   */
  static createLanguagesData(data: unknown): LanguagesData {
    const validated = LanguagesDataSchema.parse(data);
    return validated as LanguagesData;
  }

  /**
   * Valida e cria informações pessoais
   */
  static createPersonalInfo(data: unknown): PersonalInfo {
    const validated = PersonalInfoSchema.parse(data);
    return validated as PersonalInfo;
  }

  /**
   * Valida e cria informações de contato
   */
  static createContactInfo(data: unknown): ContactInfo {
    const validated = ContactInfoSchema.parse(data);
    return validated as ContactInfo;
  }

  /**
   * Valida todos os dados da aplicação
   */
  static validateAllData(data: {
    skills: unknown;
    timeline: unknown;
    blog: unknown;
    projects: unknown;
    testimonials: unknown;
    languages: unknown;
    personal: unknown;
    contact: unknown;
  }) {
    return {
      skills: this.createSkillsData(data.skills),
      timeline: this.createTimelineData(data.timeline),
      blog: this.createBlogData(data.blog),
      projects: this.createProjectsData(data.projects),
      testimonials: this.createTestimonialsData(data.testimonials),
      languages: this.createLanguagesData(data.languages),
      personal: this.createPersonalInfo(data.personal),
      contact: this.createContactInfo(data.contact)
    };
  }
}

/**
 * Builder pattern para criação incremental de dados
 */
export class DataBuilder {
  private data: Partial<{
    skills: SkillsData;
    timeline: TimelineData;
    blog: BlogData;
    projects: ProjectsData;
    testimonials: TestimonialsData;
    languages: LanguagesData;
    personal: PersonalInfo;
    contact: ContactInfo;
  }> = {};

  withSkills(skills: SkillsData): DataBuilder {
    this.data.skills = skills;
    return this;
  }

  withTimeline(timeline: TimelineData): DataBuilder {
    this.data.timeline = timeline;
    return this;
  }

  withBlog(blog: BlogData): DataBuilder {
    this.data.blog = blog;
    return this;
  }

  withProjects(projects: ProjectsData): DataBuilder {
    this.data.projects = projects;
    return this;
  }

  withTestimonials(testimonials: TestimonialsData): DataBuilder {
    this.data.testimonials = testimonials;
    return this;
  }

  withLanguages(languages: LanguagesData): DataBuilder {
    this.data.languages = languages;
    return this;
  }

  withPersonal(personal: PersonalInfo): DataBuilder {
    this.data.personal = personal;
    return this;
  }

  withContact(contact: ContactInfo): DataBuilder {
    this.data.contact = contact;
    return this;
  }

  build() {
    return { ...this.data };
  }

  validate() {
    return DataFactory.validateAllData(this.data);
  }
}
