import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2 } from 'iconsax-react-native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

const ReviewDetailHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.containerButton]}>
          <ArrowCircleLeft2 size='35' color={typoColor.yellow1} variant='Bold' />
        </TouchableOpacity>
      </View>
      <View style={[styles.innerContainer]}>
        <Image
          style={{ width: 70, height: 70 }}
          resizeMode='contain'
          source={require('@assets/images/main-logo.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReviewDetailHeader;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: typoColor.black1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  innerContainer: {
    width: '70%',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
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
    padding: 5,
    justifyContent: 'center',
    backgroundColor: typoColor.gray4,
    borderRadius: 40,
    alignItems: 'center'
  }
});
