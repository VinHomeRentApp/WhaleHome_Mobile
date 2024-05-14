/* eslint-disable @typescript-eslint/no-var-requires */
import { typoColor } from '@constants/appColors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2 } from 'iconsax-react-native';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type TopOverviewPostProps = {
  post: Post;
};

const imageBackground = require('@assets/images/room-detail.jpg');

const TopOverviewPost = ({ post }: TopOverviewPostProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <ImageBackground
      style={{ height: 400 }}
      resizeMode='cover'
      source={post?.postImages[0]?.image_url ? { uri: post.postImages[0].image_url } : imageBackground}
    >
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft2 size='35' color={typoColor.yellow1} variant='Bold' />
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
