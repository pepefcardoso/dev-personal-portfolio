
import { useMemo } from 'react';
import { languagesData } from '@/data/languages';
import { useTranslatedContent } from './useTranslatedContent';
import { Language } from '@/types/languages';

/**
 * Hook para gerenciar dados dos idiomas
 */
export const useLanguagesData = () => {
  const { translate, currentLanguage } = useTranslatedContent();

  /**
   * Traduz um idioma
   */
  const translateLanguage = (language: Language) => ({
    ...language,
    name: translate(language.name)
  });

  /**
   * Obtém idiomas traduzidos
   */
  const getLanguages = useMemo(() => {
    return languagesData.supported.map(translateLanguage);
  }, [translate]);

  /**
   * Obtém idioma padrão
   */
  const getDefaultLanguage = useMemo(() => {
    const defaultLang = languagesData.supported.find(lang => lang.isDefault);
    return defaultLang ? translateLanguage(defaultLang) : null;
  }, [translate]);

  /**
   * Obtém idioma atual
   */
  const getCurrentLanguage = useMemo(() => {
    const currentLang = languagesData.supported.find(lang => lang.code === currentLanguage);
    return currentLang ? translateLanguage(currentLang) : null;
  }, [currentLanguage, translate]);

  /**
   * Obtém idioma por código
   */
  const getLanguageByCode = (code: string) => {
    const language = languagesData.supported.find(lang => lang.code === code);
    return language ? translateLanguage(language) : null;
  };

  /**
   * Verifica se um idioma é suportado
   */
  const isLanguageSupported = (code: string) => {
    return languagesData.supported.some(lang => lang.code === code);
  };

  /**
   * Obtém códigos de idiomas suportados
   */
  const getSupportedLanguageCodes = () => {
    return languagesData.supported.map(lang => lang.code);
  };

  /**
   * Obtém idiomas RTL
   */
  const getRTLLanguages = () => {
    return languagesData.supported
      .filter(lang => lang.rtl)
      .map(translateLanguage);
  };

  return {
    languages: getLanguages,
    defaultLanguage: getDefaultLanguage,
    currentLanguage: getCurrentLanguage,
    getLanguageByCode,
    isLanguageSupported,
    getSupportedLanguageCodes,
    getRTLLanguages
  };
};
