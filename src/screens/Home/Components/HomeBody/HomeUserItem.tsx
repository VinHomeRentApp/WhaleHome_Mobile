/* eslint-disable @typescript-eslint/no-var-requires */
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { defaultImage } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import UserCurrentResponse from 'src/models/class/User.class';

type HomeUserItemProps = {
  user: UserCurrentResponse;
};

const HomeUserItem = ({ user }: HomeUserItemProps) => {
  return (
    <View style={styles.topUserContainer}>
      <View style={styles.topUserImageContainer}>
        <Image
          style={styles.topUserImage}
          resizeMode='contain'
          source={user?.image ? { uri: user.image } : defaultImage}
        />
      </View>
      <TextComponent styles={styles.topUserName} content={user.fullName} />
    </View>
  );
};

export default HomeUserItem;

const styles = StyleSheet.create({
  topUserContainer: {
    marginLeft: 20
  },

  topUserImageContainer: {
    height: 100,
    width: 100,
    backgroundColor: typoColor.white1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 20
  },
  topUserImage: {
    height: 90,
    width: 90,
    borderRadius: 50
  },
  topUserName: {
    marginLeft: 8,
    textAlign: 'center',
    width: 90,
    fontFamily: fontFam.bold
  }
});
