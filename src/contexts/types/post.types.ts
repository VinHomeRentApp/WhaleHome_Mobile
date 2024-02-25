/* eslint-disable no-unused-vars */

import Post from 'src/models/class/Post.class';

export enum POST_ACTION {
  SET_ALL_POSTS = 'SET_ALL_POSTS',
  SET_POSTS = 'SET_POSTS',
  SET_POST_IS_LOADING = 'SET_POST_IS_LOADING'
}

export type PostContextType = {
  allPosts: Post[];
  posts: Post[];
  isLoadingPost: boolean;
};

export const initialPostState: PostContextType = {
  allPosts: [],
  posts: [],
  isLoadingPost: false
};

export type setAllPostsAction = {
  type: POST_ACTION.SET_ALL_POSTS;
  payload: Post[];
};

export type SetPostsAction = {
  type: POST_ACTION.SET_POSTS;
  payload: Post[];
};

export type SetIsLoadingPost = {
  type: POST_ACTION.SET_POST_IS_LOADING;
  payload: boolean;
};

export type PostAction = setAllPostsAction | SetPostsAction | SetIsLoadingPost;
