
import { useMemo } from 'react';
import { timelineData } from '@/data/timeline';
import { useTranslatedContent } from './useTranslatedContent';
import { TimelineItem, TimelineData } from '@/types/timeline';
import { TimelineType } from '@/types/common';

/**
 * Hook para gerenciar dados do timeline
 */
export const useTimelineData = () => {
  const { translate } = useTranslatedContent();

  /**
   * Traduz um item do timeline
   */
  const translateTimelineItem = (item: TimelineItem) => ({
    ...item,
    title: translate(item.title),
    organization: translate(item.organization),
    description: translate(item.description),
    period: translate(item.period),
    location: item.location ? translate(item.location) : undefined,
    achievements: item.achievements ? item.achievements.map(translate) : undefined
  });

  /**
   * Obtém dados de experiência traduzidos e ordenados
   */
  const getExperienceData = useMemo(() => {
    return timelineData.experience
      .sort((a, b) => a.order - b.order)
      .map(translateTimelineItem);
  }, [translate]);

  /**
   * Obtém dados de educação traduzidos e ordenados
   */
  const getEducationData = useMemo(() => {
    return timelineData.education
      .sort((a, b) => a.order - b.order)
      .map(translateTimelineItem);
  }, [translate]);

  /**
   * Obtém todos os dados do timeline traduzidos
   */
  const getAllTimelineData = useMemo(() => {
    return {
      experience: getExperienceData,
      education: getEducationData
    };
  }, [getExperienceData, getEducationData]);

  /**
   * Obtém itens do timeline por tipo
   */
  const getTimelineByType = (type: TimelineType) => {
    return type === TimelineType.EXPERIENCE ? getExperienceData : getEducationData;
  };

  /**
   * Obtém estatísticas do timeline
   */
  const getTimelineStats = () => ({
    totalExperience: timelineData.experience.length,
    totalEducation: timelineData.education.length,
    totalItems: timelineData.experience.length + timelineData.education.length
  });

  return {
    timelineData: getAllTimelineData,
    getExperienceData,
    getEducationData,
    getTimelineByType,
    getTimelineStats
  };
};
