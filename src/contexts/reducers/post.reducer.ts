import { POST_ACTION, PostAction, PostContextType } from '@contexts/types/post.types';
import { Reducer } from 'react';

const PostReducer: Reducer<PostContextType, PostAction> = (state, action) => {
  switch (action.type) {
    case POST_ACTION.SET_ALL_POSTS:
      return { ...state, allPosts: action.payload };
    case POST_ACTION.SET_POSTS:
      return { ...state, posts: action.payload };
    case POST_ACTION.SET_POST_IS_LOADING:
      return { ...state, isLoadingPost: action.payload };
    default:
      return state;
  }
};

export default PostReducer;