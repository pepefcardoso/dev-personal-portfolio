
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Newspaper, Clock } from "lucide-react";
import { useBlogData } from "@/hooks/useBlogData";
import BlogModal from "./BlogModal";

const Blog = () => {
  const { t } = useTranslation();
  const { blogPosts } = useBlogData();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handlePostClick = (postId: string) => {
    setSelectedPostId(postId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPostId(null);
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
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => handlePostClick(post.id)}
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
        postId={selectedPostId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Blog;
