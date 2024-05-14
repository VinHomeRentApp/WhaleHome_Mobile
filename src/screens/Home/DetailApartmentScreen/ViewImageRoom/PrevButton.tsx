import { typoColor } from '@constants/appColors';
import { ArrowLeft2 } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const PrevButton = () => {
  return (
    <View style={styles.container}>
      <ArrowLeft2 size='32' color={typoColor.black2} />
    </View>
  );
};

export default PrevButton;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    right: 10,
    backgroundColor: typoColor.yellow1,
    justifyContent: 'center',
    height: 100,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  }
});
