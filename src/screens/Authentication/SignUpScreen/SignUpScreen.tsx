import TextComponent from '@components/ui/TextComponent';
import { backgroundColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import FirebaseService from '@services/firebase/firebase.services';
import { useRegisterAccount } from '@services/mutations/user.mutations';
import globalStyle from '@styles/globalStyle';
import { FormSignUpData } from '@type/form.types';
import { SignUpScreenProps } from '@type/navigation.types';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, StyleSheet, Switch, TextInput, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const fireBaseService = new FirebaseService();

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const { control, handleSubmit, setValue } = useForm<FormSignUpData>({});

  const [isNextComponent, setIsNextComponent] = useState<boolean>(false);
  const [isEnabledAgreeTerm, setIsEnabledAgreeTerm] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const registerAccountMutation = useRegisterAccount();
  const toggleSwitch = () => setIsEnabledAgreeTerm((previousState) => !previousState);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Create New Account',
      headerLeft: () => {
        return !isNextComponent ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <TextComponent content='Cancel' textColor={typoColor.blue2} fontFamily={fontFam.semiBold} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleBackComponent}>
            <TextComponent content='Go Back' textColor={typoColor.blue2} fontFamily={fontFam.semiBold} />
          </TouchableOpacity>
        );
      },
      headerRight: () => {
        return (
          !isNextComponent && (
            <TouchableOpacity disabled={!isEnabledAgreeTerm} onPress={handleNextComponent}>
              <TextComponent
                content='Next'
                textColor={isEnabledAgreeTerm ? typoColor.blue2 : typoColor.gray1}
                fontFamily={fontFam.semiBold}
              />
            </TouchableOpacity>
          )
        );
      },
      headerTintColor: typoColor.white1,
      headerStyle: {
        backgroundColor: '#1C1C1E'
      }
    });
  }, [navigation, isNextComponent, isEnabledAgreeTerm]);

  const handleNextComponent = () => {
    setIsNextComponent(true);
  };
  const handleBackComponent = () => {
    setIsNextComponent(false);
  };

  const handleChangeDate = (e: DateTimePickerEvent, myDate?: Date) => {
    if (myDate) {
      setDate(new Date(myDate));
      console.log(myDate.toISOString());
      setValue('dateOfBirth', myDate.toISOString());
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      await fireBaseService.signUp(data.email, data.password);
      registerAccountMutation.mutate(data);
    } catch (error: any) {
      Alert.alert('Sign Up Error', error.message);
    }
  });

  return (
    <View style={[globalStyle.container, { paddingHorizontal: 10 }]}>
      {!isNextComponent ? (
        <View style={{ flex: 1, backgroundColor: backgroundColor.black1 }}>
          <View style={[styles.containerField]}>
            <Controller
              name='email'
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={[styles.inputContainer, styles.borderTopRadiusCustom, styles.bottomWithCustom]}>
                  <TextComponent styles={[styles.label]} fontSize={15} content='Email' />
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputField]}
                    placeholder='name@example.com'
                  />
                </View>
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={[styles.inputContainer, styles.bottomWithCustom]}>
                  <TextComponent styles={[styles.label]} fontSize={15} content='Password' />
                  <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} placeholder='Required' />
                </View>
              )}
            />
            <Controller
              name='verify_password'
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={[styles.inputContainer, styles.borderBottomRadiusCustom]}>
                  <TextComponent styles={[styles.label]} fontSize={15} content='Verify' />
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputField]}
                    placeholder='Confirm password'
                  />
                </View>
              )}
            />
          </View>

          <View style={[styles.containerField, { marginTop: 60 }]}>
            <View style={[styles.inputContainer, styles.borderBottomRadiusCustom, styles.borderTopRadiusCustom]}>
              <TextComponent
                styles={[styles.label, { width: '80%' }]}
                fontSize={15}
                content='Agree to Terms and Conditions'
              />
              <View style={[{ width: '20%', justifyContent: 'center', alignItems: 'center' }]}>
                <Switch
                  trackColor={{ false: '#767577', true: '#34C759' }}
                  thumbColor={isEnabledAgreeTerm ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleSwitch}
                  value={isEnabledAgreeTerm}
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={{ flex: 1, backgroundColor: backgroundColor.black1 }}>
          <TextComponent
            content='Personal Information'
            textColor={typoColor.gray3}
            fontSize={15}
            styles={[{ textTransform: 'uppercase', marginTop: 10 }]}
          />
          <View style={[styles.containerField, { marginTop: 10 }]}>
            <Controller
              control={control}
              name='fullName'
              render={({ field: { value, onChange } }) => (
                <View style={[styles.inputContainer, styles.borderTopRadiusCustom, styles.bottomWithCustom]}>
                  <TextComponent styles={[styles.label]} fontSize={15} content='Full Name' />
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputField]}
                    placeholder='Your full name here'
                  />
                </View>
              )}
            />

            <Controller
              name='gender'
              control={control}
              render={({ field: { value, onChange } }) => (
                <View style={[styles.inputContainer, styles.bottomWithCustom]}>
                  <TextComponent styles={[styles.label]} fontSize={15} content='Gender' />
                  <RNPickerSelect
                    placeholder={{
                      color: '#808080',
                      label: 'Choose your gender'
                    }}
                    value={value}
                    onValueChange={onChange}
                    items={[
                      { label: 'Male', value: 'male', color: '#808080' },
                      { label: 'Female', value: 'female', color: '#808080' },
                      { label: 'Other', value: 'other', color: '#808080' }
                    ]}
                  />
                </View>
              )}
            />
            <Controller
              control={control}
              name='phone'
              render={({ field: { value, onChange } }) => (
                <View style={[styles.inputContainer, styles.bottomWithCustom]}>
                  <TextComponent styles={[styles.label]} fontSize={15} content='Phone' />
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputField]}
                    placeholder='+84 123345789'
                    inputMode='numeric'
                  />
                </View>
              )}
            />
            <Controller
              control={control}
              name='address'
              render={({ field: { value, onChange } }) => (
                <View style={[styles.inputContainer, styles.bottomWithCustom]}>
                  <TextComponent styles={[styles.label]} fontSize={15} content='Address' />
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputField]}
                    placeholder='+84 123345789'
                  />
                </View>
              )}
            />
            <Controller
              name='dateOfBirth'
              control={control}
              render={() => (
                <View style={[styles.inputContainer, styles.borderBottomRadiusCustom]}>
                  <TextComponent styles={[styles.label]} fontSize={15} content='Date of Birth' />
                  <TouchableOpacity>
                    {/* <TextComponent content='DD /MM /YYYY' textColor='#808080' /> */}
                    <DateTimePicker display='default' value={date} onChange={handleChangeDate} />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <TouchableOpacity onPress={onSubmit}>
            <TextComponent content='Submit' />
          </TouchableOpacity>
        </View>
      )}
    </View>
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
  }
});

export default SignUpScreen;
