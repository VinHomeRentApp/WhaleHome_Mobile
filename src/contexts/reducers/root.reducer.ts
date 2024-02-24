import { AuthAction } from '@contexts/types/auth.types';
import { RoomAction } from '@contexts/types/room.types';
import { RootAction, RootState } from '@contexts/types/root.types';
import { ZoneAction } from '@contexts/types/zone.types';
import AuthReducer from './auth.reducer';
import RoomReducer from './room.reducer';
import ZoneReducer from './zone.reducer';

const rootReducer = (state: RootState, action: RootAction): RootState => {
  return {
    auth: AuthReducer(state.auth, action as AuthAction),
    room: RoomReducer(state.room, action as RoomAction),
    zone: ZoneReducer(state.zone, action as ZoneAction)
    // Add other reducers here
  };
};

export default rootReducer;
