import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { UPDATING, defaultUser } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import globalStyle from '@styles/globalStyle';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ProfileTransaction from './Components/ProfileTransaction/ProfileTransaction';

const ProfileScreen = () => {
  const {
    state: {
      auth: { currentUser },
      post: { posts }
    }
  } = useRootContext();

  return (
    <View style={[globalStyle.container]}>
      <View style={[styles.containerProfile]}>
        <View style={[styles.profileInfo]}>
          <Image style={[styles.profileImage]} source={currentUser.image ? { uri: currentUser.image } : defaultUser} />
        </View>
        <View style={[{ marginVertical: 10 }]}></View>
        <View style={[styles.fullNameContainer]}>
          <TextComponent
            content={currentUser.fullName || UPDATING}
            fontSize={18}
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
        <View style={[styles.wrapInformation]}>
          {/* List Contract */}

          <View style={[styles.wrapButton]}>
            <TextComponent content='View my contract' fontSize={18} fontFamily={fontFam.bold} textColor='#000' />
          </View>
          {/* List Transactions */}
        </View>
      </View>
      <ProfileTransaction posts={posts} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerProfile: {
    flex: 0.4,
    alignItems: 'center',
    marginHorizontal: 15,
    paddingTop: 20
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
  fullNameContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapInformation: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'center'
  },
  wrapButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: typoColor.yellow1
  },
  wrapCounter: {
    paddingHorizontal: 20,
    borderWidth: 1
  }
});

export default ProfileScreen;
