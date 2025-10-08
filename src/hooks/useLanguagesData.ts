import { useMemo } from "react";
import { languagesData } from "@/data/languages";
import { useDataWithTranslation } from "./useDataWithTranslation";
import { useTranslatedContent } from "./useTranslatedContent";
import { Language } from "@/types/languages";
import { TranslatableString } from "@/types/common";

export const useLanguagesData = () => {
  const { currentLanguage } = useTranslatedContent();

  const translateLanguage = (
    language: Language,
    translate: (content: TranslatableString) => string
  ) => ({
    ...language,
    name: translate(language.name),
  });

  const { data: languages, getById } = useDataWithTranslation({
    data: languagesData.supported,
    translateItem: translateLanguage,
  });

  const defaultLanguage = useMemo(
    () => languages.find((lang) => lang.isDefault) || null,
    [languages]
  );

  const currentLang = useMemo(
    () => languages.find((lang) => lang.code === currentLanguage) || null,
    [languages, currentLanguage]
  );

  const isLanguageSupported = (code: string) =>
    languagesData.supported.some((lang) => lang.code === code);

  const getSupportedLanguageCodes = () =>
    languagesData.supported.map((lang) => lang.code);

  const getRTLLanguages = () => languages.filter((lang) => lang.rtl);

  return {
    languages,
    defaultLanguage,
    currentLanguage: currentLang,
    getLanguageByCode: getById,
    isLanguageSupported,
    getSupportedLanguageCodes,
    getRTLLanguages,
  };
};
