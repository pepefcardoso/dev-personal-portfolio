import { useMemo, useCallback } from "react";
import { useTranslatedContent } from "./useTranslatedContent";
import { TranslatableString } from "@/types/common";

type TranslateItemFn<T, U> = (
  item: T,
  translate: (content: TranslatableString) => string
) => U;

interface UseDataConfig<T, U> {
  data: T[];
  translateItem: TranslateItemFn<T, U>;
  sortFn?: (a: T, b: T) => number;
  filterFn?: (item: T) => boolean;
}

export const useDataWithTranslation = <
  T extends { id: string },
  U extends { id: string } = T
>({
  data,
  translateItem,
  sortFn,
  filterFn,
}: UseDataConfig<T, U>) => {
  const { translate } = useTranslatedContent();

  const memoizedTranslateItem = useCallback(
    (item: T) => translateItem(item, translate),
    [translateItem, translate]
  );

  const translatedData = useMemo(() => {
    let processedData = [...data];

    if (filterFn) {
      processedData = processedData.filter(filterFn);
    }

    if (sortFn) {
      processedData.sort(sortFn);
    }

    return processedData.map(memoizedTranslateItem);
  }, [data, memoizedTranslateItem, filterFn, sortFn]);

  const getById = useCallback(
    (id: string) => {
      const item = data.find((item) => item.id === id);
      return item ? translateItem(item, translate) : null;
    },
    [data, translateItem, translate]
  );

  return {
    data: translatedData,
    getById,
  };
};

export const useOrderedData = <
  T extends { id: string; order: number },
  U extends { id: string } = T
>(
  data: T[],
  translateItem: TranslateItemFn<T, U>,
  filterFn?: (item: T) => boolean
) => {
  return useDataWithTranslation({
    data,
    translateItem,
    sortFn: (a, b) => a.order - b.order,
    filterFn,
  });
};

export const useFeaturedData = <
  T extends { id: string; order: number; featured?: boolean },
  U extends { id: string; featured?: boolean } = T
>(
  data: T[],
  translateItem: TranslateItemFn<T, U>
) => {
  const allData = useOrderedData<T, U>(data, translateItem);

  const featuredData = useMemo(
    () => allData.data.filter((item) => item.featured),
    [allData.data]
  );

  return {
    ...allData,
    featured: featuredData,
  };
};
