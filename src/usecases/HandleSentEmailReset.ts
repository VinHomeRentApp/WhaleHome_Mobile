import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import FirebaseService from '@services/firebase/firebase.services';
import { MainStackParamList } from '@type/navigation.types';
import { Dispatch, SetStateAction } from 'react';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

const firebaseService = new FirebaseService();

export const handleSendEmail = async (
  dispatch: Dispatch<RootAction>,
  navigation: NativeStackNavigationProp<MainStackParamList>,
  setEmail: Dispatch<SetStateAction<string>>,
  email: string
) => {
  try {
    dispatch({ type: AUTH_ACTION.SET_IS_LOADING_SENT_EMAIL, payload: true });
    // const isValidEmail = await firebaseService.isEmailRegistered(email);

    // if (isValidEmail) {
    await firebaseService.forgotPassword(email);
    setEmail('');
    navigation.goBack();
    // } else {
    //   throw Error('Email is not registered!!, Please Sign Up');
    // }
  } catch (error: any) {
    // Alert.alert('Error', error.message);
    Toast.show({
      type: ALERT_TYPE.DANGER,
      title: 'Error',
      textBody: error.message
    });
  } finally {
    dispatch({ type: AUTH_ACTION.SET_IS_LOADING_SENT_EMAIL, payload: false });
  }
};
