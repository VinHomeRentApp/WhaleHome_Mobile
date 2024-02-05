import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';

const BodyFacilityField = () => {
  return (
    <View style={styles.facilitiesContainer}>
      <TextComponent styles={styles.facilityTitle} content='Facilities' />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image
              style={styles.facilityIcon}
              resizeMode='contain'
              source={require('@assets/images/icon/bed-room-icon.png')}
            />
            <TextComponent styles={styles.facilityText} content='2 Bedroom' />
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image
              style={styles.facilityIcon}
              resizeMode='contain'
              source={require('@assets/images/icon/bath-room-icon.png')}
            />
            <TextComponent styles={styles.facilityText} content='1 Bathroom' />
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.facilityItem, pressed && styles.activeFacility]}>
          <View style={styles.facilityDetail}>
            <Image
              style={styles.facilityIcon}
              resizeMode='contain'
              source={require('@assets/images/icon/air-conditioner-icon.png')}
            />
            <TextComponent styles={styles.facilityText} content='3 Air Conditioner' />
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
