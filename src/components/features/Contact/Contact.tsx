
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('contact.subtitle')}</p>
          
          <ContactForm />
          
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
