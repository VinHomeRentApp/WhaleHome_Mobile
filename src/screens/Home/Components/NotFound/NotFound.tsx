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
  imageContainer: {},
  image: {
    marginTop: 100,
    height: 250,
    width: 385
  }
});
