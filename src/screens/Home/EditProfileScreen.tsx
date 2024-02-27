import { View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '@styles/globalStyle';
import { Call, GalleryAdd, Message, Profile, Blend, Home3 } from 'iconsax-react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { backgroundColor, typoColor } from '@constants/appColors';
import * as ImagePicker from 'expo-image-picker';
import { EditProfileScreenProps } from '@type/navigation.types';
import TextComponent from '@components/ui/TextComponent';
import useRootContext from '@hooks/useRootContext';

interface FormData {
  username: string;
  phoneNumber: string;
  email: string;
  gender: string;
  address: string;
}
const IMAGE_DEFAULT = '../../assets/images/user/kien.jpg';

const EditProfileScreen = ({ route }: EditProfileScreenProps) => {
  const [image, setImage] = useState<string>();
  const {
    state: {
      auth: { currentUser }
    }
  } = useRootContext();
  const profileEditInfo = currentUser;
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: profileEditInfo.email,
      phoneNumber: profileEditInfo.phone,
      username: profileEditInfo.fullName,
      gender: profileEditInfo.gender,
      address: profileEditInfo.address
    }
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={[globalStyle.container]}>
      <View style={[styles.fullScreen]}>
        <View style={[styles.profileInfo]}>
          <Image style={[styles.profileImage]} source={{ uri: currentUser.image || IMAGE_DEFAULT }} />
          <TouchableOpacity style={[styles.editButton]} onPress={pickImage}>
            <GalleryAdd size='20' color={backgroundColor.black1} />
          </TouchableOpacity>
        </View>
        <Controller
          control={control}
          name='username'
          render={({ field: { value, onChange } }) => (
            <View style={[styles.inputContainer]}>
              <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} />
              <Profile size='25' color='#252B5C' />
            </View>
          )}
        />
        <Controller
          control={control}
          name='phoneNumber'
          render={({ field: { value, onChange } }) => (
            <View style={[styles.inputContainer]}>
              <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} />
              <Call size='25' color='#252B5C' />
            </View>
          )}
        />
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
        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={[styles.buttonSubmit]}>
          <TextComponent content='Submit' textColor={typoColor.black1} />
        </TouchableOpacity>
      </View>
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
  }
});

export default EditProfileScreen;
