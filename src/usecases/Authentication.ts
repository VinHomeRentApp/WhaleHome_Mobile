import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import { NavigationProp } from '@react-navigation/native';
import { signIn } from '@services/apis/Authentication';
import FirebaseService from '@services/firebase/firebase.services';
import { defaultFormSignIn, defaultFormSignInValue } from '@type/form.types';
import { MainStackParamList } from '@type/navigation.types';
import { Dispatch } from 'react';
import { UseFormReset } from 'react-hook-form';

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
  navigation: NavigationProp<MainStackParamList>
) => {
  const { email, password } = data;
  dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
  const response = await firebaseService.signIn(email, password);
  if (response) {
    const signInResponse = await signIn(email, password);
    await AsyncStorage.setItem('access_token', signInResponse.data.access_token);
    dispatch({ type: AUTH_ACTION.SET_USER, payload: response });
    reset(defaultFormSignInValue);
    navigation.navigate('HomeScreen');
  }
  dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
};
