import areaApi from '@services/apis/area.apis';
import { useQuery } from '@tanstack/react-query';

export const useAreas = () => {
  return useQuery({
    queryKey: ['area'],
    queryFn: () => areaApi.getAllArea(),
    staleTime: 3 * 1000 * 60
  });
};
