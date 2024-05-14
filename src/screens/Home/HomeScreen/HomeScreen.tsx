/* eslint-disable react/no-unescaped-entities */
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { POST_ACTION } from '@contexts/types/post.types';
import { ZONE_ACTION } from '@contexts/types/zone.types';
import useRootContext from '@hooks/useRootContext';
import postApi from '@services/apis/post.apis';
import { useZones } from '@services/queries/zone.queries';
import { HttpStatusCode } from 'axios';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HomeCategoryField from './HomeBody/HomeCategoryField';
import HomeFeatureEstate from './HomeBody/HomeFeatureEstate';
import HomePostsField from './HomeBody/HomePostsField';
import HomeSaleField from './HomeBody/HomeSaleField';

import DismissKeyboard from '@screens/Authentication/LoginScreen/components/DismissKeyboard';
import HomeTopBuilding from './HomeBody/HomeTopBuilding';
import HomeTopUser from './HomeBody/HomeTopUser';
import HomeWelcomeField from './HomeBody/HomeWelcomeField';

const HomeScreen = () => {
  const { dispatch } = useRootContext();
  const useZone = useZones();
  // const { isPending } = useAuthentication();

  useEffect(() => {
    const getPostsLimit = async () => {
      dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: true });
      const response = await postApi.getPostWithLimit({ page: 1, size: 5, field: 'createDate' });
      if (response.status === HttpStatusCode.Ok) {
        dispatch({ type: POST_ACTION.SET_POSTS, payload: response.data.data.listResult });
      }
      dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: false });
    };

    const getZones = async () => {
      const zones = useZone.data?.data.data;
      if (zones) {
        dispatch({ type: ZONE_ACTION.SET_ZONES, payload: zones });
        dispatch({ type: ZONE_ACTION.SET_SELECTED_ZONE, payload: zones[0] });
      } else {
        dispatch({ type: ZONE_ACTION.SET_ZONES, payload: [] });
      }
    };

    getPostsLimit();
    getZones();
  }, [dispatch, useZone.data?.data.data]);

  return (
    <>
      {/* <LoadingOverlay isLoading={isPending} message='Loading...' /> */}

      <DismissKeyboard>
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.homeContainer]}>
          {/* Hello Field */}
          <HomeWelcomeField />

          {/* CategoryField */}
          <HomeCategoryField />

          {/* Features Estate */}
          <HomeFeatureEstate />

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
      </DismissKeyboard>
    </>
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
    fontFamily: fontFam.bold,
    marginBottom: 10
  }
});

export default HomeScreen;
