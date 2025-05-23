
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '@/components/features/Theme/ThemeToggle';
import LanguageSelector from '@/components/features/Language/LanguageSelector';

const Header = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{t('nav.skills')}</a>
            <a href="#projects" className="hover:text-primary transition-colors">{t('nav.projects')}</a>
            <a href="#timeline" className="hover:text-primary transition-colors">{t('nav.timeline')}</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">{t('nav.testimonials')}</a>
            <a href="#blog" className="hover:text-primary transition-colors">{t('nav.blog')}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t('nav.contact')}</a>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
