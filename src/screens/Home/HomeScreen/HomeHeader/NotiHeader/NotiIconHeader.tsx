import { typoColor } from '@constants/appColors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import { Notification } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export const NotiHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={[HeaderStyles.container]}>
      <Notification size='30' color={typoColor.yellow1} variant='Bold' />
    </TouchableOpacity>
  );
};

const HeaderStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginRight: 15,
    marginBottom: 25,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: typoColor.gray4,
    borderRadius: 40,
    alignItems: 'center'
  },
  test: {
    marginTop: 30,
    marginBottom: 25,
    width: 35,
    height: 35,
    justifyContent: 'center',
    backgroundColor: typoColor.gray4,
    borderRadius: 40,
    alignItems: 'center'
  }
});

export default NotiHeader;
