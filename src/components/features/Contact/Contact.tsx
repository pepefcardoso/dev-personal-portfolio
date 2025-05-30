
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import ContactForm from "./ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-muted-foreground mb-8">
            {t('contact.subtitle')}
          </p>
          
          <ContactForm />
          
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-xl font-semibold mb-6">{t('contact.connectTitle')}</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://github.com/pepefcardoso" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://linkedin.com/in/pepefcardoso" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="mailto:pppfcardoso@gmail.com">
                  <Mail size={18} />
                  pppfcardoso@gmail.com
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+5548991155026">
                  (48) 99115-5026
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
