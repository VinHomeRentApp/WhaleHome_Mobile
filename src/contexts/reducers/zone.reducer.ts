import { ZONE_ACTION, ZoneAction, ZoneContextType } from '@contexts/types/zone.types';
import { Reducer } from 'react';

const ZoneReducer: Reducer<ZoneContextType, ZoneAction> = (state, action) => {
  switch (action.type) {
    case ZONE_ACTION.SET_ZONE_IS_LOADING:
      return { ...state, isZoneLoading: action.payload };
    default:
      return state;
  }
};

export default ZoneReducer;
