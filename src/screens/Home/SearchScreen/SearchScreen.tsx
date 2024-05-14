import RoomItem from '@components/room/RoomItem';
import Loading from '@components/ui/Loading';
import { typoColor } from '@constants/appColors';
import { POST_ACTION } from '@contexts/types/post.types';
import useRootContext from '@hooks/useRootContext';
import { fetchSearchPosts } from '@usecases/SearchPosts';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import HomeSearchField from '../HomeScreen/HomeBody/HomeSearchField';
import NotFound from '../Components/NotFound/NotFound';
import SearchRender from './SearchRender/SearchRender';
import LoadingOverlay from '@components/ui/LoadingOverlay';

const SearchScreen = () => {
  const [page, setPage] = useState(1);
  const size = 6;
  const field = 'title';
  const { state, dispatch } = useRootContext();
  const { searchPosts, isLoadingPost, isFirstLoading, isLastPage, isLoadingData, searchText } = state.post;

  const handleSearch = () => {
    setPage(1);
    dispatch({ type: POST_ACTION.SET_IS_LAST_PAGE, payload: false });
    dispatch({ type: POST_ACTION.SET_FIRST_LOADING, payload: true });
    fetchSearchPosts(dispatch, { size, page: 1, field, title: searchText }, []);
  };

  useEffect(() => {
    fetchSearchPosts(dispatch, { size, page, field, title: searchText }, searchPosts);
  }, [page]);

  const searchResult = searchPosts.length === 0 && isFirstLoading === false && <NotFound />;

  const handleEndReached = () => {
    if (!isLoadingData && !isLastPage) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <LoadingOverlay isLoading={isFirstLoading} message='Loading...' />
      <View>
        <HomeSearchField handleSearch={handleSearch} />
        <SearchRender postLength={searchPosts.length} />
        <View>{searchResult}</View>
      </View>
      {!isFirstLoading && (
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
      )}
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
