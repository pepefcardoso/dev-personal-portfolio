import { useMemo } from "react";
import { projectsData } from "@/data/projects";
import { useFeaturedData } from "./useDataWithTranslation";
import { Project } from "@/types/projects";
import { TranslatableString } from "@/types/common";

export type TranslatedProject = Omit<
  Project,
  "title" | "description" | "responsibilities"
> & {
  title: string;
  description: string;
  responsibilities?: string[];
};

export const useProjectsData = () => {
  const translateProject = (
    project: Project,
    translate: (content: TranslatableString) => string
  ): TranslatedProject => ({
    ...project,
    title: translate(project.title),
    description: translate(project.description),
    responsibilities: project.responsibilities?.map((r) => translate(r)),
  });

  const {
    data: projects,
    featured: featuredProjects,
    getById,
  } = useFeaturedData<Project, TranslatedProject>(
    projectsData.projects,
    translateProject
  );

  const getProjectsByCategory = (category?: string) =>
    category ? projects.filter((p) => p.category === category) : projects;

  const getProjectsByTag = (tag: string) =>
    projects.filter((p) => p.tags.includes(tag));

  const getAllTags = useMemo(
    () =>
      Array.from(new Set(projectsData.projects.flatMap((p) => p.tags))).sort(),
    []
  );

  const getProjectStats = () => ({
    totalProjects: projectsData.projects.length,
    featuredProjects: projectsData.projects.filter((p) => p.featured).length,
    categories: projectsData.categories.length,
    tags: projectsData.tags.length,
    completedProjects: projectsData.projects.filter(
      (p) => p.status === "completed"
    ).length,
    inProgressProjects: projectsData.projects.filter(
      (p) => p.status === "in-progress"
    ).length,
  });

  return {
    projects,
    featuredProjects,
    getProjectsByCategory,
    getProjectsByTag,
    getAllTags,
    getCategories: () => projectsData.categories,
    getProjectById: getById,
    getProjectStats,
  };
};
