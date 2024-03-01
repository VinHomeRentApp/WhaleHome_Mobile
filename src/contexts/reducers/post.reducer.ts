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
    case POST_ACTION.SET_SEARCH_POSTS:
      return { ...state, searchPosts: action.payload };
    case POST_ACTION.SET_FIRST_LOADING:
      return { ...state, isFirstLoading: action.payload };
    case POST_ACTION.SET_IS_LOADING_DATA:
      return { ...state, isLoadingData: action.payload };
    case POST_ACTION.SET_IS_LAST_PAGE:
      return { ...state, isLastPage: action.payload };
    case POST_ACTION.SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

export default PostReducer;
