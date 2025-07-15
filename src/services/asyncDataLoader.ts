import { QueryClient } from "@tanstack/react-query";
import { DataFactory } from "@/factories/dataFactory";
import {
  SkillsData,
  TimelineData,
  BlogData,
  ProjectsData,
  TestimonialsData,
  LanguagesData,
  PersonalInfo,
  ContactInfo,
} from "@/types";

/**
 * Sistema de carregamento assíncrono de dados.
 * O cache é gerenciado pelo React Query nos hooks que consomem esses loaders.
 */
export class AsyncDataLoader {
  private queryClient: QueryClient;

  constructor(queryClient: QueryClient) {
    this.queryClient = queryClient;
  }

  /**
   * Simula carregamento assíncrono de dados com um pequeno delay.
   */
  private async simulateAsyncLoad<T>(data: T, delay: number = 100): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), delay);
    });
  }

  /**
   * Carrega dados de habilidades de forma assíncrona.
   */
  async loadSkillsData(): Promise<SkillsData> {
    const { skillsData } = await import("@/data/skills");
    const validated = DataFactory.createSkillsData(skillsData);
    return this.simulateAsyncLoad(validated, 150);
  }

  /**
   * Carrega dados do timeline de forma assíncrona.
   */
  async loadTimelineData(): Promise<TimelineData> {
    const { timelineData } = await import("@/data/timeline");
    const validated = DataFactory.createTimelineData(timelineData);
    return this.simulateAsyncLoad(validated, 120);
  }

  /**
   * Carrega dados do blog de forma assíncrona.
   */
  async loadBlogData(): Promise<BlogData> {
    const { blogData } = await import("@/data/blog");
    const validated = DataFactory.createBlogData(blogData);
    return this.simulateAsyncLoad(validated, 180);
  }

  /**
   * Carrega dados dos projetos de forma assíncrona.
   */
  async loadProjectsData(): Promise<ProjectsData> {
    const { projectsData } = await import("@/data/projects");
    const validated = DataFactory.createProjectsData(projectsData);
    return this.simulateAsyncLoad(validated, 200);
  }

  /**
   * Carrega dados dos depoimentos de forma assíncrona.
   */
  async loadTestimonialsData(): Promise<TestimonialsData> {
    const { testimonialsData } = await import("@/data/testimonials");
    const validated = DataFactory.createTestimonialsData(testimonialsData);
    return this.simulateAsyncLoad(validated, 100);
  }

  /**
   * Carrega dados dos idiomas de forma assíncrona.
   */
  async loadLanguagesData(): Promise<LanguagesData> {
    const { languagesData } = await import("@/data/languages");
    const validated = DataFactory.createLanguagesData(languagesData);
    return this.simulateAsyncLoad(validated, 80);
  }

  /**
   * Carrega informações pessoais de forma assíncrona.
   */
  async loadPersonalInfo(): Promise<PersonalInfo> {
    const { personalInfo } = await import("@/data/personal");
    const validated = DataFactory.createPersonalInfo(personalInfo);
    return this.simulateAsyncLoad(validated, 90);
  }

  /**
   * Carrega informações de contato de forma assíncrona.
   */
  async loadContactInfo(): Promise<ContactInfo> {
    const { contactInfo } = await import("@/data/personal");
    const validated = DataFactory.createContactInfo(contactInfo);
    return this.simulateAsyncLoad(validated, 70);
  }

  /**
   * Precarrega todos os dados críticos usando o prefetch do React Query.
   */
  async prefetchCriticalData(): Promise<void> {
    await Promise.all([
      this.queryClient.prefetchQuery({
        queryKey: ["personal"],
        queryFn: () => this.loadPersonalInfo(),
      }),
      this.queryClient.prefetchQuery({
        queryKey: ["contact"],
        queryFn: () => this.loadContactInfo(),
      }),
      this.queryClient.prefetchQuery({
        queryKey: ["languages"],
        queryFn: () => this.loadLanguagesData(),
      }),
    ]);
  }

  /**
   * Precarrega dados em background usando o prefetch do React Query.
   */
  async prefetchBackgroundData(): Promise<void> {
    Promise.all([
      this.queryClient.prefetchQuery({
        queryKey: ["skills"],
        queryFn: () => this.loadSkillsData(),
      }),
      this.queryClient.prefetchQuery({
        queryKey: ["timeline"],
        queryFn: () => this.loadTimelineData(),
      }),
      this.queryClient.prefetchQuery({
        queryKey: ["projects"],
        queryFn: () => this.loadProjectsData(),
      }),
      this.queryClient.prefetchQuery({
        queryKey: ["blog"],
        queryFn: () => this.loadBlogData(),
      }),
      this.queryClient.prefetchQuery({
        queryKey: ["testimonials"],
        queryFn: () => this.loadTestimonialsData(),
      }),
    ]).catch(console.error);
  }
}

let asyncDataLoader: AsyncDataLoader | null = null;

export const getAsyncDataLoader = (
  queryClient: QueryClient
): AsyncDataLoader => {
  if (!asyncDataLoader) {
    asyncDataLoader = new AsyncDataLoader(queryClient);
  }
  return asyncDataLoader;
};
