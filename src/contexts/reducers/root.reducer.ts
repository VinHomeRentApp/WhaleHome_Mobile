import { AuthAction } from '@contexts/types/auth.types';
import { PostAction } from '@contexts/types/post.types';
import { RoomAction } from '@contexts/types/room.types';
import { RootAction, RootState } from '@contexts/types/root.types';
import { ZoneAction } from '@contexts/types/zone.types';
import AuthReducer from './auth.reducer';
import PostReducer from './post.reducer';
import RoomReducer from './room.reducer';
import ZoneReducer from './zone.reducer';

const rootReducer = (state: RootState, action: RootAction): RootState => {
  return {
    auth: AuthReducer(state.auth, action as AuthAction),
    room: RoomReducer(state.room, action as RoomAction),
    zone: ZoneReducer(state.zone, action as ZoneAction),
    post: PostReducer(state.post, action as PostAction)
    // Add other reducers here
  };
};

export default rootReducer;
