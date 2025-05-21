
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // This will be the URL to your resume file
  const resumeURL = "/resume.pdf"; // You'll need to place this file in the public folder

  const handleResumeDownload = () => {
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = "John_Doe_Resume.pdf"; // Name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-muted/30 py-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleResumeDownload}
            className="flex items-center gap-2 mb-4"
          >
            <File size={16} />
            {t('footer.downloadResume')}
          </Button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              &copy; {currentYear} {t('footer.copyright')}
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
            <a href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('nav.blog')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
