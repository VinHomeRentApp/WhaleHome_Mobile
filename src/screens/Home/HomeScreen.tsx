/* eslint-disable react/no-unescaped-entities */
import postApi from '@apis/post.apis';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { POST_ACTION } from '@contexts/types/post.types';
import { ZONE_ACTION } from '@contexts/types/zone.types';
import useRootContext from '@hooks/useRootContext';
import { useZones } from '@services/queries/zone.queries';
import { HttpStatusCode } from 'axios';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import HomeCategoryField from './Components/HomeBody/HomeCategoryField';
import HomeFeatureEstate from './Components/HomeBody/HomeFeatureEstate';
import HomePostsField from './Components/HomeBody/HomePostsField';
import HomeSaleField from './Components/HomeBody/HomeSaleField';
import HomeSearchField from './Components/HomeBody/HomeSearchField';

import HomeTopBuilding from './Components/HomeBody/HomeTopBuilding';
import HomeTopUser from './Components/HomeBody/HomeTopUser';
import HomeWelcomeField from './Components/HomeBody/HomeWelcomeField';

const HomeScreen = () => {
  const { dispatch } = useRootContext();
  const useZone = useZones();

  useEffect(() => {
    const getPostsLimit = async () => {
      dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: true });
      const response = await postApi.getPostWithLimit({ page: 1, size: 5, field: 'title' });
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
    </TouchableWithoutFeedback>
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
