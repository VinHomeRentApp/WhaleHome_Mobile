import { typoColor } from '@constants/appColors';
import { ArrowRight2 } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const NextButton = () => {
  return (
    <View style={styles.container}>
      <ArrowRight2 size='32' color={typoColor.black3} />
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    left: 10,
    backgroundColor: typoColor.yellow1,
    justifyContent: 'center',
    height: 100,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  }
});
