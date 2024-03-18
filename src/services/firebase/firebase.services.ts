/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
import { AUTH_API_ERROR } from '@constants/authConstants';
import {
  User,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword
} from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '../../config/firebaseConfig';

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
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Error',
      textBody: errorMessage
    });
  }

  private async emailVerification(): Promise<void> {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('User not found');
      }
      console.log('user', user);
      await this.sendEmailVerification(user);
      Toast.show({
        type: ALERT_TYPE.INFO,
        title: 'Email Verification',
        textBody: `Verification email sent to: ${user?.email}`
      });
    } catch (error: any) {
      console.log('Email Verification error:', error.code, error.message);
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Email Verification error',
        textBody: `${error.code} - ${error.message}`
      });
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

  public async signIn(email: string, password: string, retryCount = 0): Promise<User | undefined> {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error: any) {
      if (error.code === 'auth/too-many-requests' && retryCount < 3) {
        // Retry after exponentially increasing delay
        const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff
        await new Promise((resolve) => setTimeout(resolve, delay));
        return this.signIn(email, password, retryCount + 1); // Retry signIn
      } else {
        const errorMap: AuthErrorMap = {
          [AUTH_API_ERROR.INVALID_PASSWORD]: 'Wrong Password Input !',
          [AUTH_API_ERROR.INVALID_CREDENTIAL]: 'Wrong Email and Password Provide !'
          // Add more error mappings as needed
        };
        this.handleError(error, errorMap);
      }
    }
  }

  public async forgotPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Password Reset Email Sent',
        textBody: `A password reset email has been sent to ${email}`
      });
    } catch (error: any) {
      const errorMap: AuthErrorMap = {
        [AUTH_API_ERROR.USER_NOT_FOUND]: 'User not found'
        // Add more error mappings as needed
      };
      this.handleError(error, errorMap);
    }
  }

  public async isEmailRegistered(email: string): Promise<boolean> {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      return signInMethods.length > 0;
    } catch (error: any) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Check Email Registration Error',
        textBody: error.message
      });
      throw error;
    }
  }

  public async signOut(): Promise<void> {
    try {
      await auth.signOut();
    } catch (error: any) {
      console.error('Sign Out Error:', error);
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Sign Out Error',
        textBody: error.message
      });
      throw error;
    }
  }

  public async uploadFile(file: File): Promise<string | undefined> {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `uploads/${uuidv4()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error: any) {
      console.error('Upload File Error:', error);
      throw error;
    }
  }

  public async changePassword(newPassword: string) {
    try {
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
      }
    } catch (error: any) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Change Password Error',
        textBody: error.message
      });
    }
  }
}
