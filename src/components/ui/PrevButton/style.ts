import { typoColor } from '@constants/appColors';
import { StyleSheet } from 'react-native';

const PrevButtonStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -380,
    left: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: typoColor.white1,
    height: 39,
    width: 39,
    borderRadius: 50
  }
});

export default PrevButtonStyle;
