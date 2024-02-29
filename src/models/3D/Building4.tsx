/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei/native';
import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['monaco_residential_3_Material_#25_0']: THREE.Mesh;
  };
  materials: {
    Material_25: THREE.MeshStandardMaterial;
  };
};

export default function Building4(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('@assets/buildingModel/Building4.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[-52.413, 0, 14.278]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['monaco_residential_3_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[0, 0, 0.1]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(require('@assets/buildingModel/Building4.glb'));
