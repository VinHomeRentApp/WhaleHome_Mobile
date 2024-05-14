import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { usePostWithLimit } from '@services/queries/post.queries';
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import HomePostItem from './HomePostItem';

const HomePostsField = () => {
  const page = 1;
  const size = 5;
  const field = 'title';
  const postQueries = usePostWithLimit({ page, size, field });

  const posts = postQueries.data?.data.data.listResult;

  if (!posts) {
    return <ActivityIndicator size={35} />;
  }

  return (
    <View>
      <View>
        <TextComponent styles={styles.postTitle} content='Top Posts' />
      </View>
      <FlatList
        horizontal={true}
        data={posts} // Using extracted posts array
        keyExtractor={(item) => item.id.toString()} // Ensure key is a string
        renderItem={(item) => <HomePostItem post={item.item} key={item.index} />}
      />
    </View>
  );
};

export default HomePostsField;

const styles = StyleSheet.create({
  postTitle: {
    marginLeft: 20,
    fontSize: 18,
    fontFamily: fontFam.bold
  },
  roomsOptionField: {
    marginTop: 10,
    marginLeft: 10
  }
});
