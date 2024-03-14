/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei/native';
import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
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
    Object_100: THREE.Mesh;
    Object_101: THREE.Mesh;
  };
  materials: {
    ['20200503-93522-edt_Room_Entity_Material']: THREE.MeshStandardMaterial;
    ['20200516-21390-edt']: THREE.MeshStandardMaterial;
    ['20200531-185918-edt']: THREE.MeshStandardMaterial;
    ['20200612-10431-edt']: THREE.MeshStandardMaterial;
    ['20200625-164026-edt']: THREE.MeshStandardMaterial;
    ['20200625-164042-edt']: THREE.MeshStandardMaterial;
    ['20200625-17217-edt']: THREE.MeshStandardMaterial;
    ['20200625-17229-edt']: THREE.MeshStandardMaterial;
    ['20200625-17234-edt']: THREE.MeshStandardMaterial;
    ['20200625-17835-edt']: THREE.MeshStandardMaterial;
    ['20200625-195733-edt']: THREE.MeshStandardMaterial;
    ['20200625-195733-edt_Room_Entity_Material']: THREE.MeshStandardMaterial;
    ['20200625-20125-edt']: THREE.MeshStandardMaterial;
    ['20200625-20125-edt_Wall_Entity_Material']: THREE.MeshStandardMaterial;
    ['20200626-10654-edt']: THREE.MeshStandardMaterial;
    ['20200701-83229-edt_Wall_Entity_Material']: THREE.MeshStandardMaterial;
    bamboo___bamboo_feuille: THREE.MeshStandardMaterial;
    bamboo___bamboo_gazon: THREE.MeshStandardMaterial;
    bamboo___bamboo_tronc: THREE.MeshStandardMaterial;
    beige_006_Wall_Entity_Material: THREE.MeshStandardMaterial;
    blanc_001: THREE.MeshStandardMaterial;
    douche_002___mat_douche_002_vitre: THREE.MeshStandardMaterial;
    echelle_sdb____bouchon: THREE.MeshStandardMaterial;
    echelle_sdb____flacon_00: THREE.MeshStandardMaterial;
    echelle_sdb____flacon_01: THREE.MeshStandardMaterial;
    echelle_sdb____flacon_02: THREE.MeshStandardMaterial;
    echelle_sdb____porte_savon: THREE.MeshStandardMaterial;
    echelle_sdb___serviette_beige: THREE.MeshStandardMaterial;
    echelle_sdb___serviette_bleue: THREE.MeshStandardMaterial;
    echelle_sdb___serviette_brune: THREE.MeshStandardMaterial;
    enduit_004_Room_Entity_Material: THREE.MeshStandardMaterial;
    enduit_004_Wall_Entity_Material: THREE.MeshStandardMaterial;
    fake_mat_0_0_0_255: THREE.MeshStandardMaterial;
    fake_mat_103_137_63_255: THREE.MeshStandardMaterial;
    fake_mat_107_107_107_255: THREE.MeshStandardMaterial;
    fake_mat_107_66_38_255: THREE.MeshStandardMaterial;
    fake_mat_114_59_84_255: THREE.MeshStandardMaterial;
    fake_mat_119_86_107_255: THREE.MeshStandardMaterial;
    fake_mat_141_20_41_255: THREE.MeshStandardMaterial;
    fake_mat_152_152_152_255: THREE.MeshStandardMaterial;
    fake_mat_186_70_112_255: THREE.MeshStandardMaterial;
    fake_mat_200_199_198_255: THREE.MeshStandardMaterial;
    fake_mat_219_214_188_255: THREE.MeshStandardMaterial;
    fake_mat_239_223_188_255: THREE.MeshStandardMaterial;
    fake_mat_254_254_254_255: THREE.MeshStandardMaterial;
    fake_mat_255_255_255_32: THREE.MeshStandardMaterial;
    fake_mat_35_35_35_255: THREE.MeshStandardMaterial;
    fake_mat_40_145_200_255: THREE.MeshStandardMaterial;
    fake_mat_54_54_54_255: THREE.MeshStandardMaterial;
    fenetre_029______phong1sg6: THREE.MeshStandardMaterial;
    gris_005: THREE.MeshStandardMaterial;
    gris_006: THREE.MeshStandardMaterial;
    hotte_001___material__178: THREE.MeshStandardMaterial;
    hotte_001___material__179: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_oven_001___lambert7sg: THREE.MeshStandardMaterial;
    kitchen_classic_style_base_cabinet_oven_001___lambert8sg: THREE.MeshStandardMaterial;
    lit_016___mat_tissus057sg: THREE.MeshStandardMaterial;
    metal_015: THREE.MeshStandardMaterial;
    meuble_a_miroir_portes___meuble_a_miroir_metal: THREE.MeshStandardMaterial;
    meuble_avec_vasque____vinyl_00: THREE.MeshStandardMaterial;
    meuble_avec_vasque___blanc: THREE.MeshStandardMaterial;
    meuble_avec_vasque___trou_noir: THREE.MeshStandardMaterial;
    meuble_avec_vasque___verre: THREE.MeshStandardMaterial;
    pack_002_sdb_deroule_papier___01___defaulte: THREE.MeshStandardMaterial;
    pack_003_chambre_002_bureau___nopaint_clavier: THREE.MeshStandardMaterial;
    pack_003_chambre_002_bureau___nopaint_livrebleu: THREE.MeshStandardMaterial;
    pack_003_salon_television___material__80_1: THREE.MeshStandardMaterial;
    pack_003_salon_television___material__83: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___apoule: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___boite: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___boite_couvercle: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___boite_poignee: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___chaussures001: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___chaussures002: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___cintres: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___coussin001: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___coussin002: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___coussin003: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___coussin004: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___lampe: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___nopaint_interieur: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___nopaint_semelle: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___serviettes001: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___serviettes002: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___serviettes003: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___serviettes004: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___tringles: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___vetement001: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___vetement002: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___vetement003: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___vetement004: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___vetement005: THREE.MeshStandardMaterial;
    pack_004_chambre_001_dressing___vetement006: THREE.MeshStandardMaterial;
    porte_019____mat_metalbasique001sg: THREE.MeshStandardMaterial;
    porte_021____mat_metalbasique001sg: THREE.MeshStandardMaterial;
    scan_canape_004_2p_jaune___bois_004: THREE.MeshStandardMaterial;
    set_001_table_basse___paper_couverture: THREE.MeshStandardMaterial;
    set_001_table_basse___paper_page: THREE.MeshStandardMaterial;
    wc_001___blanc: THREE.MeshStandardMaterial;
  };
};

