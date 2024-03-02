import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { defaultImage } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import NotiHeader from '../HomeHeader/NotiHeader/NotiIconHeader';

type RightSearchHeaderProps = {
  content: string;
};

const RightSearchHeader = ({ content }: RightSearchHeaderProps) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity>
          <Image style={{ height: 50, width: 50, borderRadius: 40 }} resizeMode='cover' source={defaultImage} />
        </TouchableOpacity>
      </View>
      <View style={[styles.innerContainer]}>
        <TextComponent styles={styles.title} fontSize={18} content={content} />
      </View>
      <NotiHeader />
    </SafeAreaView>
  );
};

export default RightSearchHeader;

const styles = StyleSheet.create({
  outerContainer: {
    zIndex: 0,
    backgroundColor: typoColor.black1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backIconContainer: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: fontFam.bold
  }
});
