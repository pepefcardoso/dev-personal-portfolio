
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Project } from "@/types/project";

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      id: "project1",
      title: "E-commerce Platform",
      description: "A fully functional e-commerce platform with payment integration, user authentication, and order management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      id: "project2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      id: "project3",
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data from multiple sources.",
      tags: ["React", "APIs", "Chart.js"],
      image: "",
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      id: "project4",
      title: "Blogging Platform",
      description: "A content management system for blogging with markdown support and SEO features.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      image: "",
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
  ];

  // Get unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects based on selected tag
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

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
          {allTags.map(tag => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
