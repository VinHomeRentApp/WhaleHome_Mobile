import { typoColor } from '@constants/appColors';
import { StyleSheet } from 'react-native';

const NextButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: typoColor.yellow1,
    right: 100,
    bottom: -385,
    height: 48,
    width: 165,
    borderRadius: 10
  }
});

export default NextButtonStyles;
