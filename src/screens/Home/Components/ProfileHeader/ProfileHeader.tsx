import TextComponent from '@components/ui/TextComponent';
import { backgroundColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { ArrowCircleLeft } from 'iconsax-react-native';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import NotiHeader from '../HomeHeader/NotiHeader/NotiIconHeader';
import SettingHeader from './SettingHeader/SettingHeader';

const ProfileHeader = () => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.backIconContainer}>
        <Pressable>
          <ArrowCircleLeft size='34' color={backgroundColor.black1} variant='Outline' />
        </Pressable>
      </View>
      <View style={[styles.innerContainer]}>
        <TextComponent styles={styles.title} content='Profile' />
      </View>
      <SettingHeader />
    </SafeAreaView>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  outerContainer: {
    zIndex: 0,
    backgroundColor: typoColor.black1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backIconContainer: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: fontFam.bold
  }
});
