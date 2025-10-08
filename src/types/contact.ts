import { TranslatableString } from "./common";

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: TranslatableString;
  socialMedia: SocialMediaLink[];
  resume?: {
    downloadUrl: string;
    filename: TranslatableString;
  };
}

export interface SocialMediaLink {
  platform: string;
  url: string;
  username?: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: TranslatableString;
  description: TranslatableString;
  avatar?: string;
  bio: TranslatableString;
  languages: LanguageSkill[];
  location?: TranslatableString;
}

export interface LanguageSkill {
  language: TranslatableString;
  level: TranslatableString;
  proficiency: "native" | "fluent" | "advanced" | "intermediate" | "basic";
}
