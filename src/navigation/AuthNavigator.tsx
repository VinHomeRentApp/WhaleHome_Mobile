// AuthNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Authentication/LoginScreen';
import OnboardingScreen from '@screens/Authentication/OnboardingScreen';
import SignUpScreen from '@screens/Authentication/SignUpScreen/SignUpScreen';
import { AuthStackParamList } from '@type/navigation.types';
import React from 'react';

const Stack = createNativeStackNavigator<AuthStackParamList>();

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
