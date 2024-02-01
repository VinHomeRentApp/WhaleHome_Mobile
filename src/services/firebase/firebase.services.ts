/* eslint-disable no-useless-catch */
import { createUserWithEmailAndPassword, sendEmailVerification, User } from 'firebase/auth';
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

  public async signUp(email: string, password: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await this.emailVerification();
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
}
