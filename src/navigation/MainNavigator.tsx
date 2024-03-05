import { typoColor } from '@constants/appColors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Building3D from '@screens/Home/Building3D';
import ChatScreen from '@screens/Home/ChatScreen';
import CheckoutScreen from '@screens/Home/CheckoutScreen';
import CheckOutScreenHeader from '@screens/Home/Components/CheckOutScreenHeader/CheckOutScreenHeader';
import EditProfileHeader from '@screens/Home/Components/EditProfileHeader/EditProfileHeader';
import ForgotPasswordHeader from '@screens/Home/Components/ForgotPassword/ForgotPasswordHeader';
import HomeBuilding3dScreen from '@screens/Home/Components/HomeBody/HomeBuilding3d';
import PaymentMethodHeader from '@screens/Home/Components/PaymentMethodHeader/PaymentMethodHeader';
import ReviewDetailHeader from '@screens/Home/Components/ReviewDetailScreen/ReviewDetailHeader';
import SettingProfileHeader from '@screens/Home/Components/SettingProfileHeader/SettingProfileHeader';
import TransactionReviewHeader from '@screens/Home/Components/TransactionReviewHeader/TransactionReviewHeader';
import DetailPostScreen from '@screens/Home/DetailPostScreen';
import DetailScreen from '@screens/Home/DetailScreen';
import EditProfileScreen from '@screens/Home/EditProfileScreen';
import ForgotPasswordScreen from '@screens/Home/ForgotPasswordScreen';
import ManageProfile from '@screens/Home/ManageProfile';
import NotificationScreen from '@screens/Home/NotificationScreen';
import CreatePaymentMethod from '@screens/Home/Payment/CreatePaymentMethod';
import PaymentMethod from '@screens/Home/Payment/PaymentMethod';
import ReviewDetailScreen from '@screens/Home/ReviewDetailScreen';
import TransactionReviewScreen from '@screens/Home/TransactionReviewScreen';
import View360Screen from '@screens/Home/View360Screen';
import ViewImageRoomScreen from '@screens/Home/ViewImageRoomScreen';
import SplashScreen from '@screens/Splash/SplashScreen';
import { MainNavigatorProps, MainStackParamList } from '@type/navigation.types';
import AuthNavigator from './AuthNavigator';
import BottomNavigator from './BottomNavigator';

const MainStack = createNativeStackNavigator<MainStackParamList>();
const MainNavigator = ({ isShowSplash }: MainNavigatorProps) => {
  return (
    <MainStack.Navigator initialRouteName={'AuthScreen'}>
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
            options={{ header: () => <ReviewDetailHeader /> }}
            name='ChatScreen'
            component={ChatScreen}
          />
          <MainStack.Screen
            options={{ header: () => <ReviewDetailHeader /> }}
            name='ReviewDetailScreen'
            component={ReviewDetailScreen}
          />
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
          <MainStack.Screen
            options={{ header: () => <ForgotPasswordHeader />, presentation: 'modal' }}
            name='ForgotPassword'
            component={ForgotPasswordScreen}
          />
          <MainStack.Screen options={{ headerShown: false }} name='DetailPostScreen' component={DetailPostScreen} />
          <MainStack.Screen
            options={{ header: () => <SettingProfileHeader /> }}
            name='ManageProfileScreen'
            component={ManageProfile}
          />
          <MainStack.Screen options={{ headerShown: false }} name='Building3dScreen' component={HomeBuilding3dScreen} />
          <MainStack.Screen
            options={{ header: () => <TransactionReviewHeader /> }}
            name='TransactionReviewScreen'
            component={TransactionReviewScreen}
          />
          <MainStack.Screen
            options={{ header: () => <CheckOutScreenHeader /> }}
            name='CheckOutScreen'
            component={CheckoutScreen}
          />

          {/* Payment Method, History, Changepassword */}
          <MainStack.Screen
            options={{ header: () => <PaymentMethodHeader /> }}
            name='PaymentMethod'
            component={PaymentMethod}
          />
          <MainStack.Screen
            options={{
              headerStyle: {
                backgroundColor: typoColor.black1
              }
            }}
            name='CreatePaymentMethod'
            component={CreatePaymentMethod}
          />
        </>
      )}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
