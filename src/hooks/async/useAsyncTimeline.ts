
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { getAsyncDataLoader } from '@/services/asyncDataLoader';
import { TimelineData, TimelineItem } from '@/types/timeline';
import { TimelineType } from '@/types/common';
import { useTranslatedContent } from '../useTranslatedContent';

/**
 * Hook para carregamento assíncrono de dados do timeline
 */
export const useAsyncTimeline = () => {
  const queryClient = useQueryClient();
  const { translate } = useTranslatedContent();
  const dataLoader = getAsyncDataLoader(queryClient);

  const {
    data: timelineData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['timeline'],
    queryFn: () => dataLoader.loadTimelineData(),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

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
  const getExperienceData = () => {
    if (!timelineData) return [];
    
    return timelineData.experience
      .sort((a, b) => a.order - b.order)
      .map(translateTimelineItem);
  };

  /**
   * Obtém dados de educação traduzidos e ordenados
   */
  const getEducationData = () => {
    if (!timelineData) return [];
    
    return timelineData.education
      .sort((a, b) => a.order - b.order)
      .map(translateTimelineItem);
  };

  /**
   * Obtém itens do timeline por tipo
   */
  const getTimelineByType = (type: TimelineType) => {
    return type === TimelineType.EXPERIENCE ? getExperienceData() : getEducationData();
  };

  /**
   * Obtém estatísticas do timeline
   */
  const getTimelineStats = () => {
    if (!timelineData) return null;
    
    return {
      totalExperience: timelineData.experience.length,
      totalEducation: timelineData.education.length,
      totalItems: timelineData.experience.length + timelineData.education.length
    };
  };

  return {
    timelineData,
    isLoading,
    error,
    refetch,
    experienceData: getExperienceData(),
    educationData: getEducationData(),
    getTimelineByType,
    getTimelineStats
  };
};
