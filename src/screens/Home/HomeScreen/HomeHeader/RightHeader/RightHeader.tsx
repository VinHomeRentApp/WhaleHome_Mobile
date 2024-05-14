import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotiHeader from '../NotiHeader/NotiIconHeader';

const HeaderBottomTabs = () => {
  const {
    state: {
      auth: { currentUser }
    }
  } = useRootContext();

  return (
    <SafeAreaView style={headerStyles.outerContainer}>
      <View style={[headerStyles.innerContainer]}>
        {/* <Image resizeMode='contain' style={headerStyles.textTitle} source={require('@assets/images/Title.png')} /> */}
        <Image
          style={{ height: 65, width: 65, borderRadius: 40 }}
          resizeMode='cover'
          source={require('@assets/images/main-logo.png')}
        />
        <TextComponent content='Whale Home' styles={{ fontFamily: fontFam.extraBold, fontSize: 28, marginTop: 15 }} />
      </View>
      <NotiHeader />
    </SafeAreaView>
  );
};

const headerStyles = StyleSheet.create({
  outerContainer: {
    zIndex: 0,
    backgroundColor: typoColor.black1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: -100
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
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
