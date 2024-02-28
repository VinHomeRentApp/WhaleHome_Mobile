import buildingApi from '@apis/building.apis';
import { THREE_MINUTES } from '@constants/appConstants';
import { useQuery } from '@tanstack/react-query';

export const useBuildings = () => {
  return useQuery({
    queryKey: ['building'],
    queryFn: () => buildingApi.getAllBuilding(),
    staleTime: THREE_MINUTES
  });
};
