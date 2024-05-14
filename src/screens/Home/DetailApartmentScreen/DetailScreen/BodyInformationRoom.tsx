/* eslint-disable @typescript-eslint/no-var-requires */
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Apartment from 'src/models/class/Apartment.class';

const heightIcon = require('@assets/images/icon/height.png');
const widthIcon = require('@assets/images/icon/width.png');
const lengthIcon = require('@assets/images/icon/length.png');
const areaIcon = require('@assets/images/icon/area.png');

type BodyFacilityFieldProps = {
  apartment: Apartment;
};

const BodyInformationRoom = ({ apartment }: BodyFacilityFieldProps) => {
  return (
    <View style={styles.facilitiesContainer}>
      <TextComponent styles={styles.facilityTitle} content='Information' />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image tintColor={typoColor.yellow2} style={styles.facilityIcon} resizeMode='contain' source={areaIcon} />
            <TextComponent styles={styles.facilityText} content={`Area: ${apartment.area}m2`} />
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image tintColor={typoColor.yellow2} style={styles.facilityIcon} resizeMode='contain' source={heightIcon} />
            <TextComponent styles={styles.facilityText} content={`Height: ${apartment.apartmentClass.height}m`} />
          </View>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image tintColor={typoColor.yellow2} style={styles.facilityIcon} resizeMode='contain' source={widthIcon} />
            <TextComponent styles={styles.facilityText} content={`Width: ${apartment.apartmentClass.width}m`} />
          </View>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image tintColor={typoColor.yellow2} style={styles.facilityIcon} resizeMode='contain' source={lengthIcon} />
            <TextComponent styles={styles.facilityText} content={`Length: ${apartment.apartmentClass.length}m`} />
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default BodyInformationRoom;

const styles = StyleSheet.create({
  facilitiesContainer: {},
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
    height: 17,
    width: 25
  },
  activeFacility: {
    backgroundColor: typoColor.yellow1
  }
});
