import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { Card, CardCoin, Logout, ProfileCircle, Shield } from 'iconsax-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

const ManageProfile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <View style={[styles.container]}>
        <TextComponent content='Account' styles={[styles.headerTitle]} />
        <TextComponent content='Manage or update your account' styles={[styles.headerSubTitle]} />
        <View style={{ marginVertical: 10 }}></View>
        <TouchableOpacity style={[styles.partEdit]} onPress={() => navigation.navigate('EditProfileScreen')}>
          <ProfileCircle size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Personal and account information' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.partEdit]}>
          <Card size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Payment' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.partEdit]}>
          <Shield size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Password and security' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.partEdit]}>
          <CardCoin size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Payment history' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
      </View>
      <View style={[{ flex: 1, padding: 15, justifyContent: 'flex-end' }]}>
        <TouchableOpacity style={[styles.partEdit]}>
          <Logout size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Sign out' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fontFam.extraBold
  },
  headerSubTitle: {
    fontSize: 16,
    fontFamily: fontFam.bold
  },
  partEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#262626',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginVertical: 10
  }
});

export default ManageProfile;