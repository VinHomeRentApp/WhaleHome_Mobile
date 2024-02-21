/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Floor: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Wall: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube018_1: THREE.Mesh;
    Cube018_2: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube021_1: THREE.Mesh;
    Cube041: THREE.Mesh;
    Cube041_1: THREE.Mesh;
    Cube041_2: THREE.Mesh;
    Cube041_3: THREE.Mesh;
    Cube041_4: THREE.Mesh;
    Icosphere: THREE.Mesh;
    Icosphere_1: THREE.Mesh;
    Icosphere_2: THREE.Mesh;
    Icosphere_3: THREE.Mesh;
    Icosphere005: THREE.Mesh;
    Icosphere005_1: THREE.Mesh;
    Icosphere005_2: THREE.Mesh;
    Hang_shelf: THREE.Mesh;
    Hang_shelf001: THREE.Mesh;
    Table: THREE.Mesh;
    Cutting_board: THREE.Mesh;
    Cube053: THREE.Mesh;
    Cube053_1: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder004_1: THREE.Mesh;
    Cylinder006: THREE.Mesh;
    Cylinder006_1: THREE.Mesh;
    Cube057: THREE.Mesh;
    Cube057_1: THREE.Mesh;
    Cube061: THREE.Mesh;
    Cube061_1: THREE.Mesh;
    Cube062: THREE.Mesh;
    Cube062_1: THREE.Mesh;
    Plate: THREE.Mesh;
    Doughnut: THREE.Mesh;
    Cylinder014: THREE.Mesh;
    Cylinder014_1: THREE.Mesh;
    Cylinder014_2: THREE.Mesh;
    Cylinder014_3: THREE.Mesh;
    Cylinder015: THREE.Mesh;
    Cylinder015_1: THREE.Mesh;
    Cylinder016: THREE.Mesh;
    Cylinder016_1: THREE.Mesh;
    Cylinder017: THREE.Mesh;
    Cylinder017_1: THREE.Mesh;
    Cylinder018: THREE.Mesh;
    Cylinder018_1: THREE.Mesh;
    Cylinder018_2: THREE.Mesh;
    Cylinder018_3: THREE.Mesh;
    Stack_of_plate: THREE.Mesh;
    Cube063: THREE.Mesh;
    Cube063_1: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
    ['Floor tile']: THREE.MeshStandardMaterial;
    Fridge: THREE.MeshStandardMaterial;
    Handle: THREE.MeshStandardMaterial;
    Counter: THREE.MeshStandardMaterial;
    ['Counter top']: THREE.MeshStandardMaterial;
    Sink: THREE.MeshStandardMaterial;
    Table: THREE.MeshStandardMaterial;
    ['Jar lid']: THREE.MeshStandardMaterial;
    Stove: THREE.MeshStandardMaterial;
    ['Blue jar']: THREE.MeshStandardMaterial;
    ['Red jar']: THREE.MeshStandardMaterial;
    ['Green jar']: THREE.MeshStandardMaterial;
    Coffee: THREE.MeshStandardMaterial;
    Leaves: THREE.MeshStandardMaterial;
    ['Milk cartoon']: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('../../assets/roomModel/kitchen.glb')) as GLTFResult;
  return (
    <group {...props} scale={[0.5, 0.5, 0.5]} position={[0, -2, 0]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.White}
        position={[0, 0, 0.392]}
        scale={[3.6, 0.18, 3.6]}
      />
      <group position={[-0.017, 0.271, 0.384]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials['Floor tile']} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall.geometry}
        material={materials.White}
        position={[0, 2.327, 0.392]}
        scale={[3.6, 2.5, 3.6]}
      />
      <group position={[-1.82, 0.349, 3.428]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube018.geometry} material={materials.Fridge} />
        <mesh castShadow receiveShadow geometry={nodes.Cube018_1.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube018_2.geometry} material={materials.Handle} />
      </group>
      <group position={[2.749, 0.347, 3.003]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube021.geometry} material={materials.Counter} />
        <mesh castShadow receiveShadow geometry={nodes.Cube021_1.geometry} material={materials['Counter top']} />
      </group>
      <group position={[0.518, 0.347, 3.219]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube041.geometry} material={materials.Counter} />
        <mesh castShadow receiveShadow geometry={nodes.Cube041_1.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube041_2.geometry} material={materials.Handle} />
        <mesh castShadow receiveShadow geometry={nodes.Cube041_3.geometry} material={materials['Counter top']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube041_4.geometry} material={materials.Sink} />
      </group>
      <group position={[2.722, 0.339, -1.593]}>
        <mesh castShadow receiveShadow geometry={nodes.Icosphere.geometry} material={materials.Handle} />
        <mesh castShadow receiveShadow geometry={nodes.Icosphere_1.geometry} material={materials.Counter} />
        <mesh castShadow receiveShadow geometry={nodes.Icosphere_2.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Icosphere_3.geometry} material={materials['Counter top']} />
      </group>
      <group position={[1.192, 3.511, 3.562]}>
        <mesh castShadow receiveShadow geometry={nodes.Icosphere005.geometry} material={materials.Handle} />
        <mesh castShadow receiveShadow geometry={nodes.Icosphere005_1.geometry} material={materials.Counter} />
        <mesh castShadow receiveShadow geometry={nodes.Icosphere005_2.geometry} material={materials.White} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hang_shelf.geometry}
        material={materials['Counter top']}
        position={[3.433, 3.275, -1.61]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hang_shelf001.geometry}
        material={materials['Counter top']}
        position={[3.433, 3.947, -1.61]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table.geometry}
        material={materials.Table}
        position={[-1.476, 1.637, -1.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cutting_board.geometry}
        material={materials.Table}
        position={[2.586, 2.497, -0.897]}
        rotation={[0, 1.3, 0]}
      />
      <group position={[2.714, 0.345, 1.014]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube053.geometry} material={materials.Fridge} />
        <mesh castShadow receiveShadow geometry={nodes.Cube053_1.geometry} material={materials.Sink} />
      </group>
      <group position={[2.387, 2.636, 0.513]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder004.geometry} material={materials.Counter} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder004_1.geometry} material={materials['Counter top']} />
      </group>
      <group position={[3.29, 4.193, -1.91]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006.geometry} material={materials['Counter top']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006_1.geometry} material={materials['Jar lid']} />
      </group>
      <group position={[-1.441, 0.343, -1.126]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube057.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube057_1.geometry} material={materials.Stove} />
      </group>
      <group position={[-2.447, 0.339, -1.137]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube061.geometry} material={materials['Counter top']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube061_1.geometry} material={materials.Table} />
      </group>
      <group position={[-0.455, 0.339, -1.137]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube062.geometry} material={materials['Counter top']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube062_1.geometry} material={materials.Table} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plate.geometry}
        material={materials.White}
        position={[-1.421, 1.74, -1.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Doughnut.geometry}
        material={materials.Table}
        position={[-1.42, 1.843, -1.024]}
      />
      <group position={[3.311, 3.529, -1.709]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014.geometry} material={materials['Blue jar']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014_1.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014_2.geometry} material={materials['Red jar']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014_3.geometry} material={materials['Green jar']} />
      </group>
      <group position={[-1.332, 1.735, -1.802]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder015.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder015_1.geometry} material={materials.Coffee} />
      </group>
      <group position={[3.256, 2.477, 3.638]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder016.geometry} material={materials['Red jar']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder016_1.geometry} material={materials.Leaves} />
      </group>
      <group position={[2.673, 2.486, 3.649]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder017.geometry} material={materials['Blue jar']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder017_1.geometry} material={materials.Leaves} />
      </group>
      <group position={[-3.261, 0.323, 3.371]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder018.geometry} material={materials.Coffee} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder018_1.geometry} material={materials['Jar lid']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder018_2.geometry} material={materials.Leaves} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder018_3.geometry} material={materials.Table} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stack_of_plate.geometry}
        material={materials.White}
        position={[1.296, 2.498, 3.112]}
      />
      <group position={[3.282, 4.828, 0.945]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube063.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube063_1.geometry} material={materials.Table} />
      </group>
      <group position={[3.25, 2.478, -2.264]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials['Milk cartoon']} />
      </group>
      <group position={[3.201, 2.478, -1.773]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube004_1.geometry} material={materials['Milk cartoon']} />
      </group>
    </group>
  );
}

useGLTF.preload(require('../../assets/roomModel/kitchen.glb'));
