
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Newspaper, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  readTime: number; // minutes
  image?: string;
  url: string;
  category: string;
}

const Blog = () => {
  const { t } = useTranslation();
  
  const posts: BlogPost[] = [
    {
      id: "post1",
      title: "Building Responsive React Applications",
      excerpt: "Learn how to create fully responsive applications using React and modern CSS techniques.",
      date: "2023-05-15",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      url: "#",
      category: "Development",
    },
    {
      id: "post2",
      title: "Optimizing Performance in Web Applications",
      excerpt: "Discover techniques to improve the performance of your web applications and provide a better user experience.",
      date: "2023-04-22",
      readTime: 12,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      url: "#",
      category: "Performance",
    },
    {
      id: "post3",
      title: "Implementing Authentication in React Apps",
      excerpt: "A comprehensive guide to implementing secure authentication in your React applications.",
      date: "2023-03-10",
      readTime: 15,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      url: "#",
      category: "Security",
    },
  ];

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="blog" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('blog.title')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t('blog.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-muted">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
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
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
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
                <Button size="sm" variant="link" asChild>
                  <a href={post.url}>{t('blog.readMore')}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
