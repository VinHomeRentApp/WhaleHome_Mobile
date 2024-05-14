import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type BodyDescriptionFieldProps = {
  post: Post;
};

const BodyDescriptionField = ({ post }: BodyDescriptionFieldProps) => {
  return (
    <>
      <View style={styles.descriptionField}>
        <TextComponent styles={styles.descriptionTextTitle} content={`Description:`} />
        <View style={styles.descriptionTextField}>
          <TextComponent styles={styles.descriptionText} content={`${post.description}`} />
        </View>
      </View>
      <View style={styles.descriptionField}>
        <TextComponent styles={styles.descriptionTextTitle} content='Apartment Information:' />
        <View style={styles.descriptionTextField}>
          <TextComponent styles={styles.descriptionText} content={`Apartment Name: ${post.apartment.name}`} />

          <TextComponent styles={styles.descriptionText} content={`Building Name: ${post.apartment.building.name}`} />

          <TextComponent styles={styles.descriptionText} content={`Zone Name: ${post.apartment.building.zone.name}`} />

          <TextComponent
            styles={styles.descriptionText}
            content={`Area Name: ${post.apartment.building.zone.area.name}`}
          />
        </View>
      </View>
    </>
  );
};

export default BodyDescriptionField;

const styles = StyleSheet.create({
  descriptionField: {
    backgroundColor: typoColor.white1,
    margin: 10,
    borderRadius: 20,
    padding: 10
  },
  descriptionTextField: {
    marginLeft: 40
  },
  descriptionText: {
    color: typoColor.black1
  },
  descriptionTextTitle: {
    color: typoColor.black1,
    fontSize: 18,
    fontFamily: fontFam.bold
  }
});
