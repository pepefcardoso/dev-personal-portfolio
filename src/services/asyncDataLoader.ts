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

export class AsyncDataLoader {
  private queryClient: QueryClient;

  constructor(queryClient: QueryClient) {
    this.queryClient = queryClient;
  }

  private async simulateAsyncLoad<T>(data: T, delay: number = 100): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), delay);
    });
  }

  async loadSkillsData(): Promise<SkillsData> {
    const { skillsData } = await import("@/data/skills");
    const validated = DataFactory.createSkillsData(skillsData);
    return this.simulateAsyncLoad(validated, 150);
  }

  async loadTimelineData(): Promise<TimelineData> {
    const { timelineData } = await import("@/data/timeline");
    const validated = DataFactory.createTimelineData(timelineData);
    return this.simulateAsyncLoad(validated, 120);
  }

  async loadBlogData(): Promise<BlogData> {
    const { blogData } = await import("@/data/blog");
    const validated = DataFactory.createBlogData(blogData);
    return this.simulateAsyncLoad(validated, 180);
  }

  async loadProjectsData(): Promise<ProjectsData> {
    const { projectsData } = await import("@/data/projects");
    const validated = DataFactory.createProjectsData(projectsData);
    return this.simulateAsyncLoad(validated, 200);
  }

  async loadTestimonialsData(): Promise<TestimonialsData> {
    const { testimonialsData } = await import("@/data/testimonials");
    const validated = DataFactory.createTestimonialsData(testimonialsData);
    return this.simulateAsyncLoad(validated, 100);
  }

  async loadLanguagesData(): Promise<LanguagesData> {
    const { languagesData } = await import("@/data/languages");
    const validated = DataFactory.createLanguagesData(languagesData);
    return this.simulateAsyncLoad(validated, 80);
  }

  async loadPersonalInfo(): Promise<PersonalInfo> {
    const { personalInfo } = await import("@/data/personal");
    const validated = DataFactory.createPersonalInfo(personalInfo);
    return this.simulateAsyncLoad(validated, 90);
  }

  async loadContactInfo(): Promise<ContactInfo> {
    const { contactInfo } = await import("@/data/personal");
    const validated = DataFactory.createContactInfo(contactInfo);
    return this.simulateAsyncLoad(validated, 70);
  }

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
