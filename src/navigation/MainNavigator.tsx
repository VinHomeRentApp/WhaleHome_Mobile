import { typoColor } from '@constants/appColors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Building3D from '@screens/Home/Building3D';
import CheckoutScreen from '@screens/Home/CheckoutScreen/CheckoutScreen';
import ChoosePaymentMethod from '@screens/Home/PaymentMethodScreen/ChoosePaymentMethod';
import ForgotPasswordHeader from '@screens/Authentication/ForgotPassword/ForgotPasswordHeader';
import ResetPassword from '@screens/Authentication/SecurityAndPassword/ResetPassword';
import ResetPasswordScreen from '@screens/Authentication/SecurityAndPassword/ResetPasswordScreen';
import VerifyOTP from '@screens/Authentication/SecurityAndPassword/VerifyOTP';
import CheckOutScreenHeader from '@screens/Home/Components/CheckOutScreenHeader/CheckOutScreenHeader';
import ContractScreenHeader from '@screens/Home/ConstractsScreen/ContractSreenHeader/ContractScreenHeader';
import SettingProfileHeader from '@screens/Home/ProfileScreen/SettingProfileHeader/SettingProfileHeader';
import ReviewDetailHeader from '@screens/Home/ReviewDetailScreen/ReviewDetailScreenComponents/ReviewDetailHeader';
import TransactionReviewHeader from '@screens/Home/TransactionReviewScreen/TransactionReviewHeader/TransactionReviewHeader';
import PaymentMethodHeader from '@screens/Home/PaymentMethodScreen/PaymentMethodHeader/PaymentMethodHeader';

import ForgotPasswordScreen from '@screens/Authentication/ForgotPasswordScreen';
import DetailContractHeader from '@screens/Home/DetailContractScreen/DetailContractHeader/DetailContractHeader';
import EditProfileScreen from '@screens/Home/EditProfileScreen/EditProfileScreen';
import HomeBuilding3dScreen from '@screens/Home/HomeScreen/HomeBody/HomeBuilding3d';
import AddIdCardScreen from '@screens/Home/ProfileScreen/EditProfileComponents/AddIdCardScreen';
import EditProfileHeader from '@screens/Home/ProfileScreen/EditProfileHeader/EditProfileHeader';

import BillingScreen from '@screens/Home/BillingScreen/BillingScreen';
import ChatScreen from '@screens/Home/ChatScreen/ChatScreen';
import DetailScreen from '@screens/Home/DetailApartmentScreen/DetailScreen';
import DetailPostScreen from '@screens/Home/DetailPostScreen/DetailPostScreen';
import HistoryBillingScreen from '@screens/Home/HistoryBillingScreen/HistoryBillingScreen';

import AppointmentScreen from '@screens/Home/AppointmentScreen/AppointmentScreen';
import AppointmentScreenHeader from '@screens/Home/AppointmentScreen/AppointmentScreenHeader/AppointmentScreenHeader';
import ContractScreen from '@screens/Home/ConstractsScreen/ContractScreen';
import DetailContract from '@screens/Home/DetailContractScreen/DetailContract';
import ManageProfile from '@screens/Home/EditProfileScreen/ManageProfile';
import NotificationScreen from '@screens/Home/NotificationScreen/NotificationScreen';
import CreatePaymentMethod from '@screens/Home/Payment/CreatePaymentMethod';
import PaymentMethod from '@screens/Home/Payment/PaymentMethod';
import PasswordAndSecurityScreen from '@screens/Home/ProfileScreen/PasswordAndSecurityScreen';
import ReviewDetailScreen from '@screens/Home/ReviewDetailScreen/ReviewDetailScreen';
import TransactionReviewScreen from '@screens/Home/TransactionReviewScreen/TransactionReviewScreen';
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
            options={{ header: () => <EditProfileHeader />, presentation: 'card' }}
            name='EditProfileScreen'
            component={EditProfileScreen}
          />
          <MainStack.Screen
            options={{ header: () => <ForgotPasswordHeader />, presentation: 'card' }}
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
          <MainStack.Screen
            options={{
              header: () => <AppointmentScreenHeader title='Appointment' />
            }}
            name='AppointmentScreen'
            component={AppointmentScreen}
          />
          <MainStack.Screen
            options={{
              header: () => <ContractScreenHeader />
            }}
            name='ContractScreen'
            component={ContractScreen}
          />
          <MainStack.Screen
            options={{
              header: () => <AppointmentScreenHeader title='Reset Password' />
            }}
            name='ResetPasswordScreen'
            component={ResetPasswordScreen}
          />
          <MainStack.Screen
            options={{
              header: () => <AppointmentScreenHeader title='Password And Security' />
            }}
            name='PasswordAndSecurityScreen'
            component={PasswordAndSecurityScreen}
          />
          <MainStack.Screen
            options={{
              header: () => <AppointmentScreenHeader title='Enter OTP' />,
              presentation: 'modal'
            }}
            name='VerifyOTP'
            component={VerifyOTP}
          />

          <MainStack.Screen
            options={{
              header: () => <AppointmentScreenHeader title='Reset Password' />
            }}
            name='ResetPassword'
            component={ResetPassword}
          />

          <MainStack.Screen
            options={{
              header: () => <DetailContractHeader />
            }}
            name='DetailContract'
            component={DetailContract}
          />
          <MainStack.Screen
            options={{
              header: () => <AppointmentScreenHeader title='Purchase your bill' />
            }}
            name='BillingScreen'
            component={BillingScreen}
          />
          <MainStack.Screen
            options={{
              header: () => <AppointmentScreenHeader title='Choose payment method' />
            }}
            name='ChoosePaymentMethod'
            component={ChoosePaymentMethod}
          />
          <MainStack.Screen
            options={{
              header: () => <AppointmentScreenHeader title='Detail your purchase' />
            }}
            name='HistoryBillingScreen'
            component={HistoryBillingScreen}
          />
          <MainStack.Screen
            options={{
              header: () => <AppointmentScreenHeader title='ID Card' />,
              presentation: 'containedTransparentModal'
            }}
            name='AddIdCardScreen'
            component={AddIdCardScreen}
          />
        </>
      )}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
