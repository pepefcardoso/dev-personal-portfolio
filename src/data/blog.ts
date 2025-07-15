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
  ],
  categories: ["Development", "Performance", "Security"],
  tags: ["React", "CSS", "Performance", "Authentication", "Security"],
};
