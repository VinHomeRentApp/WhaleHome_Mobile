import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyle from '@styles/globalStyle';
import { typoColor } from '@constants/appColors';
import { ArrowCircleLeft, Heart, Star } from 'iconsax-react-native';
import TextComponent from '@components/ui/TextComponent';

const DetailScreen = () => {
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <ScrollView>
        <ImageBackground resizeMode='cover' source={require('@assets/images/room-detail.jpg')}>
          <View style={styles.imageContainer}>
            <View style={styles.iconContainer}>
              <Pressable>
                <ArrowCircleLeft size='45' color={typoColor.yellow1} variant='Bold' />
              </Pressable>
              <Pressable>
                <Heart size='45' color={typoColor.yellow1} variant='Bold' />
              </Pressable>
            </View>
            <View style={styles.ratingField}>
              <Star size='18' color={typoColor.yellow1} variant='Bold' />
              <TextComponent styles={styles.textImage} content='4.9' />
            </View>
            <View style={styles.RoomField}>
              <TextComponent styles={styles.textImage} content='Room' />
            </View>
            <View style={styles.addOnImageField}>
              <View></View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: 500,
    margin: 4,
    borderRadius: 5
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20
  },
  textImage: {
    fontWeight: 'bold'
  },
  ratingField: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    flexDirection: 'row',
    backgroundColor: typoColor.black2,
    width: 85,
    height: 50,
    opacity: 0.9,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  RoomField: {
    position: 'absolute',
    bottom: 25,
    left: 120,
    flexDirection: 'row',
    backgroundColor: typoColor.black2,
    width: 85,
    height: 50,
    opacity: 0.9,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addOnImageField: {}
});
