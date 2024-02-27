import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Post from 'src/models/class/Post.class';

type BodyTitlePostFieldProps = {
  post: Post;
};

const BodyTitlePostField = ({ post }: BodyTitlePostFieldProps) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleField}>
        <TextComponent styles={styles.title} content={post.title} />
        <View style={styles.locationField}>
          <TextComponent content={`Time: ${post.createDate}`} />
        </View>
      </View>
    </View>
  );
};

export default BodyTitlePostField;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20
  },
  titleField: {
    maxWidth: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: typoColor.yellow2,
    fontWeight: 'bold',
    fontSize: 35
  },
  locationField: {}
});
