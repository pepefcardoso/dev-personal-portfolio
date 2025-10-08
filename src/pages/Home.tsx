import React, { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/features/Hero/Hero';
import { Skeleton } from '@/components/ui/skeleton';
import { useDataPreloader } from '@/hooks/async/useDataPreloader';

const About = React.lazy(() => import('@/components/features/About/About'));
const Projects = React.lazy(() => import('@/components/features/Projects/Projects'));
const Timeline = React.lazy(() => import('@/components/features/Timeline/Timeline'));
const Testimonials = React.lazy(() => import('@/components/features/Testimonials/Testimonials'));
const Blog = React.lazy(() => import('@/components/features/Blog/Blog'));
const Contact = React.lazy(() => import('@/components/features/Contact/Contact'));
const Footer = React.lazy(() => import('@/components/layout/Footer'));

const SectionSkeleton = () => (
  <div className="py-16 md:py-24">
    <div className="container px-4 mx-auto max-w-6xl">
      <div className="mb-12">
        <Skeleton className="h-8 w-48 mb-3" />
        <Skeleton className="h-px w-24 bg-primary/20" />
      </div>
      <div className="space-y-8">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex gap-6 items-start">
            <Skeleton className="h-16 w-16 rounded-sm flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PageLoader = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <div className="container px-4 mx-auto py-24 md:py-32 max-w-6xl">
        <div className="space-y-6 max-w-3xl">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-6 w-2/3" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
      <SectionSkeleton />
    </main>
  </div>
);

const Home = () => {
  const { isLoadingCritical } = useDataPreloader();

  if (isLoadingCritical) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative max-w-6xl mx-auto px-6 py-12">
        <Hero />

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

      <Suspense fallback={<div className="h-24 w-full bg-muted/30" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;