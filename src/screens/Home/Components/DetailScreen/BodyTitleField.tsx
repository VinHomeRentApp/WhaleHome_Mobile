import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { Location } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const BodyTitleField = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleField}>
        <TextComponent styles={styles.title} content='Wings Tower' />
        <View style={styles.locationField}>
          <Location size='18' color={typoColor.yellow1} variant='Bold' />
          <TextComponent content='Jakarta Indonesia' />
        </View>
      </View>
      <View style={styles.priceField}>
        <TextComponent styles={styles.title} content='$ 220' />
        <TextComponent content='Per Months' />
      </View>
    </View>
  );
};

export default BodyTitleField;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20
  },
  titleField: {
    maxWidth: 200
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  },
  locationField: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  priceField: {
    maxWidth: 100
  }
});
