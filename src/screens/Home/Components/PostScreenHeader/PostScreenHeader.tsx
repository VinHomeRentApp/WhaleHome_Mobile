import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2 } from 'iconsax-react-native';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import NotiHeader from '../HomeHeader/NotiHeader/NotiIconHeader';

const PostScreenHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.backIconContainer}>
        <Pressable>
          <ArrowCircleLeft2 size='35' color={typoColor.black1} variant='Bulk' />
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
