/* eslint-disable react/no-unescaped-entities */
import postApi from '@apis/post.apis';
import { typoColor } from '@constants/appColors';
import { POST_ACTION } from '@contexts/types/post.types';
import useRootContext from '@hooks/useRootContext';
import { useZones } from '@services/queries/zone.queries';
import { HttpStatusCode } from 'axios';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HomeCategoryField from './Components/HomeBody/HomeCategoryField';
import HomeFeatureEstate from './Components/HomeBody/HomeFeatureEstate';
import HomeSaleField from './Components/HomeBody/HomeSaleField';
import HomeSearchField from './Components/HomeBody/HomeSearchField';
import HomeTopUser from './Components/HomeBody/HomeTopUser';
import HomeWelcomeField from './Components/HomeBody/HomeWelcomeField';

const HomeScreen = () => {
  const { state, dispatch } = useRootContext();
  const { posts } = state.post;
  const useZone = useZones(dispatch);

  const zones = useZone.data?.data.data;

  useEffect(() => {
    const getPostsLimit = async () => {
      dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: true });
      const response = await postApi.getPostWithLimit({ page: 1, size: 5, field: 'title' });
      if (response.status === HttpStatusCode.Ok) {
        dispatch({ type: POST_ACTION.SET_POSTS, payload: response.data.data.listResult });
      }
      dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: false });
    };

    getPostsLimit();
  }, [dispatch]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[HomeScreenStyles.homeContainer]}>
      {/* Hello Field */}
      <HomeWelcomeField />

      {/* Search Field */}
      <HomeSearchField />

      {/* CategoryField */}
      <HomeCategoryField zones={zones} />

      {/* House Sale Field */}
      <HomeSaleField />

      {/* Features Estate */}
      <HomeFeatureEstate posts={posts} />

      {/* Top Estate */}
      <HomeTopUser />
    </ScrollView>
  );
};

const HomeScreenStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: typoColor.black3
  }
});

export default HomeScreen;
