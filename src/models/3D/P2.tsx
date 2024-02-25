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
    Object_77: THREE.Mesh;
    Object_78: THREE.Mesh;
    Object_79: THREE.Mesh;
    Object_80: THREE.Mesh;
    Object_81: THREE.Mesh;
    Object_82: THREE.Mesh;
    Object_83: THREE.Mesh;
    Object_84: THREE.Mesh;
    Object_85: THREE.Mesh;
    Object_86: THREE.Mesh;
    Object_87: THREE.Mesh;
    Object_88: THREE.Mesh;
    Object_89: THREE.Mesh;
    Object_90: THREE.Mesh;
    Object_91: THREE.Mesh;
    Object_92: THREE.Mesh;
    Object_93: THREE.Mesh;
    Object_94: THREE.Mesh;
    Object_95: THREE.Mesh;
    Object_96: THREE.Mesh;
    Object_97: THREE.Mesh;
  };
  materials: {
    ['20180805-17154-mdt_Room_Entity_Material']: THREE.MeshStandardMaterial;
    ['20201014-232339-cdt']: THREE.MeshStandardMaterial;
    ['20210426-215239-edt']: THREE.MeshStandardMaterial;
    ['20210501-84420-gmt2']: THREE.MeshStandardMaterial;
    ['20221204-141451-est']: THREE.MeshStandardMaterial;
    ['79_ceppo_di_gre_stone_flooring_pbr_texture-seamless_Room_Entity_Material']: THREE.MeshStandardMaterial;
    beige_006_Wall_Entity_Material: THREE.MeshStandardMaterial;
    blanc_001: THREE.MeshStandardMaterial;
    blanc_001_Wall_Entity_Material: THREE.MeshStandardMaterial;
    blanc_001_ovcol737373colpic12contpic11: THREE.MeshStandardMaterial;
    bois_045: THREE.MeshStandardMaterial;
    brique_015_Wall_Entity_Material: THREE.MeshStandardMaterial;
    chelsea_maxtouhey_171115_14_00_44_5ds_9809__1: THREE.MeshStandardMaterial;
    enduit_004_Room_Entity_Material: THREE.MeshStandardMaterial;
    enduit_004_Wall_Entity_Material: THREE.MeshStandardMaterial;
    fake_mat_0_0_0_255: THREE.MeshStandardMaterial;
    fake_mat_107_107_107_255: THREE.MeshStandardMaterial;
    fake_mat_142_142_142_255: THREE.MeshStandardMaterial;
    fake_mat_149_149_149_255: THREE.MeshStandardMaterial;
    fake_mat_165_165_165_255: THREE.MeshStandardMaterial;
    fake_mat_204_202_198_255: THREE.MeshStandardMaterial;
    fake_mat_231_231_231_255: THREE.MeshStandardMaterial;
    fake_mat_232_232_224_255: THREE.MeshStandardMaterial;
    fake_mat_239_223_188_255: THREE.MeshStandardMaterial;
    fake_mat_239_238_233_255: THREE.MeshStandardMaterial;
    fake_mat_251_252_254_255: THREE.MeshStandardMaterial;
    fake_mat_255_255_255_32: THREE.MeshStandardMaterial;
    fake_mat_71_71_71_255: THREE.MeshStandardMaterial;
    fenetre_029______lambert2sg3: THREE.MeshStandardMaterial;
    fenetre_029______phong1sg6: THREE.MeshStandardMaterial;
    fenetre_035______lambert2sg3: THREE.MeshStandardMaterial;
    fenetre_035______phong1sg6: THREE.MeshStandardMaterial;
    gris_003_Wall_Entity_Material: THREE.MeshStandardMaterial;
    gris_006: THREE.MeshStandardMaterial;
    indu_fauteuil_003_taupe_new___metal007: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_002___m_plastic: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_017___m_caoutchou: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_017___m_evier: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_017___m_plastic: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_017___m_rob_poignee: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_oven_003___m_metal: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_oven_003___m_panneau: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_oven_003___m_plaque: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_oven_003___m_plastic: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_oven_003___m_vitre: THREE.MeshStandardMaterial;
    kitchen_modern_style_dishwasher_000___m_panneau_machinelaver: THREE.MeshStandardMaterial;
    kitchen_modern_style_dishwasher_000___m_plastic: THREE.MeshStandardMaterial;
    kitchen_modern_style_tall_cabinet_003___m_plastic: THREE.MeshStandardMaterial;
    kitchen_modern_style_wall_cabinet_004___m_assiette: THREE.MeshStandardMaterial;
    kitchen_modern_style_wall_cabinet_004___m_panneau_microonde: THREE.MeshStandardMaterial;
    kitchen_modern_style_wall_cabinet_005___m_plastic: THREE.MeshStandardMaterial;
    kitchen_modern_style_wall_cabinet_006___m_plastic: THREE.MeshStandardMaterial;
    lit_013_queen_new___lit_013mat_tissus057_2sg: THREE.MeshStandardMaterial;
    marbre_006: THREE.MeshStandardMaterial;
    miroir_012___mat_bois097sg2: THREE.MeshStandardMaterial;
    miroir_012___mat_miroirsg: THREE.MeshStandardMaterial;
    moquette_004_ovcol737373colpic12contpic11: THREE.MeshStandardMaterial;
    moquette_006_Room_Entity_Material: THREE.MeshStandardMaterial;
    moquette_009: THREE.MeshStandardMaterial;
    moquette_013_Room_Entity_Material: THREE.MeshStandardMaterial;
    moquette_018: THREE.MeshStandardMaterial;
    parquet_022_ovcol999999colpic12contpic01_Room_Entity_Material: THREE.MeshStandardMaterial;
    parquet_029_Room_Entity_Material: THREE.MeshStandardMaterial;
    porte_005___d: THREE.MeshStandardMaterial;
    porte_005___p: THREE.MeshStandardMaterial;
    porte_021____mat_metalbasique001sg: THREE.MeshStandardMaterial;
    porte_047_________phong1sg6: THREE.MeshStandardMaterial;
    porte_047_____mat_metalbasique001sg: THREE.MeshStandardMaterial;
    porte_047_____mat_metalbasique006sg: THREE.MeshStandardMaterial;
    porte_placard_003___porte_placard_003phong3sg: THREE.MeshStandardMaterial;
    prise___material__49: THREE.MeshStandardMaterial;
    rangement_002___mat_metaldore002sg: THREE.MeshStandardMaterial;
    refrigerateur_006____refrigerateur_006_refrigerateur_006_refrigerateur_006glacon: THREE.MeshStandardMaterial;
    refrigerateur_006____refrigerateur_006_refrigerateur_006_refrigerateur_006metal: THREE.MeshStandardMaterial;
    refrigerateur_006____refrigerateur_006_refrigerateur_006_refrigerateur_006porte: THREE.MeshStandardMaterial;
    rideaux_003___rideaux_003lambert2sg: THREE.MeshStandardMaterial;
    scan_canape_001_2p_grisc_new___bois_003: THREE.MeshStandardMaterial;
    scan_canape_001_2p_grisc_new___phong4: THREE.MeshStandardMaterial;
    scan_meubletv_002_blanc___bois_001: THREE.MeshStandardMaterial;
    scan_table_001_blanc___bois_blanc: THREE.MeshStandardMaterial;
    tapis_004: THREE.MeshStandardMaterial;
    tex_bois_blanc: THREE.MeshStandardMaterial;
    tex_bois_scan_gris_011: THREE.MeshStandardMaterial;
    tex_boisv005_scan_blanc_002: THREE.MeshStandardMaterial;
    tex_tissu2: THREE.MeshStandardMaterial;
    tex_tissus_scan_beige_004: THREE.MeshStandardMaterial;
    tex_tissus_scan_beige_004_Wall_Entity_Material: THREE.MeshStandardMaterial;
    tex_tissus_scan_bleun_007: THREE.MeshStandardMaterial;
    tex_tissus_scan_noir_012: THREE.MeshStandardMaterial;
    tex_tissus_scan_taupe_010: THREE.MeshStandardMaterial;
    texture_eau_piscine_ovcolffffffcolpic12contpic05: THREE.MeshStandardMaterial;
    tissus_021: THREE.MeshStandardMaterial;
    tissus_022: THREE.MeshStandardMaterial;
    tissus_089: THREE.MeshStandardMaterial;
    tissus_095: THREE.MeshStandardMaterial;
    vint_lit_001_queen_new___tissus_blanc: THREE.MeshStandardMaterial;
  };
};

