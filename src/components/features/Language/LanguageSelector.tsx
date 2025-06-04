
import React, { useState, useEffect } from "react";
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
  const { languages, currentLanguage } = useLanguagesData();
  const [currentLang, setCurrentLang] = useState(i18n.language || "pt");

  useEffect(() => {
    // Update local state when i18n language changes
    setCurrentLang(i18n.language || "pt");
  }, [i18n.language]);

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    setCurrentLang(value);
  };

  const getCurrentLanguageName = () => {
    return currentLanguage?.name || "Português";
  };

  return (
    <Select value={currentLang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[120px] border-none bg-transparent focus:ring-0 hover:bg-accent/50 transition-colors duration-200">
        <div className="flex items-center gap-2">
          {currentLanguage?.flag && <span>{currentLanguage.flag}</span>}
          <SelectValue placeholder={getCurrentLanguageName()} />
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
