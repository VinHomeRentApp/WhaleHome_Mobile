import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { Heart, Location, Star } from 'iconsax-react-native';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type HomePostItemProps = {
  post: Post;
};

const HomePostItem = ({ post }: HomePostItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const route = useRoute<RouteProp<MainStackParamList>>();

  const handleNavigation = (post: Post) => {
    if (route.name === 'DetailPostScreen') {
      navigation.push('DetailPostScreen', { post });
    } else {
      navigation.navigate('DetailPostScreen', { post });
    }
  };

  return (
    <Pressable
      onPress={() => handleNavigation(post)}
      style={({ pressed }) => [styles.roomsOptionField, pressed && globalStyle.pressed]}
    >
      <View style={styles.roomsOption}>
        <View style={styles.imageField}>
          <Image
            style={styles.image}
            resizeMode='cover'
            source={
              post?.postImages[0]?.image_url
                ? {
                    uri: post.postImages[0].image_url
                  }
                : require('@assets/images/tower.png')
            }
          />
        </View>
        <View style={styles.heartField}>
          <Heart size='18' color={typoColor.pink1} variant='Bold' />
        </View>
        <View style={styles.priceField}>
          <TextComponent
            numberOfLines={1}
            styles={styles.priceText}
            content={String(post.apartment.apartmentClass.buy_price)}
          />
          <TextComponent styles={{ fontSize: 10 }} content='/month' />
        </View>
      </View>
      <View style={styles.detailField}>
        <TextComponent numberOfLines={1} styles={styles.detailTitle} content={post.title} />
        <TextComponent numberOfLines={1} styles={styles.detailText} content={`${post.description}`} />
        <TextComponent numberOfLines={1} styles={styles.detailText} content={`Time: ${post.createDate}`} />
        <View style={styles.detail}>
          <Star size='18' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={styles.detailText} content='4.9' />
          <Location size='18' color={typoColor.blue1} variant='Bold' />
          <TextComponent
            numberOfLines={1}
            styles={styles.detailText}
            content={`${post.apartment.building.name}-${post.apartment.building.zone.name} - ${post.apartment.building.zone.area.name}`}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default HomePostItem;

const styles = StyleSheet.create({
  roomsOptionField: {
    marginTop: 10,
    marginLeft: 15,
    marginBottom: -25
  },
  roomsOption: {
    height: 320,
    borderRadius: 20,
    backgroundColor: typoColor.white1
  },
  imageField: {
    position: 'relative',
    top: -10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    borderRadius: 20,
    height: '80%',
    width: '90%'
  },
  heartField: {
    position: 'absolute',
    top: 20,
    right: '10%',
    height: 30,
    width: 30,
    backgroundColor: typoColor.black2,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  priceField: {
    position: 'absolute',
    bottom: 90,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: typoColor.black2,
    opacity: 0.8,
    borderRadius: 20,
    height: 35,
    width: 100
  },
  priceText: {
    maxWidth: 50,
    fontSize: 16,
    fontFamily: fontFam.bold
  },
  detailField: {
    position: 'relative',
    top: -100,
    marginVertical: 10,
    marginHorizontal: 20
  },
  detail: {
    flexDirection: 'row'
  },
  detailText: {
    marginRight: 5,
    marginBottom: 5,
    color: typoColor.black2,
    fontSize: 11,
    maxWidth: 100
  },
  detailTitle: {
    maxWidth: 150,
    fontFamily: fontFam.bold,
    fontSize: 16,
    color: typoColor.black2
  }
});
