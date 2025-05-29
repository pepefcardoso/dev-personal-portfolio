
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { X, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen || !post) return null;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <Card className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={onClose}
            className="bg-background/80 backdrop-blur-sm"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="overflow-y-auto max-h-[90vh]">
          {post.image && (
            <div className="h-64 md:h-80 bg-muted">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <CardContent className="p-6 md:p-8">
            <div className="mb-4">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t('blog.published')}: {formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} {t('blog.minutes')}</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
              
              {/* Blog content - you can expand this with actual content */}
              <div className="space-y-4">
                <p>
                  Este é um exemplo de conteúdo completo do artigo. Aqui você pode adicionar o texto completo do seu blog post, 
                  incluindo parágrafos, listas, códigos e outros elementos que compõem o artigo.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Introdução</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Desenvolvimento</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <ul className="list-disc list-inside space-y-2 my-6">
                  <li>Ponto importante número um</li>
                  <li>Ponto importante número dois</li>
                  <li>Ponto importante número três</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusão</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default BlogModal;
