
import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/Card";
import { MessageSquare, User, ExternalLink, Star } from "lucide-react";
import { useTestimonialsData } from "@/hooks/useTestimonialsData";

const Testimonials = () => {
  const { t } = useTranslation();
  const { testimonials } = useTestimonialsData();

  const handleTestimonialClick = (socialUrl?: string) => {
    if (socialUrl) {
      window.open(socialUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    
    return (
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('testimonials.title')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t('testimonials.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="h-full border-l-4 border-l-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
              onClick={() => handleTestimonialClick(testimonial.socialUrl)}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between items-start">
                  <MessageSquare className="h-8 w-8 text-primary opacity-30" />
                  {testimonial.socialUrl && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
                
                {renderStars(testimonial.rating)}
                
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                      {testimonial.verified && (
                        <span className="ml-1 text-green-500 text-xs">✓</span>
                      )}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                    {testimonial.date && (
                      <p className="text-xs text-muted-foreground opacity-70">
                        {new Date(testimonial.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
