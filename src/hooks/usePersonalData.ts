
import { useMemo } from 'react';
import { dataService } from '@/services/dataService';
import { useTranslatedContent } from './useTranslatedContent';

/**
 * Hook para gerenciar informações pessoais e de contato
 */
export const usePersonalData = () => {
  const personalInfo = useMemo(() => dataService.getPersonalInfo(), []);
  const contactInfo = useMemo(() => dataService.getContactInfo(), []);
  const { translate } = useTranslatedContent();

  /**
   * Obtém informações pessoais traduzidas
   */
  const getTranslatedPersonalInfo = () => ({
    ...personalInfo,
    title: translate(personalInfo.title),
    description: translate(personalInfo.description),
    bio: translate(personalInfo.bio),
    languages: personalInfo.languages.map(lang => ({
      ...lang,
      language: translate(lang.language),
      level: translate(lang.level)
    }))
  });

  /**
   * Obtém informações de contato com traduções aplicadas
   */
  const getTranslatedContactInfo = () => ({
    ...contactInfo,
    resume: contactInfo.resume ? {
      ...contactInfo.resume,
      filename: translate(contactInfo.resume.filename)
    } : undefined
  });

  /**
   * Obtém links de redes sociais organizados
   */
  const getSocialMediaLinks = () => {
    return contactInfo.socialMedia.map(link => ({
      ...link,
      displayName: link.username || link.platform
    }));
  };

  return {
    personalInfo,
    contactInfo,
    getTranslatedPersonalInfo,
    getTranslatedContactInfo,
    getSocialMediaLinks
  };
};
