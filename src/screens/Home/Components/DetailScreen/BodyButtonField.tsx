import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

const BodyButtonField = () => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buyAndRentContainer}>
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.activeButton]}>
          <TextComponent styles={styles.textButton} content='Rent' />
        </Pressable>
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.activeButton]}>
          <TextComponent styles={styles.textButton} content='Buy' />
        </Pressable>
      </View>
      <Pressable style={({ pressed }) => [styles.view3dButton, pressed && styles.activeButton]}>
        <Image style={styles.iconImage} resizeMode='contain' source={require('@assets/images/icon/360.png')} />
      </Pressable>
    </View>
  );
};

export default BodyButtonField;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  buyAndRentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 70,
    backgroundColor: typoColor.white1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 50,
    borderRadius: 10
  },
  textButton: {
    color: typoColor.black2,
    fontWeight: 'bold'
  },
  activeButton: {
    backgroundColor: typoColor.yellow1
  },
  view3dButton: {
    backgroundColor: typoColor.white1,
    width: 70,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  iconImage: {
    width: '60%',
    height: '60%'
  }
});
