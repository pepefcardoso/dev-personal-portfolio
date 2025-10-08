import { useMemo } from "react";
import { timelineData } from "@/data/timeline";
import { useOrderedData } from "./useDataWithTranslation";
import { TimelineItem } from "@/types/timeline";
import { TimelineType, TranslatableString } from "@/types/common";

export const useTimelineData = () => {
  const translateTimelineItem = (
    item: TimelineItem,
    translate: (content: TranslatableString) => string
  ) => ({
    ...item,
    title: translate(item.title),
    organization: translate(item.organization),
    description: translate(item.description),
    period: translate(item.period),
    location: item.location ? translate(item.location) : undefined,
    achievements: item.achievements?.map((a) => translate(a)),
  });

  const { data: experience } = useOrderedData(
    timelineData.experience,
    translateTimelineItem
  );

  const { data: education } = useOrderedData(
    timelineData.education,
    translateTimelineItem
  );

  const allTimelineData = useMemo(
    () => ({ experience, education }),
    [experience, education]
  );

  const getTimelineByType = (type: TimelineType) =>
    type === TimelineType.EXPERIENCE ? experience : education;

  const getTimelineStats = () => ({
    totalExperience: timelineData.experience.length,
    totalEducation: timelineData.education.length,
    totalItems: timelineData.experience.length + timelineData.education.length,
  });

  return {
    timelineData: allTimelineData,
    getExperienceData: experience,
    getEducationData: education,
    getTimelineByType,
    getTimelineStats,
  };
};
