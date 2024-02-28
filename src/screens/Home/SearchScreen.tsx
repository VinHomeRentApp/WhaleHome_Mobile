import postApi from '@apis/post.apis';
import RoomItem from '@components/room/RoomItem';
import Loading from '@components/ui/Loading';
import { typoColor } from '@constants/appColors';
import { POST_ACTION } from '@contexts/types/post.types';
import useRootContext from '@hooks/useRootContext';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import HomeSearchField from './Components/HomeBody/HomeSearchField';
import NotFound from './Components/NotFound/NotFound';
import SearchRender from './Components/SearchRender/SearchRender';

const SearchScreen = () => {
  const size = 4;
  const field = 'title';
  const { state, dispatch } = useRootContext();
  const { searchPosts, isLoadingPost, isFirstLoading } = state.post;
  const [page, setPage] = useState(1);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    fetchSearchPosts();
  }, [page]);

  const fetchSearchPosts = async () => {
    try {
      setIsLoadingData(true);
      dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: true });
      const response = await postApi.getPostWithLimit({ size, page, field });
      const newPosts = response.data.data.listResult;
      dispatch({
        type: POST_ACTION.SET_SEARCH_POSTS,
        payload: [...searchPosts, ...newPosts]
      });
      setIsLastPage(newPosts.length < size); // Update isLastPage
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoadingData(false);
      dispatch({ type: POST_ACTION.SET_POST_IS_LOADING, payload: false });
    }
  };

  if (isFirstLoading) {
    return <Loading />;
  }

  const searchResult = searchPosts.length > 0 ? <SearchRender postLength={searchPosts.length} /> : <NotFound />;

  const handleEndReached = () => {
    if (!isLoadingData && !isLastPage) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <HomeSearchField />
      <View>{searchResult}</View>
      <FlatList
        style={{ marginBottom: 70 }}
        data={searchPosts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => <RoomItem item={item} />}
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
