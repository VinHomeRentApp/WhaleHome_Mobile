import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import globalStyle from '@styles/globalStyle';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import {
  CalendarTick,
  DocumentFilter,
  DocumentText1,
  FilterSquare,
  Location,
  MoreCircle,
  SearchNormal1
} from 'iconsax-react-native';
import { typoColor } from '@constants/appColors';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ContractComponent from './Components/ContractComponent/ContractComponent';

const ContractScreen = () => {
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <View style={[styles.wrapContainer]}>
        <TextComponent content='My Contract' fontSize={30} fontFamily={fontFam.extraBold} />
        <View style={[{ marginVertical: 10 }]}></View>
        {/* Search */}
        <View style={[styles.wrapSearch]}>
          <View style={[styles.wrapContentSearchInput]}>
            <TextInput
              placeholder='Search contracts'
              placeholderTextColor={typoColor.white1}
              style={[styles.textInput]}
            />
            <SearchNormal1 size='25' color={typoColor.white1} />
          </View>
          <TouchableOpacity style={[styles.wrapFilterButton]}>
            <FilterSquare size='40' color={typoColor.yellow1} variant='Bold' />
          </TouchableOpacity>
        </View>
        <View style={[{ marginVertical: 10 }]}></View>
        {/* Contract List */}
        <ScrollView>
          {Array(3)
            .fill(0)
            .map((item, index) => (
              <ContractComponent key={index} />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    paddingHorizontal: 15
  },
  // Wrap Search
  wrapSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5
  },
  wrapFilterButton: {
    width: 'auto'
  },
  wrapContentSearchInput: {
    width: '85%',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#3E3E3E',
    borderRadius: 12
  },
  textInput: {
    fontSize: 16,
    color: 'white'
  }
  // Wrap Contract Component
});

export default ContractScreen;
