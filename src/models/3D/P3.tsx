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
    Object_98: THREE.Mesh;
    Object_99: THREE.Mesh;
  };
  materials: {
    ['20210814-113542-edt']: THREE.MeshStandardMaterial;
    balcony_3_bis___glass: THREE.MeshStandardMaterial;
    balcony_3_bis___metal: THREE.MeshStandardMaterial;
    beige_006_Wall_Entity_Material: THREE.MeshStandardMaterial;
    blanc_001_Wall_Entity_Material: THREE.MeshStandardMaterial;
    bureau_004___metal_armature: THREE.MeshStandardMaterial;
    bureau_004___paper_feuilles: THREE.MeshStandardMaterial;
    bureau_004___paper_livre1: THREE.MeshStandardMaterial;
    bureau_004___paper_photo: THREE.MeshStandardMaterial;
    bureau_004___plastic_beige: THREE.MeshStandardMaterial;
    bureau_004___plastic_clavier: THREE.MeshStandardMaterial;
    bureau_004___plastic_ecran: THREE.MeshStandardMaterial;
    bureau_004___wood_bois: THREE.MeshStandardMaterial;
    carrelage_039_Room_Entity_Material: THREE.MeshStandardMaterial;
    chaise_off_007___boisclair1: THREE.MeshStandardMaterial;
    chaise_off_007___phong44: THREE.MeshStandardMaterial;
    colonne8___phong13sg: THREE.MeshStandardMaterial;
    colonne8___phong19sg: THREE.MeshStandardMaterial;
    colonne8___roof_monoceiling: THREE.MeshStandardMaterial;
    enduit_004_Room_Entity_Material: THREE.MeshStandardMaterial;
    enduit_004_Wall_Entity_Material: THREE.MeshStandardMaterial;
    fake_mat_0_0_0_255: THREE.MeshStandardMaterial;
    fake_mat_103_137_63_255: THREE.MeshStandardMaterial;
    fake_mat_104_104_104_255: THREE.MeshStandardMaterial;
    fake_mat_109_119_119_255: THREE.MeshStandardMaterial;
    fake_mat_12_12_12_255: THREE.MeshStandardMaterial;
    fake_mat_157_157_157_255: THREE.MeshStandardMaterial;
    fake_mat_199_64_11_255: THREE.MeshStandardMaterial;
    fake_mat_228_214_163_255: THREE.MeshStandardMaterial;
    fake_mat_229_229_229_255: THREE.MeshStandardMaterial;
    fake_mat_254_254_254_255: THREE.MeshStandardMaterial;
    fake_mat_255_255_255_32: THREE.MeshStandardMaterial;
    fake_mat_40_145_200_255: THREE.MeshStandardMaterial;
    fake_mat_5_5_5_255: THREE.MeshStandardMaterial;
    fake_mat_86_66_65_255: THREE.MeshStandardMaterial;
    fake_mat_91_147_142_255: THREE.MeshStandardMaterial;
    fenetre_us_010___d1: THREE.MeshStandardMaterial;
    fenetre_us_010___verre: THREE.MeshStandardMaterial;
    indu_canape_002_3p_noir___assise_canape_indu_002_3p1: THREE.MeshStandardMaterial;
    indu_canape_002_3p_noir___coussin_canape_indu_002_3p1: THREE.MeshStandardMaterial;
    indu_table_001_metal002___bois_004: THREE.MeshStandardMaterial;
    indu_table_001_metal002___metal007: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_000___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_009___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_010___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_012___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_013___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_017___lambert2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_017___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_017___phong8sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_dishwasher_000___phong5sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_dishwasher_000___phong9sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_oven_000___lambert3sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_oven_000___phong4sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_oven_000___phong5sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_oven_000___phong6sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_oven_000___phong7sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_oven_000___vitre: THREE.MeshStandardMaterial;
    kitchen_classic_style_tall_cabinet_003___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_top_cabinet_001___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_wall_cabinet_002___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_wall_cabinet_004___lambert5sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_wall_cabinet_004___phong2sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_wall_cabinet_004___phong5sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_wall_cabinet_004___phong6sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_wall_cabinet_004___phong7sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_wall_cabinet_004___vitre: THREE.MeshStandardMaterial;
    kitchen_classic_style_wall_cabinet_006___phong2sg: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_016___m_rob_poignee: THREE.MeshStandardMaterial;
    kitchen_modern_style_base_cabinet_016___m_surface: THREE.MeshStandardMaterial;
    lambris_004_Room_Entity_Material: THREE.MeshStandardMaterial;
    lave_linge_001___phong1sg: THREE.MeshStandardMaterial;
    moquette_tex_001_Room_Entity_Material: THREE.MeshStandardMaterial;
    pack_002_sdb_lavabo_001___01___defaultr: THREE.MeshStandardMaterial;
    pack_002_sdb_lavabo_001___material__6: THREE.MeshStandardMaterial;
    pack_003_salon_television___material__81: THREE.MeshStandardMaterial;
    pack_004_chambre_001_lit___bois: THREE.MeshStandardMaterial;
    pack_004_chambre_001_lit___coussin001: THREE.MeshStandardMaterial;
    pack_004_chambre_001_lit___coussin002: THREE.MeshStandardMaterial;
    pack_004_chambre_001_lit___drap001: THREE.MeshStandardMaterial;
    pack_004_chambre_001_lit___drap002: THREE.MeshStandardMaterial;
    pack_004_chambre_001_lit___metal: THREE.MeshStandardMaterial;
    porte_005___d: THREE.MeshStandardMaterial;
    porte_005___p: THREE.MeshStandardMaterial;
    porte_014___phong1sg: THREE.MeshStandardMaterial;
    porte_014___phong4sg: THREE.MeshStandardMaterial;
    porte_031____mat_metalbasique001sg: THREE.MeshStandardMaterial;
    porte_031___mat_bois080sg: THREE.MeshStandardMaterial;
    porte_031___mat_vitresg: THREE.MeshStandardMaterial;
    porte_placard_002___porte_placard_002phong2sg: THREE.MeshStandardMaterial;
    porte_placard_002___porte_placard_002phong3sg: THREE.MeshStandardMaterial;
    rangement_013_____mat_bois097sg1: THREE.MeshStandardMaterial;
    rangement_013___mat_metalbasique005sg: THREE.MeshStandardMaterial;
    refrigerateur_003___facade: THREE.MeshStandardMaterial;
    refrigerateur_003___metal: THREE.MeshStandardMaterial;
    seche_linge_002___sechelinge: THREE.MeshStandardMaterial;
    table_basse_019___mat_magasine1sg: THREE.MeshStandardMaterial;
    table_basse_019___mat_magasinesg: THREE.MeshStandardMaterial;
  };
};

