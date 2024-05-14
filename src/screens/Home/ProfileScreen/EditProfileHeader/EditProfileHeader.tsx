import TextComponent from '@components/ui/TextComponent';
import { backgroundColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import { Card, CloseCircle } from 'iconsax-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

const EditProfileHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={[{ backgroundColor: backgroundColor.black1, paddingTop: 50 }]}>
      <View style={[styles.headerContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseCircle size='35' color={typoColor.yellow1} variant='Bold' />
        </TouchableOpacity>
        <TextComponent content='Manage account' fontFamily={fontFam.extraBold} />
        <TouchableOpacity onPress={() => navigation.navigate('AddIdCardScreen')}>
          <Card size='35' color={typoColor.yellow1} variant='Bold' />
        </TouchableOpacity>
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
