
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.formSuccess'),
        description: t('contact.formSuccessMessage'),
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('contact.subtitle')}</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  {t('contact.nameLabel')}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.namePlaceholder')}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  {t('contact.emailLabel')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.emailPlaceholder')}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                {t('contact.messageLabel')}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                rows={5}
                required
                className="resize-none"
              />
            </div>
            <div>
              <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? t('contact.submitting') : t('contact.submit')}
              </Button>
            </div>
          </form>
          
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-xl font-semibold mb-6">{t('contact.connectTitle')}</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:example@email.com">
                  example@email.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
