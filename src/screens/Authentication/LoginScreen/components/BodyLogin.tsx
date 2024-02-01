import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { yupResolver } from '@hookform/resolvers/yup';
import useRootContext from '@hooks/useRootContext';
import { defaultFormSignIn, defaultFormSignInValue } from '@type/index';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import formSignInSchema from '../../../../schema/formSignInSchema';
import { handleSignUp } from '../../../../usecases/Authentication';

const BodyLogin = () => {
  const { dispatch } = useRootContext();

  const { control, handleSubmit, formState, reset } = useForm<defaultFormSignIn>({
    resolver: yupResolver(formSignInSchema),
    defaultValues: defaultFormSignInValue
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
      style={styles.bodyLogin}
    >
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
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={(value) => onChange(value)} value={value} />
          )}
          name='email'
        />

        {formState.errors.email?.message && (
          <TextComponent content={formState.errors.email.message} fontSize={12} textColor='red' />
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name='password'
        />

        {formState.errors.password?.message && (
          <TextComponent content={formState.errors.password?.message} fontSize={12} textColor='red' />
        )}
      </View>
      <Pressable
        onPress={handleSubmit((data) => handleSignUp(data, dispatch, reset))}
        style={({ pressed }) => [styles.buttonLogin, pressed ? { opacity: 0.8 } : undefined]}
      >
        <TextComponent content='Sign Up' fontFamily={fontFam.semiBold} />
      </Pressable>

      <View style={{ marginVertical: 6 }} />
      <TextComponent
        content='Please use your google account to use our service'
        fontSize={12}
        textColor='#88888C'
        fontFamily={fontFam.regular}
      />
    </KeyboardAvoidingView>
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
  input: {
    height: 40,
    width: '80%',
    color: typoColor.white1,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  logo: {
    width: 25,
    height: 25
  }
});

export default BodyLogin;