export default function Studio(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('../../assets/roomModel/Studio.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={[0.4, 0.4, 0.4]} position={[1, -1.5, 0]}>
      <group position={[-6.16, -0.07, 5.11]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['20200503-93522-edt_Room_Entity_Material']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['20200516-21390-edt']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials['20200531-185918-edt']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials['20200612-10431-edt']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials['20200625-164026-edt']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials['20200625-164042-edt']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials['20200625-17217-edt']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials['20200625-17229-edt']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials['20200625-17234-edt']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials['20200625-17835-edt']} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials['20200625-195733-edt']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials['20200625-195733-edt_Room_Entity_Material']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials['20200625-20125-edt']} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials['20200625-20125-edt_Wall_Entity_Material']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials['20200626-10654-edt']} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials['20200701-83229-edt_Wall_Entity_Material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.bamboo___bamboo_feuille}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials.bamboo___bamboo_gazon} />
        <mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials.bamboo___bamboo_tronc} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.beige_006_Wall_Entity_Material}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials.blanc_001} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.douche_002___mat_douche_002_vitre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.echelle_sdb____bouchon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.echelle_sdb____flacon_00}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.echelle_sdb____flacon_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.echelle_sdb____flacon_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.echelle_sdb____porte_savon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.echelle_sdb___serviette_beige}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.echelle_sdb___serviette_bleue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.echelle_sdb___serviette_brune}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.enduit_004_Room_Entity_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.enduit_004_Wall_Entity_Material}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials.fake_mat_0_0_0_255} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.fake_mat_103_137_63_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.fake_mat_107_107_107_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.fake_mat_107_66_38_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.fake_mat_114_59_84_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.fake_mat_119_86_107_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.fake_mat_141_20_41_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.fake_mat_152_152_152_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.fake_mat_186_70_112_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.fake_mat_200_199_198_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.fake_mat_219_214_188_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.fake_mat_239_223_188_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.fake_mat_254_254_254_255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.fake_mat_255_255_255_32}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_49.geometry} material={materials.fake_mat_35_35_35_255} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.fake_mat_40_145_200_255}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_51.geometry} material={materials.fake_mat_54_54_54_255} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.fenetre_029______phong1sg6}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_53.geometry} material={materials.gris_005} />
        <mesh castShadow receiveShadow geometry={nodes.Object_54.geometry} material={materials.gris_006} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.hotte_001___material__178}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.hotte_001___material__179}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_57.geometry}
          material={materials.kitchen_classic_style_base_cabinet_oven_001___lambert7sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.kitchen_classic_style_base_cabinet_oven_001___lambert8sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials.lit_016___mat_tissus057sg}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_60.geometry} material={materials.metal_015} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_61.geometry}
          material={materials.meuble_a_miroir_portes___meuble_a_miroir_metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.meuble_avec_vasque____vinyl_00}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_63.geometry}
          material={materials.meuble_avec_vasque___blanc}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.meuble_avec_vasque___trou_noir}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_65.geometry}
          material={materials.meuble_avec_vasque___verre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.pack_002_sdb_deroule_papier___01___defaulte}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_67.geometry}
          material={materials.pack_003_chambre_002_bureau___nopaint_clavier}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.pack_003_chambre_002_bureau___nopaint_livrebleu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_69.geometry}
          material={materials.pack_003_salon_television___material__80_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.pack_003_salon_television___material__83}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_71.geometry}
          material={materials.pack_004_chambre_001_dressing___apoule}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials.pack_004_chambre_001_dressing___boite}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_73.geometry}
          material={materials.pack_004_chambre_001_dressing___boite_couvercle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_74.geometry}
          material={materials.pack_004_chambre_001_dressing___boite_poignee}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_75.geometry}
          material={materials.pack_004_chambre_001_dressing___chaussures001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_76.geometry}
          material={materials.pack_004_chambre_001_dressing___chaussures002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_77.geometry}
          material={materials.pack_004_chambre_001_dressing___cintres}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_78.geometry}
          material={materials.pack_004_chambre_001_dressing___coussin001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_79.geometry}
          material={materials.pack_004_chambre_001_dressing___coussin002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_80.geometry}
          material={materials.pack_004_chambre_001_dressing___coussin003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_81.geometry}
          material={materials.pack_004_chambre_001_dressing___coussin004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_82.geometry}
          material={materials.pack_004_chambre_001_dressing___lampe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_83.geometry}
          material={materials.pack_004_chambre_001_dressing___nopaint_interieur}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_84.geometry}
          material={materials.pack_004_chambre_001_dressing___nopaint_semelle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_85.geometry}
          material={materials.pack_004_chambre_001_dressing___serviettes001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_86.geometry}
          material={materials.pack_004_chambre_001_dressing___serviettes002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_87.geometry}
          material={materials.pack_004_chambre_001_dressing___serviettes003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_88.geometry}
          material={materials.pack_004_chambre_001_dressing___serviettes004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_89.geometry}
          material={materials.pack_004_chambre_001_dressing___tringles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_90.geometry}
          material={materials.pack_004_chambre_001_dressing___vetement001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_91.geometry}
          material={materials.pack_004_chambre_001_dressing___vetement002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_92.geometry}
          material={materials.pack_004_chambre_001_dressing___vetement003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93.geometry}
          material={materials.pack_004_chambre_001_dressing___vetement004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_94.geometry}
          material={materials.pack_004_chambre_001_dressing___vetement005}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_95.geometry}
          material={materials.pack_004_chambre_001_dressing___vetement006}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_96.geometry}
          material={materials.porte_019____mat_metalbasique001sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_97.geometry}
          material={materials.porte_021____mat_metalbasique001sg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_98.geometry}
          material={materials.scan_canape_004_2p_jaune___bois_004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_99.geometry}
          material={materials.set_001_table_basse___paper_couverture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_100.geometry}
          material={materials.set_001_table_basse___paper_page}
        />
        <mesh castShadow receiveShadow geometry={nodes.Object_101.geometry} material={materials.wc_001___blanc} />
      </group>
    </group>
  );
}

useGLTF.preload(require('../../assets/roomModel/Studio.glb'));
