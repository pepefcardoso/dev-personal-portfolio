
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              &copy; {currentYear} {t('footer.copyright')}
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
