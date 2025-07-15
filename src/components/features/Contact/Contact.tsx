import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import ContactForm from "./ContactForm";
import { contactLinks } from "@/data/socials";

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
              {contactLinks.map((link) => (
                <Button key={link.name} variant="outline" className="gap-2" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon size={18} />
                    {link.username || link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;