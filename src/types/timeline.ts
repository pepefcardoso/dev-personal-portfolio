import {
  TimelineType,
  TranslatableString,
  DateRangeItem,
  OrderableItem,
} from "./common";

export interface TranslatedTimelineItem
  extends Omit<
    TimelineItem,
    | "title"
    | "organization"
    | "description"
    | "period"
    | "location"
    | "achievements"
  > {
  title: string;
  organization: string;
  description: string;
  period: string;
  location?: string;
  achievements?: string[];
}

export interface TimelineItem extends OrderableItem, DateRangeItem {
  title: TranslatableString;
  organization: TranslatableString;
  description: TranslatableString;
  type: TimelineType;
  location?: TranslatableString;
  achievements?: TranslatableString[];
  technologies?: string[];
  links?: {
    name: string;
    url: string;
  }[];
}

export interface TimelineData {
  experience: TimelineItem[];
  education: TimelineItem[];
}
