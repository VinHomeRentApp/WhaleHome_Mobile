import Loading from '@components/ui/Loading';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { DollarSquare, Heart, Location, Star } from 'iconsax-react-native';
import { isEmpty } from 'lodash';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const HomeFeatureEstate = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const { state } = useRootContext();
  const { posts, isLoadingPost } = state.post;

  if (isLoadingPost) {
    return <Loading />;
  }

  return (
    <View style={styles.featuresContainer}>
      <View style={styles.featureTitleContainer}>
        <TextComponent content='Featured Estates' styles={styles.featureTitle} />
        <Pressable style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <TextComponent content='More' />
        </Pressable>
      </View>
      {isLoadingPost ? (
        <Loading />
      ) : isEmpty(posts) ? (
        <View>
          <TextComponent content='Not Found Any Posts' />
        </View>
      ) : (
        <FlatList
          data={posts}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index: key, item: post }) => (
            <Pressable
              key={key}
              onPress={() => navigation.navigate('DetailRoomScreen', { post: post })}
              style={({ pressed }) => [styles.featureOptionField, pressed && globalStyle.pressed]}
            >
              <View style={styles.featureOption}>
                <View style={styles.featureImage}>
                  <Image
                    style={{ width: '100%', height: '100%', borderRadius: 20 }}
                    resizeMode='cover'
                    source={
                      post?.postImages[0]?.image_url
                        ? { uri: post?.postImages[0]?.image_url }
                        : require('@assets/images/tower.png')
                    }
                  />
                </View>
                <View style={styles.featureOptionTextField}>
                  <View style={styles.featureOptionTitleField}>
                    <TextComponent styles={styles.featureOptionTitle} content={post.apartment.name} />
                    <View style={styles.featureGroup}>
                      <Star size='18' color={typoColor.yellow1} variant='Bold' />
                      <Text style={styles.ratingText}>4.9</Text>
                    </View>
                    <View style={styles.featureGroup}>
                      <Location size='18' color={typoColor.blue1} variant='Bold' />
                      <TextComponent
                        styles={styles.ratingText}
                        content={`${post.apartment.building.name}-${post.apartment.building.zone.name} - ${post.apartment.building.zone.area.name}`}
                      />
                    </View>
                  </View>
                  <View style={styles.featureGroup}>
                    <DollarSquare size='24' color={typoColor.yellow1} variant='Bold' />
                    <TextComponent styles={styles.priceText} content={`${post.apartment.apartmentClass.rent_price}`} />
                    <TextComponent content='/Month' />
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
          )}
        />
      )}
    </View>
  );
};

export default HomeFeatureEstate;

const styles = StyleSheet.create({
  featuresContainer: {
    marginBottom: 10
  },
  featureTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  featureTitle: {
    fontSize: 18,
    fontFamily: fontFam.bold
  },
  featureOptionField: {},
  featureOption: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 20,
    backgroundColor: typoColor.black2
  },
  featureOptionTextField: {
    marginLeft: 10,
    width: 150
  },
  featureOptionTitleField: {
    marginBottom: 20
  },
  featureOptionTitle: {
    fontSize: 16,
    fontFamily: fontFam.bold
  },
  featureGroup: { flexDirection: 'row' },
  ratingText: {
    fontSize: 12,
    marginTop: 3,
    color: typoColor.white1
  },
  priceText: {
    fontSize: 18
  },
  categoryField: {
    position: 'absolute',
    bottom: 35,
    left: 20,
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
    top: 40,
    left: 20,
    backgroundColor: typoColor.black2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  featureImage: {
    height: '100%',
    width: '45%'
  }
});
