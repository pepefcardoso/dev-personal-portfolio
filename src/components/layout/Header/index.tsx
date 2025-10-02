import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '@/components/features/Theme/ThemeToggle';
import LanguageSelector from '@/components/features/Language/LanguageSelector';
import NavLink from './NavLink';

const Header = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navItems = [
    { href: '#about', labelKey: 'nav.about' },
    { href: '#skills', labelKey: 'nav.skills' },
    { href: '#projects', labelKey: 'nav.projects' },
    { href: '#timeline', labelKey: 'nav.timeline' },
    { href: '#testimonials', labelKey: 'nav.testimonials' },
    { href: '#blog', labelKey: 'nav.blog' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/90 border-b border-border/40">
      <div className="container mx-auto py-5 px-4 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-tight relative">
          <span className="text-foreground">Portfolio</span>
          <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary"></span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={t(item.labelKey)} />
            ))}
          </nav>

          <div className="flex items-center gap-3 border-l border-border/40 pl-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;