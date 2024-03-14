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
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_35: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_39: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_43: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_45: THREE.Mesh;
    Object_46: THREE.Mesh;
    Object_47: THREE.Mesh;
    Object_48: THREE.Mesh;
    Object_49: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_51: THREE.Mesh;
    Object_52: THREE.Mesh;
    Object_53: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_55: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_57: THREE.Mesh;
    Object_58: THREE.Mesh;
    Object_59: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_61: THREE.Mesh;
    Object_62: THREE.Mesh;
    Object_63: THREE.Mesh;
    Object_64: THREE.Mesh;
    Object_65: THREE.Mesh;
    Object_66: THREE.Mesh;
    Object_67: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_69: THREE.Mesh;
    Object_70: THREE.Mesh;
    Object_71: THREE.Mesh;
    Object_72: THREE.Mesh;
    Object_73: THREE.Mesh;
    Object_74: THREE.Mesh;
    Object_75: THREE.Mesh;
    Object_76: THREE.Mesh;
  };
  materials: {
    ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcoussins_front: THREE.MeshStandardMaterial;
    ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcouette: THREE.MeshStandardMaterial;
    ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcoussins_front_0: THREE.MeshStandardMaterial;
    ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcoussins_front_1: THREE.MeshStandardMaterial;
    ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcoussins_front_2: THREE.MeshStandardMaterial;
    beige_006_Wall_Entity_Material: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_0: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_1: THREE.MeshStandardMaterial;
    cuis_element_bas_evier_002___corps: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_2: THREE.MeshStandardMaterial;
    cuis_element_bas_evier_002___poignees: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_3: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_4: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_5: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_6: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_7: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_8: THREE.MeshStandardMaterial;
    douche_003___mat_douche_003_vitre: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_9: THREE.MeshStandardMaterial;
    fenetre_us_008_24_new___verre: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_007___m_rob_poignee: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_007___m_surface: THREE.MeshStandardMaterial;
    material_0: THREE.MeshStandardMaterial;
    material_1: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_10: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_11: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_12: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_13: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_14: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_15: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_16: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_17: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_18: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_19: THREE.MeshStandardMaterial;
    porte_006___p: THREE.MeshStandardMaterial;
    porte_006___verre: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_20: THREE.MeshStandardMaterial;
    porte_015____porte_us_verre: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_21: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_22: THREE.MeshStandardMaterial;
    porte_025_new____mat_metalbasique001sg: THREE.MeshStandardMaterial;
    porte_025_new___mat_bois080sg: THREE.MeshStandardMaterial;
    porte_025_new___mat_metalorsg: THREE.MeshStandardMaterial;
    porte_025_new___mat_vitresg: THREE.MeshStandardMaterial;
    material_2: THREE.MeshStandardMaterial;
    porte_placard_002___porte_placard_002phong3sg: THREE.MeshStandardMaterial;
    porte_us_008___porte_us_008_porte_us_008p: THREE.MeshStandardMaterial;
    porte_us_008___porte_us_008_porte_us_verre: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_23: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_24: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_25: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_26: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_27: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_28: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_29: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_30: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_31: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_32: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_33: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_34: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_35: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_36: THREE.MeshStandardMaterial;
    vitrine_002_bis___mat_urnesg: THREE.MeshStandardMaterial;
    wc_003___bouton: THREE.MeshStandardMaterial;
    vitrine_002_bis____mat_cadrantsg_37: THREE.MeshStandardMaterial;
    cuis_element_bas_evier_002___portes: THREE.MeshStandardMaterial;
    meuble_lavabo_003___poignee: THREE.MeshStandardMaterial;
    porte_005___p: THREE.MeshStandardMaterial;
    baignoire_002___baignoire_003chrome_robinets: THREE.MeshStandardMaterial;
  };
};

export default function P2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('@assets/roomModel/P2.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={[0.4, 0.4, 0.4]} position={[1, -1, -2]}>
      <group position={[-3.041, 0.25, 0.685]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcoussins_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcouette}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcoussins_front_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcoussins_front_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.ashley_porter_cpk_bis_queen_new___ashley_porter_cpk_bis_queen_newcoussins_front_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.beige_006_Wall_Entity_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.cuis_element_bas_evier_002___corps}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.cuis_element_bas_evier_002___poignees}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.douche_003___mat_douche_003_vitre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.fenetre_us_008_24_new___verre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.kitchen_modern_style_base_cabinet_007___m_rob_poignee}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.kitchen_modern_style_base_cabinet_007___m_surface}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_25.geometry} material={materials.material_0} />
        <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials.material_1} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_19}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials.porte_006___p} />
        <mesh castShadow receiveShadow geometry={nodes.Object_38.geometry} material={materials.porte_006___verre} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.porte_015____porte_us_verre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.porte_025_new____mat_metalbasique001sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.porte_025_new___mat_bois080sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.porte_025_new___mat_metalorsg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.porte_025_new___mat_vitresg}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_47.geometry} material={materials.material_2} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.porte_placard_002___porte_placard_002phong3sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials.porte_us_008___porte_us_008_porte_us_008p}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.porte_us_008___porte_us_008_porte_us_verre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_24}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_27}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_57.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_31}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_61.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_33}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_34}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_63.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_35}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_36}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_65.geometry}
          material={materials.vitrine_002_bis___mat_urnesg}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_66.geometry} material={materials.wc_003___bouton} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_67.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_37}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.cuis_element_bas_evier_002___portes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_69.geometry}
          material={materials.meuble_lavabo_003___poignee}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_70.geometry} material={materials.porte_005___p} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_71.geometry}
          material={materials.vitrine_002_bis____mat_cadrantsg_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials.baignoire_002___baignoire_003chrome_robinets}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_73.geometry}
          material={materials.baignoire_002___baignoire_003chrome_robinets}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_74.geometry}
          material={materials.baignoire_002___baignoire_003chrome_robinets}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_75.geometry}
          material={materials.baignoire_002___baignoire_003chrome_robinets}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_76.geometry}
          material={materials.baignoire_002___baignoire_003chrome_robinets}
        />
      </group>
    </group>
  );
}

useGLTF.preload(require('@assets/roomModel/P2.glb'));
