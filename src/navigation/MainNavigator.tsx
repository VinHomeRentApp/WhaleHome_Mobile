import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Building3D from '@screens/Home/Building3D';
import EditProfileHeader from '@screens/Home/Components/EditProfileHeader/EditProfileHeader';
import EditProfileScreen from '@screens/Home/EditProfileScreen';
import SplashScreen from '@screens/Splash/SplashScreen';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import BottomNavigator from './BottomNavigator';

type StackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  HomeScreen: undefined;
  EditProfileScreen: undefined;
  Building3d: undefined;
};

const MainStack = createNativeStackNavigator<StackParamList>();

type MainNavigatorProps = {
  isAuth: boolean;
  isShowSplash: boolean;
};

export type EditProfileScreenProps = NativeStackScreenProps<StackParamList, 'EditProfileScreen'>;

const MainNavigator = ({ isShowSplash, isAuth }: MainNavigatorProps) => {
  return (
    <MainStack.Navigator initialRouteName={'Building3d'}>
      {isShowSplash ? (
        <MainStack.Screen options={{ headerShown: false }} name='SplashScreen' component={SplashScreen} />
      ) : (
        <>
          <MainStack.Screen options={{ headerShown: false }} name='AuthScreen' component={AuthNavigator} />
          <MainStack.Screen options={{ headerShown: false }} name='HomeScreen' component={BottomNavigator} />
          <MainStack.Screen options={{ headerShown: false }} name='Building3d' component={Building3D} />
          <MainStack.Screen
            options={{ header: () => <EditProfileHeader /> }}
            name='EditProfileScreen'
            component={EditProfileScreen}
          />
        </>
      )}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
