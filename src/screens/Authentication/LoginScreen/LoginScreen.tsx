import globalStyle from '@styles/globalStyle';
import { View } from 'react-native';
import HeaderLogin from './components/HeaderLogin';
import BodyLogin from './components/BodyLogin';
import FooterLogin from './components/FooterLogin';
import DismissKeyboard from './components/DismissKeyboard';
import { LoginScreenProps } from '@navigation/AuthNavigator';

const LoginScreen = () => {
  return (
    <DismissKeyboard>
      <View style={[globalStyle.container]}>
        <HeaderLogin />
        <BodyLogin />
        <FooterLogin />
      </View>
    </DismissKeyboard>
  );
};

export default LoginScreen;
