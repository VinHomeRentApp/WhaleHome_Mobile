// AuthNavigator.tsx
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Authentication/LoginScreen';
import OnboardingScreen from '@screens/Authentication/OnboardingScreen';
import SignUpScreen from '@screens/Authentication/SignUpScreen/SignUpScreen';
import React from 'react';

export type StackParamList = {
  LoginScreen: undefined;
  OnboardingScreen: undefined;
  SignUpScreen: undefined;
};
export type OnBoardingProps = NativeStackScreenProps<StackParamList, 'OnboardingScreen'>;
export type LoginScreenProps = NativeStackScreenProps<StackParamList, 'LoginScreen'>;
export type SignUpScreenProps = NativeStackScreenProps<StackParamList, 'SignUpScreen'>;

const Stack = createNativeStackNavigator<StackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
