
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { getAsyncDataLoader } from '@/services/asyncDataLoader';
import { ProjectsData, Project } from '@/types/projects';
import { useTranslatedContent } from '../useTranslatedContent';

/**
 * Hook para carregamento assíncrono de dados de projetos
 */
export const useAsyncProjects = () => {
  const queryClient = useQueryClient();
  const { translate } = useTranslatedContent();
  const dataLoader = getAsyncDataLoader(queryClient);

  const {
    data: projectsData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['projects'],
    queryFn: () => dataLoader.loadProjectsData(),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  /**
   * Traduz um projeto
   */
  const translateProject = (project: Project) => ({
    ...project,
    title: translate(project.title),
    description: translate(project.description),
    responsibilities: project.responsibilities ? project.responsibilities.map(translate) : undefined
  });

  /**
   * Obtém projetos traduzidos e ordenados
   */
  const getProjects = () => {
    if (!projectsData) return [];
    
    return projectsData.projects
      .sort((a, b) => a.order - b.order)
      .map(translateProject);
  };

  /**
   * Obtém projetos em destaque
   */
  const getFeaturedProjects = () => {
    return getProjects().filter(project => project.featured);
  };

  /**
   * Obtém projetos por categoria
   */
  const getProjectsByCategory = (category?: string) => {
    const projects = getProjects();
    if (!category) return projects;
    return projects.filter(project => project.category === category);
  };

  /**
   * Obtém projetos filtrados por tag
   */
  const getProjectsByTag = (tag: string) => {
    return getProjects().filter(project => project.tags.includes(tag));
  };

  /**
   * Obtém todas as tags únicas dos projetos
   */
  const getAllTags = () => {
    if (!projectsData) return [];
    return Array.from(new Set(projectsData.projects.flatMap(project => project.tags))).sort();
  };

  /**
   * Obtém projeto por ID
   */
  const getProjectById = (id: string) => {
    if (!projectsData) return null;
    const project = projectsData.projects.find(project => project.id === id);
    return project ? translateProject(project) : null;
  };

  /**
   * Obtém estatísticas dos projetos
   */
  const getProjectStats = () => {
    if (!projectsData) return null;
    
    return {
      totalProjects: projectsData.projects.length,
      featuredProjects: projectsData.projects.filter(project => project.featured).length,
      categories: projectsData.categories.length,
      tags: projectsData.tags.length,
      completedProjects: projectsData.projects.filter(project => project.status === 'completed').length,
      inProgressProjects: projectsData.projects.filter(project => project.status === 'in-progress').length
    };
  };

  return {
    projectsData,
    isLoading,
    error,
    refetch,
    projects: getProjects(),
    featuredProjects: getFeaturedProjects(),
    getProjectsByCategory,
    getProjectsByTag,
    getAllTags,
    getProjectById,
    getProjectStats
  };
};
