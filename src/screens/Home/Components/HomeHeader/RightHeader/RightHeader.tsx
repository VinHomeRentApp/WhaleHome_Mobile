import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { typoColor } from '@constants/appColors';
import NotiHeader from '../NotiHeader/NotiIconHeader';

const HeaderBottomTabs = () => {
  return (
    <SafeAreaView style={headerStyles.outerContainer}>
      <View style={[headerStyles.innerContainer]}>
        <Image resizeMode='contain' style={headerStyles.textTitle} source={require('@assets/images/Title.png')} />
      </View>
      <NotiHeader />
      <View style={headerStyles.headerCircle}></View>
    </SafeAreaView>
  );
};

const headerStyles = StyleSheet.create({
  outerContainer: {
    zIndex: 0,
    backgroundColor: typoColor.black1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    height: 37,
    width: 200
  },
  headerCircle: {
    position: 'absolute',
    top: -200,
    left: -160,
    height: 400,
    width: 400,
    backgroundColor: '#907A79',
    opacity: 0.5,
    zIndex: 0,
    borderRadius: 220
  },
  textTitle: {
    position: 'absolute',
    top: 30,
    left: 15,
    zIndex: 2,
    height: 37,
    width: 190
  },
  logoTitle: {
    position: 'absolute',
    top: 15,
    left: 0,
    zIndex: 1,
    height: 60,
    width: 60
  }
});

export default HeaderBottomTabs;
