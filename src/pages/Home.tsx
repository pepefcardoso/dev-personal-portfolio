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
  <div className="py-20">
    <div className="container px-4 mx-auto">
      <Skeleton className="h-12 w-64 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
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

const PageLoader = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <div className="container px-4 mx-auto py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-20 w-full" />
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Skeleton className="h-80 w-80 rounded-full" />
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

      <main>
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

      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;