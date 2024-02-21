// AuthNavigator.tsx
<<<<<<< HEAD
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
=======
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Authentication/LoginScreen';
import OnboardingScreen from '@screens/Authentication/OnboardingScreen';
import SignUpScreen from '@screens/Authentication/SignUpScreen/SignUpScreen';
import { AuthStackParamList } from '@type/navigation.types';
import React from 'react';

const Stack = createNativeStackNavigator<AuthStackParamList>();
>>>>>>> b0576ff2010405596ce1be901f73e35197a2f26c

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
