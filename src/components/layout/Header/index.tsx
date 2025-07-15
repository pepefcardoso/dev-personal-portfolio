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
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={t(item.labelKey)} />
            ))}
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