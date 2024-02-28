/* eslint-disable no-unused-vars */

import Post from 'src/models/class/Post.class';

export enum POST_ACTION {
  SET_ALL_POSTS = 'SET_ALL_POSTS',
  SET_POSTS = 'SET_POSTS',
  SET_POST_IS_LOADING = 'SET_POST_IS_LOADING',
  SET_SEARCH_POSTS = 'SET_SEARCH_POSTS',
  SET_FIRST_LOADING = 'SET_FIRST_LOADING'
}

export type PostContextType = {
  allPosts: Post[];
  posts: Post[];
  isLoadingPost: boolean;
  searchPosts: Post[];
  isFirstLoading: boolean;
};

export const initialPostState: PostContextType = {
  isFirstLoading: true,
  isLoadingPost: false,
  allPosts: [],
  posts: [],
  searchPosts: []
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

export type PostAction =
  | setAllPostsAction
  | SetPostsAction
  | SetIsLoadingPostAction
  | SetSearchPostsAction
  | SetIsFirstLoadingAction;
