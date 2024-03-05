import { bodyNewCard } from '@apis/card.apis';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCreateNewCard } from '@services/mutations/card.mutations';
import globalStyle from '@styles/globalStyle';
import { CreatePaymentMethodProps, MainStackParamList } from '@type/navigation.types';
import { InfoCircle, Subtitle } from 'iconsax-react-native';
import React, { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

type FORM_DATA = {
  name: string;
  cartNumber: string;
  releaseDate: string;
};

const CreatePaymentMethod = ({ route }: CreatePaymentMethodProps) => {
  const { control, handleSubmit, formState } = useForm<FORM_DATA>();
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

  const submitCreateBank: SubmitHandler<FORM_DATA> = (data) => {
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
        alert('Add new successfully');
      }
    });
    console.log(data);
  };

  return (
    <View style={[globalStyle.container, styles.wrapContainer]}>
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
                  style={[styles.wrapInputText, { color: '#fff' }]}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
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
                  style={[styles.wrapInputText, { color: '#fff' }]}
                  placeholderTextColor={typoColor.gray3}
                  placeholder='NGUYEN VAN A'
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
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
                    style={[styles.wrapInputText, { color: '#fff' }]}
                    placeholderTextColor={typoColor.gray3}
                    placeholder='12/24'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
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
  }
});

export default CreatePaymentMethod;