import userApi from '@services/apis/user.apis';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FirebaseService from '@services/firebase/firebase.services';
import { defaultFormSignIn, defaultFormSignInValue } from '@type/form.types';
import { MainStackParamList } from '@type/navigation.types';
import { HttpStatusCode } from 'axios';
import { Dispatch } from 'react';
import { UseFormReset } from 'react-hook-form';
import { Alert } from 'react-native';

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
      const signInResponse = await userApi.signIn(email, password);
      if (signInResponse.status === HttpStatusCode.InternalServerError) {
        Alert.alert('InternalServerError', 'Sign In Not Working!, Please Try again later!');
      }
      const accessToken = signInResponse.data.data.access_token;
      await AsyncStorage.setItem('access_token', accessToken);
      dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: accessToken });
      dispatch({ type: AUTH_ACTION.SET_USER, payload: response });
      reset(defaultFormSignInValue);
      navigation.navigate('HomeScreen');
    }
  } catch (error: any) {
    Alert.alert('Error', error.message);
  } finally {
    dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
  }
};
