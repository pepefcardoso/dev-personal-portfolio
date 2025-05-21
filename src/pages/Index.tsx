
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSelector from '@/components/LanguageSelector';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
              <a href="#contact" className="hover:text-primary transition-colors">{t('nav.contact')}</a>
            </nav>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
