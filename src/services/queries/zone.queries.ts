import zoneApi from '@services/apis/zone.apis';
import { useQuery } from '@tanstack/react-query';

export const useZones = () => {
  return useQuery({
    queryKey: ['zones'],
    queryFn: async () => zoneApi.getAllZones(),
    staleTime: 3 * 1000 * 60
  });
};
