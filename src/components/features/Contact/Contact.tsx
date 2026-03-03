import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import { usePersonalData } from "@/hooks/usePersonalData";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const iconMap: Record<string, React.FC<any>> = {
  Github,
  Linkedin,
  Mail,
  Phone,
};

const Contact = () => {
  const { t } = useTranslation();
  const { contact } = usePersonalData();

  const contactLinks = [
    ...contact.socialMedia,
    { platform: "Email", url: `mailto:${contact.email}`, username: contact.email, icon: "Mail" },
    { platform: "Phone", url: `tel:${contact.phone}`, username: contact.phone, icon: "Phone" },
  ];

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
              {contactLinks.map((link) => {
                const Icon = iconMap[link.icon || ''];
                return (
                  <Button key={link.platform} variant="outline" className="gap-2" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {Icon && <Icon size={18} />}
                      {link.username || link.platform}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;