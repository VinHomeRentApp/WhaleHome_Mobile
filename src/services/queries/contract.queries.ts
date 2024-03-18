import contractApis from '@services/apis/contract.apis';
import { useQuery } from '@tanstack/react-query';

const STALE_TIME = 3 * 60 * 1000;

export const useGetContractById = (userId: number) => {
  return useQuery({
    queryKey: ['contractList', userId],
    queryFn: () => contractApis.getListContractByUserId(userId),
    staleTime: STALE_TIME,
    refetchInterval: false
  });
};

export const useGetDetailContract = (contractId: number) => {
  return useQuery({
    queryKey: ['detailContract', contractId],
    queryFn: () => contractApis.getDetailContractByContractId(contractId),
    staleTime: STALE_TIME,
    refetchInterval: false
  });
};
