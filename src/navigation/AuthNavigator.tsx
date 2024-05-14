// AuthNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Authentication/LoginScreen/LoginScreen';
import OnboardingScreen from '@screens/Authentication/OnboardingScreen/OnboardingScreen';
import SignUpScreen from '@screens/Authentication/SignUpScreen/SignUpScreen';
import AppointmentScreenHeader from '@screens/Home/AppointmentScreen/AppointmentScreenHeader/AppointmentScreenHeader';
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
      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
        options={{ header: () => <AppointmentScreenHeader title='' />, presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
