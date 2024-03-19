import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import useRootContext from '@hooks/useRootContext';
import UserCurrentResponse from '@models/class/User.class';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import userApi from '@services/apis/user.apis';
import FirebaseService from '@services/firebase/firebase.services';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { Bill, Calendar, DocumentText, Logout, ProfileCircle, Shield } from 'iconsax-react-native';
import React from 'react';
import { Alert, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

const fireBaseService = new FirebaseService();

const ManageProfile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const {
    state: {
      auth: { accessToken, isLoading }
    },
    dispatch
  } = useRootContext();

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: logout }
      ],
      { cancelable: true }
    );
  };

  const logout = async () => {
    try {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
      await fireBaseService.signOut();
      await userApi.logout(accessToken);
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Logged Out',
        textBody: `You have been successfully logged out.`
      });
      dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: '' });
      dispatch({ type: AUTH_ACTION.SET_CURRENT_USER, payload: {} as UserCurrentResponse });
      navigation.navigate('LoginScreen');
    } catch (error: any) {
      Toast.show({ type: ALERT_TYPE.DANGER, title: 'Error', textBody: error.message });
    } finally {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
    }
  };
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <LoadingOverlay isLoading={isLoading} message='Loading...' />
      <View style={[styles.container]}>
        <TextComponent content='Account' styles={[styles.headerTitle]} />
        <TextComponent content='Manage or update your account' styles={[styles.headerSubTitle]} />
        <View style={{ marginVertical: 10 }}></View>
        <TouchableOpacity style={[styles.partEdit]} onPress={() => navigation.navigate('EditProfileScreen')}>
          <ProfileCircle size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Personal and account information' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.partEdit]} onPress={() => navigation.navigate('AppointmentScreen')}>
          <Calendar size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Appointment' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.partEdit]} onPress={() => navigation.navigate('BillingScreen')}>
          <Bill size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Bill' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.partEdit]} onPress={() => navigation.navigate('ContractScreen')}>
          <DocumentText size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Contract' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.partEdit]} onPress={() => navigation.navigate('PasswordAndSecurityScreen')}>
          <Shield size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Password and security' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
      </View>
      <View style={[{ flex: 1, padding: 15, justifyContent: 'flex-end' }]}>
        <TouchableOpacity onPress={() => handleLogout()} style={[styles.partEdit]}>
          <Logout size='25' color={typoColor.yellow1} />
          <View style={{ marginHorizontal: 5 }}></View>
          <TextComponent fontSize={15} content='Sign out' fontFamily={fontFam.semiBold} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fontFam.extraBold
  },
  headerSubTitle: {
    fontSize: 16,
    fontFamily: fontFam.bold
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

export default ManageProfile;
