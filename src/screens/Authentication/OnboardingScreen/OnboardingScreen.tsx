import ActiveDot from '@components/ui/ActiveDot';
import GetStartedButton from '@components/ui/GetStartedButton/GetStartedButton';
import UnactiveDot from '@components/ui/UnactiveDot';
import { appInfo } from '@constants/appInfo';
import { useAuthentication } from '@hooks/useAuthentication';
import globalStyle from '@styles/globalStyle';
import { OnBoardingProps } from '@type/navigation.types';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

const onBoardingPath_1 = '../../../assets/images/onboarding_2.png';
const onBoardingPath_2 = '../../../assets/images/onboarding_3.png';
const onBoardingPath_3 = '../../../assets/images/onboarding_4.png';

const OnboardingScreen = ({ navigation }: OnBoardingProps) => {
  const { accessToken } = useAuthentication();

  const skipToLoginScreen = () => {
    if (accessToken) {
      navigation.navigate('HomeScreen');
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={[globalStyle.container]}>
      <Swiper autoplayTimeout={3} autoplay showsButtons={false} dot={<UnactiveDot />} activeDot={<ActiveDot />}>
        <ImageBackground
          resizeMode='cover'
          imageStyle={OnboardingScreenStyle.imageBackground}
          source={require(onBoardingPath_1)}
        ></ImageBackground>
        <ImageBackground
          resizeMode='cover'
          imageStyle={OnboardingScreenStyle.imageBackground}
          source={require(onBoardingPath_2)}
        ></ImageBackground>
        <ImageBackground
          resizeMode='cover'
          imageStyle={OnboardingScreenStyle.imageBackground}
          source={require(onBoardingPath_3)}
        ></ImageBackground>
      </Swiper>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <GetStartedButton onPress={skipToLoginScreen} />
      </View>
    </View>
  );
};

const OnboardingScreenStyle = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: appInfo.sizes.WIDTH,
    height: appInfo.sizes.HEIGHT,
    resizeMode: 'contain'
  }
});

export default OnboardingScreen;
