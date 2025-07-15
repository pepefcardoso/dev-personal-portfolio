import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguagesData } from "@/hooks/useLanguagesData";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { languages } = useLanguagesData();
  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const currentLanguageDetails = languages.find(lang => lang.code === i18n.language);

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-auto border-none bg-transparent focus:ring-0 hover:bg-accent/50 transition-colors duration-200">
        <div className="flex items-center gap-2">
          {currentLanguageDetails?.flag && <span>{currentLanguageDetails.flag}</span>}
          <SelectValue placeholder={currentLanguageDetails?.name || "Idioma"} />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-background border border-border shadow-lg">
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
          >
            <div className="flex items-center gap-2">
              {lang.flag && <span>{lang.flag}</span>}
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;