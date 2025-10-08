import {
  useQuery,
  useQueryClient,
  QueryKey,
  UseQueryResult,
} from "@tanstack/react-query";
import { getAsyncDataLoader } from "@/services/asyncDataLoader";

interface UseAsyncDataOptions<TData> {
  queryKey: QueryKey;
  queryFn: (
    dataLoader: ReturnType<typeof getAsyncDataLoader>
  ) => Promise<TData>;
  staleTime?: number;
  gcTime?: number;
  enabled?: boolean;
}

/**
 * @template TData
 * @param {UseAsyncDataOptions<TData>} options
 * @returns {UseQueryResult<TData>}
 */
export const useAsyncData = <TData>({
  queryKey,
  queryFn,
  staleTime = 5 * 60 * 1000,
  gcTime = 30 * 60 * 1000,
  enabled = true,
}: UseAsyncDataOptions<TData>): UseQueryResult<TData> => {
  const queryClient = useQueryClient();
  const dataLoader = getAsyncDataLoader(queryClient);

  return useQuery<TData>({
    queryKey,
    queryFn: () => queryFn(dataLoader),
    staleTime,
    gcTime,
    enabled,
  });
};
