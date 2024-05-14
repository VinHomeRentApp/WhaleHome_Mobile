import TextComponent from '@components/ui/TextComponent';
import { backgroundColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2, CloseCircle } from 'iconsax-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

const CreatePaymentMethodHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={[{ backgroundColor: backgroundColor.black1 }]}>
      <View style={[styles.headerContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseCircle size='35' color={typoColor.yellow1} variant='Bold' />
        </TouchableOpacity>
        <TextComponent content='Add new card' fontFamily={fontFam.extraBold} />
        <ArrowCircleLeft2 size='35' color={backgroundColor.black1} variant='Bold' />
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

export default CreatePaymentMethodHeader;
