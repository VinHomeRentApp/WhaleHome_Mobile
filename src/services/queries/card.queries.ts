import cardApis from '@services/apis/card.apis';
import { useQuery } from '@tanstack/react-query';

export const useCardUser = (userId: number) => {
  return useQuery({
    queryKey: ['card', userId],
    queryFn: () => cardApis.getPaymentByUserId(userId),
    staleTime: 3 * 1000 * 60
  });
};

export const useBankList = () => {
  return useQuery({
    queryKey: ['list_bank_infor', 1],
    queryFn: () => cardApis.getListBank(),
    staleTime: 3 * 1000 * 60
  });
};
