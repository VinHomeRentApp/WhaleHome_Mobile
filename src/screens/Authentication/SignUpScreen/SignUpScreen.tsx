/* eslint-disable @typescript-eslint/no-var-requires */
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { SignUpSchema, signUpSchema } from '@constants/yupSchema';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import { yupResolver } from '@hookform/resolvers/yup';
import useRootContext from '@hooks/useRootContext';
import userApi from '@services/apis/user.apis';
import FirebaseService from '@services/firebase/firebase.services';
import globalStyle from '@styles/globalStyle';
import { SignUpScreenProps } from '@type/navigation.types';
import { handleErrorResponse } from '@utils/handleErrorResponse';
import { HttpStatusCode } from 'axios';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';

const signUpImage = require('@assets/images/Signup-logotype-Standard-1.png');

const fireBaseService = new FirebaseService();

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const { control, handleSubmit, formState } = useForm<SignUpSchema>({
    resolver: yupResolver(signUpSchema)
  });
  const { dispatch } = useRootContext();

  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  const { errors } = formState;

  useEffect(() => {
    if (!isEmpty(errors)) Toast.show({ type: ALERT_TYPE.DANGER, title: 'Warning', textBody: errors.root?.message });
  }, [errors]);

  const onSubmit = async (data: SignUpSchema) => {
    dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
    const { address, dateOfBirth, email, fullName, gender, password, phone } = data;
    const submitData = { address, dateOfBirth, email, fullName, gender, password, phone, status: true };
    try {
      const response = await userApi.registerAccount(submitData);
      if (response.status === HttpStatusCode.Ok) {
        await fireBaseService.signUp(data.email, data.password);
        dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: response.data.data.access_token });
        Toast.show({ type: ALERT_TYPE.SUCCESS, title: 'Successful', textBody: 'Sign Up Successful' });
        navigation.navigate('HomeScreen');
      }
    } catch (error: any) {
      console.log(error);
      Toast.show(handleErrorResponse(error.response.status, error, 'Sign Up'));
    } finally {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
    }
  };

  const data = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' }
  ];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={[globalStyle.container, { paddingHorizontal: 10 }]}>
        <View style={{ width: '100%', height: 100 }}>
          <Image
            resizeMode='contain'
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
            source={signUpImage}
          />
        </View>
        <View>
          <View style={[styles.containerField]}>
            <Controller
              name='email'
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  {errors.email?.message && (
                    <TextComponent content={errors.email.message} fontSize={12} textColor='red' />
                  )}
                  <View style={[styles.inputContainer, styles.borderTopRadiusCustom, styles.bottomWithCustom]}>
                    <TextComponent styles={[styles.label]} fontSize={15} content='Email' />
                    <TextInput
                      placeholderTextColor={typoColor.gray1}
                      value={value}
                      onChangeText={onChange}
                      style={[styles.inputField, errors.email && styles.errorField]}
                      placeholder='name@example.com'
                    />
                  </View>
                </>
              )}
            />

            <Controller
              name='password'
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  {errors.password?.message && (
                    <TextComponent content={errors.password.message} fontSize={12} textColor='red' />
                  )}
                  <View style={[styles.inputContainer, styles.bottomWithCustom]}>
                    <TextComponent styles={[styles.label]} fontSize={15} content='Password' />
                    <TextInput
                      placeholderTextColor={typoColor.gray1}
                      value={value}
                      onChangeText={onChange}
                      style={[styles.inputField, errors.password && styles.errorField]}
                      placeholder='Required'
                    />
                  </View>
                </>
              )}
            />
            <Controller
              name='verify_password'
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  {errors.verify_password?.message && (
                    <TextComponent content={errors.verify_password.message} fontSize={12} textColor='red' />
                  )}
                  <View style={[styles.inputContainer, styles.borderBottomRadiusCustom]}>
                    <TextComponent styles={[styles.label]} fontSize={15} content='Confirm' />
                    <TextInput
                      placeholderTextColor={typoColor.gray1}
                      value={value}
                      onChangeText={onChange}
                      style={[styles.inputField, errors.verify_password && styles.errorField]}
                      placeholder='Confirm password'
                    />
                  </View>
                </>
              )}
            />
          </View>
        </View>
        <View>
          <TextComponent
            styles={{ marginTop: 40 }}
            content='Personal Information'
            textColor={typoColor.gray3}
            fontSize={15}
          />
          <View style={[styles.containerField, { marginTop: 10 }]}>
            <Controller
              control={control}
              name='fullName'
              render={({ field: { value, onChange } }) => (
                <>
                  {errors.fullName?.message && (
                    <TextComponent content={errors.fullName.message} fontSize={12} textColor='red' />
                  )}
                  <View style={[styles.inputContainer, styles.borderTopRadiusCustom, styles.bottomWithCustom]}>
                    <TextComponent styles={[styles.label]} fontSize={15} content='Full Name' />
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor={typoColor.gray1}
                      style={[styles.inputField, errors.fullName && styles.errorField]}
                      placeholder='Your full name here'
                    />
                  </View>
                </>
              )}
            />

            <Controller
              name='gender'
              control={control}
              render={({ field: { value, onChange } }) => (
                <>
                  {errors.gender?.message && (
                    <TextComponent content={errors.gender.message} fontSize={12} textColor='red' />
                  )}
                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.inputContainer, styles.bottomWithCustom, { width: '28%' }]}>
                      <TextComponent fontSize={15} content='Gender' />
                    </View>
                    <View style={[styles.inputContainer, styles.bottomWithCustom, { width: '100%' }]}>
                      <Dropdown
                        selectedTextStyle={{ color: typoColor.white1 }}
                        placeholderStyle={{ color: typoColor.gray1 }}
                        style={[styles.inputField, errors.gender && styles.errorField]}
                        labelField='label'
                        valueField='value'
                        onChange={(e) => {
                          onChange(e.value);
                        }}
                        value={value}
                        data={data}
                      />
                    </View>
                  </View>
                </>
              )}
            />
            <Controller
              control={control}
              name='phone'
              render={({ field: { value, onChange } }) => (
                <>
                  {errors.phone?.message && (
                    <TextComponent content={errors.phone.message} fontSize={12} textColor='red' />
                  )}
                  <View style={[styles.inputContainer, styles.bottomWithCustom]}>
                    <TextComponent styles={[styles.label]} fontSize={15} content='Phone' />
                    <TextInput
                      placeholderTextColor={typoColor.gray1}
                      value={value}
                      onChangeText={onChange}
                      style={[styles.inputField, errors.phone && styles.errorField]}
                      placeholder='+84 123345789'
                      inputMode='numeric'
                    />
                  </View>
                </>
              )}
            />
            <Controller
              control={control}
              name='address'
              render={({ field: { value, onChange } }) => (
                <>
                  {errors.address?.message && (
                    <TextComponent content={errors.address.message} fontSize={12} textColor='red' />
                  )}
                  <View style={[styles.inputContainer, styles.bottomWithCustom]}>
                    <TextComponent styles={[styles.label]} fontSize={15} content='Address' />
                    <TextInput
                      placeholderTextColor={typoColor.gray1}
                      value={value}
                      onChangeText={onChange}
                      style={[styles.inputField, errors.address && styles.errorField]}
                      placeholder='+84 123345789'
                    />
                  </View>
                </>
              )}
            />
            <TouchableOpacity onPress={() => setIsShowDatePicker(true)}>
              <Controller
                name='dateOfBirth'
                control={control}
                render={({ field }) => (
                  <>
                    {errors.dateOfBirth?.message && (
                      <TextComponent content={errors.dateOfBirth.message} fontSize={12} textColor='red' />
                    )}
                    <View style={[styles.inputContainer, styles.borderBottomRadiusCustom]}>
                      <TextComponent styles={styles.label} fontSize={15} content='Date of Birth' />
                      {isShowDatePicker && (
                        <DatePicker
                          modal
                          style={[errors.dateOfBirth && styles.errorField]}
                          mode='date'
                          open={isShowDatePicker}
                          date={field.value ? new Date(field.value) : new Date()}
                          onConfirm={(date) => {
                            const day = date.getDate();
                            const month = date.getMonth() + 1;
                            const year = date.getFullYear();
                            const formattedDay = day < 10 ? `0${day}` : day;
                            const formattedMonth = month < 10 ? `0${month}` : month;
                            const formatDateOfBirth = `${year}-${formattedMonth}-${formattedDay}`;
                            field.onChange(formatDateOfBirth);
                            setIsShowDatePicker(false);
                          }}
                          onCancel={() => {
                            setIsShowDatePicker(false);
                          }}
                        />
                      )}
                      <TextComponent styles={{ color: 'white' }} content={field.value} />
                    </View>
                  </>
                )}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={[styles.submitButton]}>
            <TextComponent textColor={typoColor.black1} fontFamily={fontFam.bold} fontSize={18} content='Submit' />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  containerField: {
    marginTop: 30,
    borderRadius: 8
  },
  inputContainer: {
    backgroundColor: '#1C1C1C',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    paddingHorizontal: 15
  },
  label: {
    width: '30%',
    textAlign: 'left'
  },
  inputField: {
    width: '70%',
    height: 50,
    fontSize: 15,
    color: typoColor.white1
  },
  bottomWithCustom: {
    borderBottomWidth: 0.5,
    borderColor: '#2A2A2D'
  },
  borderTopRadiusCustom: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8
  },
  borderBottomRadiusCustom: {
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8
  },

  submitButton: {
    padding: 20,
    borderWidth: 1,
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: typoColor.yellow1,
    marginBottom: 40
  },
  errorField: { borderColor: '#f44336', borderWidth: 1, borderRadius: 10, padding: 10 }
});

export default SignUpScreen;
