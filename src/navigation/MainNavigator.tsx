import { useAuthentication } from '@hooks/useAuthentication';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Building3D from '@screens/Home/Building3D';
import EditProfileHeader from '@screens/Home/Components/EditProfileHeader/EditProfileHeader';
import DetailScreen from '@screens/Home/DetailScreen';
import EditProfileScreen from '@screens/Home/EditProfileScreen';
import NotificationScreen from '@screens/Home/NotificationScreen';
import View360Screen from '@screens/Home/View360Screen';
import ViewImageRoomScreen from '@screens/Home/ViewImageRoomScreen';
import SplashScreen from '@screens/Splash/SplashScreen';
import { MainNavigatorProps, MainStackParamList } from '@type/navigation.types';
import AuthNavigator from './AuthNavigator';
import BottomNavigator from './BottomNavigator';
import DetailPostScreen from '@screens/Home/DetailPostScreen';
import ManageProfile from '@screens/Home/ManageProfile';
import SettingProfileHeader from '@screens/Home/Components/SettingProfileHeader/SettingProfileHeader';
import PostScreen from '@screens/Home/PostScreen';
import PostScreenHeader from '@screens/Home/Components/PostScreenHeader/PostScreenHeader';

const MainStack = createNativeStackNavigator<MainStackParamList>();
const MainNavigator = ({ isShowSplash }: MainNavigatorProps) => {
  const { isAuth } = useAuthentication();

  return (
    <MainStack.Navigator initialRouteName={isAuth ? 'HomeScreen' : 'AuthScreen'}>
      {isShowSplash ? (
        <MainStack.Screen options={{ headerShown: false }} name='SplashScreen' component={SplashScreen} />
      ) : (
        <>
          <MainStack.Screen options={{ headerShown: false }} name='HomeScreen' component={BottomNavigator} />
          <MainStack.Screen options={{ headerShown: false }} name='AuthScreen' component={AuthNavigator} />
          <MainStack.Screen options={{ headerShown: false }} name='Building3d' component={Building3D} />
          <MainStack.Screen options={{ headerShown: false }} name='DetailRoomScreen' component={DetailScreen} />
          <MainStack.Screen options={{ headerShown: false }} name='View360' component={View360Screen} />
          <MainStack.Screen options={{ headerShown: false }} name='Notification' component={NotificationScreen} />
          <MainStack.Screen
            options={{ headerShown: false }}
            name='ViewImageRoomScreen'
            component={ViewImageRoomScreen}
          />
          <MainStack.Screen
            options={{ header: () => <EditProfileHeader />, presentation: 'modal' }}
            name='EditProfileScreen'
            component={EditProfileScreen}
          />
          <MainStack.Screen options={{ headerShown: false }} name='DetailPostScreen' component={DetailPostScreen} />
          <MainStack.Screen
            options={{ header: () => <SettingProfileHeader /> }}
            name='ManageProfileScreen'
            component={ManageProfile}
          />
          {/* Payment Method, History, Changepassword */}
        </>
      )}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
