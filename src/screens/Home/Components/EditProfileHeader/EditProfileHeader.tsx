import TextComponent from '@components/ui/TextComponent';
import { backgroundColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2, CloseCircle } from 'iconsax-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

const EditProfileHeader = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={[{ backgroundColor: backgroundColor.black1 }]}>
      <View style={[styles.headerContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseCircle size='32' color={typoColor.yellow1} variant='Bold' />
        </TouchableOpacity>
        <TextComponent content='Manage account' fontFamily={fontFam.extraBold} />
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

export default EditProfileHeader;
