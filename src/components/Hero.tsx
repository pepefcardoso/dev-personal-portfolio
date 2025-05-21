
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4">
              {t('hero.name')}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
              {t('hero.title')}
            </p>
            <p className="text-lg text-muted-foreground max-w-md">
              {t('hero.description')}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                {t('hero.contactBtn')}
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <File size={18} />
                {t('hero.resumeBtn')}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              {/* Replace with your profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold">
                {t('hero.imagePlaceholder')}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
