import { StyleSheet, View } from 'react-native';
import Animated, { BounceInDown } from 'react-native-reanimated';

import React from 'react';

const landMark = '../../../../assets/images/LoginScreen/Landmark.png';
const church = '../../../../assets/images/LoginScreen/Church2.png';
const streetLight = '../../../../assets/images/LoginScreen/StreetLight.png';
const building = '../../../../assets/images/LoginScreen/Building.png';
const bitexco = '../../../../assets/images/LoginScreen/Bitexco.png';
const market = '../../../../assets/images/LoginScreen/Market.png';

const FooterLogin = () => {
  return (
    <View style={[styles.footerLogin]}>
      <Animated.Image entering={BounceInDown.delay(300)} style={[styles.church]} source={require(church)} />
      <Animated.Image entering={BounceInDown.delay(200)} style={[styles.landMark]} source={require(landMark)} />
      <Animated.Image entering={BounceInDown.delay(300)} style={[styles.streetLight]} source={require(streetLight)} />
      <Animated.Image entering={BounceInDown.delay(400)} style={[styles.building]} source={require(building)} />
      <Animated.Image entering={BounceInDown.delay(500)} style={[styles.streetLight]} source={require(streetLight)} />
      <Animated.Image entering={BounceInDown.delay(200)} style={[styles.bitexco]} source={require(bitexco)} />
      <Animated.Image entering={BounceInDown.delay(600)} style={[styles.market]} source={require(market)} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerLogin: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  church: {
    width: 68,
    height: 140,
    marginRight: 5
  },
  landMark: {
    width: 45,
    height: 245
  },
  streetLight: {
    width: 13,
    height: 80,
    marginHorizontal: 2
  },
  building: {
    width: 118,
    height: 220
  },
  bitexco: {
    width: 36,
    height: 150
  },
  market: {
    width: 90,
    height: 118
  }
});

export default FooterLogin;
