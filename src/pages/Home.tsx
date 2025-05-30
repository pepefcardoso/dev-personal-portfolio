
import React from 'react';
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
  return (
    <div className="min-h-screen bg-background">
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
