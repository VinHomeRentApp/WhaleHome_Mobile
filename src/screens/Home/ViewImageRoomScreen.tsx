/* eslint-disable @typescript-eslint/no-var-requires */
import BodyAdminContact from '@components/ui/AdminContact';
import { typoColor } from '@constants/appColors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft } from 'iconsax-react-native';
import React from 'react';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import NextButton from './Components/ViewImageRoom/NextButton';
import PrevButton from './Components/ViewImageRoom/PrevButton';

const imageBackground = require('@assets/images/room-detail.jpg');
const imageBackground1 = require('@assets/images/room-detail-1.jpg');
const imageBackground2 = require('@assets/images/room-detail-2.jpg');
const imageBackground3 = require('@assets/images/room-detail-3.jpg');

const ViewImageRoomScreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={[globalStyle.container, styles.container]}>
      {/* image */}
      <Swiper
        nextButton={<NextButton />}
        prevButton={<PrevButton />}
        showsButtons={true}
        showsPagination={false}
        scrollEnabled={false}
      >
        <ImageBackground
          style={globalStyle.imageBackground}
          resizeMode='cover'
          source={imageBackground}
        ></ImageBackground>
        <ImageBackground
          style={globalStyle.imageBackground}
          resizeMode='cover'
          source={imageBackground1}
        ></ImageBackground>
        <ImageBackground
          style={globalStyle.imageBackground}
          resizeMode='cover'
          source={imageBackground2}
        ></ImageBackground>
        <ImageBackground
          style={globalStyle.imageBackground}
          resizeMode='cover'
          source={imageBackground3}
        ></ImageBackground>
      </Swiper>

      {/* Back button */}
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft size='45' color={typoColor.yellow1} variant='Bold' />
        </Pressable>
      </View>

      {/* Admin contact */}
      <View style={styles.bodyAdminContactContainer}>
        <BodyAdminContact />
      </View>
    </SafeAreaView>
  );
};

export default ViewImageRoomScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  iconContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  bodyAdminContactContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    width: '90%',
    zIndex: 1
  }
});
