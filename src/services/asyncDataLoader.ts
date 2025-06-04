
import { QueryClient } from '@tanstack/react-query';
import { DataFactory } from '@/factories/dataFactory';
import { 
  SkillsData, 
  TimelineData, 
  BlogData, 
  ProjectsData, 
  TestimonialsData, 
  LanguagesData, 
  PersonalInfo, 
  ContactInfo 
} from '@/types';

/**
 * Sistema avançado de carregamento assíncrono de dados
 * Implementa cache inteligente, prefetching e lazy loading
 */
export class AsyncDataLoader {
  private queryClient: QueryClient;
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutos

  constructor(queryClient: QueryClient) {
    this.queryClient = queryClient;
  }

  /**
   * Simula carregamento assíncrono de dados com delay realista
   */
  private async simulateAsyncLoad<T>(data: T, delay: number = 100): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), delay);
    });
  }

  /**
   * Obtém dados do cache local se disponível e válido
   */
  private getCachedData<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < cached.ttl) {
      return cached.data as T;
    }
    return null;
  }

  /**
   * Armazena dados no cache local
   */
  private setCachedData<T>(key: string, data: T, ttl: number = this.DEFAULT_TTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  /**
   * Carrega dados de habilidades de forma assíncrona
   */
  async loadSkillsData(): Promise<SkillsData> {
    const cacheKey = 'skills';
    const cached = this.getCachedData<SkillsData>(cacheKey);
    
    if (cached) {
      return cached;
    }

    // Simula carregamento de API
    const { skillsData } = await import('@/data/skills');
    const validated = DataFactory.createSkillsData(skillsData);
    const result = await this.simulateAsyncLoad(validated, 150);
    
    this.setCachedData(cacheKey, result);
    return result;
  }

  /**
   * Carrega dados do timeline de forma assíncrona
   */
  async loadTimelineData(): Promise<TimelineData> {
    const cacheKey = 'timeline';
    const cached = this.getCachedData<TimelineData>(cacheKey);
    
    if (cached) {
      return cached;
    }

    const { timelineData } = await import('@/data/timeline');
    const validated = DataFactory.createTimelineData(timelineData);
    const result = await this.simulateAsyncLoad(validated, 120);
    
    this.setCachedData(cacheKey, result);
    return result;
  }

  /**
   * Carrega dados do blog de forma assíncrona
   */
  async loadBlogData(): Promise<BlogData> {
    const cacheKey = 'blog';
    const cached = this.getCachedData<BlogData>(cacheKey);
    
    if (cached) {
      return cached;
    }

    const { blogData } = await import('@/data/blog');
    const validated = DataFactory.createBlogData(blogData);
    const result = await this.simulateAsyncLoad(validated, 180);
    
    this.setCachedData(cacheKey, result);
    return result;
  }

  /**
   * Carrega dados dos projetos de forma assíncrona
   */
  async loadProjectsData(): Promise<ProjectsData> {
    const cacheKey = 'projects';
    const cached = this.getCachedData<ProjectsData>(cacheKey);
    
    if (cached) {
      return cached;
    }

    const { projectsData } = await import('@/data/projects');
    const validated = DataFactory.createProjectsData(projectsData);
    const result = await this.simulateAsyncLoad(validated, 200);
    
    this.setCachedData(cacheKey, result);
    return result;
  }

  /**
   * Carrega dados dos depoimentos de forma assíncrona
   */
  async loadTestimonialsData(): Promise<TestimonialsData> {
    const cacheKey = 'testimonials';
    const cached = this.getCachedData<TestimonialsData>(cacheKey);
    
    if (cached) {
      return cached;
    }

    const { testimonialsData } = await import('@/data/testimonials');
    const validated = DataFactory.createTestimonialsData(testimonialsData);
    const result = await this.simulateAsyncLoad(validated, 100);
    
    this.setCachedData(cacheKey, result);
    return result;
  }

  /**
   * Carrega dados dos idiomas de forma assíncrona
   */
  async loadLanguagesData(): Promise<LanguagesData> {
    const cacheKey = 'languages';
    const cached = this.getCachedData<LanguagesData>(cacheKey);
    
    if (cached) {
      return cached;
    }

    const { languagesData } = await import('@/data/languages');
    const validated = DataFactory.createLanguagesData(languagesData);
    const result = await this.simulateAsyncLoad(validated, 80);
    
    this.setCachedData(cacheKey, result);
    return result;
  }

  /**
   * Carrega informações pessoais de forma assíncrona
   */
  async loadPersonalInfo(): Promise<PersonalInfo> {
    const cacheKey = 'personal';
    const cached = this.getCachedData<PersonalInfo>(cacheKey);
    
    if (cached) {
      return cached;
    }

    const { personalInfo } = await import('@/data/personal');
    const validated = DataFactory.createPersonalInfo(personalInfo);
    const result = await this.simulateAsyncLoad(validated, 90);
    
    this.setCachedData(cacheKey, result);
    return result;
  }

  /**
   * Carrega informações de contato de forma assíncrona
   */
  async loadContactInfo(): Promise<ContactInfo> {
    const cacheKey = 'contact';
    const cached = this.getCachedData<ContactInfo>(cacheKey);
    
    if (cached) {
      return cached;
    }

    const { contactInfo } = await import('@/data/personal');
    const validated = DataFactory.createContactInfo(contactInfo);
    const result = await this.simulateAsyncLoad(validated, 70);
    
    this.setCachedData(cacheKey, result);
    return result;
  }

  /**
   * Precarrega todos os dados críticos
   */
  async prefetchCriticalData(): Promise<void> {
    const criticalLoaders = [
      this.loadPersonalInfo(),
      this.loadContactInfo(),
      this.loadLanguagesData()
    ];

    await Promise.all(criticalLoaders);
  }

  /**
   * Precarrega dados em background
   */
  async prefetchBackgroundData(): Promise<void> {
    const backgroundLoaders = [
      this.loadSkillsData(),
      this.loadTimelineData(),
      this.loadProjectsData(),
      this.loadBlogData(),
      this.loadTestimonialsData()
    ];

    // Executa em background sem bloquear
    Promise.all(backgroundLoaders).catch(console.error);
  }

  /**
   * Limpa o cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Obtém estatísticas do cache
   */
  getCacheStats() {
    const entries = Array.from(this.cache.entries());
    const now = Date.now();
    
    return {
      totalEntries: entries.length,
      validEntries: entries.filter(([, value]) => now - value.timestamp < value.ttl).length,
      expiredEntries: entries.filter(([, value]) => now - value.timestamp >= value.ttl).length,
      cacheSize: JSON.stringify(Array.from(this.cache.values())).length
    };
  }
}

// Instância singleton
let asyncDataLoader: AsyncDataLoader | null = null;

export const getAsyncDataLoader = (queryClient: QueryClient): AsyncDataLoader => {
  if (!asyncDataLoader) {
    asyncDataLoader = new AsyncDataLoader(queryClient);
  }
  return asyncDataLoader;
};
