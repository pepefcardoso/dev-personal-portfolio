import { useMemo } from "react";
import { useAsyncData } from "./useAsyncData";
import { useTranslatedContent } from "../useTranslatedContent";
import { ProjectsData, Project } from "@/types/projects";

export const useAsyncProjects = () => {
  const { translate } = useTranslatedContent();

  const {
    data: projectsData,
    isLoading,
    error,
    refetch,
  } = useAsyncData<ProjectsData>({
    queryKey: ["projects"],
    queryFn: (loader) => loader.loadProjectsData(),
  });

  const translateProject = (project: Project) => ({
    ...project,
    title: translate(project.title),
    description: translate(project.description),
    responsibilities: project.responsibilities
      ? project.responsibilities.map(translate)
      : undefined,
  });

  const projects = useMemo(() => {
    if (!projectsData) return [];
    return projectsData.projects
      .sort((a, b) => a.order - b.order)
      .map(translateProject);
  }, [projectsData, translate]);

  const featuredProjects = useMemo(() => {
    return projects.filter((project) => project.featured);
  }, [projects]);

  const allTags = useMemo(() => {
    if (!projectsData) return [];
    return Array.from(
      new Set(projectsData.projects.flatMap((project) => project.tags))
    ).sort();
  }, [projectsData]);

  const projectStats = useMemo(() => {
    if (!projectsData) return null;
    return {
      totalProjects: projectsData.projects.length,
      featuredProjects: projectsData.projects.filter(
        (project) => project.featured
      ).length,
      categories: projectsData.categories.length,
      tags: projectsData.tags.length,
      completedProjects: projectsData.projects.filter(
        (project) => project.status === "completed"
      ).length,
      inProgressProjects: projectsData.projects.filter(
        (project) => project.status === "in-progress"
      ).length,
    };
  }, [projectsData]);

  const getProjectsByCategory = (category?: string) => {
    if (!category) return projects;
    return projects.filter((project) => project.category === category);
  };

  const getProjectsByTag = (tag: string) => {
    return projects.filter((project) => project.tags.includes(tag));
  };

  const getProjectById = (id: string) => {
    if (!projectsData) return null;
    const project = projectsData.projects.find((project) => project.id === id);
    return project ? translateProject(project) : null;
  };

  return {
    projectsData,
    isLoading,
    error,
    refetch,
    projects,
    featuredProjects,
    allTags,
    projectStats,
    getProjectsByCategory,
    getProjectsByTag,
    getProjectById,
  };
};
