import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { Notepad2, Setting2 } from 'iconsax-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

const ProfileHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity style={[styles.containerButton]}>
          <Notepad2 size='24' color={typoColor.yellow1} variant='Bold' />
        </TouchableOpacity>
      </View>
      <View style={[styles.innerContainer]}>
        <TextComponent styles={styles.title} content='Profile' />
      </View>
      <TouchableOpacity
        style={[styles.containerButton, { marginRight: 10 }]}
        onPress={() => navigation.navigate('ManageProfileScreen')}
      >
        <Setting2 size='24' color={typoColor.yellow1} variant='Bold' />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  outerContainer: {
    zIndex: 0,
    backgroundColor: typoColor.black1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center'
  },
  innerContainer: {
    flexDirection: 'row'
  },
  backIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  },
  title: {
    fontFamily: fontFam.bold,
    fontSize: 18
  },
  containerButton: {
    marginTop: 30,
    marginBottom: 25,
    width: 35,
    height: 35,
    justifyContent: 'center',
    backgroundColor: typoColor.gray4,
    borderRadius: 40,
    alignItems: 'center'
  }
});
