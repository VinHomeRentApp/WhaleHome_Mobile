/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_38_1: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshPhysicalMaterial;
  };
};

export default function Building7(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('@assets/buildingModel/Building7.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38_1.geometry}
        material={materials.material}
        position={[-8.48, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload(require('@assets/buildingModel/Building7.glb'));
