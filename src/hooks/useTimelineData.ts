import { timelineData } from "@/data/timeline";
import { TimelineItem } from "@/types/timeline";
import { TimelineType } from "@/types/common";
import { translate, useTranslatedData } from "./useData";

export function useTimelineData() {
  const translateItem = (item: TimelineItem, lang: string) => ({
    ...item,
    title: translate(item.title, lang),
    organization: translate(item.organization, lang),
    description: translate(item.description, lang),
    period: translate(item.period, lang),
    location: item.location ? translate(item.location, lang) : undefined,
    achievements: item.achievements?.map((a) => translate(a, lang)),
  });

  const experience = useTranslatedData(timelineData.experience, translateItem, {
    sort: (a, b) => a.order - b.order,
  });

  const education = useTranslatedData(timelineData.education, translateItem, {
    sort: (a, b) => a.order - b.order,
  });

  const getByType = (type: TimelineType) =>
    type === TimelineType.EXPERIENCE ? experience : education;

  return { experience, education, getByType };
}
