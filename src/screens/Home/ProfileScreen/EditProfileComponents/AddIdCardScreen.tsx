import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import { yupResolver } from '@hookform/resolvers/yup';
import useRootContext from '@hooks/useRootContext';
import { FormDataUpdate } from '@models/schema/formUpdateProfileSchema';
import userApi from '@services/apis/user.apis';
import globalStyle from '@styles/globalStyle';
import { HttpStatusCode } from 'axios';
import { Calendar, Home3, Profile } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import DatePicker from 'react-native-date-picker';
import * as yup from 'yup';

type FormDataIdCard = {
  identityCard: string;
  identityCardDateProvide: string;
  identityCardAddressProvide: string;
};

const FormDataIdCardSchema = yup.object({
  identityCard: yup.string().required('Identity Card is required!'),
  identityCardDateProvide: yup.string().required('Identity Card Date is required!'),
  identityCardAddressProvide: yup.string().required('Identity Card Date is required!')
});

const AddIdCardScreen = () => {
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  const {
    state: {
      auth: { currentUser, isLoading }
    },
    dispatch
  } = useRootContext();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataIdCard>({
    defaultValues: {
      identityCard: currentUser.identityCard,
      identityCardDateProvide: currentUser.identityCardDateProvide,
      identityCardAddressProvide: currentUser.identityCardAddressProvide
    },
    resolver: yupResolver(FormDataIdCardSchema)
  });

  const onSubmit: SubmitHandler<FormDataIdCard> = async (data) => {
    const dataUpdate: FormDataUpdate = {
      fullName: currentUser.fullName || '',
      address: currentUser.address || '',
      dateOfBirth: currentUser.dateOfBirth || '',
      email: currentUser.email || '',
      gender: currentUser.gender || '',
      phone: currentUser.phone || '',
      identityCard: data.identityCard,
      identityCardAddressProvide: data.identityCardAddressProvide,
      identityCardDateProvide: data.identityCardDateProvide
    };
    try {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
      const response = await userApi.updateUserInfo(dataUpdate, currentUser.id?.toString() as string);
      if (response.status === HttpStatusCode.Ok) {
        dispatch({ type: AUTH_ACTION.SET_CURRENT_USER, payload: response.data.data });
        dispatch({ type: AUTH_ACTION.SET_CURRENT_USER, payload: response.data.data });
        Toast.show({ type: ALERT_TYPE.SUCCESS, title: 'Successful', textBody: 'Update User Card Successfully !!' });
      } else {
        alert('Update User Info Failed!!!');
      }
    } catch (error: any) {
      Toast.show({ type: ALERT_TYPE.DANGER, title: 'Updating Error', textBody: error.message });
    } finally {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
    }
  };

  return (
    <ScrollView style={[globalStyle.container]}>
      <KeyboardAvoidingView
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : -80}
        style={styles.fullScreen}
      >
        <LoadingOverlay isLoading={isLoading} message='Updating...' />
        <View style={{ width: '100%', height: 250 }}>
          <Image
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
            source={require('@assets/images/identityCard.png')}
          />
        </View>

        {errors.identityCard?.message && (
          <TextComponent content={errors.identityCard.message} fontSize={12} textColor='red' />
        )}
        <Controller
          control={control}
          name='identityCard'
          render={({ field: { value, onChange } }) => (
            <View style={[styles.inputContainer]}>
              <TextInput
                placeholder='Input Identity Card'
                value={value}
                onChangeText={onChange}
                style={[styles.inputField]}
              />
              <Profile size='25' color='#252B5C' />
            </View>
          )}
        />

        <TouchableOpacity onPress={() => setIsShowDatePicker(true)}>
          <Controller
            name='identityCardDateProvide'
            control={control}
            render={({ field }) => (
              <>
                {errors.identityCardDateProvide?.message && (
                  <TextComponent content={errors.identityCardDateProvide.message} fontSize={12} textColor='red' />
                )}
                {isShowDatePicker && (
                  <DatePicker
                    modal
                    style={[errors.identityCardDateProvide && styles.errorField]}
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
                <View style={[styles.inputContainer]}>
                  <TextComponent
                    content={field.value}
                    styles={[styles.inputField, { color: typoColor.black1, height: 20 }]}
                  />
                  <Calendar size='25' color='#252B5C' />
                </View>
              </>
            )}
          />
        </TouchableOpacity>

        {errors.identityCardAddressProvide?.message && (
          <TextComponent content={errors.identityCardAddressProvide.message} fontSize={12} textColor='red' />
        )}
        <Controller
          control={control}
          name='identityCardAddressProvide'
          render={({ field: { value, onChange } }) => (
            <View style={[styles.inputContainer]}>
              <TextInput
                placeholder='Input Identity Card Address'
                value={value}
                onChangeText={onChange}
                style={[styles.inputField]}
              />
              <Home3 size='25' color='#252B5C' />
            </View>
          )}
        />

        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={[styles.buttonSubmit]}>
          <TextComponent
            styles={{ fontFamily: fontFam.bold, fontSize: 16, margin: 4 }}
            content='Update Card'
            textColor={typoColor.black1}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddIdCardScreen;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10,
    height: 60,
    width: '85%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 28
  },
  inputField: {
    width: '90%',
    height: 14
  },
  buttonSubmit: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: typoColor.yellow1
  },
  errorField: { borderColor: '#f44336', borderWidth: 1, borderRadius: 10, padding: 10 }
});
