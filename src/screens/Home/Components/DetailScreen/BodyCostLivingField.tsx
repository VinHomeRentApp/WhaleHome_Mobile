import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import globalStyle from '@styles/globalStyle';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type BodyCostLivingFieldProps = {
  post: Post;
};

const BodyCostLivingField = ({ post }: BodyCostLivingFieldProps) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <TextComponent styles={styles.titleText} content='Cost of Living' />
        <Pressable style={({ pressed }) => [pressed && globalStyle.pressed, styles.viewMoreField]}>
          <TextComponent styles={{ color: typoColor.black1 }} content='View Details' />
        </Pressable>
      </View>
      <View style={styles.costBodyContainer}>
        <TextComponent styles={styles.costTitle} content={`$ ${post.apartment.apartmentClass.rent_price}/month`} />
        <TextComponent styles={styles.costDetail} content='From average citizen spend around this location' />
      </View>
    </View>
  );
};

export default BodyCostLivingField;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10
  },
  titleText: {
    fontSize: 18,
    fontFamily: fontFam.bold
  },
  costBodyContainer: {
    backgroundColor: typoColor.white1,
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    padding: 15
  },
  costTitle: {
    color: typoColor.black1,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10
  },
  costDetail: {
    color: typoColor.black1,
    fontSize: 12,
    marginLeft: 10
  },
  viewMoreField: {
    backgroundColor: typoColor.yellow1,
    padding: 5,
    borderRadius: 20,
    fontFamily: fontFam.bold
  }
});
