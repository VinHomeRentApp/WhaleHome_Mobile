import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { DollarSquare, Heart, Location, Star } from 'iconsax-react-native';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeFeatureEstate = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <View style={styles.featuresContainer}>
      <View style={styles.featureTitleContainer}>
        <TextComponent content='Featured Estates' styles={styles.featureTitle} />
        <Pressable>
          <TextComponent content='More' />
        </Pressable>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <Pressable
          onPress={() => navigation.navigate('DetailRoomScreen')}
          style={({ pressed }) => [styles.featureOptionField, pressed && globalStyle.pressed]}
        >
          <View style={styles.featureOption}>
            <View style={styles.featureImage}>
              <Image resizeMode='contain' source={require('@assets/images/tower.png')} />
            </View>
            <View style={styles.featureOptionTextField}>
              <View style={styles.featureOptionTitleField}>
                <TextComponent styles={styles.featureOptionTitle} content='Sky Dandelions Apartment' />
                <View style={styles.featureGroup}>
                  <Star size='18' color={typoColor.yellow1} variant='Bold' />
                  <Text style={styles.ratingText}>4.9</Text>
                </View>
                <View style={styles.featureGroup}>
                  <Location size='18' color={typoColor.blue1} variant='Bold' />
                  <TextComponent styles={styles.ratingText} content='Jakartha, Indonesia' />
                </View>
              </View>
              <View style={styles.featureGroup}>
                <DollarSquare size='24' color={typoColor.yellow1} variant='Outline' />
                <TextComponent styles={styles.priceText} content='290' />
                <TextComponent content='/Month' />
              </View>
            </View>
          </View>
          <View style={styles.categoryField}>
            <TextComponent styles={styles.cateText} content='Apartment' />
          </View>
          <View style={styles.heartField}>
            <Heart size='18' color='#FF8A65' variant='Outline' />
          </View>
        </Pressable>
        <View style={styles.featureOptionField}>
          <View style={styles.featureOption}>
            <View style={styles.featureImage}>
              <Image resizeMode='contain' source={require('@assets/images/tower.png')} />
            </View>
            <View style={styles.featureOptionTextField}>
              <View style={styles.featureOptionTitleField}>
                <TextComponent styles={styles.featureOptionTitle} content='Sky Dandelions Apartment' />
                <View style={styles.featureGroup}>
                  <Star size='18' color={typoColor.yellow1} variant='Bold' />
                  <Text style={styles.ratingText}>4.9</Text>
                </View>
                <View style={styles.featureGroup}>
                  <Location size='18' color={typoColor.blue1} variant='Bold' />
                  <TextComponent styles={styles.ratingText} content='Jakartha, Indonesia' />
                </View>
              </View>
              <View style={styles.featureGroup}>
                <DollarSquare size='24' color={typoColor.yellow1} variant='Outline' />
                <TextComponent styles={styles.priceText} content='290' />
                <TextComponent content='/Month' />
              </View>
            </View>
          </View>
          <View style={styles.categoryField}>
            <TextComponent styles={styles.cateText} content='Apartment' />
          </View>
          <View style={styles.heartField}>
            <Heart size='18' color='#FF8A65' variant='Bold' />
          </View>
        </View>
      </ScrollView>
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
    margin: 20,
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
    left: 35,
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
    left: 35,
    backgroundColor: typoColor.black2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  featureImage: {
    marginLeft: 10
  }
});
