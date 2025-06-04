
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { getAsyncDataLoader } from '@/services/asyncDataLoader';

/**
 * Hook para precarregamento inteligente de dados
 */
export const useDataPreloader = () => {
  const queryClient = useQueryClient();
  const dataLoader = getAsyncDataLoader(queryClient);

  // Precarrega dados críticos imediatamente
  const { 
    data: criticalDataStatus, 
    isLoading: isLoadingCritical 
  } = useQuery({
    queryKey: ['critical-data'],
    queryFn: async () => {
      await dataLoader.prefetchCriticalData();
      return { loaded: true, timestamp: Date.now() };
    },
    staleTime: Infinity, // Não recarrega automaticamente
  });

  // Precarrega dados em background após os críticos
  const { 
    data: backgroundDataStatus 
  } = useQuery({
    queryKey: ['background-data'],
    queryFn: async () => {
      await dataLoader.prefetchBackgroundData();
      return { loaded: true, timestamp: Date.now() };
    },
    enabled: !!criticalDataStatus, // Só executa após dados críticos
    staleTime: Infinity,
  });

  /**
   * Força o precarregamento de todos os dados
   */
  const forcePreloadAll = async () => {
    await Promise.all([
      dataLoader.prefetchCriticalData(),
      dataLoader.prefetchBackgroundData()
    ]);
  };

  /**
   * Obtém estatísticas de cache
   */
  const getCacheStats = () => {
    return dataLoader.getCacheStats();
  };

  /**
   * Limpa todo o cache
   */
  const clearAllCache = () => {
    dataLoader.clearCache();
    queryClient.clear();
  };

  return {
    isLoadingCritical,
    criticalDataReady: !!criticalDataStatus,
    backgroundDataReady: !!backgroundDataStatus,
    forcePreloadAll,
    getCacheStats,
    clearAllCache
  };
};
