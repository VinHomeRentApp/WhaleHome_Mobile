import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ApartmentClass from 'src/models/class/ApartmentClass.class';
import Building from 'src/models/class/Building.class';
import Post from 'src/models/class/Post.class';

// Main Navigation
export type MainStackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  HomeScreen: undefined;
  EditProfileScreen: undefined;
  Building3d: undefined;
  DetailRoomScreen: { post: Post };
  DetailPostScreen: { post: Post };
  SignUpScreen: undefined;
  ViewImageRoomScreen: undefined;
  View360: { apartmentClass: ApartmentClass };
  Notification: undefined;
  ManageProfileScreen: undefined;
  PostScreen: undefined;
  Building3dScreen: { building: Building };
  TransactionReviewScreen: undefined;
  SearchScreen: undefined;
  ReviewDetailScreen: { post: Post };
  ChatScreen: undefined;
  CheckOutScreen: undefined;
  PaymentMethod: undefined;
  CreatePaymentMethod: { bankCode: string };
  LoginScreen: undefined;
  ForgotPassword: undefined;
  AppointmentScreen: undefined;
  ContractScreen: undefined;
  DetailContract: undefined;
};

export type MainNavigatorProps = {
  isShowSplash: boolean;
};

export type EditProfileScreenProps = NativeStackScreenProps<MainStackParamList, 'EditProfileScreen'>;
export type CreatePaymentMethodProps = NativeStackScreenProps<MainStackParamList, 'CreatePaymentMethod'>;

//Bottom Navigation
export type RootBottomTabsList = {
  HomePage: undefined;
  SearchScreen: undefined;
  FavoriteScreen: undefined;
  ProfileScreen: undefined;
  PostScreen: undefined;
};

export type HomePageProps = NativeStackScreenProps<RootBottomTabsList, 'HomePage'>;
export type SearchScreenProps = NativeStackScreenProps<RootBottomTabsList, 'SearchScreen'>;
export type FavoriteScreenProps = NativeStackScreenProps<RootBottomTabsList, 'FavoriteScreen'>;
export type ProfileScreenProps = NativeStackScreenProps<RootBottomTabsList, 'ProfileScreen'>;

// Auth Navigation
export type AuthStackParamList = {
  LoginScreen: undefined;
  OnboardingScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
};
export type OnBoardingProps = NativeStackScreenProps<AuthStackParamList, 'OnboardingScreen'>;
export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;
export type SignUpScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignUpScreen'>;
