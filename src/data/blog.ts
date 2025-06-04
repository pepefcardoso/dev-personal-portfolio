
import { BlogData } from '@/types/blog';

export const blogData: BlogData = {
  posts: [
    {
      id: "post1",
      title: {
        en: "Building Responsive React Applications",
        pt: "Construindo Aplicações React Responsivas",
        es: "Construyendo Aplicaciones React Responsivas",
        fr: "Créer des Applications React Responsives",
        it: "Costruire Applicazioni React Responsive",
        zh: "构建响应式React应用"
      },
      excerpt: {
        en: "Learn how to create fully responsive applications using React and modern CSS techniques.",
        pt: "Aprenda como criar aplicações completamente responsivas usando React e técnicas modernas de CSS.",
        es: "Aprende cómo crear aplicaciones completamente responsivas usando React y técnicas modernas de CSS.",
        fr: "Apprenez à créer des applications entièrement responsives en utilisant React et les techniques CSS modernes.",
        it: "Impara come creare applicazioni completamente responsive usando React e tecniche CSS moderne.",
        zh: "学习如何使用React和现代CSS技术创建完全响应式的应用。"
      },
      content: {
        en: "This is a comprehensive guide to building responsive React applications...",
        pt: "Este é um guia completo para construir aplicações React responsivas...",
        es: "Esta es una guía completa para construir aplicaciones React responsivas...",
        fr: "Ceci est un guide complet pour construire des applications React responsives...",
        it: "Questa è una guida completa per costruire applicazioni React responsive...",
        zh: "这是构建响应式React应用的完整指南..."
      },
      date: "2023-05-15",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      url: "#",
      category: {
        en: "Development",
        pt: "Desenvolvimento",
        es: "Desarrollo",
        fr: "Développement",
        it: "Sviluppo",
        zh: "开发"
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
        es: "Optimizando el Rendimiento en Aplicaciones Web",
        fr: "Optimiser les Performances des Applications Web",
        it: "Ottimizzare le Prestazioni nelle Applicazioni Web",
        zh: "优化Web应用性能"
      },
      excerpt: {
        en: "Discover techniques to improve the performance of your web applications and provide a better user experience.",
        pt: "Descubra técnicas para melhorar a performance das suas aplicações web e proporcionar uma melhor experiência ao usuário.",
        es: "Descubre técnicas para mejorar el rendimiento de tus aplicaciones web y proporcionar una mejor experiencia de usuario.",
        fr: "Découvrez des techniques pour améliorer les performances de vos applications web et offrir une meilleure expérience utilisateur.",
        it: "Scopri tecniche per migliorare le prestazioni delle tue applicazioni web e fornire una migliore esperienza utente.",
        zh: "发现改善Web应用性能并提供更好用户体验的技术。"
      },
      content: {
        en: "Performance optimization is crucial for web applications...",
        pt: "A otimização de performance é crucial para aplicações web...",
        es: "La optimización del rendimiento es crucial para las aplicaciones web...",
        fr: "L'optimisation des performances est cruciale pour les applications web...",
        it: "L'ottimizzazione delle prestazioni è cruciale per le applicazioni web...",
        zh: "性能优化对Web应用至关重要..."
      },
      date: "2023-04-22",
      readTime: 12,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      url: "#",
      category: {
        en: "Performance",
        pt: "Performance",
        es: "Rendimiento",
        fr: "Performance",
        it: "Prestazioni",
        zh: "性能"
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
        es: "Implementando Autenticación en Apps React",
        fr: "Implémenter l'Authentification dans les Apps React",
        it: "Implementare l'Autenticazione nelle App React",
        zh: "在React应用中实现身份验证"
      },
      excerpt: {
        en: "A comprehensive guide to implementing secure authentication in your React applications.",
        pt: "Um guia completo para implementar autenticação segura nas suas aplicações React.",
        es: "Una guía completa para implementar autenticación segura en tus aplicaciones React.",
        fr: "Un guide complet pour implémenter une authentification sécurisée dans vos applications React.",
        it: "Una guida completa per implementare l'autenticazione sicura nelle tue applicazioni React.",
        zh: "在React应用中实现安全身份验证的完整指南。"
      },
      content: {
        en: "Authentication is a critical aspect of web applications...",
        pt: "Autenticação é um aspecto crítico de aplicações web...",
        es: "La autenticación es un aspecto crítico de las aplicaciones web...",
        fr: "L'authentification est un aspect critique des applications web...",
        it: "L'autenticazione è un aspetto critico delle applicazioni web...",
        zh: "身份验证是Web应用的关键方面..."
      },
      date: "2023-03-10",
      readTime: 15,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      url: "#",
      category: {
        en: "Security",
        pt: "Segurança",
        es: "Seguridad",
        fr: "Sécurité",
        it: "Sicurezza",
        zh: "安全"
      },
      order: 3,
      featured: false,
      status: 'published'
    }
  ],
  categories: ["Development", "Performance", "Security"],
  tags: ["React", "CSS", "Performance", "Authentication", "Security"]
};
