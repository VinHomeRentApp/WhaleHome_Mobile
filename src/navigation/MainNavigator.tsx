import { useAuthentication } from '@hooks/useAuthentication';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Building3D from '@screens/Home/Building3D';
import EditProfileHeader from '@screens/Home/Components/EditProfileHeader/EditProfileHeader';
import DetailScreen from '@screens/Home/DetailScreen';
import EditProfileScreen from '@screens/Home/EditProfileScreen';
import View360Screen from '@screens/Home/View360Screen';
import ViewImageRoomScreen from '@screens/Home/ViewImageRoomScreen';
import SplashScreen from '@screens/Splash/SplashScreen';
import { MainNavigatorProps, MainStackParamList } from '@type/navigation.types';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import BottomNavigator from './BottomNavigator';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = ({ isShowSplash }: MainNavigatorProps) => {
  const { isAuth } = useAuthentication();

  return (
    <MainStack.Navigator initialRouteName={isAuth ? 'HomeScreen' : 'AuthScreen'}>
      {isShowSplash ? (
        <MainStack.Screen options={{ headerShown: false }} name='SplashScreen' component={SplashScreen} />
      ) : (
        <>
          <MainStack.Screen options={{ headerShown: false }} name='AuthScreen' component={AuthNavigator} />
          <MainStack.Screen options={{ headerShown: false }} name='HomeScreen' component={BottomNavigator} />
          <MainStack.Screen options={{ headerShown: false }} name='Building3d' component={Building3D} />
          <MainStack.Screen options={{ headerShown: false }} name='DetailRoomScreen' component={DetailScreen} />
          <MainStack.Screen options={{ headerShown: false }} name='View360' component={View360Screen} />
          <MainStack.Screen
            options={{ headerShown: false }}
            name='ViewImageRoomScreen'
            component={ViewImageRoomScreen}
          />
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
