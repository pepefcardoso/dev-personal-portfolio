
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/layout/Header';
import Hero from '@/components/features/Hero/Hero';
import About from '@/components/features/About/About';
import Projects from '@/components/features/Projects/Projects';
import Timeline from '@/components/features/Timeline/Timeline';
import Testimonials from '@/components/features/Testimonials/Testimonials';
import Blog from '@/components/features/Blog/Blog';
import Contact from '@/components/features/Contact/Contact';
import Footer from '@/components/layout/Footer';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
