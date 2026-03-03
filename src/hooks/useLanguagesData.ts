import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { languagesData } from "@/data/languages";
import { translate } from "./useTranslatedContent";

/**
 * Hook personalizado para gerenciar dados de idiomas.
 * Retorna os idiomas disponíveis formatados e o idioma atual.
 */
export const useLanguagesData = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const languages = useMemo(
    () =>
      languagesData.supported.map((language) => ({
        ...language,
        name: translate(language.name, lang),
      })),
    [lang],
  );

  const defaultLanguage = useMemo(
    () => languages.find((l) => l.isDefault) || null,
    [languages],
  );

  const currentLanguage = useMemo(
    () => languages.find((l) => l.code === lang) || null,
    [languages, lang],
  );

  return {
    languages,
    defaultLanguage,
    currentLanguage,
  };
};
