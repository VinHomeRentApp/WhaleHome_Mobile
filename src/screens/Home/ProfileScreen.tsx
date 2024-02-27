import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import globalStyle from '@styles/globalStyle';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ProfileCounter from './Components/ProfileCounter/ProfileCounter';
import ProfileTransaction from './Components/ProfileTransaction/ProfileTransaction';

const data = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
const UPDATING = 'Updating...';
const IMAGE_DEFAULT = '../../assets/images/user/kien.jpg';

const ProfileScreen = ({ navigation }: any) => {
  const {
    state: {
      auth: { currentUser }
    }
  } = useRootContext();

  return (
    <View style={[globalStyle.container]}>
      <View style={[styles.containerProfile]}>
        <View style={[styles.profileInfo]}>
          <Image style={[styles.profileImage]} source={{ uri: currentUser.image || IMAGE_DEFAULT }} />
        </View>
        <View style={[{ marginVertical: 10 }]}></View>
        <View style={[styles.fullNameContainer]}>
          <TextComponent
            content={currentUser.fullName || UPDATING}
            fontSize={16}
            textColor={typoColor.yellow1}
            fontFamily={fontFam.bold}
          />
          <View style={[{ marginVertical: 2 }]}></View>
          <TextComponent
            content={currentUser.email || 'Updating...'}
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
