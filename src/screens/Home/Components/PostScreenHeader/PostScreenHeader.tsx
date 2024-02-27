import { View, SafeAreaView, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { ArrowCircleLeft, ArrowCircleLeft2 } from 'iconsax-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '@type/navigation.types';
import { backgroundColor, typoColor } from '@constants/appColors';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import NotiHeader from '../HomeHeader/NotiHeader/NotiIconHeader';

const PostScreenHeader = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.backIconContainer}>
        <Pressable>
          <ArrowCircleLeft size='33' color={typoColor.black1} variant='Bulk' />
        </Pressable>
      </View>
      <View style={[styles.innerContainer]}>
        <TextComponent styles={styles.title} content='Create Post' fontSize={18} />
      </View>
      <NotiHeader />
    </SafeAreaView>
  );
};
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

export default PostScreenHeader;
