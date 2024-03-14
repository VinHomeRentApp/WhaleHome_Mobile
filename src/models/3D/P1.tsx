/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei/native';
import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
  };
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial;
  };
};

export default function P1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('../../assets/roomModel/P1.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={[1, 0.5, 1]} position={[0, -1, -5]}>
      <group position={[-3.402, -0.116, 3.933]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.025}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials['Scene_-_Root']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials['Scene_-_Root']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials['Scene_-_Root']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root']} />
      </group>
    </group>
  );
}

useGLTF.preload(require('../../assets/roomModel/P1.glb'));
