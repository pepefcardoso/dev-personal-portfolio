import { skillsData } from '@/data/skills';
import { timelineData } from '@/data/timeline';
import { blogData } from '@/data/blog';
import { projectsData } from '@/data/projects';
import { testimonialsData } from '@/data/testimonials';
import { languagesData } from '@/data/languages';
import { personalInfo, contactInfo } from '@/data/personal';
import { SkillsData } from '@/types/skills';
import { TimelineData } from '@/types/timeline';
import { BlogData } from '@/types/blog';
import { ProjectsData } from '@/types/projects';
import { TestimonialsData } from '@/types/testimonials';
import { LanguagesData } from '@/types/languages';
import { PersonalInfo, ContactInfo } from '@/types/contact';
import { TranslatableString } from '@/types/common';
import { DataFactory } from '@/factories/dataFactory';

/**
 * Serviço centralizado para acesso aos dados da aplicação
 * Fornece uma camada de abstração para o acesso aos dados com validação
 */
class DataService {
  private _skillsData: SkillsData | null = null;
  private _timelineData: TimelineData | null = null;
  private _blogData: BlogData | null = null;
  private _projectsData: ProjectsData | null = null;
  private _testimonialsData: TestimonialsData | null = null;
  private _languagesData: LanguagesData | null = null;
  private _personalInfo: PersonalInfo | null = null;
  private _contactInfo: ContactInfo | null = null;

  /**
   * Obtém uma string traduzível no idioma especificado
   */
  getTranslatedString(content: TranslatableString, language: string): string {
    const lang = language as keyof TranslatableString;
    return content[lang] || content.en || content.pt || Object.values(content)[0] || '';
  }

  /**
   * Obtém dados de habilidades com validação
   */
  getSkillsData(): SkillsData {
    if (!this._skillsData) {
      this._skillsData = DataFactory.createSkillsData(skillsData);
    }
    return this._skillsData;
  }

  /**
   * Obtém dados do timeline com validação
   */
  getTimelineData(): TimelineData {
    if (!this._timelineData) {
      this._timelineData = DataFactory.createTimelineData(timelineData);
    }
    return this._timelineData;
  }

  /**
   * Obtém dados do blog com validação
   */
  getBlogData(): BlogData {
    if (!this._blogData) {
      this._blogData = DataFactory.createBlogData(blogData);
    }
    return this._blogData;
  }

  /**
   * Obtém dados dos projetos com validação
   */
  getProjectsData(): ProjectsData {
    if (!this._projectsData) {
      this._projectsData = DataFactory.createProjectsData(projectsData);
    }
    return this._projectsData;
  }

  /**
   * Obtém dados dos depoimentos com validação
   */
  getTestimonialsData(): TestimonialsData {
    if (!this._testimonialsData) {
      this._testimonialsData = DataFactory.createTestimonialsData(testimonialsData);
    }
    return this._testimonialsData;
  }

  /**
   * Obtém dados dos idiomas com validação
   */
  getLanguagesData(): LanguagesData {
    if (!this._languagesData) {
      this._languagesData = DataFactory.createLanguagesData(languagesData);
    }
    return this._languagesData;
  }

  /**
   * Obtém informações pessoais com validação
   */
  getPersonalInfo(): PersonalInfo {
    if (!this._personalInfo) {
      this._personalInfo = DataFactory.createPersonalInfo(personalInfo);
    }
    return this._personalInfo;
  }

  /**
   * Obtém informações de contato com validação
   */
  getContactInfo(): ContactInfo {
    if (!this._contactInfo) {
      this._contactInfo = DataFactory.createContactInfo(contactInfo);
    }
    return this._contactInfo;
  }

  /**
   * Obtém habilidades filtradas por categoria
   */
  getSkillsByCategory(category?: string) {
    if (!category) return skillsData.skills;
    return skillsData.skills.filter(skill => skill.category === category);
  }

  /**
   * Obtém habilidades ordenadas por nível ou ordem
   */
  getSkillsSorted(sortBy: 'level' | 'order' | 'name' = 'order') {
    const skills = [...skillsData.skills];
    
    switch (sortBy) {
      case 'level':
        return skills.sort((a, b) => b.level - a.level);
      case 'name':
        return skills.sort((a, b) => a.name.localeCompare(b.name));
      case 'order':
      default:
        return skills.sort((a, b) => a.order - b.order);
    }
  }

  /**
   * Obtém experiências profissionais ordenadas
   */
  getExperiences() {
    return timelineData.experience.sort((a, b) => a.order - b.order);
  }

  /**
   * Obtém dados educacionais ordenados
   */
  getEducation() {
    return timelineData.education.sort((a, b) => a.order - b.order);
  }

  /**
   * Obtém posts do blog ordenados
   */
  getBlogPosts() {
    return blogData.posts
      .filter(post => post.status === 'published')
      .sort((a, b) => a.order - b.order);
  }

  /**
   * Obtém posts do blog em destaque
   */
  getFeaturedBlogPosts() {
    return this.getBlogPosts().filter(post => post.featured);
  }

  /**
   * Obtém projetos ordenados
   */
  getProjects() {
    return projectsData.projects.sort((a, b) => a.order - b.order);
  }

  /**
   * Obtém projetos em destaque
   */
  getFeaturedProjects() {
    return this.getProjects().filter(project => project.featured);
  }

  /**
   * Obtém projetos por categoria
   */
  getProjectsByCategory(category?: string) {
    if (!category) return this.getProjects();
    return this.getProjects().filter(project => project.category === category);
  }

  /**
   * Obtém projetos por tag
   */
  getProjectsByTag(tag: string) {
    return this.getProjects().filter(project => project.tags.includes(tag));
  }

  /**
   * Obtém depoimentos ordenados
   */
  getTestimonials() {
    return this.getTestimonialsData().testimonials.sort((a, b) => a.order - b.order);
  }

  /**
   * Obtém depoimentos verificados
   */
  getVerifiedTestimonials() {
    return this.getTestimonials().filter(testimonial => testimonial.verified);
  }

  /**
   * Obtém idiomas suportados
   */
  getSupportedLanguages() {
    return this.getLanguagesData().supported;
  }

  /**
   * Obtém idioma padrão
   */
  getDefaultLanguage() {
    return this.getSupportedLanguages().find(lang => lang.isDefault);
  }

  /**
   * Valida todos os dados da aplicação
   */
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
        contact: contactInfo
      });
      return { isValid: true, errors: [] };
    } catch (error) {
      return { 
        isValid: false, 
        errors: error instanceof Error ? [error.message] : ['Erro de validação desconhecido']
      };
    }
  }

  /**
   * Limpa cache de dados
   */
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

// Exporta uma instância singleton do serviço
export const dataService = new DataService();
