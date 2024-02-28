/* eslint-disable @typescript-eslint/no-var-requires */
import { typoColor } from '@constants/appColors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft } from 'iconsax-react-native';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type TopOverviewPostProps = {
  post: Post;
};

const imageBackground = require('@assets/images/room-detail.jpg');

const TopOverviewPost = ({ post }: TopOverviewPostProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const imageUrl = post && post.postImages && post.postImages[0] && post.postImages[0].image_url;
  return (
    <ImageBackground style={{ height: 200 }} resizeMode='cover' source={imageUrl ?? imageBackground}>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft size='45' color={typoColor.yellow1} variant='Bold' />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default TopOverviewPost;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20
  }
});