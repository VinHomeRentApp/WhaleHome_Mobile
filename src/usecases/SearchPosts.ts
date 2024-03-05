import { POST_ACTION } from '@contexts/types/post.types';
import { RootAction } from '@contexts/types/root.types';
import postApi from '@services/apis/post.apis';
import { searchPostsParamsTypes } from '@type/post.types';
import { Dispatch } from 'react';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import Post from 'src/models/class/Post.class';

export const fetchSearchPosts = async (
  dispatch: Dispatch<RootAction>,
  apiParams: searchPostsParamsTypes,
  searchPosts: Post[]
) => {
  try {
    const { size } = apiParams;
    dispatch({ type: POST_ACTION.SET_IS_LOADING_DATA, payload: true });
    dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: true });
    const response = await postApi.searchPost(apiParams);
    const newPosts = response.data.data.listResult;
    dispatch({
      type: POST_ACTION.SET_SEARCH_POSTS,
      payload: [...searchPosts, ...newPosts]
    });
    dispatch({ type: POST_ACTION.SET_IS_LAST_PAGE, payload: newPosts.length < size });
    dispatch({ type: POST_ACTION.SET_FIRST_LOADING, payload: false });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Alert.alert('Error', error.message);
    Toast.show({
      type: ALERT_TYPE.DANGER,
      title: 'Search Error',
      textBody: error.message
    });
  } finally {
    dispatch({ type: POST_ACTION.SET_IS_LOADING_DATA, payload: false });
    dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: false });
  }
};
