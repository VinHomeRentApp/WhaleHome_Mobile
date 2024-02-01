import SeperateOr from '@components/ui/SeperateOr/SeperateOr';
import TextComponent from '@components/ui/TextComponent';
import { accentColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { yupResolver } from '@hookform/resolvers/yup';
import useRootContext from '@hooks/useRootContext';
import { defaultFormSignIn, defaultFormSignInValue } from '@type/index';
import { Eye, EyeSlash } from 'iconsax-react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { BounceInLeft } from 'react-native-reanimated';
import formSignInSchema from '../../../../schema/formSignInSchema';
import { handleSignUp } from '../../../../usecases/Authentication';

const BodyLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset
  } = useForm<defaultFormSignIn>({
    resolver: yupResolver(formSignInSchema),
    defaultValues: defaultFormSignInValue,
    mode: 'onChange'
  });
  const [isContinuePassword, setIsContinuePassword] = useState<boolean>(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(true);
  const isShowPasswordField = useMemo(() => {
    return isContinuePassword;
  }, [isContinuePassword]);
  const { dispatch } = useRootContext();

  useEffect(() => {
    if (!isDirty) {
      setIsContinuePassword(false);
      setIsVisiblePassword(true);
    }
  }, [isDirty]);

  const showPasswordField = () => {
    setIsContinuePassword((prevState) => !prevState);
  };

  const toggleVisiblePassword = () => {
    setIsVisiblePassword((prevState) => !prevState);
  };

  console.log(isVisiblePassword);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
      style={styles.bodyLogin}
    >
      <TextComponent content='Login or sign up' fontSize={24} fontFamily={fontFam.bold} />
      <View style={[{ marginVertical: 10 }]} />
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={[styles.inputContainer]}>
              <TextInput
                placeholderTextColor='#ebebf599'
                placeholder='Email'
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </View>
          )}
          name='email'
        />

        {isShowPasswordField && (
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Animated.View entering={BounceInLeft} style={[styles.passwordContainer]}>
                <TextInput
                  style={[styles.input, { width: '90%' }]}
                  placeholderTextColor='#ebebf599'
                  placeholder='Password'
                  secureTextEntry={isVisiblePassword}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
                <TouchableOpacity style={[styles.visibleBtn, { width: '10%' }]} onPress={toggleVisiblePassword}>
                  {isVisiblePassword ? (
                    <EyeSlash size='22' color={accentColor.isNotFocused} />
                  ) : (
                    <Eye size='22' color={accentColor.isNotFocused} />
                  )}
                </TouchableOpacity>
              </Animated.View>
            )}
            name='password'
          />
        )}

        {/* {errors.password?.message && <TextComponent content={errors.password?.message} fontSize={12} textColor='red' />} */}
      </View>
      <View style={[styles.buttonContainer]}>
        {isContinuePassword ? (
          <Pressable
            onPress={handleSubmit((data) => handleSignUp(data, dispatch, reset))}
            style={({ pressed }) => [styles.buttonLogin, pressed ? { opacity: 0.8 } : undefined]}
          >
            <TextComponent content='Sign In' textColor={typoColor.black1} fontFamily={fontFam.semiBold} />
          </Pressable>
        ) : (
          <Pressable
            onPress={showPasswordField}
            disabled={!isDirty}
            style={({ pressed }) => [
              styles.buttonLogin,
              pressed ? { opacity: 0.8 } : undefined,
              !isDirty && { opacity: 0.5 }
            ]}
          >
            <TextComponent content='Continue' textColor={typoColor.black1} fontFamily={fontFam.semiBold} />
          </Pressable>
        )}
      </View>
      <SeperateOr marginVertical={30} />
      <View style={[styles.buttonContainer]}>
        <Pressable
          style={({ pressed }) => [
            styles.buttonLogin,
            pressed ? { opacity: 0.4 } : undefined,
            { backgroundColor: '#000' }
          ]}
        >
          <TextComponent content='Sign Up' textColor={typoColor.white1} fontFamily={fontFam.semiBold} />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bodyLogin: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    width: '85%'
  },
  buttonLogin: {
    height: 42,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: accentColor.isFocused,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width: '85%',
    height: 40,

    borderColor: 'gray',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#545454',
    borderRadius: 10
  },
  input: {
    color: typoColor.white2
  },
  passwordContainer: {
    width: '85%',
    flexDirection: 'row',
    height: 40,
    color: typoColor.white2,
    borderColor: 'gray',
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 5,
    paddingVertical: 12,
    backgroundColor: '#545454',
    borderRadius: 10
  },
  visibleBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 25,
    height: 25
  },
  optionSignup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    zIndex: 10
  }
});

export default BodyLogin;
