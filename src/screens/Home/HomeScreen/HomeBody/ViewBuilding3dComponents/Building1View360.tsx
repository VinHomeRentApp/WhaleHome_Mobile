/* eslint-disable react/no-unknown-property */
import Building3 from '@models/3D/Building3';
import { Canvas } from '@react-three/fiber';
import useControls from 'r3f-native-orbitcontrols';
import React, { Suspense } from 'react';
import { StyleSheet, View } from 'react-native';

const Building1View360 = () => {
  const [OrbitControls, events] = useControls();
  return (
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
        <Suspense fallback={null}>
          <Building3 />
        </Suspense>
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  modelContainer: {
    width: '100%',
    height: '80%'
  }
});

export default Building1View360;
