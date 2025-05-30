
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { File, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  // This will be the URL to your resume file
  const resumeURL = "/resume.pdf"; // You'll need to place this file in the public folder

  const handleResumeDownload = () => {
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = "Pedro_Paulo_Fernandes_Cardoso_Resume.pdf"; // Name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <Button size="lg" asChild className="gap-2">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  {t('hero.contactBtn')}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={handleResumeDownload}>
                <File size={18} />
                {t('hero.resumeBtn')}
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://github.com/pepefcardoso" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://linkedin.com/in/pepefcardoso" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src="/lovable-uploads/1a45b1d8-1d4d-49b2-8d92-919545de0e30.png" 
                alt={t('hero.name')}
                className="w-full h-full object-cover"
              />
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
