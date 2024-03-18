import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import userApi from '@services/apis/user.apis';
import FirebaseService from '@services/firebase/firebase.services';
import { defaultFormSignIn, defaultFormSignInValue } from '@type/form.types';
import { MainStackParamList } from '@type/navigation.types';
import { handleErrorResponse } from '@utils/handleErrorResponse';
import { HttpStatusCode } from 'axios';
import { Dispatch } from 'react';
import { UseFormReset } from 'react-hook-form';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

const firebaseService = new FirebaseService();

export const handleSignUp = async (
  data: defaultFormSignIn,
  dispatch: Dispatch<RootAction>,
  reset: UseFormReset<defaultFormSignIn>
) => {
  const { email, password } = data;
  dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
  const user = await firebaseService.signUp(email, password);
  if (user) {
    // dispatch({ type: AUTH_ACTION.SET_USER, payload: user });
    reset(defaultFormSignInValue);
    return user;
  }
  dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
  return null;
};

export const handleSignIn = async (
  data: defaultFormSignIn,
  dispatch: Dispatch<RootAction>,
  reset: UseFormReset<defaultFormSignIn>,
  navigation: NativeStackNavigationProp<MainStackParamList>
) => {
  const { email, password } = data;
  dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
  try {
    const response = await firebaseService.signIn(email, password);
    if (response) {
      const signInResponse = await userApi.signInMobile(email);
      dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: signInResponse.data.data.access_token });
      const {
        data: { data: currentUser }
      } = await userApi.getCurrentUser(signInResponse.data.data.access_token);
      dispatch({ type: AUTH_ACTION.SET_CURRENT_USER, payload: currentUser });
      const accessToken = signInResponse.data.data.access_token;
      await AsyncStorage.setItem('access_token', accessToken);
      dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: accessToken });
      dispatch({ type: AUTH_ACTION.SET_USER, payload: response });
      reset(defaultFormSignInValue);
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
      Toast.show({ type: ALERT_TYPE.SUCCESS, title: 'Success', textBody: 'You have been successfully logged in.' });
      navigation.navigate('HomeScreen');
    }
  } catch (error: any) {
    Toast.show(handleErrorResponse(error.response.status, error, 'Sign In Error'));
  } finally {
    dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
  }
};
