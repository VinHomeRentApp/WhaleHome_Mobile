import apartmentApi from '@services/apis/apartment.apis';
import { useQuery } from '@tanstack/react-query';

export const useApartmentClass = () => {
  return useQuery({
    queryKey: ['apartmentClass'],
    queryFn: () => apartmentApi.getApartmentClass(),
    staleTime: 3 * 1000 * 60
  });
};
