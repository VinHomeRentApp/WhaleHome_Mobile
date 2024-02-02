/* eslint-disable no-useless-catch */
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, User } from 'firebase/auth';
import { Alert } from 'react-native';
import { auth } from '../../config/firebaseConfig';

export default class FirebaseService {
  public async emailVerification() {
    const user = auth.currentUser;
    // Check if the user is logged in
    if (!user) {
      throw new Error('User not found');
    }
    try {
      console.log('user', user);
      await sendEmailVerification(user, {
        handleCodeInApp: true,
        url: 'https://whalehome-d59de.firebaseapp.com'
      }).then(() => {
        Alert.alert('Email Verification', `Verification email sent to: ${user?.email}`);
      });
    } catch (error: any) {
      console.log('Email Verification error:', error.code, error.message);
      throw error;
    }
  }

  public async signUp(email: string, password: string): Promise<User | undefined> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await this.emailVerification();
      return userCredential.user;
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          Alert.alert('Invalid Email', `Email ${email} already in use`);
          break;
        case 'auth/weak-password':
          Alert.alert('Weak Password', `Please input a strong password`);
          break;
        default:
          Alert.alert('Sign Up Error', error.message);
          break;
      }
    }
  }

  public async signIn(email: string, password: string): Promise<User | undefined> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-password':
          Alert.alert('Invalid password', 'Wrong Password Input !');
          break;
        case 'auth/invalid-credential':
          Alert.alert('Invalid Account', 'Wrong Email and Password Provide !');
          break;
        default:
          Alert.alert('Sign In Error', error.message);
          break;
      }
    }
  }
}
