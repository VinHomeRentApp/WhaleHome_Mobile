/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-var-requires */
import { useGLTF } from '@react-three/drei/native';
import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_20_1: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshPhysicalMaterial;
  };
};

export default function Building1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('@assets/buildingModel/Building1.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={[1.2, 1.2, 1.2]} position={[-1.8, -1, 2.5]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20_1.geometry}
        material={materials.material}
        position={[1.504, 0, 0.881]}
      />
    </group>
  );
}

useGLTF.preload(require('@assets/buildingModel/Building1.glb'));
