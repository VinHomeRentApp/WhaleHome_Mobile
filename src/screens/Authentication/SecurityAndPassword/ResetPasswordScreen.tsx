import LoadingOverlay from '@components/ui/LoadingOverlay';
import TextComponent from '@components/ui/TextComponent';
import { accentColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import DismissKeyboard from '@screens/Authentication/LoginScreen/components/DismissKeyboard';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { handleSendEmailReset } from '@usecases/HandleSentEmailReset';
import { isValidEmail } from '@utils/checkEmail';
import { SecuritySafe } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

const ResetPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const {
    state: {
      auth: { isLoadingSendEmail }
    },
    dispatch
  } = useRootContext();
  const [email, setEmail] = useState('');

  const handlePressSendEmail = async () => {
    if (email.trim() === '') {
      Toast.show({ type: ALERT_TYPE.DANGER, title: 'Error', textBody: 'Please enter your email.' });
      return;
    }

    if (!isValidEmail(email)) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Invalid email format. Please enter a valid email address.'
      });
      return;
    }

    Alert.alert(
      'Confirmation',
      'Are you sure you want to send a password reset email?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            handleSendEmailReset(dispatch, navigation, setEmail, email);
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoadingSendEmail} message='Sending...' />
      <DismissKeyboard>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 350 : -100}
          style={[globalStyle.container]}
        >
          <View style={styles.iconContainer}>
            <SecuritySafe size='250' color={typoColor.yellow1} variant='Bold' />
          </View>
          <TextComponent
            styles={styles.textWelcome}
            content='Give us your email, we will send you email verification to help you change your password'
          />
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, { width: '90%' }]}
                placeholderTextColor='#ebebf599'
                placeholder='Email'
                onChangeText={(value) => setEmail(value)}
                value={email}
              />
            </View>

            <Pressable
              onPress={handlePressSendEmail}
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
    </>
  );
};

export default ResetPasswordScreen;

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
  inputContainer: {
    justifyContent: 'center',
    backgroundColor: typoColor.white2,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  input: {
    height: 50,
    color: typoColor.black1
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
