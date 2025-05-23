
import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/Card";
import { MessageSquare, User } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials: Testimonial[] = [
    {
      id: "testimonial1",
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechSolutions Inc",
      content: "John is an exceptional developer who consistently delivers high-quality code. His attention to detail and ability to solve complex problems makes him an invaluable asset to any team.",
    },
    {
      id: "testimonial2",
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateX",
      content: "Working with John was a fantastic experience. He not only understood our technical requirements perfectly but also suggested improvements that significantly enhanced the user experience.",
    },
    {
      id: "testimonial3",
      name: "Emma Williams",
      position: "Frontend Lead",
      company: "WebCraft Studios",
      content: "John's expertise in both frontend and backend technologies allowed for seamless development of our platform. He's a dedicated professional who truly cares about delivering quality work.",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('testimonials.title')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t('testimonials.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full border-l-4 border-l-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <MessageSquare className="h-8 w-8 text-primary opacity-30" />
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
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
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
