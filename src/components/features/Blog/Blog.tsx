
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Newspaper, Clock } from "lucide-react";
import { BlogPost } from "@/types/blog";
import BlogModal from "./BlogModal";

const Blog = () => {
  const { t } = useTranslation();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const posts: BlogPost[] = [
    {
      id: "post1",
      title: "Construindo Aplicações React Responsivas",
      excerpt: "Aprenda como criar aplicações completamente responsivas usando React e técnicas modernas de CSS.",
      date: "2023-05-15",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      url: "#",
      category: "Desenvolvimento",
    },
    {
      id: "post2",
      title: "Otimizando Performance em Aplicações Web",
      excerpt: "Descubra técnicas para melhorar a performance das suas aplicações web e proporcionar uma melhor experiência ao usuário.",
      date: "2023-04-22",
      readTime: 12,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      url: "#",
      category: "Performance",
    },
    {
      id: "post3",
      title: "Implementando Autenticação em Apps React",
      excerpt: "Um guia completo para implementar autenticação segura nas suas aplicações React.",
      date: "2023-03-10",
      readTime: 15,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      url: "#",
      category: "Segurança",
    },
  ];

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <>
      <section id="blog" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('blog.title')}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t('blog.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => handlePostClick(post)}
              >
                <div className="h-48 bg-muted overflow-hidden">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                      <Newspaper size={24} />
                    </div>
                  )}
                </div>
                <CardContent className="p-5 flex-grow">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-5 pt-0 border-t flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-flex items-center mr-4">
                      <Clock className="h-4 w-4 mr-1" /> 
                      {post.readTime} {t('blog.minutes')}
                    </span>
                    <span>{t('blog.published')}: {formatDate(post.date)}</span>
                  </div>
                  <Button size="sm" variant="link" className="group-hover:text-primary transition-colors duration-300">
                    {t('blog.readMore')}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BlogModal 
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Blog;
