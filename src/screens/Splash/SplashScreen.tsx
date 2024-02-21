import TextComponent from '@components/ui/TextComponent/TextComponent';
import { typoColor } from '@constants/appColors';
import globalStyle from '@styles/globalStyle';
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

const LOGO_PATH = '../../assets/images/main-logo.png';

const SplashScreen = () => {
  return (
    <View style={[globalStyle.container, styles.splashScreen]}>
      <View style={[styles.logoContainer]}>
        <Image style={[styles.logo]} source={require(LOGO_PATH)} />
      </View>
      <ActivityIndicator />
      <View style={styles.sloganText}>
        <TextComponent content='Whale Home' fontSize={12} textColor={typoColor.gray2} styles={{ marginRight: 25 }} />
        <TextComponent content='Well Life' fontSize={12} textColor={typoColor.gray2} styles={{ marginLeft: 50 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    position: 'relative'
  },
  logo: {
    width: 130,
    height: 130
  },
  sloganText: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SplashScreen;
