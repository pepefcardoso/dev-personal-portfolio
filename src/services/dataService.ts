
import { skillsData } from '@/data/skills';
import { timelineData } from '@/data/timeline';
import { blogData } from '@/data/blog';
import { personalInfo, contactInfo } from '@/data/personal';
import { SkillsData } from '@/types/skills';
import { TimelineData } from '@/types/timeline';
import { BlogData } from '@/types/blog';
import { PersonalInfo, ContactInfo } from '@/types/contact';
import { TranslatableString } from '@/types/common';

/**
 * Serviço centralizado para acesso aos dados da aplicação
 * Fornece uma camada de abstração para o acesso aos dados
 */
class DataService {
  /**
   * Obtém uma string traduzível no idioma especificado
   */
  getTranslatedString(content: TranslatableString, language: string): string {
    const lang = language as keyof TranslatableString;
    return content[lang] || content.en || content.pt || Object.values(content)[0] || '';
  }

  /**
   * Obtém dados de habilidades
   */
  getSkillsData(): SkillsData {
    return skillsData;
  }

  /**
   * Obtém dados do timeline
   */
  getTimelineData(): TimelineData {
    return timelineData;
  }

  /**
   * Obtém dados do blog
   */
  getBlogData(): BlogData {
    return blogData;
  }

  /**
   * Obtém informações pessoais
   */
  getPersonalInfo(): PersonalInfo {
    return personalInfo;
  }

  /**
   * Obtém informações de contato
   */
  getContactInfo(): ContactInfo {
    return contactInfo;
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
}

// Exporta uma instância singleton do serviço
export const dataService = new DataService();
