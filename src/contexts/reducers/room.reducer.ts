import { ROOM_ACTION, RoomAction, RoomContextType } from '@contexts/types/room.types';
import { Reducer } from 'react';

const RoomReducer: Reducer<RoomContextType, RoomAction> = (state, action) => {
  switch (action.type) {
    case ROOM_ACTION.SET_ROOM_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default RoomReducer;
