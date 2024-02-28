import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { Heart, Location, Star } from 'iconsax-react-native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type RoomItemProps = {
  item: Post;
};

const RoomItem = ({ item }: RoomItemProps) => {
  return (
    <View style={styles.roomsOptionField}>
      <View style={styles.roomsOption}>
        <View style={styles.imageField}>
          <Image style={styles.image} resizeMode='cover' source={require('@assets/images/house.png')} />
        </View>
        <View style={styles.heartField}>
          <Heart size='18' color='#FF8A65' variant='Bold' />
        </View>
        <View style={styles.priceField}>
          <TextComponent styles={styles.priceText} content='$ 235' />
          <TextComponent styles={{ fontSize: 10 }} content='/month' />
        </View>
      </View>
      <View style={styles.detailField}>
        <TextComponent numberOfLines={1} styles={styles.detailTitle} content='Bungalow House' />
        <View style={styles.detail}>
          <Star size='18' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={styles.detailText} content='4.9' />
          <Location size='18' color={typoColor.blue1} variant='Bold' />
          <TextComponent numberOfLines={1} styles={styles.detailText} content='Jakarta, Indonesia' />
        </View>
      </View>
    </View>
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
    height: '85%',
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
    bottom: 85,
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
    maxWidth: 100
  },
  detailTitle: {
    maxWidth: 150,
    fontFamily: fontFam.bold,
    fontSize: 16,
    color: typoColor.black2,
    marginVertical: 10
  }
});

export default RoomItem;
