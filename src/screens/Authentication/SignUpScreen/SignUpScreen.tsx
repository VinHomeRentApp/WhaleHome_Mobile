import TextComponent from '@components/ui/TextComponent';
import { backgroundColor, typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { SignUpScreenProps } from '@navigation/AuthNavigator';
import globalStyle from '@styles/globalStyle';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Switch, TextInput, TouchableOpacity, View } from 'react-native';
const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [isNextComponent, setIsNextComponent] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
            <TouchableOpacity onPress={handleNextComponent}>
              <TextComponent content='Next' textColor={typoColor.blue2} fontFamily={fontFam.semiBold} />
            </TouchableOpacity>
          )
        );
      },
      headerTintColor: typoColor.white1,
      headerStyle: {
        backgroundColor: '#1C1C1E'
      }
    });
  }, [navigation, isNextComponent]);

  const handleNextComponent = () => {
    setIsNextComponent(true);
  };
  const handleBackComponent = () => {
    setIsNextComponent(false);
  };

  return (
    <View style={[globalStyle.container, { paddingHorizontal: 10 }]}>
      {!isNextComponent ? (
        <View style={{ flex: 1, backgroundColor: backgroundColor.black1 }}>
          <View style={[styles.containerField]}>
            <View style={[styles.inputContainer, styles.borderTopRadiusCustom, styles.bottomWithCustom]}>
              <TextComponent styles={[styles.label]} fontSize={15} content='Email' />
              <TextInput style={[styles.inputField]} placeholder='name@example.com' />
            </View>
            <View style={[styles.inputContainer, styles.bottomWithCustom]}>
              <TextComponent styles={[styles.label]} fontSize={15} content='Password' />
              <TextInput style={[styles.inputField]} placeholder='Required' />
            </View>
            <View style={[styles.inputContainer, styles.borderBottomRadiusCustom]}>
              <TextComponent styles={[styles.label]} fontSize={15} content='Verify' />
              <TextInput style={[styles.inputField]} placeholder='Confirm password' />
            </View>
          </View>

          <View style={[styles.containerField, { marginTop: 60 }]}>
            <View style={[styles.inputContainer, styles.borderTopRadiusCustom, styles.bottomWithCustom]}>
              <TextComponent styles={[styles.label, { width: '90%' }]} fontSize={15} content='Việt Nam' />
              <TextInput style={[styles.inputField, { width: '10%' }]} placeholder='Vi' />
            </View>
            <View style={[styles.inputContainer, styles.borderBottomRadiusCustom]}>
              <TextComponent
                styles={[styles.label, { width: '80%' }]}
                fontSize={15}
                content='Agree to Terms and Conditions'
              />
              <View style={[{ width: '20%', justifyContent: 'center', alignItems: 'center' }]}>
                <Switch
                  trackColor={{ false: '#767577', true: '#34C759' }}
                  thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleSwitch}
                  value={isEnabled}
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
            <View style={[styles.inputContainer, styles.borderTopRadiusCustom, styles.bottomWithCustom]}>
              <TextComponent styles={[styles.label]} fontSize={15} content='First Name' />
              <TextInput style={[styles.inputField]} placeholder='Your first name here' />
            </View>
            <View style={[styles.inputContainer, styles.bottomWithCustom]}>
              <TextComponent styles={[styles.label]} fontSize={15} content='Last Name' />
              <TextInput style={[styles.inputField]} placeholder='Your last name here' />
            </View>
            <View style={[styles.inputContainer, styles.borderBottomRadiusCustom]}>
              <TextComponent styles={[styles.label]} fontSize={15} content='Date of Birth' />
              <TouchableOpacity>
                <TextComponent content='DD /MM /YYYY' textColor='#808080' />
              </TouchableOpacity>
            </View>
          </View>
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
    fontSize: 15
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
