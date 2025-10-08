import {
  TimelineType,
  TranslatableString,
  DateRangeItem,
  OrderableItem,
} from "./common";

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
