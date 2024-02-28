import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const NotFound = () => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} resizeMode='contain' source={require('@assets/images/Alert.png')} />
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  },
  image: {
    marginTop: 100,
    height: 300,
    width: '100%'
  }
});
