/* eslint-disable @typescript-eslint/no-var-requires */
import BodyAdminContact from '@components/ui/AdminContact';
import { typoColor } from '@constants/appColors';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2 } from 'iconsax-react-native';
import React from 'react';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import NextButton from './DetailApartmentScreen/ViewImageRoom/NextButton';
import PrevButton from './DetailApartmentScreen/ViewImageRoom/PrevButton';

const imageBackground = require('@assets/images/room-detail.jpg');

const ViewImageRoomScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const route = useRoute<RouteProp<MainStackParamList, 'ViewImageRoomScreen'>>();
  const { postImage } = route.params;

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
        {postImage.map((image, index) => (
          <ImageBackground
            key={index}
            style={globalStyle.imageBackground}
            resizeMode='cover'
            source={image?.image_url ? { uri: image.image_url } : imageBackground}
          ></ImageBackground>
        ))}
      </Swiper>

      {/* Back button */}
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft2 size='35' color={typoColor.yellow1} variant='Bold' />
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
