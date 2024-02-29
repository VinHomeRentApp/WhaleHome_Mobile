/* eslint-disable react/no-unknown-property */
import BodyAdminContact from '@components/ui/AdminContact';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Canvas } from '@react-three/fiber';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft } from 'iconsax-react-native';
import useControls from 'r3f-native-orbitcontrols';
import React, { Suspense } from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import Building3 from '../../../../models/3D/Building3';

const HomeBuilding3dScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'Building3dScreen'>>();
  const { building } = route.params;
  const [OrbitControls, events] = useControls();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

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
          <Suspense>{<Building3 />}</Suspense>
        </Canvas>
      </View>
      <View style={styles.textField}>
        <TextComponent styles={styles.textTitle} content={`Buidling: ${building.name}`} />
        <View>
          <TextComponent content={`${building.name} - ${building.zone.name} - ${building.zone.area.name}`} />
        </View>
      </View>

      {/* Back button */}
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft size='45' color={typoColor.yellow1} variant='Bold' />
        </Pressable>
      </View>

      <View style={styles.bodyAdminContactContainer}>
        <BodyAdminContact />
      </View>
    </SafeAreaView>
  );
};

export default HomeBuilding3dScreen;

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
