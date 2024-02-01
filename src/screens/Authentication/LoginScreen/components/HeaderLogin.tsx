import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import Animated, { FadeInUp } from 'react-native-reanimated';

const lamp = '../../../../assets/images/LoginScreen/Lamp.png';
const title = '../../../../assets/images/main-logo.png';

const HeaderLogin = () => {
  return (
    <View style={[styles.headerContainer]}>
      <View style={[styles.headerLogin]}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={[styles.lamp1]}
          source={require(lamp)}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={[styles.lamp2]}
          source={require(lamp)}
        />
      </View>
      <View style={[styles.headerLoginTitle]}>
        <Image style={[styles.title]} source={require(title)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1
  },
  headerLogin: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lamp1: {
    top: -2,
    width: 70,
    height: 135,
    marginLeft: 70
  },
  lamp2: {
    top: -2,
    width: 51,
    height: 115,
    marginRight: 85
  },
  headerLoginTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    height: 110,
    width: 110,
    resizeMode: 'contain'
  }
});

export default HeaderLogin;
