import { typoColor } from '@constants/appColors';
import { StyleSheet } from 'react-native';

const GetStartedButtonStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: typoColor.yellow1,
    height: 48,
    width: 165,
    borderRadius: 10
  }
});

export default GetStartedButtonStyle;
