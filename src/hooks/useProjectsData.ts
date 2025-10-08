import { projectsData } from "@/data/projects";
import { Project } from "@/types/projects";
import { translate, useTranslatedData } from "./useData";
import { useMemo } from "react";

export function useProjectsData() {
  const translateProject = (project: Project, lang: string) => ({
    ...project,
    title: translate(project.title, lang),
    description: translate(project.description, lang),
    responsibilities: project.responsibilities?.map((r) => translate(r, lang)),
  });

  const projects = useTranslatedData(projectsData.projects, translateProject, {
    sort: (a, b) => a.order - b.order,
  });

  const featured = useMemo(
    () => projects.filter((p) => p.featured),
    [projects]
  );
  const tags = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tags))].sort(),
    [projects]
  );

  const getByTag = (tag: string) =>
    projects.filter((p) => p.tags.includes(tag));
  const getByCategory = (cat?: string) =>
    cat ? projects.filter((p) => p.category === cat) : projects;

  return {
    projects,
    featured,
    tags,
    getByTag,
    getByCategory,
    getById: (id: string) => projects.find((p) => p.id === id) || null,
  };
}
