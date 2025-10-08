import {
  SkillsDataSchema,
  TimelineDataSchema,
  BlogDataSchema,
  ProjectsDataSchema,
  TestimonialsDataSchema,
  LanguagesDataSchema,
  PersonalInfoSchema,
  ContactInfoSchema,
} from "@/schemas/validation";
import { SkillsData } from "@/types/skills";
import { TimelineData } from "@/types/timeline";
import { BlogData } from "@/types/blog";
import { ProjectsData } from "@/types/projects";
import { TestimonialsData } from "@/types/testimonials";
import { LanguagesData } from "@/types/languages";
import { PersonalInfo, ContactInfo } from "@/types/contact";

export class DataFactory {
  static createSkillsData(data: unknown): SkillsData {
    const validated = SkillsDataSchema.parse(data);
    return validated as SkillsData;
  }

  static createTimelineData(data: unknown): TimelineData {
    const validated = TimelineDataSchema.parse(data);
    return validated as TimelineData;
  }

  static createBlogData(data: unknown): BlogData {
    const validated = BlogDataSchema.parse(data);
    return validated as BlogData;
  }

  static createProjectsData(data: unknown): ProjectsData {
    const validated = ProjectsDataSchema.parse(data);
    return validated as ProjectsData;
  }

  static createTestimonialsData(data: unknown): TestimonialsData {
    const validated = TestimonialsDataSchema.parse(data);
    return validated as TestimonialsData;
  }

  static createLanguagesData(data: unknown): LanguagesData {
    const validated = LanguagesDataSchema.parse(data);
    return validated as LanguagesData;
  }

  static createPersonalInfo(data: unknown): PersonalInfo {
    const validated = PersonalInfoSchema.parse(data);
    return validated as PersonalInfo;
  }

  static createContactInfo(data: unknown): ContactInfo {
    const validated = ContactInfoSchema.parse(data);
    return validated as ContactInfo;
  }

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
      contact: this.createContactInfo(data.contact),
    };
  }

  static validatePartialData(
    data: Partial<{
      skills: unknown;
      timeline: unknown;
      blog: unknown;
      projects: unknown;
      testimonials: unknown;
      languages: unknown;
      personal: unknown;
      contact: unknown;
    }>
  ) {
    const result: Partial<{
      skills: SkillsData;
      timeline: TimelineData;
      blog: BlogData;
      projects: ProjectsData;
      testimonials: TestimonialsData;
      languages: LanguagesData;
      personal: PersonalInfo;
      contact: ContactInfo;
    }> = {};

    if (data.skills !== undefined) {
      result.skills = this.createSkillsData(data.skills);
    }
    if (data.timeline !== undefined) {
      result.timeline = this.createTimelineData(data.timeline);
    }
    if (data.blog !== undefined) {
      result.blog = this.createBlogData(data.blog);
    }
    if (data.projects !== undefined) {
      result.projects = this.createProjectsData(data.projects);
    }
    if (data.testimonials !== undefined) {
      result.testimonials = this.createTestimonialsData(data.testimonials);
    }
    if (data.languages !== undefined) {
      result.languages = this.createLanguagesData(data.languages);
    }
    if (data.personal !== undefined) {
      result.personal = this.createPersonalInfo(data.personal);
    }
    if (data.contact !== undefined) {
      result.contact = this.createContactInfo(data.contact);
    }

    return result;
  }
}

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
    return DataFactory.validatePartialData(this.data);
  }
}
