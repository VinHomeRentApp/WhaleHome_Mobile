import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import FirebaseService from '@services/firebase/firebase.services';
import { defaultFormSignIn, defaultFormSignInValue } from '@type/form.types';

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
  try {
    const user = await firebaseService.signUp(email, password);
    dispatch({ type: AUTH_ACTION.SET_USER, payload: user });
    reset(defaultFormSignInValue);
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('Invalid Email', `Email ${email} already in use`);
    } else if (error.code === 'auth/weak-password') {
      Alert.alert('Weak Password', `Please input a strong password`);
    } else {
      Alert.alert('Sign Up Error', error.message);
    }
  }
  dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
};
