
import React, { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/features/Hero/Hero';
import { Skeleton } from '@/components/ui/skeleton';
import { useDataPreloader } from '@/hooks/async/useDataPreloader';

// Lazy loading dos componentes pesados
const About = React.lazy(() => import('@/components/features/About/About'));
const Projects = React.lazy(() => import('@/components/features/Projects/Projects'));
const Timeline = React.lazy(() => import('@/components/features/Timeline/Timeline'));
const Testimonials = React.lazy(() => import('@/components/features/Testimonials/Testimonials'));
const Blog = React.lazy(() => import('@/components/features/Blog/Blog'));
const Contact = React.lazy(() => import('@/components/features/Contact/Contact'));
const Footer = React.lazy(() => import('@/components/layout/Footer'));

// Componente de loading para seções
const SectionSkeleton = () => (
  <div className="py-20">
    <div className="container px-4 mx-auto">
      <Skeleton className="h-12 w-64 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Home = () => {
  const { isLoadingCritical, criticalDataReady } = useDataPreloader();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero sempre visível */}
        <Hero />
        
        {/* Seções com lazy loading e fallback */}
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Timeline />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Blog />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
