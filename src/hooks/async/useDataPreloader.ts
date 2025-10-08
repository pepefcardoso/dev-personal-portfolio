import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { getAsyncDataLoader } from "@/services/asyncDataLoader";

export const useDataPreloader = () => {
  const queryClient = useQueryClient();
  const dataLoader = getAsyncDataLoader(queryClient);

  const { data: criticalDataStatus, isLoading: isLoadingCritical } = useQuery({
    queryKey: ["critical-data"],
    queryFn: async () => {
      await dataLoader.prefetchCriticalData();
      return { loaded: true, timestamp: Date.now() };
    },
    staleTime: Infinity,
  });

  const { data: backgroundDataStatus } = useQuery({
    queryKey: ["background-data"],
    queryFn: async () => {
      await dataLoader.prefetchBackgroundData();
      return { loaded: true, timestamp: Date.now() };
    },
    enabled: !!criticalDataStatus,
    staleTime: Infinity,
  });

  const forcePreloadAll = async () => {
    await Promise.all([
      dataLoader.prefetchCriticalData(),
      dataLoader.prefetchBackgroundData(),
    ]);
  };

  return {
    isLoadingCritical,
    criticalDataReady: !!criticalDataStatus,
    backgroundDataReady: !!backgroundDataStatus,
    forcePreloadAll,
  };
};
