import React from 'react';
import { StyleSheet, View } from 'react-native';

const HeaderSignUp = () => {
  return <View style={[styles.container]}></View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 0
  },
  goBackContainer: {
    marginLeft: 10,
    minWidth: 56.3
  }
});

export default HeaderSignUp;
