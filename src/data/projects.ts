import { ProjectsData } from "@/types/projects";

export const projectsData: ProjectsData = {
  projects: [
    {
      id: "project_01",
      title: {
        en: "Belatto Ice Cream Website",
        pt: "Site Sorveteria Belatto",
        es: "Sitio Web Heladería Belatto",
        fr: "Site Web Glacerie Belatto",
        it: "Sito Web Gelateria Belatto",
        zh: "Belatto冰淇淋网站"
      },
      description: {
        en: "Website for ice cream shop with product information, location and contact details.",
        pt: "Website para sorveteria com informações de produtos, localização e contato.",
        es: "Sitio web para heladería con información de productos, ubicación y contacto.",
        fr: "Site web pour glacerie avec informations produits, localisation et contact.",
        it: "Sito web per gelateria con informazioni sui prodotti, posizione e contatti.",
        zh: "冰淇淋店网站，包含产品信息、位置和联系方式。"
      },
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://github.com/pepefcardoso/site_belatto",
      codeUrl: "https://github.com/pepefcardoso/site_belatto",
      category: "frontend",
      status: "completed",
      featured: true,
      order: 1
    }
  ],
  categories: ["frontend", "backend", "mobile", "design"],
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Figma",
    "UI/UX",
    "Design",
    "Python",
    "Interface",
    "Sistema",
    "Flutter",
    "Dart",
    "Mobile",
    "Laravel",
    "PHP",
    "API",
    "Admin",
    "NextJS",
    "React",
  ],
};
