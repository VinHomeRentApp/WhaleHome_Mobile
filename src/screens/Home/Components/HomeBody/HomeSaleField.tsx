import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { ArrowCircleRight2 } from 'iconsax-react-native';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';

const HomeSaleField = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.saleFieldContainer}>
        <Image style={styles.saleImage} resizeMode='contain' source={require('@assets/images/houseImage.png')} />
        <View style={styles.saleTextContainer}>
          <TextComponent content={'Halloween Sale!'} styles={styles.saleTitle} />
          <TextComponent content={'All discount up to 60%'} styles={styles.saleText} />
        </View>
        <Pressable style={styles.buttonContainer}>
          <ArrowCircleRight2 size='25' color={typoColor.white1} variant='Broken' />
        </Pressable>
      </View>
      <View style={styles.saleFieldContainer}>
        <Image style={styles.saleImage} resizeMode='contain' source={require('@assets/images/houseImage.png')} />
        <View style={styles.saleTextContainer}>
          <TextComponent content={'Halloween Sale!'} styles={styles.saleTitle} />
          <TextComponent content={'All discount up to 60%'} styles={styles.saleText} />
        </View>
        <Pressable style={styles.buttonContainer}>
          <ArrowCircleRight2 size='25' color={typoColor.white1} variant='Broken' />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeSaleField;

const styles = StyleSheet.create({
  saleFieldContainer: {
    justifyContent: 'flex-start',
    marginHorizontal: 20
  },
  saleImage: {
    width: 300,
    height: 250
  },
  saleTextContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
    padding: 10,
    borderRadius: 12,
    backgroundColor: typoColor.gray3,
    opacity: 0.8
  },
  saleTitle: {
    fontSize: 18,
    color: typoColor.white1,
    fontFamily: fontFam.bold
  },
  saleText: {
    fontSize: 10
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    backgroundColor: typoColor.yellow1,
    height: 40,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 20
  }
});
