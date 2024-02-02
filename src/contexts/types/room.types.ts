/* eslint-disable no-unused-vars */
export enum ROOM_ACTION {
  SET_ROOM_IS_LOADING = 'SET_ROOM_IS_LOADING'
}

export type RoomContextType = {
  isLoading: boolean;
};

export const initialRoomState: RoomContextType = {
  isLoading: false
};

export type SetIsLoading = {
  type: ROOM_ACTION.SET_ROOM_IS_LOADING;
  payload: boolean;
};

export type RoomAction = SetIsLoading;
