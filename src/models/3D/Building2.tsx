/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei/native';
import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_18_1: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshPhysicalMaterial;
  };
};

export default function Building2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('@assets/buildingModel/Building2.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={[7, 7, 7]} position={[-6.5, -1.5, 1]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18_1.geometry}
        material={materials.material}
        position={[0.883, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload(require('@assets/buildingModel/Building2.glb'));
