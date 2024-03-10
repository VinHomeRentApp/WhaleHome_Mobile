import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { PaymentSchemaType, paymentSchema } from '@constants/yupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import useRootContext from '@hooks/useRootContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import DismissKeyboard from '@screens/Authentication/LoginScreen/components/DismissKeyboard';
import { bodyNewCard } from '@services/apis/card.apis';
import { useCreateNewCard } from '@services/mutations/card.mutations';
import globalStyle from '@styles/globalStyle';
import { CreatePaymentMethodProps, MainStackParamList } from '@type/navigation.types';
import { InfoCircle } from 'iconsax-react-native';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { TextInput } from 'react-native-gesture-handler';

const CreatePaymentMethod = ({ route }: CreatePaymentMethodProps) => {
  const { control, handleSubmit, formState } = useForm<PaymentSchemaType>({
    resolver: yupResolver(paymentSchema)
  });
  const createNewCardMutation = useCreateNewCard();
  const {
    state: {
      auth: { currentUser }
    }
  } = useRootContext();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  useEffect(() => {
    navigation.setOptions({
      title: route.params.bankCode,
      headerTintColor: typoColor.white1
    });
  }, [navigation, route.params.bankCode]);

  const submitCreateBank: SubmitHandler<PaymentSchemaType> = (data) => {
    const newObj: bodyNewCard = {
      bankCode: route.params.bankCode,
      cartNumber: data.cartNumber,
      name: data.name,
      releaseDate: data.releaseDate,
      users: {
        id: currentUser.id as number
      }
    };
    createNewCardMutation.mutate(newObj, {
      onSuccess: () => {
        navigation.goBack();
        Toast.show({ type: ALERT_TYPE.SUCCESS, title: 'Success', textBody: 'Add New Card Successfully!' });
        // alert('Add new successfully');
      },
      onError: ({ message, name }) => {
        Toast.show({ type: ALERT_TYPE.DANGER, title: 'Fail', textBody: `${name} - ${message}` });
      }
    });
    console.log(data);
  };

  return (
    <DismissKeyboard>
      <View style={[globalStyle.container, styles.wrapContainer]}>
        <LoadingOverlay isLoading={createNewCardMutation.isPending} message='Loading...' />
        <View style={[{ padding: 15 }]}>
          <TextComponent content='Information bank' fontFamily={fontFam.extraBold} fontSize={25} />
          <View style={[styles.wrapInputCard]}>
            <View style={[styles.wrapText]}>
              <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 5 }]}>
                <TextComponent content='Account Number' />
                <InfoCircle size='16' color={typoColor.white1} />
              </View>
              <Controller
                control={control}
                name='cartNumber'
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    placeholderTextColor={typoColor.gray3}
                    placeholder='Nhập số thẻ/tài khoản'
                    style={[
                      styles.wrapInputText,
                      { color: '#fff' },
                      formState.errors.cartNumber && styles.errorInputText
                    ]}
                    value={value}
                    keyboardType='number-pad'
                    onChangeText={onChange}
                  />
                )}
              />
              <TextComponent textColor='#f44336' content={formState.errors.cartNumber?.message || ''} />
            </View>
            <View style={[{ marginVertical: 10 }]}></View>
            <View style={[styles.wrapText]}>
              <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 5 }]}>
                <TextComponent content='Bank Card Holder Name' />
                <InfoCircle size='16' color={typoColor.white1} />
              </View>
              <Controller
                name='name'
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    style={[styles.wrapInputText, { color: '#fff' }, formState.errors.name && styles.errorInputText]}
                    placeholderTextColor={typoColor.gray3}
                    placeholder='NGUYEN VAN A'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              <TextComponent textColor='#f44336' content={formState.errors.name?.message || ''} />
            </View>
            <View style={[{ marginVertical: 10 }]}></View>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
              <View style={[styles.wrapText, { width: '30%', justifyContent: 'center', marginBottom: 20 }]}>
                <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 5 }]}>
                  <TextComponent content='Expire Date' />
                  <InfoCircle size='16' color={typoColor.white1} />
                </View>
                <Controller
                  control={control}
                  name='releaseDate'
                  render={({ field: { value, onChange } }) => (
                    <TextInput
                      style={[
                        styles.wrapInputText,
                        { color: '#fff' },
                        formState.errors.releaseDate && styles.errorInputText
                      ]}
                      placeholderTextColor={typoColor.gray3}
                      placeholder='12/24'
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />
                <TextComponent textColor='#f44336' content={formState.errors.releaseDate?.message || ''} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.wrapButton]}>
          <TouchableOpacity style={[styles.button]} onPress={handleSubmit(submitCreateBank)}>
            <TextComponent
              content='Create new'
              textColor={typoColor.black1}
              fontSize={16}
              fontFamily={fontFam.extraBold}
            />
          </TouchableOpacity>
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    justifyContent: 'space-between'
  },
  wrapInputCard: {
    width: '100%',
    height: 'auto',
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    backgroundColor: typoColor.gray4
  },
  wrapText: {
    width: '100%',
    height: 'auto'
  },
  wrapInputText: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    padding: 15,
    borderColor: typoColor.gray3,
    backgroundColor: typoColor.black1,
    borderRadius: 10,
    fontSize: 20
  },
  wrapButton: {
    width: '100%',
    height: 80,
    backgroundColor: typoColor.gray4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: typoColor.yellow1,
    padding: 15,
    width: '80%',
    borderRadius: 10
  },
  chooseBank: {
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: typoColor.yellow1,
    flexDirection: 'row'
  },
  errorInputText: {
    borderWidth: 1,
    borderColor: 'red'
  }
});

export default CreatePaymentMethod;
