/* eslint-disable no-unused-vars */
export enum ZONE_ACTION {
  SET_ZONE_IS_LOADING = 'SET_ZONE_IS_LOADING'
}

export type ZoneContextType = {
  isZoneLoading: boolean;
};

export const initialZoneState: ZoneContextType = {
  isZoneLoading: false
};

export type SetIsLoading = {
  type: ZONE_ACTION.SET_ZONE_IS_LOADING;
  payload: boolean;
};

export type ZoneAction = SetIsLoading;
