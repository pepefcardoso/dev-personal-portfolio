import { useTranslation } from "react-i18next";
import { TranslatableString } from "@/types/common";
import { dataService } from "@/services/dataService";

export const useTranslatedContent = () => {
  const { i18n } = useTranslation();

  const translate = (content: TranslatableString): string => {
    return dataService.getTranslatedString(content, i18n.language);
  };

  const translateMultiple = (contents: TranslatableString[]): string[] => {
    return contents.map((content) => translate(content));
  };

  const hasTranslation = (content: TranslatableString): boolean => {
    const lang = i18n.language as keyof TranslatableString;
    return Boolean(content[lang]);
  };

  return {
    translate,
    translateMultiple,
    hasTranslation,
    currentLanguage: i18n.language,
  };
};
