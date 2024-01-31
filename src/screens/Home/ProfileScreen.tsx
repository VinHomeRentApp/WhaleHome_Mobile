
import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import globalStyle from '@styles/globalStyle';
import { backgroundColor, typoColor } from '@constants/appColors';
import { UserEdit } from 'iconsax-react-native';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import ProfileCounter from './Components/ProfileCounter/ProfileCounter';
import ProfileTransaction from './Components/ProfileTransaction/ProfileTransaction';
import { useNavigation } from '@react-navigation/native';


const data = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];

const ProfileScreen = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const navigation = useNavigation<any>();

  return (
    <View style={[globalStyle.container]}>
      <View style={[styles.containerProfile]}>
        <View style={[styles.profileInfo]}>
          <Image style={[styles.profileImage]} source={require('../../assets/images/user/kien.jpg')} />
          <Pressable style={[styles.editButton]} onPress={() => navigation.navigate('EditProfileScreen')}>
            <UserEdit size='20' color={backgroundColor.black1} />
          </Pressable>
        </View>
        <View style={[{ marginVertical: 10 }]}></View>
        <View style={[styles.fullNameContainer]}>
          <TextComponent content='Kien Nguyen' fontSize={16} textColor={typoColor.yellow1} fontFamily={fontFam.bold} />
          <View style={[{ marginVertical: 2 }]}></View>
          <TextComponent
            content='kiennha1508@gmail.com'
            fontSize={14}
            textColor={typoColor.white1}
            fontFamily={fontFam.regular}
          />
        </View>
        <View style={[{ marginVertical: 10 }]}></View>
        <View style={[styles.profileCounterContainer]}>
          <ProfileCounter counter={30} title='Listings' />
          <ProfileCounter counter={12} title='Solds' />
          <ProfileCounter counter={28} title='Reviews' />
        </View>
      </View>
      <ProfileTransaction data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerProfile: {
    flex: 0.4,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  profileInfo: {
    width: 100,
    height: 100,
    marginHorizontal: 'auto'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover'
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    backgroundColor: typoColor.yellow1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  fullNameContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileCounterContainer: {
    flexDirection: 'row',
    gap: 10
  }
});

export default ProfileScreen;
