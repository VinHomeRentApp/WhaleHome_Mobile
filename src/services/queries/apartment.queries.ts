import apartmentApi from '@apis/apartment.apis';
import { useQuery } from '@tanstack/react-query';

export const useApartmentClass = () => {
  return useQuery({
    queryKey: ['apartmentClass'],
    queryFn: () => apartmentApi.getApartmentClass()
  });
};
