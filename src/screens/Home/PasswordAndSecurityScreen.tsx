import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ShieldSecurity } from 'iconsax-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

const PasswordAndSecurityScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={[styles.container]}>
        <TouchableOpacity style={[styles.partEdit]} onPress={() => navigation.navigate('ResetPassword')}>
          <ShieldSecurity size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Change Password' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordAndSecurityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  partEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#262626',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginVertical: 10
  }
});
