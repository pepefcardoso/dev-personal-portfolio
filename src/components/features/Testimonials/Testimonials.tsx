
import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/Card";
import { MessageSquare, User, ExternalLink } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials: Testimonial[] = [
    {
      id: "testimonial1",
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechSolutions Inc",
      content: t('testimonials.testimonial1'),
      socialUrl: "https://linkedin.com/in/sarah-johnson-example",
    },
    {
      id: "testimonial2",
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateX",
      content: t('testimonials.testimonial2'),
      socialUrl: "https://linkedin.com/in/michael-chen-example",
    },
    {
      id: "testimonial3",
      name: "Emma Williams",
      position: "Frontend Lead",
      company: "WebCraft Studios",
      content: t('testimonials.testimonial3'),
      socialUrl: "https://linkedin.com/in/emma-williams-example",
    },
  ];

  const handleTestimonialClick = (socialUrl?: string) => {
    if (socialUrl) {
      window.open(socialUrl, '_blank', 'noopener,noreferrer');
    }
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
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
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
                    <h4 className="font-semibold group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
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
