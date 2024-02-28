import postApi from '@apis/post.apis';
import { POST_ACTION } from '@contexts/types/post.types';
import { RootAction } from '@contexts/types/root.types';
import { getWithPagination } from '@type/post.types';
import { Dispatch } from 'react';
import { Alert } from 'react-native';
import Post from 'src/models/class/Post.class';

export const fetchSearchPosts = async (
  dispatch: Dispatch<RootAction>,
  apiParams: getWithPagination,
  searchPosts: Post[]
) => {
  try {
    const { size } = apiParams;
    dispatch({ type: POST_ACTION.SET_IS_LOADING_DATA, payload: true });
    dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: true });
    const response = await postApi.getPostWithLimit(apiParams);
    const newPosts = response.data.data.listResult;
    dispatch({
      type: POST_ACTION.SET_SEARCH_POSTS,
      payload: [...searchPosts, ...newPosts]
    });
    dispatch({ type: POST_ACTION.SET_IS_LAST_PAGE, payload: newPosts.length < size });
    dispatch({ type: POST_ACTION.SET_FIRST_LOADING, payload: false });
  } catch (error: any) {
    Alert.alert('Error', error.message);
  } finally {
    dispatch({ type: POST_ACTION.SET_IS_LOADING_DATA, payload: false });
    dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: false });
  }
};
