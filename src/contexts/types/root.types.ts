import { AuthAction, AuthContextType, initialAuthState } from './auth.types';
import { RoomAction, RoomContextType, initialRoomState } from './room.types';
import { ZoneAction, ZoneContextType, initialZoneState } from './zone.types';

export interface RootState {
  auth: AuthContextType;
  room: RoomContextType;
  zone: ZoneContextType;
  // Add other state interfaces for additional reducers here
}

export const initialState: RootState = {
  auth: initialAuthState,
  room: initialRoomState,
  zone: initialZoneState
  // Add initial state for other reducers here
};

export type RootAction = AuthAction | RoomAction | ZoneAction; // add another Action example:  type RootAction = AuthAction | productAction
