import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useProjectsData } from "@/hooks/useProjectsData";
import { Project as ProjectType } from "@/types/projects";

type TranslatedProject = Omit<ProjectType, 'title' | 'description' | 'responsibilities'> & {
  title: string;
  description: string;
  responsibilities?: string[];
};

interface ProjectCardProps {
  project: TranslatedProject;
  t: (key: string) => string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, t }) => (
  <Card key={project.id} className={`overflow-hidden ${project.featured ? 'border-primary/30' : ''}`}>
    <div className="h-48 bg-muted flex items-center justify-center">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="text-muted-foreground">{t('projects.imagePlaceholder')}</div>
      )}
    </div>
    <CardHeader>
      <h3 className="text-xl font-semibold">{project.title}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-muted px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      {project.demoUrl && (
        <Button variant="outline" size="sm" asChild>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            {t('projects.liveDemo')}
          </a>
        </Button>
      )}
      {project.codeUrl && (
        <Button variant="outline" size="sm" asChild>
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            {t('projects.viewCode')}
          </a>
        </Button>
      )}
    </CardFooter>
  </Card>
);

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("all");
  const { projects, getByTag, tags } = useProjectsData();

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects;
    }
    return getByTag(filter);
  }, [projects, filter, getByTag]);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('projects.title')}</h2>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            {t('projects.allFilter')}
          </Button>
          {tags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project as TranslatedProject}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;