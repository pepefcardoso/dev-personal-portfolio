import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { languagesData } from "@/data/languages";
import { translate } from "./useTranslatedContent";

export const useLanguagesData = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const languages = useMemo(
    () =>
      languagesData.supported.map((language) => ({
        ...language,
        name: translate(language.name, lang),
      })),
    [lang]
  );

  const defaultLanguage = useMemo(
    () => languages.find((l) => l.isDefault) || null,
    [languages]
  );

  const currentLanguage = useMemo(
    () => languages.find((l) => l.code === lang) || null,
    [languages, lang]
  );

  const getLanguageByCode = (code: string) =>
    languages.find((l) => l.code === code) || null;

  const isLanguageSupported = (code: string) =>
    languagesData.supported.some((l) => l.code === code);

  const getSupportedLanguageCodes = () =>
    languagesData.supported.map((l) => l.code);

  const getRTLLanguages = () => languages.filter((l) => l.rtl);

  return {
    languages,
    defaultLanguage,
    currentLanguage,
    getLanguageByCode,
    isLanguageSupported,
    getSupportedLanguageCodes,
    getRTLLanguages,
  };
};
