/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei/native';
import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    o_concrete_01: THREE.Mesh;
    o_glass: THREE.Mesh;
    o_concrete_02: THREE.Mesh;
    o_frames: THREE.Mesh;
    o_transparent_balcony: THREE.Mesh;
    o_balcony_barriers: THREE.Mesh;
    o_roof: THREE.Mesh;
    o_sides: THREE.Mesh;
    o_concrete_03: THREE.Mesh;
    o_concrete_04: THREE.Mesh;
    o_base: THREE.Mesh;
    o_ladder: THREE.Mesh;
    o_balcony_base: THREE.Mesh;
    miara015: THREE.Mesh;
    miara015_1: THREE.Mesh;
    o_plain_entrance: THREE.Mesh;
    o_barriers002: THREE.Mesh;
    o_barriers002_1: THREE.Mesh;
  };
  materials: {
    m_concrete_01: THREE.MeshStandardMaterial;
    m_concrete_02: THREE.MeshStandardMaterial;
    m_frames: THREE.MeshStandardMaterial;
    m_transparent_balcony: THREE.MeshPhysicalMaterial;
    m_balcony_barriers: THREE.MeshStandardMaterial;
    m_roof: THREE.MeshStandardMaterial;
    m_sides: THREE.MeshStandardMaterial;
    m_concrete_03: THREE.MeshStandardMaterial;
    m_concrete_04: THREE.MeshStandardMaterial;
    m_base: THREE.MeshStandardMaterial;
    m_ladder: THREE.MeshStandardMaterial;
    m_balcony_base: THREE.MeshStandardMaterial;
    m_doors_01: THREE.MeshStandardMaterial;
    m_doors_02: THREE.MeshStandardMaterial;
    m_metal: THREE.MeshStandardMaterial;
    m_glass: THREE.MeshStandardMaterial;
  };
};

export default function BuildingBlockA(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('../../assets/images/building/building.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={[0.1, 0.1, 0.1]} position={[0, -2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_concrete_01.geometry}
        material={materials.m_concrete_01}
        userData={{ name: 'o_concrete_01' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_glass.geometry}
        material={materials.m_glass}
        userData={{ name: 'o_glass' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_concrete_02.geometry}
        material={materials.m_concrete_02}
        userData={{ name: 'o_concrete_02' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_frames.geometry}
        material={materials.m_frames}
        userData={{ name: 'o_frames' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_transparent_balcony.geometry}
        material={materials.m_transparent_balcony}
        userData={{ name: 'o_transparent_balcony' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_balcony_barriers.geometry}
        material={materials.m_balcony_barriers}
        userData={{ name: 'o_balcony_barriers' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_roof.geometry}
        material={materials.m_roof}
        userData={{ name: 'o_roof' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_sides.geometry}
        material={materials.m_sides}
        userData={{ name: 'o_sides' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_concrete_03.geometry}
        material={materials.m_concrete_03}
        userData={{ name: 'o_concrete_03' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_concrete_04.geometry}
        material={materials.m_concrete_04}
        userData={{ name: 'o_concrete_04' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_base.geometry}
        material={materials.m_base}
        userData={{ name: 'o_base' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_ladder.geometry}
        material={materials.m_ladder}
        userData={{ name: 'o_ladder' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_balcony_base.geometry}
        material={materials.m_balcony_base}
        userData={{ name: 'o_balcony_base' }}
      />
      <group userData={{ name: 'o_roof_doors' }}>
        <mesh castShadow receiveShadow geometry={nodes.miara015.geometry} material={materials.m_doors_01} />
        <mesh castShadow receiveShadow geometry={nodes.miara015_1.geometry} material={materials.m_doors_02} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o_plain_entrance.geometry}
        material={materials.m_concrete_02}
        userData={{ name: 'o_plain_entrance' }}
      />
      <group userData={{ name: 'o_doors_06' }}>
        <mesh castShadow receiveShadow geometry={nodes.o_barriers002.geometry} material={materials.m_metal} />
        <mesh castShadow receiveShadow geometry={nodes.o_barriers002_1.geometry} material={materials.m_glass} />
      </group>
    </group>
  );
}

useGLTF.preload(require('../../assets/images/building/building.glb'));
