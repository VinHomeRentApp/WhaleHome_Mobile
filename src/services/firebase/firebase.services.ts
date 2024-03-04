/* eslint-disable no-useless-catch */
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, User } from 'firebase/auth';
import { Alert } from 'react-native';
import { auth } from '../../config/firebaseConfig';
import { AUTH_API_ERROR } from '@constants/authConstants';

type AuthErrorMap = Record<string, string>;

export default class FirebaseService {
  private async sendEmailVerification(user: User) {
    await sendEmailVerification(user, {
      handleCodeInApp: true,
      url: 'https://whalehome-d59de.firebaseapp.com'
    });
  }

  private handleError(error: any, errorMap: AuthErrorMap) {
    const errorCode = error.code || 'default';
    const errorMessage = errorMap[errorCode] || error.message;
    Alert.alert('Error', errorMessage);
  }

  private async emailVerification(): Promise<void> {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('User not found');
      }
      console.log('user', user);
      await this.sendEmailVerification(user);
      Alert.alert('Email Verification', `Verification email sent to: ${user?.email}`);
    } catch (error: any) {
      console.log('Email Verification error:', error.code, error.message);
      throw error;
    }
  }

  public async signUp(email: string, password: string): Promise<User | undefined> {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await this.emailVerification();
      return user;
    } catch (error: any) {
      const errorMap: AuthErrorMap = {
        [AUTH_API_ERROR.EMAIL_ALREADY_IN_USE]: `Email ${email} already in use`,
        [AUTH_API_ERROR.WEAK_PASSWORD]: 'Please input a strong password'
        // Add more error mappings as needed
      };
      this.handleError(error, errorMap);
    }
  }

  public async signIn(email: string, password: string): Promise<User | undefined> {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error: any) {
      const errorMap: AuthErrorMap = {
        [AUTH_API_ERROR.INVALID_PASSWORD]: 'Wrong Password Input !',
        [AUTH_API_ERROR.INVALID_CREDENTIAL]: 'Wrong Email and Password Provide !'
        // Add more error mappings as needed
      };
      this.handleError(error, errorMap);
    }
  }

  public async signOut(): Promise<void> {
    try {
      await auth.signOut();
      Alert.alert('Logged Out', 'You have been successfully logged out.');
    } catch (error: any) {
      console.error('Sign Out Error:', error);
      throw error;
    }
  }
}
