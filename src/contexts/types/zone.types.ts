import Zone from 'src/models/class/Zone.class';

/* eslint-disable no-unused-vars */
export enum ZONE_ACTION {
  SET_ZONE_IS_LOADING = 'SET_ZONE_IS_LOADING',
  SET_ZONES = 'SET_ZONES'
}

export type ZoneContextType = {
  isZoneLoading: boolean;
  zones: Zone[];
};

export const initialZoneState: ZoneContextType = {
  isZoneLoading: false,
  zones: []
};

export type SetIsLoading = {
  type: ZONE_ACTION.SET_ZONE_IS_LOADING;
  payload: boolean;
};

export type SetZonesAction = {
  type: ZONE_ACTION.SET_ZONES;
  payload: Zone[];
};

export type ZoneAction = SetIsLoading | SetZonesAction;
