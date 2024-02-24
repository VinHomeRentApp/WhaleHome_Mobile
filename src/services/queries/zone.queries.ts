import zoneApi from '@apis/zone.apis';
import { RootAction } from '@contexts/types/root.types';
import { ZONE_ACTION } from '@contexts/types/zone.types';
import { useQuery } from '@tanstack/react-query';
import { Dispatch } from 'react';

export const useZones = (dispatch: Dispatch<RootAction>) => {
  return useQuery({
    queryKey: ['zones'],
    queryFn: async () => {
      dispatch({ type: ZONE_ACTION.SET_ZONE_IS_LOADING, payload: true });
      const data = await zoneApi.getAllZones();
      dispatch({ type: ZONE_ACTION.SET_ZONE_IS_LOADING, payload: false });
      return data;
    },
    staleTime: 3 * 1000 * 60
  });
};
