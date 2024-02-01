import AuthReducer from 'contexts/reducers/auth.reducer';
import { AuthAction } from 'contexts/types/auth.types';
import { RoomAction } from 'contexts/types/room.types';
import { RootAction, RootState } from 'contexts/types/root.types';
import RoomReducer from './room.reducer';

const rootReducer = (state: RootState, action: RootAction): RootState => {
  return {
    auth: AuthReducer(state.auth, action as AuthAction),
    room: RoomReducer(state.room, action as RoomAction)
    // Add other reducers here
  };
};

export default rootReducer;
