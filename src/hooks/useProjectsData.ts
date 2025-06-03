
import { useMemo } from 'react';
import { projectsData } from '@/data/projects';
import { useTranslatedContent } from './useTranslatedContent';
import { Project } from '@/types/projects';

/**
 * Hook para gerenciar dados dos projetos
 */
export const useProjectsData = () => {
  const { translate } = useTranslatedContent();

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
  const getProjects = useMemo(() => {
    return projectsData.projects
      .sort((a, b) => a.order - b.order)
      .map(translateProject);
  }, [translate]);

  /**
   * Obtém projetos em destaque
   */
  const getFeaturedProjects = useMemo(() => {
    return getProjects.filter(project => project.featured);
  }, [getProjects]);

  /**
   * Obtém projetos por categoria
   */
  const getProjectsByCategory = (category?: string) => {
    if (!category) return getProjects;
    return getProjects.filter(project => project.category === category);
  };

  /**
   * Obtém projetos filtrados por tag
   */
  const getProjectsByTag = (tag: string) => {
    return getProjects.filter(project => project.tags.includes(tag));
  };

  /**
   * Obtém todas as tags únicas dos projetos
   */
  const getAllTags = useMemo(() => {
    return Array.from(new Set(projectsData.projects.flatMap(project => project.tags))).sort();
  }, []);

  /**
   * Obtém todas as categorias disponíveis
   */
  const getCategories = () => projectsData.categories;

  /**
   * Obtém projeto por ID
   */
  const getProjectById = (id: string) => {
    const project = projectsData.projects.find(project => project.id === id);
    return project ? translateProject(project) : null;
  };

  /**
   * Obtém estatísticas dos projetos
   */
  const getProjectStats = () => ({
    totalProjects: projectsData.projects.length,
    featuredProjects: projectsData.projects.filter(project => project.featured).length,
    categories: projectsData.categories.length,
    tags: projectsData.tags.length,
    completedProjects: projectsData.projects.filter(project => project.status === 'completed').length,
    inProgressProjects: projectsData.projects.filter(project => project.status === 'in-progress').length
  });

  return {
    projects: getProjects,
    featuredProjects: getFeaturedProjects,
    getProjectsByCategory,
    getProjectsByTag,
    getAllTags,
    getCategories,
    getProjectById,
    getProjectStats
  };
};
