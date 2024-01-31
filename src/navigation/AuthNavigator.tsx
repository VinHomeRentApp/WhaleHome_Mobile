// AuthNavigator.tsx
import { backgroundColor } from '@constants/appColors';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Authentication/LoginScreen';
import OnboardingScreen from '@screens/Authentication/OnboardingScreen';
import React from 'react';

export type StackParamList = {
  LoginScreen: undefined;
  OnboardingScreen: undefined;
};
export type OnBoardingProps = NativeStackScreenProps<StackParamList, 'OnboardingScreen'>;
export type LoginScreenProps = NativeStackScreenProps<StackParamList, 'LoginScreen'>;

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
    </Stack.Navigator>
  );
};

export default AuthNavigator;
