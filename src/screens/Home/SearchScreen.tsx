import RoomItem from '@components/room/RoomItem';
import { typoColor } from '@constants/appColors';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import HomeSearchField from './Components/HomeBody/HomeSearchField';
import NotFound from './Components/NotFound/NotFound';
import SearchRender from './Components/SearchRender/SearchRender';

const data = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];

const SearchScreen = () => {
  let searchResult = <NotFound />;

  if (data.length > 0) {
    searchResult = <SearchRender />;
  }

  return (
    <View style={styles.container}>
      <HomeSearchField />
      <View>{searchResult}</View>
      <FlatList
        style={{ marginBottom: 70 }}
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={(item) => <RoomItem key={item.item.id} />}
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
