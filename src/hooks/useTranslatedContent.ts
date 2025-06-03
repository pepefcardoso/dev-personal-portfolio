
import { useTranslation } from 'react-i18next';
import { TranslatableString } from '@/types/common';
import { dataService } from '@/services/dataService';

/**
 * Hook para facilitar o uso de conteúdo traduzível
 */
export const useTranslatedContent = () => {
  const { i18n } = useTranslation();
  
  /**
   * Traduz uma string traduzível para o idioma atual
   */
  const translate = (content: TranslatableString): string => {
    return dataService.getTranslatedString(content, i18n.language);
  };

  /**
   * Traduz múltiplas strings traduzíveis
   */
  const translateMultiple = (contents: TranslatableString[]): string[] => {
    return contents.map(content => translate(content));
  };

  /**
   * Verifica se uma tradução existe para o idioma atual
   */
  const hasTranslation = (content: TranslatableString): boolean => {
    const lang = i18n.language as keyof TranslatableString;
    return Boolean(content[lang]);
  };

  return {
    translate,
    translateMultiple,
    hasTranslation,
    currentLanguage: i18n.language
  };
};
