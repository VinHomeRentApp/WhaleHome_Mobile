import { typoColor } from '@constants/appColors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeSearchField from './Components/HomeBody/HomeSearchField';
import NotFound from './Components/NotFound/NotFound';
import SearchRender from './Components/SearchRender/SearchRender';

const data = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];

const SearchScreen = () => {
  let searchResult = <NotFound />;

  if (data.length > 0) {
    searchResult = <SearchRender data={data} />;
  }

  return (
    <View style={styles.container}>
      <HomeSearchField />
      <View style={{ marginBottom: 200 }}>{searchResult}</View>
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
