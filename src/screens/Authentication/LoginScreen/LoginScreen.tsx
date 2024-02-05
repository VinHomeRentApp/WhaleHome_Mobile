import globalStyle from '@styles/globalStyle';
import { View } from 'react-native';
import BodyLogin from './components/BodyLogin';
import FooterLogin from './components/FooterLogin';
import HeaderLogin from './components/HeaderLogin';

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
