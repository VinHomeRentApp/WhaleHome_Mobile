import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import globalStyle from '@styles/globalStyle';
import { DollarSquare, Heart, Location, Star } from 'iconsax-react-native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type ReviewPostItemProps = {
  post: Post;
};

const ReviewPostItem = ({ post }: ReviewPostItemProps) => {
  return (
    <Pressable style={({ pressed }) => [styles.featureOptionField, pressed && globalStyle.pressed]}>
      <View style={styles.featureOption}>
        <View style={styles.featureImage}>
          <Image style={styles.image} resizeMode='cover' source={require('@assets/images/tower.png')} />
        </View>
        <View style={styles.featureOptionTextField}>
          <View style={styles.featureOptionTitleField}>
            <TextComponent styles={styles.featureOptionTitle} content={post.apartment.name} />
            <View style={styles.featureGroup}>
              <Star size='24' color={typoColor.yellow1} variant='Bold' />
              <Text style={styles.ratingText}>4.9</Text>
            </View>
            <View style={styles.featureGroup}>
              <Location size='24' color={typoColor.blue1} variant='Bold' />
              <TextComponent
                styles={styles.ratingText}
                content={`${post.apartment.building.name}-${post.apartment.building.zone.name} - ${post.apartment.building.zone.area.name}`}
              />
            </View>
          </View>
          <View style={styles.featureGroup}>
            <DollarSquare size='24' color={typoColor.yellow1} variant='Bold' />
            <TextComponent styles={styles.priceText} content={`${post.apartment.apartmentClass.rent_price}`} />
            <TextComponent styles={styles.priceText} content='/Month' />
          </View>
        </View>
      </View>
      <View style={styles.categoryField}>
        <TextComponent styles={styles.cateText} content={post.apartment.apartmentClass.name} />
      </View>
      <View style={styles.heartField}>
        <Heart size='18' color='#FF8A65' variant='Bold' />
      </View>
    </Pressable>
  );
};

export default ReviewPostItem;

const styles = StyleSheet.create({
  featuresContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  featureTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  },
  featureTitle: {
    fontSize: 18,
    fontFamily: fontFam.bold,
    color: typoColor.black1
  },
  featureOptionField: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  featureOption: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 170,
    width: '98%',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 20,
    backgroundColor: typoColor.white1
  },
  featureOptionTextField: {
    marginLeft: 10,
    width: 150
  },
  featureOptionTitleField: {
    marginBottom: 20
  },
  featureOptionTitle: {
    fontSize: 22,
    fontFamily: fontFam.bold,
    color: typoColor.black1
  },
  featureGroup: { flexDirection: 'row' },
  ratingText: {
    fontSize: 16,
    marginTop: 3,
    color: typoColor.black1
  },
  priceText: {
    fontSize: 18,
    color: typoColor.black1
  },
  categoryField: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    backgroundColor: typoColor.black2,
    height: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  cateText: {
    fontSize: 10
  },
  heartField: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 35,
    left: 30,
    backgroundColor: typoColor.black2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  featureImage: {
    marginLeft: 10
  },
  image: {
    marginVertical: 10,
    borderRadius: 20,
    minWidth: 150,
    maxWidth: 500,
    minHeight: 150,
    maxHeight: 500
  }
});
