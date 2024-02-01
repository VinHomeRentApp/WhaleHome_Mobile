// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: Constants?.expoConfig?.extra?.API_KEY,
  authDomain: Constants?.expoConfig?.extra?.AUTH_DOMAIN,
  projectId: Constants?.expoConfig?.extra?.PROJECT_ID,
  storageBucket: Constants?.expoConfig?.extra?.STORAGE_BUCKET,
  messagingSenderId: Constants?.expoConfig?.extra?.MESSAGING_SENDER_ID,
  appId: Constants?.expoConfig?.extra?.APP_ID,
  measurementId: Constants?.expoConfig?.extra?.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize the authentication module
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, app, auth, getAuth };
