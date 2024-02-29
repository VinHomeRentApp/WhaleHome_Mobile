import { typoColor } from '@constants/appColors';
import { POST_ACTION } from '@contexts/types/post.types';
import useRootContext from '@hooks/useRootContext';
import globalStyle from '@styles/globalStyle';
import { SearchNormal1 } from 'iconsax-react-native';
import { debounce } from 'lodash';
import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

type HomeSearchFieldProps = {
  handleSearch: () => void;
};

const HomeSearchField = ({ handleSearch }: HomeSearchFieldProps) => {
  const { dispatch } = useRootContext();

  const handleSetSearchText = debounce((title: string) => {
    dispatch({ type: POST_ACTION.SET_SEARCH_TEXT, payload: title });
  }, 10);

  return (
    <View style={{ width: '100%' }}>
      <View style={styles.searchContainer}>
        <View style={styles.searchFieldContainer}>
          <SearchNormal1 style={styles.searchIcon} size='18' color={typoColor.white1} variant='Broken' />
          <TextInput
            onChangeText={handleSetSearchText}
            placeholder='Search House, Apartment, etc'
            placeholderTextColor={typoColor.white1}
            style={{ color: typoColor.white1, minWidth: 200, maxWidth: 700 }}
          />
        </View>
        <View style={styles.searchIcon}>
          <View style={styles.slider}></View>
          <Pressable
            onPress={handleSearch}
            style={({ pressed }) => [styles.voiceSearch, pressed && globalStyle.pressed]}
          >
            <SearchNormal1 size='26' color={typoColor.yellow1} variant='Bold' />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeSearchField;

const styles = StyleSheet.create({
  searchContainer: {
    margin: 20,
    height: 50,
    backgroundColor: '#3E3E3E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12
  },
  searchFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  slider: {
    height: 35,
    width: 2,
    backgroundColor: typoColor.gray1,
    marginRight: 20
  },
  voiceSearch: {
    marginRight: 10
  }
});
