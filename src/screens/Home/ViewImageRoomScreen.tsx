import BodyAdminContact from '@components/ui/AdminContact';
import { typoColor } from '@constants/appColors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft } from 'iconsax-react-native';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

const ViewImageRoomScreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft size='45' color={typoColor.yellow1} variant='Bold' />
        </Pressable>
      </View>
      <Swiper>
        <ImageBackground source={require('@assets/images/room-detail-1.jpg')} />
        <ImageBackground source={require('@assets/images/room-detail-2.jpg')} />
        <ImageBackground source={require('@assets/images/room-detail-3.jpg')} />
      </Swiper>
      <BodyAdminContact />
    </View>
  );
};

export default ViewImageRoomScreen;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20
  }
});
