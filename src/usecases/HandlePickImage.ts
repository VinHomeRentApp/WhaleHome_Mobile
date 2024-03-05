/* eslint-disable @typescript-eslint/no-explicit-any */
import { AUTH_ACTION } from '@contexts/types/auth.types';
import { RootAction } from '@contexts/types/root.types';
import userApi from '@services/apis/user.apis';
import { HttpStatusCode } from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { Dispatch } from 'react';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

export const handlePickImage = async (userId: string, dispatch: Dispatch<RootAction>) => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("You've refused to allow this app to access your photos!");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  if (!result.canceled) {
    const formData = new FormData();
    const imageUri = result.assets[0].uri;
    const imageName = result.assets[0].fileName;

    formData.append('file', { uri: imageUri, name: imageName, type: 'image' } as any);

    try {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: true });
      const response = await userApi.updateUserImage(formData, userId);
      if (response.status === HttpStatusCode.Ok) {
        dispatch({ type: AUTH_ACTION.SET_CURRENT_USER, payload: response.data.data });
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Update Image Successfully!',
          autoClose: true
        });
      }
    } catch (error: any) {
      if (error.response && error.response.status === 413) {
        // alert('The selected image is too large. Please select a smaller image.');
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Fail',
          textBody: 'The selected image is too large. Please select a smaller image.'
        });
      } else {
        // alert('Cannot Update Image User');
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Fail',
          textBody: 'Cannot Update Image User'
        });
      }
    } finally {
      dispatch({ type: AUTH_ACTION.SET_AUTH_IS_LOADING, payload: false });
    }
  } else {
    // alert('Cannot Get Image File!');
    Toast.show({
      type: ALERT_TYPE.DANGER,
      title: 'Fail',
      textBody: 'Cannot Get Image File!'
    });
  }
};
