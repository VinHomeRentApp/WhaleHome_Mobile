import RoomItem from '@components/room/RoomItem';
import { typoColor } from '@constants/appColors';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NotFound from '../Components/NotFound/NotFound';
import SearchRender from '../SearchScreen/SearchRender/SearchRender';
import useRootContext from '@hooks/useRootContext';

const FavoriteScreen = () => {
  const { state } = useRootContext();
  const {
    post: { posts }
  } = state;
  let searchResult = <NotFound />;

  if (posts.length > 0) {
    searchResult = <SearchRender postLength={posts.length} />;
  }

  return (
    <View style={styles.container}>
      <View>{searchResult}</View>
      <FlatList
        style={{ marginBottom: 70 }}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={(item) => <RoomItem item={item.item} key={item.item.id} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: typoColor.black3
  }
});

export default FavoriteScreen;
