import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { accentColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import { yupResolver } from '@hookform/resolvers/yup';
import useRootContext from '@hooks/useRootContext';
import {
  defaultFormResetPasswordValues,
  resetPasswordSchema,
  resetPasswordTypes
} from '@models/schema/resetPasswordSchema';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import DismissKeyboard from '@screens/Authentication/LoginScreen/components/DismissKeyboard';
import userApi from '@services/apis/user.apis';
import FirebaseService from '@services/firebase/firebase.services';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { handleErrorResponse } from '@utils/handleErrorResponse';
import { Eye, EyeSlash, SecuritySafe } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

const firebaseService = new FirebaseService();

const ResetPassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<resetPasswordTypes>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: defaultFormResetPasswordValues
  });

  const {
    state: {
      auth: { currentUser, isLoading }
    },
    dispatch
  } = useRootContext();
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(true);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const onSubmit = async (data: resetPasswordTypes) => {
    try {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
      if (data.password !== data.confirmPassword) {
        return Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Error',
          textBody: `New Password and confirm does not match`
        });
      }
      if (currentUser.email) {
        await userApi.resetPassword(data.password, data.confirmPassword, currentUser.email);
        await firebaseService.changePassword(data.password);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Successful',
          textBody: `Change Password Successfully`
        });
        navigation.navigate('PasswordAndSecurityScreen');
        reset(defaultFormResetPasswordValues);
      } else {
        navigation.navigate('LoginScreen');
      }
    } catch (error: any) {
      const errorResponse = handleErrorResponse(error.response.status, error, 'Reset Password');
      Toast.show(errorResponse);
    } finally {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
    }
  };

  return (
    <View style={globalStyle.container}>
      <LoadingOverlay isLoading={isLoading} message='Loading...' />
      <DismissKeyboard>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 350 : -100}
          style={[globalStyle.container]}
        >
          <View style={styles.iconContainer}>
            <SecuritySafe size='100' color={typoColor.yellow1} variant='Bold' />
          </View>
          <TextComponent
            styles={styles.textWelcome}
            content='Provide new password and confirm new password to change'
          />
          <View>
            {errors?.password?.message && <TextComponent styles={{ color: 'red' }} content={errors.password.message} />}
            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                <View style={[styles.inputContainer]}>
                  <TextInput
                    style={[styles.input, { width: '90%' }]}
                    placeholderTextColor={typoColor.gray2}
                    placeholder='New Password'
                    secureTextEntry={isVisiblePassword}
                    onChangeText={(value) => field.onChange(value)}
                    value={field.value}
                  />
                  <TouchableOpacity
                    style={[styles.visibleBtn, { width: '10%' }]}
                    onPress={() => setIsVisiblePassword(!isVisiblePassword)}
                  >
                    {isVisiblePassword ? (
                      <EyeSlash size='22' color={accentColor.isNotFocused} />
                    ) : (
                      <Eye size='22' color={accentColor.isNotFocused} />
                    )}
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors?.confirmPassword?.message && (
              <TextComponent styles={{ color: 'red' }} content={errors.confirmPassword.message} />
            )}
            <Controller
              control={control}
              name='confirmPassword'
              render={({ field }) => (
                <View style={[styles.inputContainer]}>
                  <TextInput
                    style={[styles.input, { width: '90%' }]}
                    placeholderTextColor={typoColor.gray2}
                    placeholder='Confirm New Password'
                    value={field.value}
                    secureTextEntry={isVisibleConfirmPassword}
                    onChangeText={(value) => field.onChange(value)}
                  />
                  <TouchableOpacity
                    style={[styles.visibleBtn, { width: '10%' }]}
                    onPress={() => setIsVisibleConfirmPassword(!isVisibleConfirmPassword)}
                  >
                    {isVisibleConfirmPassword ? (
                      <EyeSlash size='22' color={accentColor.isNotFocused} />
                    ) : (
                      <Eye size='22' color={accentColor.isNotFocused} />
                    )}
                  </TouchableOpacity>
                </View>
              )}
            />
            <Pressable
              onPress={handleSubmit(onSubmit)}
              style={({ pressed }) => [styles.buttonSend, pressed && globalStyle.pressed]}
            >
              <TextComponent content='Send' textColor={typoColor.black1} fontFamily={fontFam.bold} fontSize={16} />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWelcome: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: fontFam.bold
  },
  input: {
    width: '85%',
    color: typoColor.black1
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: typoColor.white2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  visibleBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSend: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: accentColor.isFocused,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
