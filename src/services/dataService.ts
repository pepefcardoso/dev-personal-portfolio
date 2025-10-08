import { skillsData } from "@/data/skills";
import { timelineData } from "@/data/timeline";
import { blogData } from "@/data/blog";
import { projectsData } from "@/data/projects";
import { testimonialsData } from "@/data/testimonials";
import { languagesData } from "@/data/languages";
import { personalInfo, contactInfo } from "@/data/personal";
import { SkillsData } from "@/types/skills";
import { TimelineData } from "@/types/timeline";
import { BlogData } from "@/types/blog";
import { ProjectsData } from "@/types/projects";
import { TestimonialsData } from "@/types/testimonials";
import { LanguagesData } from "@/types/languages";
import { PersonalInfo, ContactInfo } from "@/types/contact";
import { TranslatableString } from "@/types/common";
import { DataFactory } from "@/factories/dataFactory";

class DataService {
  private _skillsData: SkillsData | null = null;
  private _timelineData: TimelineData | null = null;
  private _blogData: BlogData | null = null;
  private _projectsData: ProjectsData | null = null;
  private _testimonialsData: TestimonialsData | null = null;
  private _languagesData: LanguagesData | null = null;
  private _personalInfo: PersonalInfo | null = null;
  private _contactInfo: ContactInfo | null = null;

  getTranslatedString(content: TranslatableString, language: string): string {
    const lang = language as keyof TranslatableString;
    return (
      content[lang] ||
      content.en ||
      content.pt ||
      Object.values(content)[0] ||
      ""
    );
  }

  getSkillsData(): SkillsData {
    if (!this._skillsData) {
      this._skillsData = DataFactory.createSkillsData(skillsData);
    }
    return this._skillsData;
  }

  getTimelineData(): TimelineData {
    if (!this._timelineData) {
      this._timelineData = DataFactory.createTimelineData(timelineData);
    }
    return this._timelineData;
  }

  getBlogData(): BlogData {
    if (!this._blogData) {
      this._blogData = DataFactory.createBlogData(blogData);
    }
    return this._blogData;
  }

  getProjectsData(): ProjectsData {
    if (!this._projectsData) {
      this._projectsData = DataFactory.createProjectsData(projectsData);
    }
    return this._projectsData;
  }

  getTestimonialsData(): TestimonialsData {
    if (!this._testimonialsData) {
      this._testimonialsData =
        DataFactory.createTestimonialsData(testimonialsData);
    }
    return this._testimonialsData;
  }

  getLanguagesData(): LanguagesData {
    if (!this._languagesData) {
      this._languagesData = DataFactory.createLanguagesData(languagesData);
    }
    return this._languagesData;
  }

  getPersonalInfo(): PersonalInfo {
    if (!this._personalInfo) {
      this._personalInfo = DataFactory.createPersonalInfo(personalInfo);
    }
    return this._personalInfo;
  }

  getContactInfo(): ContactInfo {
    if (!this._contactInfo) {
      this._contactInfo = DataFactory.createContactInfo(contactInfo);
    }
    return this._contactInfo;
  }

  getSkillsByCategory(category?: string) {
    if (!category) return skillsData.skills;
    return skillsData.skills.filter((skill) => skill.category === category);
  }

  getSkillsSorted(sortBy: "level" | "order" | "name" = "order") {
    const skills = [...skillsData.skills];

    switch (sortBy) {
      case "level":
        return skills.sort((a, b) => b.level - a.level);
      case "name":
        return skills.sort((a, b) => a.name.localeCompare(b.name));
      case "order":
      default:
        return skills.sort((a, b) => a.order - b.order);
    }
  }

  getEducation() {
    return timelineData.education.sort((a, b) => a.order - b.order);
  }

  getProjects() {
    return projectsData.projects.sort((a, b) => a.order - b.order);
  }

  getProjectsByCategory(category?: string) {
    if (!category) return this.getProjects();
    return this.getProjects().filter(
      (project) => project.category === category
    );
  }

  getProjectsByTag(tag: string) {
    return this.getProjects().filter((project) => project.tags.includes(tag));
  }

  validateAllData() {
    try {
      DataFactory.validateAllData({
        skills: skillsData,
        timeline: timelineData,
        blog: blogData,
        projects: projectsData,
        testimonials: testimonialsData,
        languages: languagesData,
        personal: personalInfo,
        contact: contactInfo,
      });
      return { isValid: true, errors: [] };
    } catch (error) {
      return {
        isValid: false,
        errors:
          error instanceof Error
            ? [error.message]
            : ["Erro de validação desconhecido"],
      };
    }
  }

  clearCache() {
    this._skillsData = null;
    this._timelineData = null;
    this._blogData = null;
    this._projectsData = null;
    this._testimonialsData = null;
    this._languagesData = null;
    this._personalInfo = null;
    this._contactInfo = null;
  }
}

export const dataService = new DataService();
