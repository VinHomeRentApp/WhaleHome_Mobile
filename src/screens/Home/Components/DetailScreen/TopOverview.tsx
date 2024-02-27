/* eslint-disable @typescript-eslint/no-var-requires */
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft, Heart, Star } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

const imageBackground = require('@assets/images/room-detail.jpg');
const imageBackground1 = require('@assets/images/room-detail-1.jpg');
const imageBackground2 = require('@assets/images/room-detail-2.jpg');
// const imageBackground3 = require('@assets/images/room-detail-3.jpg');

type TopOverViewProps = {
  post: Post;
};

const TopOverview = ({ post }: TopOverViewProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const [imageBackgroundState, setImageBackgroundState] = useState(imageBackground);

  return (
    <ImageBackground resizeMode='cover' source={imageBackgroundState}>
      <View style={styles.imageContainer}>
        {/* Pressable Back and Favorite */}
        <View style={styles.iconContainer}>
          <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
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
          <TextComponent styles={styles.textImage} content={post.apartment.apartmentClass.name} />
        </View>
        {/* Add on Image Field */}
        <View style={styles.addOnImageField}>
          <Pressable
            onPress={() => setImageBackgroundState(imageBackground)}
            style={({ pressed }) => [pressed && globalStyle.pressed]}
          >
            <Image style={styles.addOnImage} resizeMode='cover' source={imageBackground} />
          </Pressable>

          <Pressable
            onPress={() => setImageBackgroundState(imageBackground1)}
            style={({ pressed }) => [pressed && globalStyle.pressed]}
          >
            <Image style={styles.addOnImage} resizeMode='cover' source={imageBackground1} />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('ViewImageRoomScreen');
            }}
            style={({ pressed }) => pressed && globalStyle.pressed}
          >
            <Image style={styles.addOnImage} resizeMode='cover' source={imageBackground2} />
            <View style={styles.addOnNumberImage}>
              <TextComponent content='+3' />
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TopOverview;

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
  addOnImageField: {
    position: 'absolute',
    bottom: 20,
    right: 10
  },
  addOnImage: {
    borderColor: typoColor.black2,
    borderWidth: 2,
    borderRadius: 10,
    height: 60,
    width: 75,
    marginBottom: 10
  },
  addOnNumberImage: {
    position: 'absolute',
    height: 60,
    width: 75,
    right: 1,
    bottom: 10,
    backgroundColor: typoColor.black1,
    opacity: 0.7,
    color: typoColor.white1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
