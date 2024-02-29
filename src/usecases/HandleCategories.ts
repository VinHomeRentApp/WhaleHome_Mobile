import { RootAction } from '@contexts/types/root.types';
import { ZONE_ACTION } from '@contexts/types/zone.types';
import { Dispatch } from 'react';
import Zone from 'src/models/class/Zone.class';

export const handlePressCategory = (zone: Zone, dispatch: Dispatch<RootAction>) => {
  dispatch({ type: ZONE_ACTION.SET_SELECTED_ZONE, payload: zone });
};
