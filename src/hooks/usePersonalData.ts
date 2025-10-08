import { personalInfo, contactInfo } from "@/data/personal";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { translate } from "./useData";

export function usePersonalData() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const translated = useMemo(
    () => ({
      ...personalInfo,
      title: translate(personalInfo.title, lang),
      description: translate(personalInfo.description, lang),
      bio: translate(personalInfo.bio, lang),
      languages: personalInfo.languages.map((l) => ({
        ...l,
        language: translate(l.language, lang),
        level: translate(l.level, lang),
      })),
    }),
    [lang]
  );

  return {
    personal: translated,
    contact: contactInfo,
    socials: contactInfo.socialMedia,
  };
}
