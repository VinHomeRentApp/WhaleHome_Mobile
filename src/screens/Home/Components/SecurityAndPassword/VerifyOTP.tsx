import TextComponent from '@components/ui/TextComponent';
import { accentColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { yupResolver } from '@hookform/resolvers/yup';
import useRootContext from '@hooks/useRootContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import DismissKeyboard from '@screens/Authentication/LoginScreen/components/DismissKeyboard';
import userApi from '@services/apis/user.apis';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { handleErrorResponse } from '@utils/handleErrorResponse';
import { SecuritySafe } from 'iconsax-react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Toast } from 'react-native-alert-notification';
import * as yup from 'yup';

type verifyOTPTypes = {
  verifyCode: string;
};

const verifyOTPSchema = yup.object().shape({
  verifyCode: yup.string().required('Verify Code is required !')
});

const defaultFormVerifyOTPValues: verifyOTPTypes = {
  verifyCode: ''
};

const VerifyOTP = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<verifyOTPTypes>({
    resolver: yupResolver(verifyOTPSchema),
    defaultValues: defaultFormVerifyOTPValues
  });

  const {
    state: {
      auth: { currentUser }
    }
  } = useRootContext();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const onSubmit = async (data: verifyOTPTypes) => {
    try {
      if (currentUser.email) {
        await userApi.verifyOTP(data.verifyCode, currentUser.email);
        navigation.navigate('ResetPassword');
      } else {
        navigation.navigate('LoginScreen');
      }
    } catch (error: any) {
      const errorResponse = handleErrorResponse(error.response.status, error, 'Verify OTP');
      Toast.show(errorResponse);
    }
  };

  return (
    <View style={globalStyle.container}>
      <DismissKeyboard>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 350 : -100}
          style={[globalStyle.container]}
        >
          <View style={styles.iconContainer}>
            <SecuritySafe size='100' color={typoColor.yellow1} variant='Bold' />
          </View>
          <TextComponent styles={styles.textWelcome} content='Please input the verify key to reset your password' />
          <View>
            {errors?.verifyCode?.message && (
              <TextComponent styles={{ color: 'red' }} content={errors.verifyCode.message} />
            )}
            <View style={styles.inputContainer}>
              <Controller
                control={control}
                name='verifyCode'
                render={({ field }) => (
                  <TextInput
                    style={[styles.input, { width: '90%' }]}
                    placeholderTextColor={typoColor.gray2}
                    placeholder='Verify Code'
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                  />
                )}
              />
            </View>

            <Pressable
              onPress={handleSubmit(onSubmit)}
              style={({ pressed }) => [styles.buttonSend, pressed && globalStyle.pressed]}
            >
              <TextComponent
                content='Send Email'
                textColor={typoColor.black1}
                fontFamily={fontFam.bold}
                fontSize={16}
              />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </View>
  );
};

export default VerifyOTP;

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
    height: 50,
    color: typoColor.black1
  },
  inputContainer: {
    justifyContent: 'center',
    backgroundColor: typoColor.white2,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
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
