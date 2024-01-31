import globalStyle from '@styles/globalStyle';
import { View } from 'react-native';
import HeaderLogin from './components/HeaderLogin';
import BodyLogin from './components/BodyLogin';
import FooterLogin from './components/FooterLogin';

const LoginScreen = () => {
  return (
    <View style={[globalStyle.container]}>
      <HeaderLogin />
      <BodyLogin />
      <FooterLogin />
    </View>
  );
};

export default LoginScreen;
