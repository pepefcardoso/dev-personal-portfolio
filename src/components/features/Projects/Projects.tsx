
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
      title: "Site Sorveteria Belatto",
      description: "Website para sorveteria com informações sobre os produtos, localização e contato.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "",
      demoUrl: "https://github.com/pepefcardoso/Site-Sorveteria-Belatto",
      codeUrl: "https://github.com/pepefcardoso/Site-Sorveteria-Belatto",
      featured: true,
    },
    {
      id: "project2",
      title: "Projeto Figma Site de Receitas e Notícias",
      description: "Design de interface para site de receitas e notícias desenvolvido no Figma.",
      tags: ["Figma", "UI/UX", "Design"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Projeto-Figma-Site-de-Receitas-e-Noticias",
      featured: true,
    },
    {
      id: "project3",
      title: "Projeto Site Clube Atlético Tubarão",
      description: "Website para o clube de futebol Atlético Tubarão com informações sobre o time, jogos e notícias.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Projeto-Site-Clube-Atletico-Tubarao",
      featured: true,
    },
    {
      id: "project4",
      title: "Projeto Python Urna Eletrônica UFSC",
      description: "Sistema de urna eletrônica desenvolvido em Python para o curso de Análise e Desenvolvimento de Sistemas.",
      tags: ["Python", "Interface", "Sistema"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Projeto-Python-Urna-Eletronica-UFSC",
      featured: false,
    },
    {
      id: "project5",
      title: "Aplicativo Flutter Blog",
      description: "Aplicativo mobile de blog desenvolvido com Flutter.",
      tags: ["Flutter", "Dart", "Mobile"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Aplicativo-Flutter-Blog",
      featured: false,
    },
    {
      id: "project6",
      title: "Api Aplicativo Blog",
      description: "API backend para aplicativo de blog desenvolvida com Laravel/PHP.",
      tags: ["Laravel", "PHP", "API"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Api-Aplicativo-Blog",
      featured: false,
    },
    {
      id: "project7",
      title: "Aplicativo Flutter Blog Admin",
      description: "Painel administrativo para o aplicativo de blog desenvolvido com Flutter.",
      tags: ["Flutter", "Dart", "Admin"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Aplicativo-Flutter-Blog-Admin",
      featured: false,
    },
    {
      id: "project8",
      title: "Api Site NextJs Receitas e Notícias",
      description: "API backend para site de receitas e notícias desenvolvido com NextJS.",
      tags: ["NextJS", "API", "JavaScript"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Api-Site-NextJs-Receitas-e-Noticias",
      featured: false,
    },
    {
      id: "project9",
      title: "Site NextJs Receitas e Notícias",
      description: "Site de receitas e notícias desenvolvido com NextJS.",
      tags: ["NextJS", "React", "JavaScript"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Site-NextJs-Receitas-e-Noticias",
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projetos</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            Todos
          </Button>
          {allTags.sort().map(tag => (
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
                  <div className="text-muted-foreground">Visualização do projeto</div>
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
                      Demo
                    </a>
                  </Button>
                )}
                {project.codeUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      Código
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
