import buildingApi from '@apis/building.apis';
import { useQuery } from '@tanstack/react-query';

export const useBuildings = () => {
  return useQuery({
    queryKey: ['building'],
    queryFn: () => buildingApi.getAllBuilding(),
    staleTime: 3 * 1000 * 60
  });
};
