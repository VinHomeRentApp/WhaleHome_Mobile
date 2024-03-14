/* eslint-disable react/no-unknown-property */
import BodyAdminContact from '@components/ui/AdminContact';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { apartmentClassValue } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2 } from 'iconsax-react-native';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import P1View360 from './Components/View360Component/P1View360';
import P2View360 from './Components/View360Component/P2View360';
import P3View360 from './Components/View360Component/P3View360';
import StudioView360 from './Components/View360Component/StudioView360';

const View360Screen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'View360'>>();
  const { apartmentClass } = route.params;
  const apartmentClassName = apartmentClass.name;
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  let model3d;

  switch (apartmentClassName) {
    case apartmentClassValue.STUDIO:
      model3d = <StudioView360 />;
      break;
    case apartmentClassValue.PN1:
      model3d = <P1View360 />;
      break;
    case apartmentClassValue.PN2:
      model3d = <P2View360 />;
      break;
    case apartmentClassValue.PN3:
      model3d = <P3View360 />;
      break;
    default:
      break;
  }

  return (
    <SafeAreaView style={[globalStyle.container]}>
      {model3d}
      <View style={styles.textField}>
        <TextComponent styles={styles.textTitle} content={`Apartment Class: ${apartmentClassName}`} />
        <View>
          <TextComponent
            content={`Height: ${apartmentClass.height} - Width: ${apartmentClass.width} - Length: ${apartmentClass.length}`}
          />
        </View>
      </View>

      {/* Back button */}
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft2 size='35' color={typoColor.yellow1} variant='Bold' />
        </Pressable>
      </View>

      <View style={styles.bodyAdminContactContainer}>
        <BodyAdminContact />
      </View>
    </SafeAreaView>
  );
};

export default View360Screen;

const styles = StyleSheet.create({
  container: {},
  textField: {
    marginTop: 20,
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 15,
    fontFamily: fontFam.bold
  },
  iconContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  bodyAdminContactContainer: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 20,
    width: '95%',
    zIndex: 1
  }
});
