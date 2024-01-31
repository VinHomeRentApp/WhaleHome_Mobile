import { typoColor } from '@constants/appColors';
import { StyleSheet } from 'react-native';

const GetStartedButtonStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: typoColor.yellow1,
    right: 110,
    bottom: 37,
    height: 48,
    width: 165,
    borderRadius: 10
  }
});

export default GetStartedButtonStyle;
