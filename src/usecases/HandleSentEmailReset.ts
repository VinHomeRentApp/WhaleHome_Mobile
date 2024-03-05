import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import FirebaseService from '@services/firebase/firebase.services';
import { MainStackParamList } from '@type/navigation.types';
import { Dispatch, SetStateAction } from 'react';
import { Alert } from 'react-native';

const firebaseService = new FirebaseService();

export const handleSendEmail = async (
  dispatch: Dispatch<RootAction>,
  navigation: NativeStackNavigationProp<MainStackParamList>,
  setEmail: Dispatch<SetStateAction<string>>,
  email: string
) => {
  try {
    dispatch({ type: AUTH_ACTION.SET_IS_LOADING_SENT_EMAIL, payload: true });
    await firebaseService.forgotPassword(email);
    setEmail('');
    navigation.goBack();
  } catch (error: any) {
    Alert.alert('Error', error.message);
  } finally {
    dispatch({ type: AUTH_ACTION.SET_IS_LOADING_SENT_EMAIL, payload: false });
  }
};
