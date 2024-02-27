import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import globalStyle from '@styles/globalStyle';
import { ArrowDown2, Global } from 'iconsax-react-native';
import React, { useRef } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const IMAGE_DEFAULT = '../../assets/images/user/kien.jpg';

const PostScreen = () => {
  return (
    <View style={[globalStyle.container]}>
      <View style={[styles.mainContent]}>
        <View style={[styles.infoUser]}>
          <Image style={[styles.profileImage]} source={require(IMAGE_DEFAULT)} />
          <View style={[styles.inforUserText]}>
            <TextComponent content='Nguyen Trung Kien' fontSize={15} fontFamily={fontFam.bold} />
            <View style={[styles.publicArea]}>
              <Global size='17' color='#fff' variant='Outline' />
              <TextComponent content='Public' fontSize={12} fontFamily={fontFam.light} />
              <ArrowDown2 style={{ marginLeft: 10 }} size='12' color='#FFF' variant='Bold' />
            </View>
          </View>
        </View>
        <View style={[styles.textInputArea]}>
          <TextInput
            style={[styles.textInputInner]}
            placeholderTextColor='#D4D4D4'
            placeholder='What do you wanna talk about? '
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    paddingHorizontal: 20,
    gap: 20
  },
  infoUser: {
    flexDirection: 'row',
    gap: 15
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 100,
    resizeMode: 'cover'
  },
  inforUserText: {
    paddingVertical: 3,
    justifyContent: 'center',
    gap: 2
  },
  publicArea: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  textInputArea: {
    height: 300,
    width: '100%'
  },
  textInputInner: {
    fontSize: 20,
    color: typoColor.white1
  }
});

export default PostScreen;
