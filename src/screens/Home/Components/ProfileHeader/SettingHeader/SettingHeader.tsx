import { typoColor } from '@constants/appColors';
import { Setting2 } from 'iconsax-react-native';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

export const SettingHeader = () => {
  return (
    <Pressable style={HeaderStyles.container}>
      <Setting2 size='24' color='#F5F4F8' />
    </Pressable>
  );
};

const HeaderStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginRight: 15,
    marginBottom: 25,
    width: 35,
    height: 35,
    justifyContent: 'center',
    backgroundColor: typoColor.gray4,
    borderRadius: 40,
    alignItems: 'center'
  }
});

export default SettingHeader;
