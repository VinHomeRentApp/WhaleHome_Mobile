/* eslint-disable react/no-unescaped-entities */
import postApi from '@apis/post.apis';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { POST_ACTION } from '@contexts/types/post.types';
import useRootContext from '@hooks/useRootContext';
import { useZones } from '@services/queries/zone.queries';
import { HttpStatusCode } from 'axios';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HomeCategoryField from './Components/HomeBody/HomeCategoryField';
import HomeFeatureEstate from './Components/HomeBody/HomeFeatureEstate';
import HomePostsField from './Components/HomeBody/HomePostsField';
import HomeSaleField from './Components/HomeBody/HomeSaleField';
import HomeSearchField from './Components/HomeBody/HomeSearchField';
import HomeTopBuilding from './Components/HomeBody/HomeTopBuilding';
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
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.homeContainer]}>
      {/* Hello Field */}
      <HomeWelcomeField />

      {/* Search Field */}
      <HomeSearchField />

      {/* CategoryField */}
      <HomeCategoryField zones={zones} />

      {/* Features Estate */}
      <HomeFeatureEstate posts={posts} />

      {/* House Sale Field */}
      <TextComponent styles={styles.title} content='Apartment Class' />
      <HomeSaleField />

      {/* Building Block */}
      <HomeTopBuilding />

      {/* Posts Field */}
      <HomePostsField />

      {/* Top Estate */}
      <HomeTopUser />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: typoColor.black3
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
    fontFamily: fontFam.bold
  }
});

export default HomeScreen;
