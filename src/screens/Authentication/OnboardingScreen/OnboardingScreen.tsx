import ActiveDot from '@components/ui/ActiveDot';
import GetStartedButton from '@components/ui/GetStartedButton/GetStartedButton';
import UnactiveDot from '@components/ui/UnactiveDot';
import { OnBoardingProps } from '@navigation/AuthNavigator';
import globalStyle from '@styles/globalStyle';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import Swiper from 'react-native-swiper';
import OnboardingScreenStyle from './style';

const onBoardingPath_1 = '../../../assets/images/onboarding_2.png';
const onBoardingPath_2 = '../../../assets/images/onboarding_3.png';
const onBoardingPath_3 = '../../../assets/images/onboarding_4.png';

const OnboardingScreen = ({ navigation }: OnBoardingProps) => {
  const skipToLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={[globalStyle.container]}>
      <Swiper scrollEnabled={false} showsButtons={true} loop={false} dot={<UnactiveDot />} activeDot={<ActiveDot />}>
        <ImageBackground
          imageStyle={OnboardingScreenStyle.imageBackground}
          source={require(onBoardingPath_1)}
        ></ImageBackground>
        <ImageBackground
          imageStyle={OnboardingScreenStyle.imageBackground}
          source={require(onBoardingPath_2)}
        ></ImageBackground>
        <ImageBackground
          imageStyle={OnboardingScreenStyle.imageBackground}
          source={require(onBoardingPath_3)}
        ></ImageBackground>
      </Swiper>
      <GetStartedButton onPress={skipToLoginScreen} />
    </View>
  );
};

export default OnboardingScreen;