export default function P2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('../../assets/roomModel/P2.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={[1, 1, 1]} position={[25, -4, 0]}>
      <group name='2-Bedroom'>
        <group name='2-Bedroom_1'>
          <group
            name='2_bedroom_apartment_decorated'
            position={[-7.707, 0, 9.746]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          >
            <mesh
              name='Object_2'
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials['20180805-17154-mdt_Room_Entity_Material']}
            />
            <mesh
              name='Object_3'
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials['20201014-232339-cdt']}
            />
            <mesh
              name='Object_4'
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials['20210426-215239-edt']}
            />
            <mesh
              name='Object_5'
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials['20210501-84420-gmt2']}
            />
            <mesh
              name='Object_6'
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials['20221204-141451-est']}
            />
            <mesh
              name='Object_7'
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials['79_ceppo_di_gre_stone_flooring_pbr_texture-seamless_Room_Entity_Material']}
            />
            <mesh
              name='Object_8'
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.beige_006_Wall_Entity_Material}
            />
            <mesh
              name='Object_9'
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.blanc_001}
            />
            <mesh
              name='Object_10'
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.blanc_001_Wall_Entity_Material}
            />
            <mesh
              name='Object_11'
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.blanc_001_ovcol737373colpic12contpic11}
            />
            <mesh
              name='Object_12'
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.bois_045}
            />
            <mesh
              name='Object_13'
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.brique_015_Wall_Entity_Material}
            />
            <mesh
              name='Object_14'
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.chelsea_maxtouhey_171115_14_00_44_5ds_9809__1}
            />
            <mesh
              name='Object_15'
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.enduit_004_Room_Entity_Material}
            />
            <mesh
              name='Object_16'
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.enduit_004_Wall_Entity_Material}
            />
            <mesh
              name='Object_17'
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.fake_mat_0_0_0_255}
            />
            <mesh
              name='Object_18'
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.fake_mat_107_107_107_255}
            />
            <mesh
              name='Object_19'
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.fake_mat_142_142_142_255}
            />
            <mesh
              name='Object_20'
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.fake_mat_149_149_149_255}
            />
            <mesh
              name='Object_21'
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.fake_mat_165_165_165_255}
            />
            <mesh
              name='Object_22'
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.fake_mat_204_202_198_255}
            />
            <mesh
              name='Object_23'
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.fake_mat_231_231_231_255}
            />
            <mesh
              name='Object_24'
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.fake_mat_232_232_224_255}
            />
            <mesh
              name='Object_25'
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.fake_mat_239_223_188_255}
            />
            <mesh
              name='Object_26'
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials.fake_mat_239_238_233_255}
            />
            <mesh
              name='Object_27'
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.fake_mat_251_252_254_255}
            />
            <mesh
              name='Object_28'
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.fake_mat_255_255_255_32}
            />
            <mesh
              name='Object_29'
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.fake_mat_71_71_71_255}
            />
            <mesh
              name='Object_30'
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.fenetre_029______lambert2sg3}
            />
            <mesh
              name='Object_31'
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials.fenetre_029______phong1sg6}
            />
            <mesh
              name='Object_32'
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials.fenetre_035______lambert2sg3}
            />
            <mesh
              name='Object_33'
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials.fenetre_035______phong1sg6}
            />
            <mesh
              name='Object_34'
              castShadow
              receiveShadow
              geometry={nodes.Object_34.geometry}
              material={materials.gris_003_Wall_Entity_Material}
            />
            <mesh
              name='Object_35'
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.gris_006}
            />
            <mesh
              name='Object_36'
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials.indu_fauteuil_003_taupe_new___metal007}
            />
            <mesh
              name='Object_37'
              castShadow
              receiveShadow
              geometry={nodes.Object_37.geometry}
              material={materials.kitchen_modern_style_base_cabinet_002___m_plastic}
            />
            <mesh
              name='Object_38'
              castShadow
              receiveShadow
              geometry={nodes.Object_38.geometry}
              material={materials.kitchen_modern_style_base_cabinet_017___m_caoutchou}
            />
            <mesh
              name='Object_39'
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials.kitchen_modern_style_base_cabinet_017___m_evier}
            />
            <mesh
              name='Object_40'
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={materials.kitchen_modern_style_base_cabinet_017___m_plastic}
            />
            <mesh
              name='Object_41'
              castShadow
              receiveShadow
              geometry={nodes.Object_41.geometry}
              material={materials.kitchen_modern_style_base_cabinet_017___m_rob_poignee}
            />
            <mesh
              name='Object_42'
              castShadow
              receiveShadow
              geometry={nodes.Object_42.geometry}
              material={materials.kitchen_modern_style_base_cabinet_oven_003___m_metal}
            />
            <mesh
              name='Object_43'
              castShadow
              receiveShadow
              geometry={nodes.Object_43.geometry}
              material={materials.kitchen_modern_style_base_cabinet_oven_003___m_panneau}
            />
            <mesh
              name='Object_44'
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={materials.kitchen_modern_style_base_cabinet_oven_003___m_plaque}
            />
            <mesh
              name='Object_45'
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials.kitchen_modern_style_base_cabinet_oven_003___m_plastic}
            />
            <mesh
              name='Object_46'
              castShadow
              receiveShadow
              geometry={nodes.Object_46.geometry}
              material={materials.kitchen_modern_style_base_cabinet_oven_003___m_vitre}
            />
            <mesh
              name='Object_47'
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials.kitchen_modern_style_dishwasher_000___m_panneau_machinelaver}
            />
            <mesh
              name='Object_48'
              castShadow
              receiveShadow
              geometry={nodes.Object_48.geometry}
              material={materials.kitchen_modern_style_dishwasher_000___m_plastic}
            />
            <mesh
              name='Object_49'
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={materials.kitchen_modern_style_tall_cabinet_003___m_plastic}
            />
            <mesh
              name='Object_50'
              castShadow
              receiveShadow
              geometry={nodes.Object_50.geometry}
              material={materials.kitchen_modern_style_wall_cabinet_004___m_assiette}
            />
            <mesh
              name='Object_51'
              castShadow
              receiveShadow
              geometry={nodes.Object_51.geometry}
              material={materials.kitchen_modern_style_wall_cabinet_004___m_panneau_microonde}
            />
            <mesh
              name='Object_52'
              castShadow
              receiveShadow
              geometry={nodes.Object_52.geometry}
              material={materials.kitchen_modern_style_wall_cabinet_005___m_plastic}
            />
            <mesh
              name='Object_53'
              castShadow
              receiveShadow
              geometry={nodes.Object_53.geometry}
              material={materials.kitchen_modern_style_wall_cabinet_006___m_plastic}
            />
            <mesh
              name='Object_54'
              castShadow
              receiveShadow
              geometry={nodes.Object_54.geometry}
              material={materials.lit_013_queen_new___lit_013mat_tissus057_2sg}
            />
            <mesh
              name='Object_55'
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.marbre_006}
            />
            <mesh
              name='Object_56'
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials.miroir_012___mat_bois097sg2}
            />
            <mesh
              name='Object_57'
              castShadow
              receiveShadow
              geometry={nodes.Object_57.geometry}
              material={materials.miroir_012___mat_miroirsg}
            />
            <mesh
              name='Object_58'
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials.moquette_004_ovcol737373colpic12contpic11}
            />
            <mesh
              name='Object_59'
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={materials.moquette_006_Room_Entity_Material}
            />
            <mesh
              name='Object_60'
              castShadow
              receiveShadow
              geometry={nodes.Object_60.geometry}
              material={materials.moquette_009}
            />
            <mesh
              name='Object_61'
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={materials.moquette_013_Room_Entity_Material}
            />
            <mesh
              name='Object_62'
              castShadow
              receiveShadow
              geometry={nodes.Object_62.geometry}
              material={materials.moquette_018}
            />
            <mesh
              name='Object_63'
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials.parquet_022_ovcol999999colpic12contpic01_Room_Entity_Material}
            />
            <mesh
              name='Object_64'
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials.parquet_029_Room_Entity_Material}
            />
            <mesh
              name='Object_65'
              castShadow
              receiveShadow
              geometry={nodes.Object_65.geometry}
              material={materials.porte_005___d}
            />
            <mesh
              name='Object_66'
              castShadow
              receiveShadow
              geometry={nodes.Object_66.geometry}
              material={materials.porte_005___p}
            />
            <mesh
              name='Object_67'
              castShadow
              receiveShadow
              geometry={nodes.Object_67.geometry}
              material={materials.porte_021____mat_metalbasique001sg}
            />
            <mesh
              name='Object_68'
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={materials.porte_047_________phong1sg6}
            />
            <mesh
              name='Object_69'
              castShadow
              receiveShadow
              geometry={nodes.Object_69.geometry}
              material={materials.porte_047_____mat_metalbasique001sg}
            />
            <mesh
              name='Object_70'
              castShadow
              receiveShadow
              geometry={nodes.Object_70.geometry}
              material={materials.porte_047_____mat_metalbasique006sg}
            />
            <mesh
              name='Object_71'
              castShadow
              receiveShadow
              geometry={nodes.Object_71.geometry}
              material={materials.porte_placard_003___porte_placard_003phong3sg}
            />
            <mesh
              name='Object_72'
              castShadow
              receiveShadow
              geometry={nodes.Object_72.geometry}
              material={materials.prise___material__49}
            />
            <mesh
              name='Object_73'
              castShadow
              receiveShadow
              geometry={nodes.Object_73.geometry}
              material={materials.rangement_002___mat_metaldore002sg}
            />
            <mesh
              name='Object_74'
              castShadow
              receiveShadow
              geometry={nodes.Object_74.geometry}
              material={materials.refrigerateur_006____refrigerateur_006_refrigerateur_006_refrigerateur_006glacon}
            />
            <mesh
              name='Object_75'
              castShadow
              receiveShadow
              geometry={nodes.Object_75.geometry}
              material={materials.refrigerateur_006____refrigerateur_006_refrigerateur_006_refrigerateur_006metal}
            />
            <mesh
              name='Object_76'
              castShadow
              receiveShadow
              geometry={nodes.Object_76.geometry}
              material={materials.refrigerateur_006____refrigerateur_006_refrigerateur_006_refrigerateur_006porte}
            />
            <mesh
              name='Object_77'
              castShadow
              receiveShadow
              geometry={nodes.Object_77.geometry}
              material={materials.rideaux_003___rideaux_003lambert2sg}
            />
            <mesh
              name='Object_78'
              castShadow
              receiveShadow
              geometry={nodes.Object_78.geometry}
              material={materials.scan_canape_001_2p_grisc_new___bois_003}
            />
            <mesh
              name='Object_79'
              castShadow
              receiveShadow
              geometry={nodes.Object_79.geometry}
              material={materials.scan_canape_001_2p_grisc_new___phong4}
            />
            <mesh
              name='Object_80'
              castShadow
              receiveShadow
              geometry={nodes.Object_80.geometry}
              material={materials.scan_meubletv_002_blanc___bois_001}
            />
            <mesh
              name='Object_81'
              castShadow
              receiveShadow
              geometry={nodes.Object_81.geometry}
              material={materials.scan_table_001_blanc___bois_blanc}
            />
            <mesh
              name='Object_82'
              castShadow
              receiveShadow
              geometry={nodes.Object_82.geometry}
              material={materials.tapis_004}
            />
            <mesh
              name='Object_83'
              castShadow
              receiveShadow
              geometry={nodes.Object_83.geometry}
              material={materials.tex_bois_blanc}
            />
            <mesh
              name='Object_84'
              castShadow
              receiveShadow
              geometry={nodes.Object_84.geometry}
              material={materials.tex_bois_scan_gris_011}
            />
            <mesh
              name='Object_85'
              castShadow
              receiveShadow
              geometry={nodes.Object_85.geometry}
              material={materials.tex_boisv005_scan_blanc_002}
            />
            <mesh
              name='Object_86'
              castShadow
              receiveShadow
              geometry={nodes.Object_86.geometry}
              material={materials.tex_tissu2}
            />
            <mesh
              name='Object_87'
              castShadow
              receiveShadow
              geometry={nodes.Object_87.geometry}
              material={materials.tex_tissus_scan_beige_004}
            />
            <mesh
              name='Object_88'
              castShadow
              receiveShadow
              geometry={nodes.Object_88.geometry}
              material={materials.tex_tissus_scan_beige_004_Wall_Entity_Material}
            />
            <mesh
              name='Object_89'
              castShadow
              receiveShadow
              geometry={nodes.Object_89.geometry}
              material={materials.tex_tissus_scan_bleun_007}
            />
            <mesh
              name='Object_90'
              castShadow
              receiveShadow
              geometry={nodes.Object_90.geometry}
              material={materials.tex_tissus_scan_noir_012}
            />
            <mesh
              name='Object_91'
              castShadow
              receiveShadow
              geometry={nodes.Object_91.geometry}
              material={materials.tex_tissus_scan_taupe_010}
            />
            <mesh
              name='Object_92'
              castShadow
              receiveShadow
              geometry={nodes.Object_92.geometry}
              material={materials.texture_eau_piscine_ovcolffffffcolpic12contpic05}
            />
            <mesh
              name='Object_93'
              castShadow
              receiveShadow
              geometry={nodes.Object_93.geometry}
              material={materials.tissus_021}
            />
            <mesh
              name='Object_94'
              castShadow
              receiveShadow
              geometry={nodes.Object_94.geometry}
              material={materials.tissus_022}
            />
            <mesh
              name='Object_95'
              castShadow
              receiveShadow
              geometry={nodes.Object_95.geometry}
              material={materials.tissus_089}
            />
            <mesh
              name='Object_96'
              castShadow
              receiveShadow
              geometry={nodes.Object_96.geometry}
              material={materials.tissus_095}
            />
            <mesh
              name='Object_97'
              castShadow
              receiveShadow
              geometry={nodes.Object_97.geometry}
              material={materials.vint_lit_001_queen_new___tissus_blanc}
            />
            <directionalLight
              name='Directional_Light'
              intensity={3.142}
              color='#ff4600'
              position={[-0.333, 4.706, 8.53]}
              rotation={[-Math.PI / 2, -Math.PI / 6, -Math.PI]}
            >
              <group position={[0, 0, -1]} />
            </directionalLight>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(require('../../assets/roomModel/P2.glb'));
