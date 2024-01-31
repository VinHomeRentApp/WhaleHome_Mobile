import { typoColor } from '@constants/appColors';
import { Microphone2, SearchNormal1 } from 'iconsax-react-native';
import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

const HomeSearchField = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchFieldContainer}>
        <SearchNormal1 style={styles.searchIcon} size='18' color={typoColor.white1} variant='Broken' />
        <TextInput
          placeholder='Search House, Apartment, etc'
          placeholderTextColor={typoColor.white1}
          style={{ color: typoColor.white1, maxWidth: 230 }}
        />
      </View>
      <View style={styles.searchIcon}>
        <View style={styles.slider}></View>
        <Pressable style={styles.voiceSearch}>
          <Microphone2 size='26' color={typoColor.white1} variant='Broken' />
        </Pressable>
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
    justifyContent: 'center',
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
