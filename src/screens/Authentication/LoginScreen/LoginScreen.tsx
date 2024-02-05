import globalStyle from '@styles/globalStyle';
import { View } from 'react-native';
import BodyLogin from './components/BodyLogin';
import DismissKeyboard from './components/DismissKeyboard';
import FooterLogin from './components/FooterLogin';
import HeaderLogin from './components/HeaderLogin';

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
