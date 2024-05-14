import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import {
  airConditionerIconImage,
  bathRoomIconImage,
  bedRoomIconImage,
  kitchenIconImage,
  livingRoomIconImage
} from '@constants/appConstants';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Apartment from 'src/models/class/Apartment.class';

type BodyFacilityFieldProps = {
  apartment: Apartment;
};

const BodyFacilityField = ({ apartment }: BodyFacilityFieldProps) => {
  return (
    <View style={styles.facilitiesContainer}>
      <TextComponent styles={styles.facilityTitle} content='Facilities' />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image style={styles.facilityIcon} resizeMode='contain' source={bedRoomIconImage} />
            <TextComponent styles={styles.facilityText} content={`${apartment.bed_room} Bedrooms`} />
          </View>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image style={styles.facilityIcon} resizeMode='contain' source={bathRoomIconImage} />
            <TextComponent styles={styles.facilityText} content={`${apartment.rest_room} Bathrooms`} />
          </View>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image style={styles.facilityIcon} resizeMode='contain' source={airConditionerIconImage} />
            <TextComponent styles={styles.facilityText} content={`${apartment.air_conditioner} Air Conditioners`} />
          </View>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image style={styles.facilityIcon} resizeMode='contain' source={kitchenIconImage} />
            <TextComponent styles={styles.facilityText} content={`${apartment.kitchen} Kitchens`} />
          </View>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image
              style={styles.facilityIcon}
              tintColor={typoColor.yellow2}
              resizeMode='contain'
              source={livingRoomIconImage}
            />
            <TextComponent styles={styles.facilityText} content={`${apartment.kitchen} Living Rooms`} />
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default BodyFacilityField;

const styles = StyleSheet.create({
  facilitiesContainer: {
    marginVertical: 20
  },
  facilityTitle: {
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 18
  },
  facilityItem: {
    backgroundColor: typoColor.white1,
    marginHorizontal: 10,
    height: 40,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  facilityText: {
    color: typoColor.black1,
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 20
  },
  facilityDetail: {
    flexDirection: 'row'
  },
  facilityIcon: {
    marginLeft: 10,
    height: 15,
    width: 25
  },
  activeFacility: {
    backgroundColor: typoColor.yellow1
  }
});
