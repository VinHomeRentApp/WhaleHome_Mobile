/* eslint-disable react/no-unknown-property */
import BodyAdminContact from '@components/ui/AdminContact';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { apartmentClassValue } from '@constants/appConstants';
import fontFam from '@constants/fontFamilies';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Canvas } from '@react-three/fiber';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2 } from 'iconsax-react-native';
import useControls from 'r3f-native-orbitcontrols';
import React, { Suspense } from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import P1 from '../../models/3D/P1';
import P2 from '../../models/3D/P2';
import P3 from '../../models/3D/P3';
import Studio from '../../models/3D/Studio';

const View360Screen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'View360'>>();
  const { apartmentClass } = route.params;
  const apartmentClassName = apartmentClass.name;
  const [OrbitControls, events] = useControls();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  let model3d;

  switch (apartmentClassName) {
    case apartmentClassValue.STUDIO:
      model3d = <Studio />;
      break;
    case apartmentClassValue.PN1:
      model3d = <P1 />;
      break;
    case apartmentClassValue.PN2:
      model3d = <P2 />;
      break;
    case apartmentClassValue.PN3:
      model3d = <P3 />;
      break;
    default:
      break;
  }

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <View style={styles.modelContainer} {...events}>
        <Canvas>
          <OrbitControls />
          <OrbitControls />
          <directionalLight position={[1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[0, 0, 1]} args={['white', 5]} />
          <directionalLight position={[0, 0, -1]} args={['white', 5]} />
          <directionalLight position={[0, 1, 0]} args={['white', 5]} />
          <directionalLight position={[0, -1, 0]} args={['white', 5]} />
          <Suspense fallback={null}>{model3d}</Suspense>
        </Canvas>
      </View>
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
  modelContainer: {
    width: '100%',
    height: '80%'
  },
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
