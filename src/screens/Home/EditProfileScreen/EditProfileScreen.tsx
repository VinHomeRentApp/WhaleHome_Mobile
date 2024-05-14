import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { backgroundColor, typoColor } from '@constants/appColors';
import { defaultUser } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import { AUTH_ACTION } from '@contexts/types/auth.types';
import { yupResolver } from '@hookform/resolvers/yup';
import useRootContext from '@hooks/useRootContext';
import updateUserProfileSchema, { FormDataUpdate } from '@models/schema/formUpdateProfileSchema';
import userApi from '@services/apis/user.apis';
import globalStyle from '@styles/globalStyle';
import { handlePickImage } from '@usecases/HandlePickImage';
import { HttpStatusCode } from 'axios';
import { Blend, Calendar, Call, GalleryAdd, Home3, Message, Profile } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import DatePicker from 'react-native-date-picker';

const EditProfileScreen = () => {
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
  } = useForm<FormDataUpdate>({
    defaultValues: {
      fullName: currentUser.fullName,
      email: currentUser.email,
      phone: currentUser.phone,
      gender: currentUser.gender,
      dateOfBirth: currentUser.dateOfBirth,
      address: currentUser.address
    },
    resolver: yupResolver(updateUserProfileSchema)
  });

  const onSubmit: SubmitHandler<FormDataUpdate> = async (data) => {
    try {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
      const response = await userApi.updateUserInfo(data, currentUser.id?.toString() as string);
      if (response.status === HttpStatusCode.Ok) {
        dispatch({ type: AUTH_ACTION.SET_CURRENT_USER, payload: response.data.data });
        dispatch({ type: AUTH_ACTION.SET_CURRENT_USER, payload: response.data.data });
        Toast.show({ type: ALERT_TYPE.SUCCESS, title: 'Successful', textBody: 'Update User Profile Successfully !!' });
      } else {
        alert('Update User Info Failed!!!');
      }
    } catch (error: any) {
      Toast.show({ type: ALERT_TYPE.DANGER, title: 'Updating Error', textBody: error.message });
    } finally {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
    }
  };

  const onPressHandlePickImage = () => handlePickImage(currentUser.id?.toString() || '13', dispatch);

  return (
    <ScrollView style={[globalStyle.container]}>
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={'padding'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : -100}
          style={globalStyle.container}
        >
          <LoadingOverlay isLoading={isLoading} message='Updating...' />
          <View style={[styles.fullScreen]}>
            <View style={[styles.profileInfo]}>
              <Image
                style={[styles.profileImage]}
                source={currentUser?.image ? { uri: currentUser.image } : defaultUser}
              />
              <TouchableOpacity style={[styles.editButton]} onPress={onPressHandlePickImage}>
                <GalleryAdd size='20' color={backgroundColor.black1} />
              </TouchableOpacity>
            </View>
            <Controller
              control={control}
              name='fullName'
              render={({ field: { value, onChange } }) => (
                <View style={[styles.inputContainer]}>
                  <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} />
                  <Profile size='25' color='#252B5C' />
                </View>
              )}
            />
            {errors.fullName && <Text>{errors.fullName.message}</Text>}
            <Controller
              control={control}
              name='phone'
              render={({ field: { value, onChange } }) => (
                <View style={[styles.inputContainer]}>
                  <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} />
                  <Call size='25' color='#252B5C' />
                </View>
              )}
            />
            {errors.phone && <Text>{errors.phone.message}</Text>}
            <Controller
              control={control}
              name='email'
              render={({ field: { value, onChange } }) => (
                <View style={[styles.inputContainer]}>
                  <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} />
                  <Message size='25' color='#252B5C' />
                </View>
              )}
            />
            {errors.email && <Text>{errors.email.message}</Text>}
            <Controller
              control={control}
              name='gender'
              render={({ field: { value, onChange } }) => (
                <View style={[styles.inputContainer]}>
                  <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} />
                  <Blend size='25' color='#252B5C' />
                </View>
              )}
            />
            {errors.gender && <Text>{errors.gender.message}</Text>}
            <Controller
              control={control}
              name='address'
              render={({ field: { value, onChange } }) => (
                <View style={[styles.inputContainer]}>
                  <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} />
                  <Home3 size='25' color='#252B5C' />
                </View>
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
            {errors.address && <Text>{errors.address.message}</Text>}
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={[styles.buttonSubmit]}>
              <TextComponent
                styles={{ fontFamily: fontFam.bold, fontSize: 16, margin: 4 }}
                content='Update'
                textColor={typoColor.black1}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileInfo: {
    width: 100,
    height: 100,
    marginHorizontal: 'auto'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover'
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
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    backgroundColor: typoColor.yellow1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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

export default EditProfileScreen;
