import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import { downloadFile } from "@/lib/utils";
import { usePersonalData } from "@/hooks/usePersonalData";
import { translate } from "@/hooks/useTranslatedContent";

const currentYear = new Date().getFullYear();

const footerNavItems = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#projects', labelKey: 'nav.projects' },
  { href: '#contact', labelKey: 'nav.contact' },
  { href: '#blog', labelKey: 'nav.blog' },
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { contact } = usePersonalData();

  const handleResumeDownload = useCallback(() => {
    if (contact.resume) {
      const filename = translate(contact.resume.filename, i18n.language);
      const url = `${contact.resume.downloadUrl}/${filename}`;
      downloadFile(url, filename);
    }
  }, [contact.resume, i18n.language]);

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
            {footerNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;