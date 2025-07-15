import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Clock, Calendar } from "lucide-react";
import { useBlogData } from "@/hooks/useBlogData";

interface BlogModalProps {
  postId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ postId, isOpen, onClose }) => {
  const { t } = useTranslation();
  const { getBlogPostById } = useBlogData();

  const post = postId ? getBlogPostById(postId) : null;

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

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{post.content}</p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default BlogModal;