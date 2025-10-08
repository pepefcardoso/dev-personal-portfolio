import { useMemo } from "react";
import { useAsyncData } from "./useAsyncData";
import { useTranslatedContent } from "../useTranslatedContent";
import { TimelineData, TimelineItem } from "@/types/timeline";
import { TimelineType } from "@/types/common";

export const useAsyncTimeline = () => {
  const { translate } = useTranslatedContent();

  const {
    data: timelineData,
    isLoading,
    error,
    refetch,
  } = useAsyncData<TimelineData>({
    queryKey: ["timeline"],
    queryFn: (loader) => loader.loadTimelineData(),
  });

  const translateTimelineItem = (item: TimelineItem) => ({
    ...item,
    title: translate(item.title),
    organization: translate(item.organization),
    description: translate(item.description),
    period: translate(item.period),
    location: item.location ? translate(item.location) : undefined,
    achievements: item.achievements
      ? item.achievements.map(translate)
      : undefined,
  });

  const experienceData = useMemo(() => {
    if (!timelineData) return [];
    return timelineData.experience
      .sort((a, b) => a.order - b.order)
      .map(translateTimelineItem);
  }, [timelineData, translate]);

  const educationData = useMemo(() => {
    if (!timelineData) return [];
    return timelineData.education
      .sort((a, b) => a.order - b.order)
      .map(translateTimelineItem);
  }, [timelineData, translate]);

  const timelineStats = useMemo(() => {
    if (!timelineData) return null;
    return {
      totalExperience: timelineData.experience.length,
      totalEducation: timelineData.education.length,
      totalItems:
        timelineData.experience.length + timelineData.education.length,
    };
  }, [timelineData]);

  const getTimelineByType = (type: TimelineType) => {
    return type === TimelineType.EXPERIENCE ? experienceData : educationData;
  };

  return {
    timelineData,
    isLoading,
    error,
    refetch,
    experienceData,
    educationData,
    timelineStats,
    getTimelineByType,
  };
};
