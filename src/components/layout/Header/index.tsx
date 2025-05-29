
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
            <a 
              href="#about" 
              className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10">{t('nav.about')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
            </a>
            <a 
              href="#skills" 
              className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10">{t('nav.skills')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
            </a>
            <a 
              href="#projects" 
              className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10">{t('nav.projects')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
            </a>
            <a 
              href="#timeline" 
              className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10">{t('nav.timeline')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
            </a>
            <a 
              href="#testimonials" 
              className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10">{t('nav.testimonials')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
            </a>
            <a 
              href="#blog" 
              className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10">{t('nav.blog')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
            </a>
            <a 
              href="#contact" 
              className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10">{t('nav.contact')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
            </a>
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
