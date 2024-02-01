import { AuthAction, AuthContextType, initialAuthState } from './auth.types';
import { RoomAction, RoomContextType, initialRoomState } from './room.types';

export interface RootState {
  auth: AuthContextType;
  room: RoomContextType;
  // Add other state interfaces for additional reducers here
}

export const initialState: RootState = {
  auth: initialAuthState,
  room: initialRoomState
  // Add initial state for other reducers here
};

export type RootAction = AuthAction | RoomAction; // add another Action example:  type RootAction = AuthAction | productAction
