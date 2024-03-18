import contractApis from '@services/apis/contract.apis';
import { useQuery } from '@tanstack/react-query';

export const useGetContractById = (userId: number) => {
  return useQuery({
    queryKey: ['contractList', userId],
    queryFn: () => contractApis.getListContractByUserId(userId),
    staleTime: 3 * 60 * 1000,
    refetchInterval: false
  });
};
