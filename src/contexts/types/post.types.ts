/* eslint-disable no-unused-vars */

import Post from 'src/models/class/Post.class';

export enum POST_ACTION {
  SET_ALL_POSTS = 'SET_ALL_POSTS',
  SET_POSTS = 'SET_POSTS',
  SET_POST_IS_LOADING = 'SET_POST_IS_LOADING',
  SET_SEARCH_POSTS = 'SET_SEARCH_POSTS',
  SET_FIRST_LOADING = 'SET_FIRST_LOADING',
  SET_IS_LOADING_DATA = 'SET_IS_LOADING_DATA',
  SET_IS_LAST_PAGE = 'SET_IS_LAST_PAGE',
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
}

export type PostContextType = {
  allPosts: Post[];
  posts: Post[];
  isLoadingPost: boolean;
  searchPosts: Post[];
  isFirstLoading: boolean;
  isLoadingData: boolean;
  isLastPage: boolean;
  searchText: string;
};

export const initialPostState: PostContextType = {
  isFirstLoading: true,
  isLoadingPost: false,
  isLoadingData: false,
  isLastPage: false,
  allPosts: [],
  posts: [],
  searchPosts: [],
  searchText: ''
};

export type setAllPostsAction = {
  type: POST_ACTION.SET_ALL_POSTS;
  payload: Post[];
};

export type SetPostsAction = {
  type: POST_ACTION.SET_POSTS;
  payload: Post[];
};

export type SetIsLoadingPostAction = {
  type: POST_ACTION.SET_POST_IS_LOADING;
  payload: boolean;
};

export type SetSearchPostsAction = {
  type: POST_ACTION.SET_SEARCH_POSTS;
  payload: Post[];
};

export type SetIsFirstLoadingAction = {
  type: POST_ACTION.SET_FIRST_LOADING;
  payload: boolean;
};

export type SetIsLoadingDataAction = {
  type: POST_ACTION.SET_IS_LOADING_DATA;
  payload: boolean;
};

export type SetIsLastPageAction = {
  type: POST_ACTION.SET_IS_LAST_PAGE;
  payload: boolean;
};

export type SetSearchTextAction = {
  type: POST_ACTION.SET_SEARCH_TEXT;
  payload: string;
};

export type PostAction =
  | setAllPostsAction
  | SetPostsAction
  | SetIsLoadingPostAction
  | SetSearchPostsAction
  | SetIsFirstLoadingAction
  | SetIsLoadingDataAction
  | SetIsLastPageAction
  | SetSearchTextAction;
