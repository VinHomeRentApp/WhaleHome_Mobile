/* eslint-disable @typescript-eslint/no-var-requires */
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import { Heart, Location, Star } from 'iconsax-react-native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Post from 'src/models/class/Post.class';

const houseDefaultImage = require('../../assets/images/house.png');

type RoomItemProps = {
  item: Post;
};

const RoomItem = ({ item }: RoomItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.push('DetailPostScreen', { post: item })}
      style={styles.roomsOptionField}
    >
      <View style={styles.roomsOption}>
        <View style={styles.imageField}>
          <Image
            style={styles.image}
            resizeMode='cover'
            source={
              item?.postImages[0]?.image_url
                ? {
                    uri: item.postImages[0].image_url
                  }
                : houseDefaultImage
            }
          />
        </View>
        <View style={styles.heartField}>
          <Heart size='18' color={typoColor.pink1} variant='Bold' />
        </View>
        <View style={styles.priceField}>
          <TextComponent styles={styles.priceText} content='$ 235' />
          <TextComponent styles={{ fontSize: 10 }} content='/month' />
        </View>
      </View>
      <View style={styles.detailField}>
        <TextComponent numberOfLines={1} styles={styles.detailTitle} content={item.title} />
        <TextComponent numberOfLines={2} styles={styles.detailText} content={`${item.description}`} />
        <TextComponent numberOfLines={1} styles={styles.detailText} content={`Time: ${item.createDate}`} />
        <View style={styles.detail}>
          <Star size='18' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={styles.detailText} content='4.9' />
          <Location size='18' color={typoColor.blue1} variant='Bold' />
          <TextComponent
            numberOfLines={3}
            styles={styles.detailText}
            content={`${item.apartment.building.name}-${item.apartment.building.zone.name} - ${item.apartment.building.zone.area.name}`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  roomsOptionField: {
    width: '50%', // Adjust the width to leave some space between items
    padding: '3%',
    marginBottom: -60
  },
  roomsOption: {
    height: 300,
    borderRadius: 20,
    backgroundColor: typoColor.white1,
    overflow: 'hidden'
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
    width: '95%'
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
    fontSize: 16,
    fontFamily: fontFam.bold
  },
  detailField: {
    position: 'relative',
    bottom: 110,
    marginVertical: 10,
    marginHorizontal: 20
  },
  detail: {
    flexDirection: 'row'
  },
  detailText: {
    marginRight: 5,
    color: typoColor.black2,
    fontSize: 11,
    maxWidth: '80%'
  },
  detailTitle: {
    maxWidth: 150,
    fontFamily: fontFam.bold,
    fontSize: 16,
    color: typoColor.black2,
    marginTop: 10
  }
});

export default RoomItem;
