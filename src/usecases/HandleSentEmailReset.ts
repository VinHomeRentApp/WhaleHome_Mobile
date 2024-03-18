import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import FirebaseService from '@services/firebase/firebase.services';
import { MainStackParamList } from '@type/navigation.types';
import { handleErrorResponse } from '@utils/handleErrorResponse';
import { Dispatch, SetStateAction } from 'react';
import { Toast } from 'react-native-alert-notification';

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
    const errorResponse = handleErrorResponse(error.response.status, error, 'Verify Email');
    Toast.show(errorResponse);
  } finally {
    dispatch({ type: AUTH_ACTION.SET_IS_LOADING_SENT_EMAIL, payload: false });
  }
};

export const handleSendEmailReset = async (
  dispatch: Dispatch<RootAction>,
  navigation: NativeStackNavigationProp<MainStackParamList>,
  setEmail: Dispatch<SetStateAction<string>>,
  email: string
) => {
  try {
    dispatch({ type: AUTH_ACTION.SET_IS_LOADING_SENT_EMAIL, payload: true });
    // await userApi.forgotPassword(email);
    setEmail('');
    navigation.navigate('VerifyOTP');
  } catch (error: any) {
    const errorResponse = handleErrorResponse(error.response.status, error, 'Verify Email');
    Toast.show(errorResponse);
  } finally {
    dispatch({ type: AUTH_ACTION.SET_IS_LOADING_SENT_EMAIL, payload: false });
  }
};
