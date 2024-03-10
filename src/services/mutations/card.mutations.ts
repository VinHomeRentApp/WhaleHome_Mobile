import cardApis, { bodyNewCard } from '@services/apis/card.apis';
import { useMutation } from '@tanstack/react-query';

export const useCreateNewCard = () => {
  return useMutation({
    mutationFn: (body: bodyNewCard) => cardApis.createNewCardBank(body)
  });
};