const P3Model = require('@assets/roomModel/P3.glb');

export default function P3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(P3Model) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={[0.3, 0.3, 0.3]} position={[1.5, -2, 1]}>
      <group position={[1.38, 0, -12.65]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials['20210814-113542-edt']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.balcony_3_bis___glass} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.balcony_3_bis___metal} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.beige_006_Wall_Entity_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.blanc_001_Wall_Entity_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.bureau_004___metal_armature}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.bureau_004___paper_feuilles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.bureau_004___paper_livre1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.bureau_004___paper_photo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.bureau_004___plastic_beige}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.bureau_004___plastic_clavier}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.bureau_004___plastic_ecran}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.bureau_004___wood_bois}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.carrelage_039_Room_Entity_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.chaise_off_007___boisclair1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.chaise_off_007___phong44}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.colonne8___phong13sg} />
        <mesh castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.colonne8___phong19sg} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.colonne8___roof_monoceiling}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.enduit_004_Room_Entity_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.enduit_004_Wall_Entity_Material}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials.fake_mat_0_0_0_255} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.fake_mat_103_137_63_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.fake_mat_104_104_104_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.fake_mat_109_119_119_255}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_27.geometry} material={materials.fake_mat_12_12_12_255} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.fake_mat_157_157_157_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.fake_mat_199_64_11_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.fake_mat_228_214_163_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.fake_mat_229_229_229_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.fake_mat_254_254_254_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.fake_mat_255_255_255_32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.fake_mat_40_145_200_255}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials.fake_mat_5_5_5_255} />
        <mesh castShadow receiveShadow geometry={nodes.Object_36.geometry} material={materials.fake_mat_86_66_65_255} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.fake_mat_91_147_142_255}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_38.geometry} material={materials.fenetre_us_010___d1} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.fenetre_us_010___verre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.indu_canape_002_3p_noir___assise_canape_indu_002_3p1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.indu_canape_002_3p_noir___coussin_canape_indu_002_3p1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.indu_table_001_metal002___bois_004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.indu_table_001_metal002___metal007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.kitchen_classic_style_base_cabinet_000___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.kitchen_classic_style_base_cabinet_009___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.kitchen_classic_style_base_cabinet_010___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.kitchen_classic_style_base_cabinet_012___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.kitchen_classic_style_base_cabinet_013___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials.kitchen_classic_style_base_cabinet_017___lambert2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.kitchen_classic_style_base_cabinet_017___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.kitchen_classic_style_base_cabinet_017___phong8sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.kitchen_classic_style_dishwasher_000___phong5sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.kitchen_classic_style_dishwasher_000___phong9sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.kitchen_classic_style_oven_000___lambert3sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.kitchen_classic_style_oven_000___phong4sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.kitchen_classic_style_oven_000___phong5sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_57.geometry}
          material={materials.kitchen_classic_style_oven_000___phong6sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.kitchen_classic_style_oven_000___phong7sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials.kitchen_classic_style_oven_000___vitre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.kitchen_classic_style_tall_cabinet_003___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_61.geometry}
          material={materials.kitchen_classic_style_top_cabinet_001___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.kitchen_classic_style_wall_cabinet_002___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_63.geometry}
          material={materials.kitchen_classic_style_wall_cabinet_004___lambert5sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.kitchen_classic_style_wall_cabinet_004___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_65.geometry}
          material={materials.kitchen_classic_style_wall_cabinet_004___phong5sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.kitchen_classic_style_wall_cabinet_004___phong6sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_67.geometry}
          material={materials.kitchen_classic_style_wall_cabinet_004___phong7sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.kitchen_classic_style_wall_cabinet_004___vitre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_69.geometry}
          material={materials.kitchen_classic_style_wall_cabinet_006___phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.kitchen_modern_style_base_cabinet_016___m_rob_poignee}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_71.geometry}
          material={materials.kitchen_modern_style_base_cabinet_016___m_surface}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials.lambris_004_Room_Entity_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_73.geometry}
          material={materials.lave_linge_001___phong1sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_74.geometry}
          material={materials.moquette_tex_001_Room_Entity_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_75.geometry}
          material={materials.pack_002_sdb_lavabo_001___01___defaultr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_76.geometry}
          material={materials.pack_002_sdb_lavabo_001___material__6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_77.geometry}
          material={materials.pack_003_salon_television___material__81}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_78.geometry}
          material={materials.pack_004_chambre_001_lit___bois}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_79.geometry}
          material={materials.pack_004_chambre_001_lit___coussin001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_80.geometry}
          material={materials.pack_004_chambre_001_lit___coussin002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_81.geometry}
          material={materials.pack_004_chambre_001_lit___drap001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_82.geometry}
          material={materials.pack_004_chambre_001_lit___drap002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_83.geometry}
          material={materials.pack_004_chambre_001_lit___metal}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_84.geometry} material={materials.porte_005___d} />
        <mesh castShadow receiveShadow geometry={nodes.Object_85.geometry} material={materials.porte_005___p} />
        <mesh castShadow receiveShadow geometry={nodes.Object_86.geometry} material={materials.porte_014___phong1sg} />
        <mesh castShadow receiveShadow geometry={nodes.Object_87.geometry} material={materials.porte_014___phong4sg} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_88.geometry}
          material={materials.porte_031____mat_metalbasique001sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_89.geometry}
          material={materials.porte_031___mat_bois080sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_90.geometry}
          material={materials.porte_031___mat_vitresg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_91.geometry}
          material={materials.porte_placard_002___porte_placard_002phong2sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_92.geometry}
          material={materials.porte_placard_002___porte_placard_002phong3sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93.geometry}
          material={materials.rangement_013_____mat_bois097sg1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_94.geometry}
          material={materials.rangement_013___mat_metalbasique005sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_95.geometry}
          material={materials.refrigerateur_003___facade}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_96.geometry}
          material={materials.refrigerateur_003___metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_97.geometry}
          material={materials.seche_linge_002___sechelinge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_98.geometry}
          material={materials.table_basse_019___mat_magasine1sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_99.geometry}
          material={materials.table_basse_019___mat_magasinesg}
        />
      </group>
    </group>
  );
}

useGLTF.preload(P3Model);
