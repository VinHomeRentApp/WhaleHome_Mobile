/* eslint-disable react/no-unknown-property */
import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import BuildingBlockA from '@models/3D/BuildingBlockA';
import { Canvas } from '@react-three/fiber';
import globalStyle from '@styles/globalStyle';
import useControls from 'r3f-native-orbitcontrols';
import React, { Suspense } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const Building3D = () => {
  const [OrbitControls, events] = useControls();
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <View style={styles.modelContainer} {...events}>
        <Canvas>
          <OrbitControls enableRotate={true} enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[0, 0, 1]} args={['white', 5]} />
          <directionalLight position={[0, 0, -1]} args={['white', 5]} />
          <directionalLight position={[0, 1, 0]} args={['white', 5]} />
          <directionalLight position={[0, -1, 0]} args={['white', 5]} />
          <Suspense fallback={null}>
            <BuildingBlockA />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.textField}>
        <TextComponent styles={styles.textTitle} content={'Building Block A'} />
      </View>
    </SafeAreaView>
  );
};

export default Building3D;

const styles = StyleSheet.create({
  container: {},
  modelContainer: {
    width: 500,
    height: 600
  },
  textField: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTitle: {
    fontSize: 25,
    fontFamily: fontFam.bold
  }
});
