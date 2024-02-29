import Zone from 'src/models/class/Zone.class';

/* eslint-disable no-unused-vars */
export enum ZONE_ACTION {
  SET_ZONE_IS_LOADING = 'SET_ZONE_IS_LOADING',
  SET_ZONES = 'SET_ZONES',
  SET_SELECTED_ZONE = 'SET_SELECTED_ZONE'
}

export type ZoneContextType = {
  isZoneLoading: boolean;
  zones: Zone[];
  selectedZone: Partial<Zone>;
};

export const initialZoneState: ZoneContextType = {
  isZoneLoading: false,
  zones: [],
  selectedZone: {}
};

export type SetIsLoading = {
  type: ZONE_ACTION.SET_ZONE_IS_LOADING;
  payload: boolean;
};

export type SetZonesAction = {
  type: ZONE_ACTION.SET_ZONES;
  payload: Zone[];
};

export type SetSelectedZoneAction = {
  type: ZONE_ACTION.SET_SELECTED_ZONE;
  payload: Zone;
};

export type ZoneAction = SetIsLoading | SetZonesAction | SetSelectedZoneAction;
