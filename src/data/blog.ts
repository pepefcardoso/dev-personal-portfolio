
import { BlogData } from '@/types/blog';

export const blogData: BlogData = {
  posts: [
    {
      id: "post1",
      title: {
        en: "Building Responsive React Applications",
        pt: "Construindo Aplicações React Responsivas",
        es: "Construyendo Aplicaciones React Responsivas"
      },
      excerpt: {
        en: "Learn how to create fully responsive applications using React and modern CSS techniques.",
        pt: "Aprenda como criar aplicações completamente responsivas usando React e técnicas modernas de CSS.",
        es: "Aprende cómo crear aplicaciones completamente responsivas usando React y técnicas modernas de CSS."
      },
      content: {
        en: "This is a comprehensive guide to building responsive React applications...",
        pt: "Este é um guia completo para construir aplicações React responsivas...",
        es: "Esta es una guía completa para construir aplicaciones React responsivas..."
      },
      date: "2023-05-15",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      url: "#",
      category: {
        en: "Development",
        pt: "Desenvolvimento",
        es: "Desarrollo"
      },
      order: 1,
      featured: true,
      status: 'published'
    },
    {
      id: "post2",
      title: {
        en: "Optimizing Performance in Web Applications",
        pt: "Otimizando Performance em Aplicações Web",
        es: "Optimizando el Rendimiento en Aplicaciones Web"
      },
      excerpt: {
        en: "Discover techniques to improve the performance of your web applications and provide a better user experience.",
        pt: "Descubra técnicas para melhorar a performance das suas aplicações web e proporcionar uma melhor experiência ao usuário.",
        es: "Descubre técnicas para mejorar el rendimiento de tus aplicaciones web y proporcionar una mejor experiencia de usuario."
      },
      content: {
        en: "Performance optimization is crucial for web applications...",
        pt: "A otimização de performance é crucial para aplicações web...",
        es: "La optimización del rendimiento es crucial para las aplicaciones web..."
      },
      date: "2023-04-22",
      readTime: 12,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      url: "#",
      category: {
        en: "Performance",
        pt: "Performance",
        es: "Rendimiento"
      },
      order: 2,
      featured: true,
      status: 'published'
    },
    {
      id: "post3",
      title: {
        en: "Implementing Authentication in React Apps",
        pt: "Implementando Autenticação em Apps React",
        es: "Implementando Autenticación en Apps React"
      },
      excerpt: {
        en: "A comprehensive guide to implementing secure authentication in your React applications.",
        pt: "Um guia completo para implementar autenticação segura nas suas aplicações React.",
        es: "Una guía completa para implementar autenticación segura en tus aplicaciones React."
      },
      content: {
        en: "Authentication is a critical aspect of web applications...",
        pt: "Autenticação é um aspecto crítico de aplicações web...",
        es: "La autenticación es un aspecto crítico de las aplicaciones web..."
      },
      date: "2023-03-10",
      readTime: 15,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      url: "#",
      category: {
        en: "Security",
        pt: "Segurança",
        es: "Seguridad"
      },
      order: 3,
      featured: false,
      status: 'published'
    }
  ],
  categories: ["Development", "Performance", "Security"],
  tags: ["React", "CSS", "Performance", "Authentication", "Security"]
};
