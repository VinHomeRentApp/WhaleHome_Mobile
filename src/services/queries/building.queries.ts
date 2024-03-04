import buildingApi from '@services/apis/building.apis';
import { THREE_MINUTES } from '@constants/appConstants';
import { useQuery } from '@tanstack/react-query';
import { getBuildingWithAreaParams } from '@type/post.types';

export const useBuildings = () => {
  return useQuery({
    queryKey: ['building'],
    queryFn: () => buildingApi.getAllBuilding(),
    staleTime: THREE_MINUTES
  });
};

export const useBuildingsWithArea = (params: getBuildingWithAreaParams) => {
  return useQuery({
    queryKey: ['buildings'],
    queryFn: () => buildingApi.getBuildingWithArea(params),
    staleTime: THREE_MINUTES
  });
};
