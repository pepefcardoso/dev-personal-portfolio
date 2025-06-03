
import { ProjectsData } from '@/types/projects';

export const projectsData: ProjectsData = {
  projects: [
    {
      id: "project1",
      title: {
        en: "Belatto Ice Cream Website",
        pt: "Site Sorveteria Belatto",
        es: "Sitio Web Heladería Belatto"
      },
      description: {
        en: "Website for ice cream shop with product information, location and contact details.",
        pt: "Website para sorveteria com informações de produtos, localização e contato.",
        es: "Sitio web para heladería con información de productos, ubicación y contacto."
      },
      tags: ["HTML", "CSS", "JavaScript"],
      image: "",
      demoUrl: "https://github.com/pepefcardoso/Site-Sorveteria-Belatto",
      codeUrl: "https://github.com/pepefcardoso/Site-Sorveteria-Belatto",
      category: "frontend",
      status: "completed",
      featured: true,
      order: 1
    },
    {
      id: "project2",
      title: {
        en: "Figma Recipe and News Website Project",
        pt: "Projeto Figma Site de Receitas e Notícias",
        es: "Proyecto Figma Sitio de Recetas y Noticias"
      },
      description: {
        en: "Interface design for recipe and news website developed in Figma.",
        pt: "Design de interface para site de receitas e notícias desenvolvido no Figma.",
        es: "Diseño de interfaz para sitio de recetas y noticias desarrollado en Figma."
      },
      tags: ["Figma", "UI/UX", "Design"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Projeto-Figma-Site-de-Receitas-e-Noticias",
      category: "design",
      status: "completed",
      featured: true,
      order: 2
    },
    {
      id: "project3",
      title: {
        en: "Atlético Tubarão Football Club Website Project",
        pt: "Projeto Site Clube Atlético Tubarão",
        es: "Proyecto Sitio Club Atlético Tubarão"
      },
      description: {
        en: "Website for Atlético Tubarão football club with team information, games and news.",
        pt: "Website para clube de futebol Atlético Tubarão com informações da equipe, jogos e notícias.",
        es: "Sitio web para club de fútbol Atlético Tubarão con información del equipo, juegos y noticias."
      },
      tags: ["HTML", "CSS", "JavaScript"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Projeto-Site-Clube-Atletico-Tubarao",
      category: "frontend",
      status: "completed",
      featured: true,
      order: 3
    },
    {
      id: "project4",
      title: {
        en: "Python Electronic Voting System UFSC Project",
        pt: "Projeto Python Urna Eletrônica UFSC",
        es: "Proyecto Python Sistema de Votación Electrónica UFSC"
      },
      description: {
        en: "Electronic voting system developed in Python for the Systems Analysis and Development course.",
        pt: "Sistema de urna eletrônica desenvolvido em Python para o curso de Análise e Desenvolvimento de Sistemas.",
        es: "Sistema de votación electrónica desarrollado en Python para el curso de Análisis y Desarrollo de Sistemas."
      },
      tags: ["Python", "Interface", "Sistema"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Projeto-Python-Urna-Eletronica-UFSC",
      category: "backend",
      status: "completed",
      featured: false,
      order: 4
    },
    {
      id: "project5",
      title: {
        en: "Flutter Blog Application",
        pt: "Aplicativo Flutter Blog",
        es: "Aplicación Flutter Blog"
      },
      description: {
        en: "Mobile blog application developed with Flutter.",
        pt: "Aplicativo mobile de blog desenvolvido com Flutter.",
        es: "Aplicación móvil de blog desarrollada con Flutter."
      },
      tags: ["Flutter", "Dart", "Mobile"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Aplicativo-Flutter-Blog",
      category: "mobile",
      status: "completed",
      featured: false,
      order: 5
    },
    {
      id: "project6",
      title: {
        en: "Blog Application API",
        pt: "API Aplicativo Blog",
        es: "API Aplicación Blog"
      },
      description: {
        en: "Backend API for blog application developed with Laravel/PHP.",
        pt: "API backend para aplicativo de blog desenvolvida com Laravel/PHP.",
        es: "API backend para aplicación de blog desarrollada con Laravel/PHP."
      },
      tags: ["Laravel", "PHP", "API"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Api-Aplicativo-Blog",
      category: "backend",
      status: "completed",
      featured: false,
      order: 6
    },
    {
      id: "project7",
      title: {
        en: "Flutter Blog Admin Application",
        pt: "Aplicativo Flutter Blog Admin",
        es: "Aplicación Flutter Blog Admin"
      },
      description: {
        en: "Administrative panel for blog application developed with Flutter.",
        pt: "Painel administrativo para aplicativo de blog desenvolvido com Flutter.",
        es: "Panel administrativo para aplicación de blog desarrollado con Flutter."
      },
      tags: ["Flutter", "Dart", "Admin"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Aplicativo-Flutter-Blog-Admin",
      category: "mobile",
      status: "completed",
      featured: false,
      order: 7
    },
    {
      id: "project8",
      title: {
        en: "NextJs Recipe and News Website API",
        pt: "API Site NextJs Receitas e Notícias",
        es: "API Sitio NextJs Recetas y Noticias"
      },
      description: {
        en: "Backend API for recipe and news website developed with NextJS.",
        pt: "API backend para site de receitas e notícias desenvolvida com NextJS.",
        es: "API backend para sitio de recetas y noticias desarrollada con NextJS."
      },
      tags: ["NextJS", "API", "JavaScript"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Api-Site-NextJs-Receitas-e-Noticias",
      category: "backend",
      status: "completed",
      featured: false,
      order: 8
    },
    {
      id: "project9",
      title: {
        en: "NextJs Recipe and News Website",
        pt: "Site NextJs Receitas e Notícias",
        es: "Sitio NextJs Recetas y Noticias"
      },
      description: {
        en: "Recipe and news website developed with NextJS.",
        pt: "Site de receitas e notícias desenvolvido com NextJS.",
        es: "Sitio de recetas y noticias desarrollado con NextJS."
      },
      tags: ["NextJS", "React", "JavaScript"],
      image: "",
      codeUrl: "https://github.com/pepefcardoso/Site-NextJs-Receitas-e-Noticias",
      category: "frontend",
      status: "completed",
      featured: false,
      order: 9
    }
  ],
  categories: ["frontend", "backend", "mobile", "design"],
  tags: ["HTML", "CSS", "JavaScript", "Figma", "UI/UX", "Design", "Python", "Interface", "Sistema", "Flutter", "Dart", "Mobile", "Laravel", "PHP", "API", "Admin", "NextJS", "React"]
};
