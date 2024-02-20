import { backgroundColor } from '@constants/appColors';
import { StyleSheet } from 'react-native';

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor.black1
  },
  pressed: {
    opacity: 0.5
  }
});

export default globalStyle;
