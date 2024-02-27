import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowCircleLeft2 } from 'iconsax-react-native';
import { backgroundColor, typoColor } from '@constants/appColors';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '@type/navigation.types';

const SettingProfileHeader = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={[{ backgroundColor: backgroundColor.black1 }]}>
      <View style={[styles.headerContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowCircleLeft2 size='32' color={typoColor.yellow1} variant='Bold' />
        </TouchableOpacity>
        <TextComponent content='Setting & Privacy' fontFamily={fontFam.extraBold} />
        <ArrowCircleLeft2 size='32' color={backgroundColor.black1} variant='Bold' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default SettingProfileHeader;
