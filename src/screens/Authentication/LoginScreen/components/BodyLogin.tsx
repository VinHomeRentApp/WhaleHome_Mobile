import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';

const googleIcon = '../../../../assets/images/LoginScreen/google.png';

const BodyLogin = () => {
  return (
    <View style={[styles.bodyLogin]}>
      <TextComponent content='Hundreds of high quality apartments,' fontSize={18} fontFamily={fontFam.extraBold} />
      <TextComponent content='easy to rent and sell.' fontSize={18} fontFamily={fontFam.extraBold} />
      <View style={{ marginVertical: 5 }} />
      <TextComponent
        content='Apartments with diverse styles. Personalize your'
        fontSize={14}
        textColor='#CACACB'
        fontFamily={fontFam.regular}
      />
      <View style={{ marginVertical: 1 }} />
      <TextComponent
        content='preferences. Buy and  sell quickly and easily.'
        fontSize={14}
        textColor='#CACACB'
        fontFamily={fontFam.regular}
      />
      <View style={{ marginVertical: 1 }} />
      <TextComponent
        content=' Brings a feeling of safety and transparency'
        fontSize={14}
        textColor='#CACACB'
        fontFamily={fontFam.regular}
      />
      <View style={{ marginVertical: 12 }} />
      <Pressable
        style={({ pressed }) => [styles.buttonLogin, pressed ? { opacity: 0.8 } : undefined]}
      >
        <Image style={styles.logo} source={require(googleIcon)} />
        <TextComponent content='Continue with Google' fontFamily={fontFam.semiBold} />
      </Pressable>
      <View style={{ marginVertical: 6 }} />
      <TextComponent
        content='Please use your google account to use our service'
        fontSize={12}
        textColor='#88888C'
        fontFamily={fontFam.regular}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyLogin: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonLogin: {
    paddingVertical: 12,
    borderRadius: 14,
    paddingHorizontal: 20,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E3E3E',
    gap: 10
  },
  logo: {
    width: 25,
    height: 25
  }
});

export default BodyLogin;
