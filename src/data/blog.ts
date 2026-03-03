import { BlogData } from "@/types/blog";

export const blogData: BlogData = {
  posts: [
    {
      id: "post1",
      title: {
        en: "Building Responsive React Applications",
        pt: "Construindo Aplicações React Responsivas",
        es: "Construyendo Aplicaciones React Responsivas",
      },
      excerpt: {
        en: "Learn how to create fully responsive applications using React and modern CSS techniques.",
        pt: "Aprenda como criar aplicações completamente responsivas usando React e técnicas modernas de CSS.",
        es: "Aprende cómo crear aplicaciones completamente responsivas usando React y técnicas modernas de CSS.",
      },
      content: {
        en: `In this post, we'll dive deep into the strategies and tools that make responsive design in React not just possible, but also elegant and maintainable. We will cover everything from CSS media queries to modern libraries that streamline the process.`,
        pt: `Neste post, vamos mergulhar fundo nas estratégias e ferramentas que tornam o design responsivo em React não apenas possível, mas também elegante e de fácil manutenção. Cobriremos desde media queries em CSS até bibliotecas modernas que otimizam o processo.`,
        es: `En esta publicación, profundizaremos en las estrategias y herramientas que hacen que el diseño responsivo en React no solo sea posible, sino también elegante y mantenible. Cubriremos todo, desde media queries de CSS hasta bibliotecas modernas que agilizan el proceso.`,
      },
      date: "2023-05-15",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      url: "#",
      category: {
        en: "Development",
        pt: "Desenvolvimento",
        es: "Desarrollo",
      },
      order: 1,
      featured: true,
      status: "published",
    },
    {
      id: "post2",
      title: {
        en: "Optimizing Performance in Web Applications",
        pt: "Otimizando Performance em Aplicações Web",
        es: "Optimizando Rendimiento en Aplicaciones Web",
      },
      excerpt: {
        en: "Discover techniques to improve the performance of your web applications and provide a better user experience.",
        pt: "Descubra técnicas para melhorar a performance das suas aplicações web e fornecer uma melhor experiência ao usuário.",
        es: "Descubre técnicas para mejorar el rendimiento de tus aplicaciones web y proporcionar una mejor experiencia de usuario.",
      },
      content: {
        en: `Web performance is crucial for user retention and SEO. In this article, we cover practical tips like code splitting, lazy loading images, minimizing re-renders in React, and effectively using the browser cache to make your apps lightning fast.`,
        pt: `A performance web é crucial para a retenção de usuários e SEO. Neste artigo, abordamos dicas práticas como code splitting, lazy loading de imagens, como minimizar re-renderizações no React e o uso eficaz de cache no navegador para tornar suas aplicações super rápidas.`,
        es: `El rendimiento web es crucial para la retención de usuarios y el SEO. En este artículo, cubrimos consejos prácticos como code splitting, lazy loading de imágenes, cómo minimizar re-renderizados en React y el uso efectivo del caché del navegador para hacer que tus apps sean ultra rápidas.`,
      },
      date: "2023-08-22",
      readTime: 6,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      url: "#",
      category: {
        en: "Performance",
        pt: "Performance",
        es: "Rendimiento",
      },
      order: 2,
      featured: true,
      status: "published",
    },
    {
      id: "post3",
      title: {
        en: "Implementing Authentication in React Apps",
        pt: "Implementando Autenticação em Apps React",
        es: "Implementando Autenticación en Apps React",
      },
      excerpt: {
        en: "A comprehensive guide to implementing secure authentication in your React applications.",
        pt: "Um guia completo para implementar autenticação segura em suas aplicações React.",
        es: "Una guía completa para implementar autenticación segura en tus aplicaciones React.",
      },
      content: {
        en: `Security should never be an afterthought. We will explore how to integrate JWT (JSON Web Tokens), manage user sessions securely with HttpOnly cookies, and protect your React routes to ensure your users' data stays safe.`,
        pt: `A segurança nunca deve ser deixada para depois. Vamos explorar como integrar JWT (JSON Web Tokens), gerenciar sessões de usuários de forma segura com cookies HttpOnly e proteger suas rotas no React para garantir que os dados dos seus usuários permaneçam seguros.`,
        es: `La seguridad nunca debe ser una idea de último momento. Exploraremos cómo integrar JWT (JSON Web Tokens), gestionar sesiones de usuarios de forma segura con cookies HttpOnly y proteger tus rutas de React para garantizar que los datos de tus usuarios se mantengan seguros.`,
      },
      date: "2023-11-05",
      readTime: 10,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      url: "#",
      category: {
        en: "Security",
        pt: "Segurança",
        es: "Seguridad",
      },
      order: 3,
      featured: true,
      status: "published",
    },
  ],
  categories: ["Development", "Performance", "Security"],
  tags: ["React", "CSS", "Performance", "Authentication", "Security"],
};
