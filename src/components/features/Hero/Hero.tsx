import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { File, Mail } from "lucide-react";
import { downloadFile } from "@/lib/utils";
import { socialLinks } from "@/data/socials";

const Hero = () => {
  const { t } = useTranslation();

  const handleResumeDownload = () => {
    downloadFile('/resume.pdf', 'Pedro_Paulo_Fernandes_Cardoso_Resume.pdf');
  };

  return (
    <section className="relative py-24 md:py-36">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16">
          <div className="md:w-3/5 mb-16 md:mb-0 space-y-8">
            <div className="space-y-3">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary tracking-wider uppercase">
                  {t('hero.title')}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                {t('hero.name')}
              </h1>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#contact" className="gap-2">
                    <Mail className="h-4 w-4" />
                    {t('hero.contactBtn')}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={handleResumeDownload}>
                  <File className="h-4 w-4" />
                  {t('hero.resumeBtn')}
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    size="default"
                    variant="ghost"
                    className="gap-2 text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-4 w-4" />
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center md:justify-end md:pt-8">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 border-2 border-primary/30 transform rotate-3"></div>
              <div className="relative w-full h-full overflow-hidden border-2 border-border transform -rotate-1">
                <img
                  src="/lovable-uploads/1a45b1d8-1d4d-49b2-8d92-919545de0e30.png"
                  alt={t('hero.name')}
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;