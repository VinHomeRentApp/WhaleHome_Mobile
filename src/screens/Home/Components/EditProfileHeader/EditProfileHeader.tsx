import TextComponent from '@components/ui/TextComponent';
import { backgroundColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { ArrowLeft2 } from 'iconsax-react-native';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfileHeader = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.backIconContainer}>
        <Pressable style={[styles.goBackButton]} onPress={handleGoBack}>
          <ArrowLeft2 size='13' color={backgroundColor.black1} />
        </Pressable>
      </View>
      <View style={[styles.innerContainer]}>
        <TextComponent styles={styles.title} content='Edit Profile' />
      </View>
      <View style={[styles.cloneArea]} />
    </SafeAreaView>
  );
};

export default EditProfileHeader;

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
  },
  goBackButton: {
    padding: 10,
    backgroundColor: typoColor.yellow1,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  cloneArea: {
    marginTop: 30,
    marginRight: 15,
    marginBottom: 25,
    width: 35,
    height: 35,
    justifyContent: 'center',
    borderRadius: 40,
    alignItems: 'center'
  }
});
