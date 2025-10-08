import { useTranslation } from "react-i18next";
import { TranslatableString } from "@/types/common";

export function translate(content: TranslatableString, lang: string): string {
  const key = lang as keyof TranslatableString;
  return (
    content[key] || content.en || content.pt || Object.values(content)[0] || ""
  );
}

export const useTranslatedContent = () => {
  const { i18n } = useTranslation();

  const translateContent = (content: TranslatableString): string => {
    return translate(content, i18n.language);
  };

  const translateMultiple = (contents: TranslatableString[]): string[] => {
    return contents.map(translateContent);
  };

  const hasTranslation = (content: TranslatableString): boolean => {
    const lang = i18n.language as keyof TranslatableString;
    return Boolean(content[lang]);
  };

  return {
    translate: translateContent,
    translateMultiple,
    hasTranslation,
    currentLanguage: i18n.language,
  };
};
