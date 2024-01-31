import { appInfo } from '@constants/appInfo';
import { StyleSheet } from 'react-native';

const OnboardingScreenStyle = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: appInfo.sizes.WIDTH,
    height: appInfo.sizes.HEIGHT,
    resizeMode: 'cover'
  }
});

export default OnboardingScreenStyle;
