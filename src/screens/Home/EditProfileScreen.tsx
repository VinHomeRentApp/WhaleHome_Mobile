import { View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '@styles/globalStyle';
import { Call, GalleryAdd, Message, Profile } from 'iconsax-react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { backgroundColor, typoColor } from '@constants/appColors';
import * as ImagePicker from 'expo-image-picker';

interface FormData {
  username: string;
  phoneNumber: string;
  email: string;
}

const EditProfileScreen = () => {
  const [image, setImage] = useState<string>();
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: 'Mathew@email.com',
      phoneNumber: '+62 112-3288-9111',
      username: 'Mathew Adam'
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
    <View style={[globalStyle.container, { alignItems: 'center' }]}>
      <View style={[styles.profileInfo]}>
        <Image style={[styles.profileImage]} source={{ uri: image }} />
        <TouchableOpacity style={[styles.editButton]} onPress={pickImage}>
          <GalleryAdd size='20' color={backgroundColor.black1} />
        </TouchableOpacity>
      </View>
      <Controller
        control={control}
        name='username'
        render={({ field: { value, onChange } }) => (
          <View style={[styles.inputContainer]}>
            <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} placeholder='123' />
            <Profile size='25' color='#252B5C' />
          </View>
        )}
      />
      <Controller
        control={control}
        name='phoneNumber'
        render={({ field: { value, onChange } }) => (
          <View style={[styles.inputContainer]}>
            <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} placeholder='123' />
            <Call size='25' color='#252B5C' />
          </View>
        )}
      />
      <Controller
        control={control}
        name='email'
        render={({ field: { value, onChange } }) => (
          <View style={[styles.inputContainer]}>
            <TextInput value={value} onChangeText={onChange} style={[styles.inputField]} placeholder='123' />
            <Message size='25' color='#252B5C' />
          </View>
        )}
      />

      <Button title='Submit' onPress={handleSubmit(onSubmit)} />
    </View>
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
  }
});

export default EditProfileScreen;
