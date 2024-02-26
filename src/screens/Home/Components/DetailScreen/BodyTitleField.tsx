import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { DollarSquare, Location } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type BodyTitleFieldProps = {
  post: Post;
};

const BodyTitleField = ({ post }: BodyTitleFieldProps) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleField}>
        <TextComponent styles={styles.title} content={post.apartment.name} />
        <View style={styles.locationField}>
          <Location size='18' color={typoColor.yellow1} variant='Bold' />
          <TextComponent
            content={`${post.apartment.building.name}-${post.apartment.building.zone.name} - ${post.apartment.building.zone.area.name}`}
          />
        </View>
      </View>
      <View style={styles.priceField}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <DollarSquare size='32' color={typoColor.yellow1} variant='Bold' />
          <TextComponent styles={styles.title} content={`${post.apartment.apartmentClass.rent_price}`} />
        </View>
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
    maxWidth: 200
  }
});
