import RoomItem from '@components/room/RoomItem';
import Loading from '@components/ui/Loading';
import { typoColor } from '@constants/appColors';
import useRootContext from '@hooks/useRootContext';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { fetchSearchPosts } from '../../usecases/SearchPosts';
import HomeSearchField from './Components/HomeBody/HomeSearchField';
import NotFound from './Components/NotFound/NotFound';
import SearchRender from './Components/SearchRender/SearchRender';

const SearchScreen = () => {
  const size = 4;
  const field = 'title';
  const { state, dispatch } = useRootContext();
  const { searchPosts, isLoadingPost, isFirstLoading, isLastPage, isLoadingData } = state.post;
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchSearchPosts(dispatch, { size, page, field }, searchPosts);
  }, [page]);

  if (isFirstLoading) {
    return <Loading />;
  }

  const searchResult = searchPosts.length < 0 && <NotFound />;

  const handleEndReached = () => {
    if (!isLoadingData && !isLastPage) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <HomeSearchField />
      <SearchRender postLength={searchPosts.length} />
      <View>{searchResult}</View>
      <FlatList
        style={{ marginBottom: 70 }}
        data={searchPosts}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <RoomItem item={item} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (isLoadingPost ? <Loading style={{ marginBottom: 50 }} /> : null)}
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

export default SearchScreen;
