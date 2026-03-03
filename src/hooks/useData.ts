import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { translate } from "./useTranslatedContent";

function useTranslatedData<T extends { id: string }, U = T>(
  data: T[],
  translator: (item: T, lang: string) => U,
  options?: {
    filter?: (item: T) => boolean;
    sort?: (a: T, b: T) => number;
  },
) {
  const { i18n } = useTranslation();

  return useMemo(() => {
    let result = [...data];

    if (options?.filter) {
      result = result.filter(options.filter);
    }

    if (options?.sort) {
      result.sort(options.sort);
    }

    return result.map((item) => translator(item, i18n.language));
  }, [data, translator, i18n.language, options?.filter, options?.sort]);
}

export { useTranslatedData, translate };
