/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei/native';
import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['Line001_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Line003_05_-_Default_0']: THREE.Mesh;
    ['Line005_06_-_Default_0']: THREE.Mesh;
    Line006_Solid_Glass_0: THREE.Mesh;
    Box001_Ceramic_0: THREE.Mesh;
    ['Shape_02_-_Default_0']: THREE.Mesh;
    ['Box002_03_-_Default_0']: THREE.Mesh;
    ['Box003_03_-_Default_0']: THREE.Mesh;
    ['Shape001_02_-_Default_0']: THREE.Mesh;
    ['Box004_03_-_Default_0']: THREE.Mesh;
    ['Shape002_02_-_Default_0']: THREE.Mesh;
    ['Box005_03_-_Default_0']: THREE.Mesh;
    ['Shape003_02_-_Default_0']: THREE.Mesh;
    ['Box006_03_-_Default_0']: THREE.Mesh;
    ['Shape004_02_-_Default_0']: THREE.Mesh;
    ['Box007_03_-_Default_0']: THREE.Mesh;
    ['Shape005_02_-_Default_0']: THREE.Mesh;
    ['Box008_03_-_Default_0']: THREE.Mesh;
    ['Shape006_02_-_Default_0']: THREE.Mesh;
    ['Box009_03_-_Default_0']: THREE.Mesh;
    ['Shape007_02_-_Default_0']: THREE.Mesh;
    ['Box010_03_-_Default_0']: THREE.Mesh;
    ['Shape008_02_-_Default_0']: THREE.Mesh;
    ['Box011_03_-_Default_0']: THREE.Mesh;
    ['Shape009_02_-_Default_0']: THREE.Mesh;
    ['Box012_03_-_Default_0']: THREE.Mesh;
    ['Shape010_02_-_Default_0']: THREE.Mesh;
    ['Box013_03_-_Default_0']: THREE.Mesh;
    ['Shape011_02_-_Default_0']: THREE.Mesh;
    ['Box014_03_-_Default_0']: THREE.Mesh;
    ['Shape012_02_-_Default_0']: THREE.Mesh;
    ['Box015_03_-_Default_0']: THREE.Mesh;
    ['Shape013_02_-_Default_0']: THREE.Mesh;
    ['Box016_03_-_Default_0']: THREE.Mesh;
    ['Shape014_02_-_Default_0']: THREE.Mesh;
    ['Box017_03_-_Default_0']: THREE.Mesh;
    ['Shape015_02_-_Default_0']: THREE.Mesh;
    ['Box018_03_-_Default_0']: THREE.Mesh;
    ['Shape016_02_-_Default_0']: THREE.Mesh;
    ['Box019_03_-_Default_0']: THREE.Mesh;
    ['Shape017_02_-_Default_0']: THREE.Mesh;
    ['Box020_03_-_Default_0']: THREE.Mesh;
    ['Shape018_02_-_Default_0']: THREE.Mesh;
    ['Box021_03_-_Default_0']: THREE.Mesh;
    ['Shape019_02_-_Default_0']: THREE.Mesh;
    ['Box022_03_-_Default_0']: THREE.Mesh;
    ['Shape020_02_-_Default_0']: THREE.Mesh;
    ['Box023_03_-_Default_0']: THREE.Mesh;
    ['Shape021_02_-_Default_0']: THREE.Mesh;
    ['Box024_03_-_Default_0']: THREE.Mesh;
    ['Shape022_02_-_Default_0']: THREE.Mesh;
    ['Box025_03_-_Default_0']: THREE.Mesh;
    ['Shape023_02_-_Default_0']: THREE.Mesh;
    ['Box026_03_-_Default_0']: THREE.Mesh;
    ['Shape024_02_-_Default_0']: THREE.Mesh;
    ['Box027_03_-_Default_0']: THREE.Mesh;
    ['Shape025_02_-_Default_0']: THREE.Mesh;
    ['Line007_04_-_Default_0']: THREE.Mesh;
    ['Line008_04_-_Default_0']: THREE.Mesh;
    ['Line009_04_-_Default_0']: THREE.Mesh;
    ['Line010_04_-_Default_0']: THREE.Mesh;
    ['Line011_04_-_Default_0']: THREE.Mesh;
    ['Line012_04_-_Default_0']: THREE.Mesh;
    ['Cone001_01_-_Default_0']: THREE.Mesh;
    ['Cone002_01_-_Default_0']: THREE.Mesh;
    ['Cone003_01_-_Default_0']: THREE.Mesh;
    ['Line013_04_-_Default_0']: THREE.Mesh;
    ['Cone004_01_-_Default_0']: THREE.Mesh;
    ['Cone005_01_-_Default_0']: THREE.Mesh;
    ['Cone006_01_-_Default_0']: THREE.Mesh;
    ['Cone007_01_-_Default_0']: THREE.Mesh;
    ['Cone008_01_-_Default_0']: THREE.Mesh;
    ['Cone009_01_-_Default_0']: THREE.Mesh;
    ['Cone010_01_-_Default_0']: THREE.Mesh;
    ['Cone011_01_-_Default_0']: THREE.Mesh;
    ['Cone012_01_-_Default_0']: THREE.Mesh;
    ['Cone013_01_-_Default_0']: THREE.Mesh;
    ['Line014_04_-_Default_0']: THREE.Mesh;
    ['Cone014_01_-_Default_0']: THREE.Mesh;
    ['Cone015_01_-_Default_0']: THREE.Mesh;
    ['Cone016_01_-_Default_0']: THREE.Mesh;
    ['Cone017_01_-_Default_0']: THREE.Mesh;
    Box028_Wall_Paint_0: THREE.Mesh;
    Box029_Wall_Paint_0: THREE.Mesh;
    Box030_Wall_Paint_0: THREE.Mesh;
    Box031_Wall_Paint_0: THREE.Mesh;
    Box032_Wall_Paint_0: THREE.Mesh;
    Box033_Wall_Paint_0: THREE.Mesh;
    Box034_Wall_Paint_0: THREE.Mesh;
    Box035_Wall_Paint_0: THREE.Mesh;
    ['Line015_05_-_Default_0']: THREE.Mesh;
    ['Line016_06_-_Default_0']: THREE.Mesh;
    ['Shape026_02_-_Default_0']: THREE.Mesh;
    ['Box036_03_-_Default_0']: THREE.Mesh;
    ['Box037_03_-_Default_0']: THREE.Mesh;
    ['Shape027_02_-_Default_0']: THREE.Mesh;
    ['Box038_03_-_Default_0']: THREE.Mesh;
    ['Shape028_02_-_Default_0']: THREE.Mesh;
    ['Box039_03_-_Default_0']: THREE.Mesh;
    ['Shape029_02_-_Default_0']: THREE.Mesh;
    ['Box040_03_-_Default_0']: THREE.Mesh;
    ['Shape030_02_-_Default_0']: THREE.Mesh;
    ['Box041_03_-_Default_0']: THREE.Mesh;
    ['Shape031_02_-_Default_0']: THREE.Mesh;
    ['Box042_03_-_Default_0']: THREE.Mesh;
    ['Shape032_02_-_Default_0']: THREE.Mesh;
    ['Box043_03_-_Default_0']: THREE.Mesh;
    ['Shape033_02_-_Default_0']: THREE.Mesh;
    ['Box044_03_-_Default_0']: THREE.Mesh;
    ['Shape034_02_-_Default_0']: THREE.Mesh;
    ['Box045_03_-_Default_0']: THREE.Mesh;
    ['Shape035_02_-_Default_0']: THREE.Mesh;
    ['Box046_03_-_Default_0']: THREE.Mesh;
    ['Shape036_02_-_Default_0']: THREE.Mesh;
    ['Box047_03_-_Default_0']: THREE.Mesh;
    ['Shape037_02_-_Default_0']: THREE.Mesh;
    ['Box048_03_-_Default_0']: THREE.Mesh;
    ['Shape038_02_-_Default_0']: THREE.Mesh;
    ['Box049_03_-_Default_0']: THREE.Mesh;
    ['Shape039_02_-_Default_0']: THREE.Mesh;
    ['Box050_03_-_Default_0']: THREE.Mesh;
    ['Shape040_02_-_Default_0']: THREE.Mesh;
    ['Box051_03_-_Default_0']: THREE.Mesh;
    ['Shape041_02_-_Default_0']: THREE.Mesh;
    ['Box052_03_-_Default_0']: THREE.Mesh;
    ['Shape042_02_-_Default_0']: THREE.Mesh;
    ['Box053_03_-_Default_0']: THREE.Mesh;
    ['Shape043_02_-_Default_0']: THREE.Mesh;
    ['Box054_03_-_Default_0']: THREE.Mesh;
    ['Shape044_02_-_Default_0']: THREE.Mesh;
    ['Box055_03_-_Default_0']: THREE.Mesh;
    ['Shape045_02_-_Default_0']: THREE.Mesh;
    ['Box056_03_-_Default_0']: THREE.Mesh;
    ['Shape046_02_-_Default_0']: THREE.Mesh;
    ['Box057_03_-_Default_0']: THREE.Mesh;
    ['Shape047_02_-_Default_0']: THREE.Mesh;
    ['Box058_03_-_Default_0']: THREE.Mesh;
    ['Shape048_02_-_Default_0']: THREE.Mesh;
    ['Box059_03_-_Default_0']: THREE.Mesh;
    ['Shape049_02_-_Default_0']: THREE.Mesh;
    ['Box060_03_-_Default_0']: THREE.Mesh;
    ['Shape050_02_-_Default_0']: THREE.Mesh;
    ['Box061_03_-_Default_0']: THREE.Mesh;
    ['Shape051_02_-_Default_0']: THREE.Mesh;
    ['Line017_04_-_Default_0']: THREE.Mesh;
    ['Line018_04_-_Default_0']: THREE.Mesh;
    ['Line019_04_-_Default_0']: THREE.Mesh;
    ['Line020_04_-_Default_0']: THREE.Mesh;
    ['Line021_04_-_Default_0']: THREE.Mesh;
    ['Line022_04_-_Default_0']: THREE.Mesh;
    ['Cone018_01_-_Default_0']: THREE.Mesh;
    ['Cone019_01_-_Default_0']: THREE.Mesh;
    ['Cone020_01_-_Default_0']: THREE.Mesh;
    ['Line023_04_-_Default_0']: THREE.Mesh;
    ['Cone021_01_-_Default_0']: THREE.Mesh;
    ['Cone022_01_-_Default_0']: THREE.Mesh;
    ['Cone023_01_-_Default_0']: THREE.Mesh;
    ['Cone024_01_-_Default_0']: THREE.Mesh;
    ['Cone025_01_-_Default_0']: THREE.Mesh;
    ['Cone026_01_-_Default_0']: THREE.Mesh;
    ['Cone027_01_-_Default_0']: THREE.Mesh;
    ['Cone028_01_-_Default_0']: THREE.Mesh;
    ['Cone029_01_-_Default_0']: THREE.Mesh;
    ['Cone030_01_-_Default_0']: THREE.Mesh;
    ['Line024_04_-_Default_0']: THREE.Mesh;
    ['Cone031_01_-_Default_0']: THREE.Mesh;
    ['Cone032_01_-_Default_0']: THREE.Mesh;
    ['Cone033_01_-_Default_0']: THREE.Mesh;
    ['Cone034_01_-_Default_0']: THREE.Mesh;
    Box062_Wall_Paint_0: THREE.Mesh;
    Box063_Wall_Paint_0: THREE.Mesh;
    Box064_Wall_Paint_0: THREE.Mesh;
    Box065_Wall_Paint_0: THREE.Mesh;
    Box066_Wall_Paint_0: THREE.Mesh;
    Box067_Wall_Paint_0: THREE.Mesh;
    Box068_Wall_Paint_0: THREE.Mesh;
    Box069_Wall_Paint_0: THREE.Mesh;
    ['Line025_05_-_Default_0']: THREE.Mesh;
    ['Line026_06_-_Default_0']: THREE.Mesh;
    ['Shape052_02_-_Default_0']: THREE.Mesh;
    ['Box070_03_-_Default_0']: THREE.Mesh;
    ['Box071_03_-_Default_0']: THREE.Mesh;
    ['Shape053_02_-_Default_0']: THREE.Mesh;
    ['Box072_03_-_Default_0']: THREE.Mesh;
    ['Shape054_02_-_Default_0']: THREE.Mesh;
    ['Box073_03_-_Default_0']: THREE.Mesh;
    ['Shape055_02_-_Default_0']: THREE.Mesh;
    ['Box074_03_-_Default_0']: THREE.Mesh;
    ['Shape056_02_-_Default_0']: THREE.Mesh;
    ['Box075_03_-_Default_0']: THREE.Mesh;
    ['Shape057_02_-_Default_0']: THREE.Mesh;
    ['Box076_03_-_Default_0']: THREE.Mesh;
    ['Shape058_02_-_Default_0']: THREE.Mesh;
    ['Box077_03_-_Default_0']: THREE.Mesh;
    ['Shape059_02_-_Default_0']: THREE.Mesh;
    ['Box078_03_-_Default_0']: THREE.Mesh;
    ['Shape060_02_-_Default_0']: THREE.Mesh;
    ['Box079_03_-_Default_0']: THREE.Mesh;
    ['Shape061_02_-_Default_0']: THREE.Mesh;
    ['Box080_03_-_Default_0']: THREE.Mesh;
    ['Shape062_02_-_Default_0']: THREE.Mesh;
    ['Box081_03_-_Default_0']: THREE.Mesh;
    ['Shape063_02_-_Default_0']: THREE.Mesh;
    ['Box082_03_-_Default_0']: THREE.Mesh;
    ['Shape064_02_-_Default_0']: THREE.Mesh;
    ['Box083_03_-_Default_0']: THREE.Mesh;
    ['Shape065_02_-_Default_0']: THREE.Mesh;
    ['Box084_03_-_Default_0']: THREE.Mesh;
    ['Shape066_02_-_Default_0']: THREE.Mesh;
    ['Box085_03_-_Default_0']: THREE.Mesh;
    ['Shape067_02_-_Default_0']: THREE.Mesh;
    ['Box086_03_-_Default_0']: THREE.Mesh;
    ['Shape068_02_-_Default_0']: THREE.Mesh;
    ['Box087_03_-_Default_0']: THREE.Mesh;
    ['Shape069_02_-_Default_0']: THREE.Mesh;
    ['Box088_03_-_Default_0']: THREE.Mesh;
    ['Shape070_02_-_Default_0']: THREE.Mesh;
    ['Box089_03_-_Default_0']: THREE.Mesh;
    ['Shape071_02_-_Default_0']: THREE.Mesh;
    ['Box090_03_-_Default_0']: THREE.Mesh;
    ['Shape072_02_-_Default_0']: THREE.Mesh;
    ['Box091_03_-_Default_0']: THREE.Mesh;
    ['Shape073_02_-_Default_0']: THREE.Mesh;
    ['Box092_03_-_Default_0']: THREE.Mesh;
    ['Shape074_02_-_Default_0']: THREE.Mesh;
    ['Box093_03_-_Default_0']: THREE.Mesh;
    ['Shape075_02_-_Default_0']: THREE.Mesh;
    ['Box094_03_-_Default_0']: THREE.Mesh;
    ['Shape076_02_-_Default_0']: THREE.Mesh;
    ['Box095_03_-_Default_0']: THREE.Mesh;
    ['Shape077_02_-_Default_0']: THREE.Mesh;
    ['Line027_04_-_Default_0']: THREE.Mesh;
    ['Line028_04_-_Default_0']: THREE.Mesh;
    ['Line029_04_-_Default_0']: THREE.Mesh;
    ['Line030_04_-_Default_0']: THREE.Mesh;
    ['Line031_04_-_Default_0']: THREE.Mesh;
    ['Line032_04_-_Default_0']: THREE.Mesh;
    ['Cone035_01_-_Default_0']: THREE.Mesh;
    ['Cone036_01_-_Default_0']: THREE.Mesh;
    ['Cone037_01_-_Default_0']: THREE.Mesh;
    ['Line033_04_-_Default_0']: THREE.Mesh;
    ['Cone038_01_-_Default_0']: THREE.Mesh;
    ['Cone039_01_-_Default_0']: THREE.Mesh;
    ['Cone040_01_-_Default_0']: THREE.Mesh;
    ['Cone041_01_-_Default_0']: THREE.Mesh;
    ['Cone042_01_-_Default_0']: THREE.Mesh;
    ['Cone043_01_-_Default_0']: THREE.Mesh;
    ['Cone044_01_-_Default_0']: THREE.Mesh;
    ['Cone045_01_-_Default_0']: THREE.Mesh;
    ['Cone046_01_-_Default_0']: THREE.Mesh;
    ['Cone047_01_-_Default_0']: THREE.Mesh;
    ['Line034_04_-_Default_0']: THREE.Mesh;
    ['Cone048_01_-_Default_0']: THREE.Mesh;
    ['Cone049_01_-_Default_0']: THREE.Mesh;
    ['Cone050_01_-_Default_0']: THREE.Mesh;
    ['Cone051_01_-_Default_0']: THREE.Mesh;
    Box096_Wall_Paint_0: THREE.Mesh;
    Box097_Wall_Paint_0: THREE.Mesh;
    Box098_Wall_Paint_0: THREE.Mesh;
    Box099_Wall_Paint_0: THREE.Mesh;
    Box100_Wall_Paint_0: THREE.Mesh;
    Box101_Wall_Paint_0: THREE.Mesh;
    Box102_Wall_Paint_0: THREE.Mesh;
    Box103_Wall_Paint_0: THREE.Mesh;
    ['Line035_05_-_Default_0']: THREE.Mesh;
    ['Line036_06_-_Default_0']: THREE.Mesh;
    ['Shape078_02_-_Default_0']: THREE.Mesh;
    ['Box104_03_-_Default_0']: THREE.Mesh;
    ['Box105_03_-_Default_0']: THREE.Mesh;
    ['Shape079_02_-_Default_0']: THREE.Mesh;
    ['Box106_03_-_Default_0']: THREE.Mesh;
    ['Shape080_02_-_Default_0']: THREE.Mesh;
    ['Box107_03_-_Default_0']: THREE.Mesh;
    ['Shape081_02_-_Default_0']: THREE.Mesh;
    ['Box108_03_-_Default_0']: THREE.Mesh;
    ['Shape082_02_-_Default_0']: THREE.Mesh;
    ['Box109_03_-_Default_0']: THREE.Mesh;
    ['Shape083_02_-_Default_0']: THREE.Mesh;
    ['Box110_03_-_Default_0']: THREE.Mesh;
    ['Shape084_02_-_Default_0']: THREE.Mesh;
    ['Box111_03_-_Default_0']: THREE.Mesh;
    ['Shape085_02_-_Default_0']: THREE.Mesh;
    ['Box112_03_-_Default_0']: THREE.Mesh;
    ['Shape086_02_-_Default_0']: THREE.Mesh;
    ['Box113_03_-_Default_0']: THREE.Mesh;
    ['Shape087_02_-_Default_0']: THREE.Mesh;
    ['Box114_03_-_Default_0']: THREE.Mesh;
    ['Shape088_02_-_Default_0']: THREE.Mesh;
    ['Box115_03_-_Default_0']: THREE.Mesh;
    ['Shape089_02_-_Default_0']: THREE.Mesh;
    ['Box116_03_-_Default_0']: THREE.Mesh;
    ['Shape090_02_-_Default_0']: THREE.Mesh;
    ['Box117_03_-_Default_0']: THREE.Mesh;
    ['Shape091_02_-_Default_0']: THREE.Mesh;
    ['Box118_03_-_Default_0']: THREE.Mesh;
    ['Shape092_02_-_Default_0']: THREE.Mesh;
    ['Box119_03_-_Default_0']: THREE.Mesh;
    ['Shape093_02_-_Default_0']: THREE.Mesh;
    ['Box120_03_-_Default_0']: THREE.Mesh;
    ['Shape094_02_-_Default_0']: THREE.Mesh;
    ['Box121_03_-_Default_0']: THREE.Mesh;
    ['Shape095_02_-_Default_0']: THREE.Mesh;
    ['Box122_03_-_Default_0']: THREE.Mesh;
    ['Shape096_02_-_Default_0']: THREE.Mesh;
    ['Box123_03_-_Default_0']: THREE.Mesh;
    ['Shape097_02_-_Default_0']: THREE.Mesh;
    ['Box124_03_-_Default_0']: THREE.Mesh;
    ['Shape098_02_-_Default_0']: THREE.Mesh;
    ['Box125_03_-_Default_0']: THREE.Mesh;
    ['Shape099_02_-_Default_0']: THREE.Mesh;
    ['Box126_03_-_Default_0']: THREE.Mesh;
    ['Shape100_02_-_Default_0']: THREE.Mesh;
    ['Box127_03_-_Default_0']: THREE.Mesh;
    ['Shape101_02_-_Default_0']: THREE.Mesh;
    ['Box128_03_-_Default_0']: THREE.Mesh;
    ['Shape102_02_-_Default_0']: THREE.Mesh;
    ['Box129_03_-_Default_0']: THREE.Mesh;
    ['Shape103_02_-_Default_0']: THREE.Mesh;
    ['Line037_04_-_Default_0']: THREE.Mesh;
    ['Line038_04_-_Default_0']: THREE.Mesh;
    ['Line039_04_-_Default_0']: THREE.Mesh;
    ['Line040_04_-_Default_0']: THREE.Mesh;
    ['Line041_04_-_Default_0']: THREE.Mesh;
    ['Line042_04_-_Default_0']: THREE.Mesh;
    ['Cone052_01_-_Default_0']: THREE.Mesh;
    ['Cone053_01_-_Default_0']: THREE.Mesh;
    ['Cone054_01_-_Default_0']: THREE.Mesh;
    ['Line043_04_-_Default_0']: THREE.Mesh;
    ['Cone055_01_-_Default_0']: THREE.Mesh;
    ['Cone056_01_-_Default_0']: THREE.Mesh;
    ['Cone057_01_-_Default_0']: THREE.Mesh;
    ['Cone058_01_-_Default_0']: THREE.Mesh;
    ['Cone059_01_-_Default_0']: THREE.Mesh;
    ['Cone060_01_-_Default_0']: THREE.Mesh;
    ['Cone061_01_-_Default_0']: THREE.Mesh;
    ['Cone062_01_-_Default_0']: THREE.Mesh;
    ['Cone063_01_-_Default_0']: THREE.Mesh;
    ['Cone064_01_-_Default_0']: THREE.Mesh;
    ['Line044_04_-_Default_0']: THREE.Mesh;
    ['Cone065_01_-_Default_0']: THREE.Mesh;
    ['Cone066_01_-_Default_0']: THREE.Mesh;
    ['Cone067_01_-_Default_0']: THREE.Mesh;
    ['Cone068_01_-_Default_0']: THREE.Mesh;
    Box130_Wall_Paint_0: THREE.Mesh;
    Box131_Wall_Paint_0: THREE.Mesh;
    Box132_Wall_Paint_0: THREE.Mesh;
    Box133_Wall_Paint_0: THREE.Mesh;
    Box134_Wall_Paint_0: THREE.Mesh;
    Box135_Wall_Paint_0: THREE.Mesh;
    Box136_Wall_Paint_0: THREE.Mesh;
    Box137_Wall_Paint_0: THREE.Mesh;
    ['Line045_05_-_Default_0']: THREE.Mesh;
    ['Line046_06_-_Default_0']: THREE.Mesh;
    ['Shape104_02_-_Default_0']: THREE.Mesh;
    ['Box138_03_-_Default_0']: THREE.Mesh;
    ['Box139_03_-_Default_0']: THREE.Mesh;
    ['Shape105_02_-_Default_0']: THREE.Mesh;
    ['Box140_03_-_Default_0']: THREE.Mesh;
    ['Shape106_02_-_Default_0']: THREE.Mesh;
    ['Box141_03_-_Default_0']: THREE.Mesh;
    ['Shape107_02_-_Default_0']: THREE.Mesh;
    ['Box142_03_-_Default_0']: THREE.Mesh;
    ['Shape108_02_-_Default_0']: THREE.Mesh;
    ['Box143_03_-_Default_0']: THREE.Mesh;
    ['Shape109_02_-_Default_0']: THREE.Mesh;
    ['Box144_03_-_Default_0']: THREE.Mesh;
    ['Shape110_02_-_Default_0']: THREE.Mesh;
    ['Box145_03_-_Default_0']: THREE.Mesh;
    ['Shape111_02_-_Default_0']: THREE.Mesh;
    ['Box146_03_-_Default_0']: THREE.Mesh;
    ['Shape112_02_-_Default_0']: THREE.Mesh;
    ['Box147_03_-_Default_0']: THREE.Mesh;
    ['Shape113_02_-_Default_0']: THREE.Mesh;
    ['Box148_03_-_Default_0']: THREE.Mesh;
    ['Shape114_02_-_Default_0']: THREE.Mesh;
    ['Box149_03_-_Default_0']: THREE.Mesh;
    ['Shape115_02_-_Default_0']: THREE.Mesh;
    ['Box150_03_-_Default_0']: THREE.Mesh;
    ['Shape116_02_-_Default_0']: THREE.Mesh;
    ['Box151_03_-_Default_0']: THREE.Mesh;
    ['Shape117_02_-_Default_0']: THREE.Mesh;
    ['Box152_03_-_Default_0']: THREE.Mesh;
    ['Shape118_02_-_Default_0']: THREE.Mesh;
    ['Box153_03_-_Default_0']: THREE.Mesh;
    ['Shape119_02_-_Default_0']: THREE.Mesh;
    ['Box154_03_-_Default_0']: THREE.Mesh;
    ['Shape120_02_-_Default_0']: THREE.Mesh;
    ['Box155_03_-_Default_0']: THREE.Mesh;
    ['Shape121_02_-_Default_0']: THREE.Mesh;
    ['Box156_03_-_Default_0']: THREE.Mesh;
    ['Shape122_02_-_Default_0']: THREE.Mesh;
    ['Box157_03_-_Default_0']: THREE.Mesh;
    ['Shape123_02_-_Default_0']: THREE.Mesh;
    ['Box158_03_-_Default_0']: THREE.Mesh;
    ['Shape124_02_-_Default_0']: THREE.Mesh;
    ['Box159_03_-_Default_0']: THREE.Mesh;
    ['Shape125_02_-_Default_0']: THREE.Mesh;
    ['Box160_03_-_Default_0']: THREE.Mesh;
    ['Shape126_02_-_Default_0']: THREE.Mesh;
    ['Box161_03_-_Default_0']: THREE.Mesh;
    ['Shape127_02_-_Default_0']: THREE.Mesh;
    ['Box162_03_-_Default_0']: THREE.Mesh;
    ['Shape128_02_-_Default_0']: THREE.Mesh;
    ['Box163_03_-_Default_0']: THREE.Mesh;
    ['Shape129_02_-_Default_0']: THREE.Mesh;
    ['Line047_04_-_Default_0']: THREE.Mesh;
    ['Line048_04_-_Default_0']: THREE.Mesh;
    ['Line049_04_-_Default_0']: THREE.Mesh;
    ['Line050_04_-_Default_0']: THREE.Mesh;
    ['Line051_04_-_Default_0']: THREE.Mesh;
    ['Line052_04_-_Default_0']: THREE.Mesh;
    ['Cone069_01_-_Default_0']: THREE.Mesh;
    ['Cone070_01_-_Default_0']: THREE.Mesh;
    ['Cone071_01_-_Default_0']: THREE.Mesh;
    ['Line053_04_-_Default_0']: THREE.Mesh;
    ['Cone072_01_-_Default_0']: THREE.Mesh;
    ['Cone073_01_-_Default_0']: THREE.Mesh;
    ['Cone074_01_-_Default_0']: THREE.Mesh;
    ['Cone075_01_-_Default_0']: THREE.Mesh;
    ['Cone076_01_-_Default_0']: THREE.Mesh;
    ['Cone077_01_-_Default_0']: THREE.Mesh;
    ['Cone078_01_-_Default_0']: THREE.Mesh;
    ['Cone079_01_-_Default_0']: THREE.Mesh;
    ['Cone080_01_-_Default_0']: THREE.Mesh;
    ['Cone081_01_-_Default_0']: THREE.Mesh;
    ['Line054_04_-_Default_0']: THREE.Mesh;
    ['Cone082_01_-_Default_0']: THREE.Mesh;
    ['Cone083_01_-_Default_0']: THREE.Mesh;
    ['Cone084_01_-_Default_0']: THREE.Mesh;
    ['Cone085_01_-_Default_0']: THREE.Mesh;
    Box164_Wall_Paint_0: THREE.Mesh;
    Box165_Wall_Paint_0: THREE.Mesh;
    Box166_Wall_Paint_0: THREE.Mesh;
    Box167_Wall_Paint_0: THREE.Mesh;
    Box168_Wall_Paint_0: THREE.Mesh;
    Box169_Wall_Paint_0: THREE.Mesh;
    Box170_Wall_Paint_0: THREE.Mesh;
    Box171_Wall_Paint_0: THREE.Mesh;
    ['Line055_05_-_Default_0']: THREE.Mesh;
    ['Line056_06_-_Default_0']: THREE.Mesh;
    ['Shape130_02_-_Default_0']: THREE.Mesh;
    ['Box172_03_-_Default_0']: THREE.Mesh;
    ['Box173_03_-_Default_0']: THREE.Mesh;
    ['Shape131_02_-_Default_0']: THREE.Mesh;
    ['Box174_03_-_Default_0']: THREE.Mesh;
    ['Shape132_02_-_Default_0']: THREE.Mesh;
    ['Box175_03_-_Default_0']: THREE.Mesh;
    ['Shape133_02_-_Default_0']: THREE.Mesh;
    ['Box176_03_-_Default_0']: THREE.Mesh;
    ['Shape134_02_-_Default_0']: THREE.Mesh;
    ['Box177_03_-_Default_0']: THREE.Mesh;
    ['Shape135_02_-_Default_0']: THREE.Mesh;
    ['Box178_03_-_Default_0']: THREE.Mesh;
    ['Shape136_02_-_Default_0']: THREE.Mesh;
    ['Box179_03_-_Default_0']: THREE.Mesh;
    ['Shape137_02_-_Default_0']: THREE.Mesh;
    ['Box180_03_-_Default_0']: THREE.Mesh;
    ['Shape138_02_-_Default_0']: THREE.Mesh;
    ['Box181_03_-_Default_0']: THREE.Mesh;
    ['Shape139_02_-_Default_0']: THREE.Mesh;
    ['Box182_03_-_Default_0']: THREE.Mesh;
    ['Shape140_02_-_Default_0']: THREE.Mesh;
    ['Box183_03_-_Default_0']: THREE.Mesh;
    ['Shape141_02_-_Default_0']: THREE.Mesh;
    ['Box184_03_-_Default_0']: THREE.Mesh;
    ['Shape142_02_-_Default_0']: THREE.Mesh;
    ['Box185_03_-_Default_0']: THREE.Mesh;
    ['Shape143_02_-_Default_0']: THREE.Mesh;
    ['Box186_03_-_Default_0']: THREE.Mesh;
    ['Shape144_02_-_Default_0']: THREE.Mesh;
    ['Box187_03_-_Default_0']: THREE.Mesh;
    ['Shape145_02_-_Default_0']: THREE.Mesh;
    ['Box188_03_-_Default_0']: THREE.Mesh;
    ['Shape146_02_-_Default_0']: THREE.Mesh;
    ['Box189_03_-_Default_0']: THREE.Mesh;
    ['Shape147_02_-_Default_0']: THREE.Mesh;
    ['Box190_03_-_Default_0']: THREE.Mesh;
    ['Shape148_02_-_Default_0']: THREE.Mesh;
    ['Box191_03_-_Default_0']: THREE.Mesh;
    ['Shape149_02_-_Default_0']: THREE.Mesh;
    ['Box192_03_-_Default_0']: THREE.Mesh;
    ['Shape150_02_-_Default_0']: THREE.Mesh;
    ['Box193_03_-_Default_0']: THREE.Mesh;
    ['Shape151_02_-_Default_0']: THREE.Mesh;
    ['Box194_03_-_Default_0']: THREE.Mesh;
    ['Shape152_02_-_Default_0']: THREE.Mesh;
    ['Box195_03_-_Default_0']: THREE.Mesh;
    ['Shape153_02_-_Default_0']: THREE.Mesh;
    ['Box196_03_-_Default_0']: THREE.Mesh;
    ['Shape154_02_-_Default_0']: THREE.Mesh;
    ['Box197_03_-_Default_0']: THREE.Mesh;
    ['Shape155_02_-_Default_0']: THREE.Mesh;
    ['Line057_04_-_Default_0']: THREE.Mesh;
    ['Line058_04_-_Default_0']: THREE.Mesh;
    ['Line059_04_-_Default_0']: THREE.Mesh;
    ['Line060_04_-_Default_0']: THREE.Mesh;
    ['Line061_04_-_Default_0']: THREE.Mesh;
    ['Line062_04_-_Default_0']: THREE.Mesh;
    ['Cone086_01_-_Default_0']: THREE.Mesh;
    ['Cone087_01_-_Default_0']: THREE.Mesh;
    ['Cone088_01_-_Default_0']: THREE.Mesh;
    ['Line063_04_-_Default_0']: THREE.Mesh;
    ['Cone089_01_-_Default_0']: THREE.Mesh;
    ['Cone090_01_-_Default_0']: THREE.Mesh;
    ['Cone091_01_-_Default_0']: THREE.Mesh;
    ['Cone092_01_-_Default_0']: THREE.Mesh;
    ['Cone093_01_-_Default_0']: THREE.Mesh;
    ['Cone094_01_-_Default_0']: THREE.Mesh;
    ['Cone095_01_-_Default_0']: THREE.Mesh;
    ['Cone096_01_-_Default_0']: THREE.Mesh;
    ['Cone097_01_-_Default_0']: THREE.Mesh;
    ['Cone098_01_-_Default_0']: THREE.Mesh;
    ['Line064_04_-_Default_0']: THREE.Mesh;
    ['Cone099_01_-_Default_0']: THREE.Mesh;
    ['Cone100_01_-_Default_0']: THREE.Mesh;
    ['Cone101_01_-_Default_0']: THREE.Mesh;
    ['Cone102_01_-_Default_0']: THREE.Mesh;
    Box198_Wall_Paint_0: THREE.Mesh;
    Box199_Wall_Paint_0: THREE.Mesh;
    Box200_Wall_Paint_0: THREE.Mesh;
    Box201_Wall_Paint_0: THREE.Mesh;
    Box202_Wall_Paint_0: THREE.Mesh;
    Box203_Wall_Paint_0: THREE.Mesh;
    Box204_Wall_Paint_0: THREE.Mesh;
    Box205_Wall_Paint_0: THREE.Mesh;
    ['Line065_05_-_Default_0']: THREE.Mesh;
    ['Line066_06_-_Default_0']: THREE.Mesh;
    ['Shape156_02_-_Default_0']: THREE.Mesh;
    ['Box206_03_-_Default_0']: THREE.Mesh;
    ['Box207_03_-_Default_0']: THREE.Mesh;
    ['Shape157_02_-_Default_0']: THREE.Mesh;
    ['Box208_03_-_Default_0']: THREE.Mesh;
    ['Shape158_02_-_Default_0']: THREE.Mesh;
    ['Box209_03_-_Default_0']: THREE.Mesh;
    ['Shape159_02_-_Default_0']: THREE.Mesh;
    ['Box210_03_-_Default_0']: THREE.Mesh;
    ['Shape160_02_-_Default_0']: THREE.Mesh;
    ['Box211_03_-_Default_0']: THREE.Mesh;
    ['Shape161_02_-_Default_0']: THREE.Mesh;
    ['Box212_03_-_Default_0']: THREE.Mesh;
    ['Shape162_02_-_Default_0']: THREE.Mesh;
    ['Box213_03_-_Default_0']: THREE.Mesh;
    ['Shape163_02_-_Default_0']: THREE.Mesh;
    ['Box214_03_-_Default_0']: THREE.Mesh;
    ['Shape164_02_-_Default_0']: THREE.Mesh;
    ['Box215_03_-_Default_0']: THREE.Mesh;
    ['Shape165_02_-_Default_0']: THREE.Mesh;
    ['Box216_03_-_Default_0']: THREE.Mesh;
    ['Shape166_02_-_Default_0']: THREE.Mesh;
    ['Box217_03_-_Default_0']: THREE.Mesh;
    ['Shape167_02_-_Default_0']: THREE.Mesh;
    ['Box218_03_-_Default_0']: THREE.Mesh;
    ['Shape168_02_-_Default_0']: THREE.Mesh;
    ['Box219_03_-_Default_0']: THREE.Mesh;
    ['Shape169_02_-_Default_0']: THREE.Mesh;
    ['Box220_03_-_Default_0']: THREE.Mesh;
    ['Shape170_02_-_Default_0']: THREE.Mesh;
    ['Box221_03_-_Default_0']: THREE.Mesh;
    ['Shape171_02_-_Default_0']: THREE.Mesh;
    ['Box222_03_-_Default_0']: THREE.Mesh;
    ['Shape172_02_-_Default_0']: THREE.Mesh;
    ['Box223_03_-_Default_0']: THREE.Mesh;
    ['Shape173_02_-_Default_0']: THREE.Mesh;
    ['Box224_03_-_Default_0']: THREE.Mesh;
    ['Shape174_02_-_Default_0']: THREE.Mesh;
    ['Box225_03_-_Default_0']: THREE.Mesh;
    ['Shape175_02_-_Default_0']: THREE.Mesh;
    ['Box226_03_-_Default_0']: THREE.Mesh;
    ['Shape176_02_-_Default_0']: THREE.Mesh;
    ['Box227_03_-_Default_0']: THREE.Mesh;
    ['Shape177_02_-_Default_0']: THREE.Mesh;
    ['Box228_03_-_Default_0']: THREE.Mesh;
    ['Shape178_02_-_Default_0']: THREE.Mesh;
    ['Box229_03_-_Default_0']: THREE.Mesh;
    ['Shape179_02_-_Default_0']: THREE.Mesh;
    ['Box230_03_-_Default_0']: THREE.Mesh;
    ['Shape180_02_-_Default_0']: THREE.Mesh;
    ['Box231_03_-_Default_0']: THREE.Mesh;
    ['Shape181_02_-_Default_0']: THREE.Mesh;
    ['Line067_04_-_Default_0']: THREE.Mesh;
    ['Line068_04_-_Default_0']: THREE.Mesh;
    ['Line069_04_-_Default_0']: THREE.Mesh;
    ['Line070_04_-_Default_0']: THREE.Mesh;
    ['Line071_04_-_Default_0']: THREE.Mesh;
    ['Line072_04_-_Default_0']: THREE.Mesh;
    ['Cone103_01_-_Default_0']: THREE.Mesh;
    ['Cone104_01_-_Default_0']: THREE.Mesh;
    ['Cone105_01_-_Default_0']: THREE.Mesh;
    ['Line073_04_-_Default_0']: THREE.Mesh;
    ['Cone106_01_-_Default_0']: THREE.Mesh;
    ['Cone107_01_-_Default_0']: THREE.Mesh;
    ['Cone108_01_-_Default_0']: THREE.Mesh;
    ['Cone109_01_-_Default_0']: THREE.Mesh;
    ['Cone110_01_-_Default_0']: THREE.Mesh;
    ['Cone111_01_-_Default_0']: THREE.Mesh;
    ['Cone112_01_-_Default_0']: THREE.Mesh;
    ['Cone113_01_-_Default_0']: THREE.Mesh;
    ['Cone114_01_-_Default_0']: THREE.Mesh;
    ['Cone115_01_-_Default_0']: THREE.Mesh;
    ['Line074_04_-_Default_0']: THREE.Mesh;
    ['Cone116_01_-_Default_0']: THREE.Mesh;
    ['Cone117_01_-_Default_0']: THREE.Mesh;
    ['Cone118_01_-_Default_0']: THREE.Mesh;
    ['Cone119_01_-_Default_0']: THREE.Mesh;
    Box232_Wall_Paint_0: THREE.Mesh;
    Box233_Wall_Paint_0: THREE.Mesh;
    Box234_Wall_Paint_0: THREE.Mesh;
    Box235_Wall_Paint_0: THREE.Mesh;
    Box236_Wall_Paint_0: THREE.Mesh;
    Box237_Wall_Paint_0: THREE.Mesh;
    Box238_Wall_Paint_0: THREE.Mesh;
    Box239_Wall_Paint_0: THREE.Mesh;
    ['Line075_05_-_Default_0']: THREE.Mesh;
    ['Line076_06_-_Default_0']: THREE.Mesh;
    ['Shape182_02_-_Default_0']: THREE.Mesh;
    ['Box240_03_-_Default_0']: THREE.Mesh;
    ['Box241_03_-_Default_0']: THREE.Mesh;
    ['Shape183_02_-_Default_0']: THREE.Mesh;
    ['Box242_03_-_Default_0']: THREE.Mesh;
    ['Shape184_02_-_Default_0']: THREE.Mesh;
    ['Box243_03_-_Default_0']: THREE.Mesh;
    ['Shape185_02_-_Default_0']: THREE.Mesh;
    ['Box244_03_-_Default_0']: THREE.Mesh;
    ['Shape186_02_-_Default_0']: THREE.Mesh;
    ['Box245_03_-_Default_0']: THREE.Mesh;
    ['Shape187_02_-_Default_0']: THREE.Mesh;
    ['Box246_03_-_Default_0']: THREE.Mesh;
    ['Shape188_02_-_Default_0']: THREE.Mesh;
    ['Box247_03_-_Default_0']: THREE.Mesh;
    ['Shape189_02_-_Default_0']: THREE.Mesh;
    ['Box248_03_-_Default_0']: THREE.Mesh;
    ['Shape190_02_-_Default_0']: THREE.Mesh;
    ['Box249_03_-_Default_0']: THREE.Mesh;
    ['Shape191_02_-_Default_0']: THREE.Mesh;
    ['Box250_03_-_Default_0']: THREE.Mesh;
    ['Shape192_02_-_Default_0']: THREE.Mesh;
    ['Box251_03_-_Default_0']: THREE.Mesh;
    ['Shape193_02_-_Default_0']: THREE.Mesh;
    ['Box252_03_-_Default_0']: THREE.Mesh;
    ['Shape194_02_-_Default_0']: THREE.Mesh;
    ['Box253_03_-_Default_0']: THREE.Mesh;
    ['Shape195_02_-_Default_0']: THREE.Mesh;
    ['Box254_03_-_Default_0']: THREE.Mesh;
    ['Shape196_02_-_Default_0']: THREE.Mesh;
    ['Box255_03_-_Default_0']: THREE.Mesh;
    ['Shape197_02_-_Default_0']: THREE.Mesh;
    ['Box256_03_-_Default_0']: THREE.Mesh;
    ['Shape198_02_-_Default_0']: THREE.Mesh;
    ['Box257_03_-_Default_0']: THREE.Mesh;
    ['Shape199_02_-_Default_0']: THREE.Mesh;
    ['Box258_03_-_Default_0']: THREE.Mesh;
    ['Shape200_02_-_Default_0']: THREE.Mesh;
    ['Box259_03_-_Default_0']: THREE.Mesh;
    ['Shape201_02_-_Default_0']: THREE.Mesh;
    ['Box260_03_-_Default_0']: THREE.Mesh;
    ['Shape202_02_-_Default_0']: THREE.Mesh;
    ['Box261_03_-_Default_0']: THREE.Mesh;
    ['Shape203_02_-_Default_0']: THREE.Mesh;
    ['Box262_03_-_Default_0']: THREE.Mesh;
    ['Shape204_02_-_Default_0']: THREE.Mesh;
    ['Box263_03_-_Default_0']: THREE.Mesh;
    ['Shape205_02_-_Default_0']: THREE.Mesh;
    ['Box264_03_-_Default_0']: THREE.Mesh;
    ['Shape206_02_-_Default_0']: THREE.Mesh;
    ['Box265_03_-_Default_0']: THREE.Mesh;
    ['Shape207_02_-_Default_0']: THREE.Mesh;
    ['Line077_04_-_Default_0']: THREE.Mesh;
    ['Line078_04_-_Default_0']: THREE.Mesh;
    ['Line079_04_-_Default_0']: THREE.Mesh;
    ['Line080_04_-_Default_0']: THREE.Mesh;
    ['Line081_04_-_Default_0']: THREE.Mesh;
    ['Line082_04_-_Default_0']: THREE.Mesh;
    ['Cone120_01_-_Default_0']: THREE.Mesh;
    ['Cone121_01_-_Default_0']: THREE.Mesh;
    ['Cone122_01_-_Default_0']: THREE.Mesh;
    ['Line083_04_-_Default_0']: THREE.Mesh;
    ['Cone123_01_-_Default_0']: THREE.Mesh;
    ['Cone124_01_-_Default_0']: THREE.Mesh;
    ['Cone125_01_-_Default_0']: THREE.Mesh;
    ['Cone126_01_-_Default_0']: THREE.Mesh;
    ['Cone127_01_-_Default_0']: THREE.Mesh;
    ['Cone128_01_-_Default_0']: THREE.Mesh;
    ['Cone129_01_-_Default_0']: THREE.Mesh;
    ['Cone130_01_-_Default_0']: THREE.Mesh;
    ['Cone131_01_-_Default_0']: THREE.Mesh;
    ['Cone132_01_-_Default_0']: THREE.Mesh;
    ['Line084_04_-_Default_0']: THREE.Mesh;
    ['Cone133_01_-_Default_0']: THREE.Mesh;
    ['Cone134_01_-_Default_0']: THREE.Mesh;
    ['Cone135_01_-_Default_0']: THREE.Mesh;
    ['Cone136_01_-_Default_0']: THREE.Mesh;
    Box266_Wall_Paint_0: THREE.Mesh;
    Box267_Wall_Paint_0: THREE.Mesh;
    Box268_Wall_Paint_0: THREE.Mesh;
    Box269_Wall_Paint_0: THREE.Mesh;
    Box270_Wall_Paint_0: THREE.Mesh;
    Box271_Wall_Paint_0: THREE.Mesh;
    Box272_Wall_Paint_0: THREE.Mesh;
    Box273_Wall_Paint_0: THREE.Mesh;
    ['Line085_05_-_Default_0']: THREE.Mesh;
    ['Line086_06_-_Default_0']: THREE.Mesh;
    ['Shape208_02_-_Default_0']: THREE.Mesh;
    ['Box274_03_-_Default_0']: THREE.Mesh;
    ['Box275_03_-_Default_0']: THREE.Mesh;
    ['Shape209_02_-_Default_0']: THREE.Mesh;
    ['Box276_03_-_Default_0']: THREE.Mesh;
    ['Shape210_02_-_Default_0']: THREE.Mesh;
    ['Box277_03_-_Default_0']: THREE.Mesh;
    ['Shape211_02_-_Default_0']: THREE.Mesh;
    ['Box278_03_-_Default_0']: THREE.Mesh;
    ['Shape212_02_-_Default_0']: THREE.Mesh;
    ['Box279_03_-_Default_0']: THREE.Mesh;
    ['Shape213_02_-_Default_0']: THREE.Mesh;
    ['Box280_03_-_Default_0']: THREE.Mesh;
    ['Shape214_02_-_Default_0']: THREE.Mesh;
    ['Box281_03_-_Default_0']: THREE.Mesh;
    ['Shape215_02_-_Default_0']: THREE.Mesh;
    ['Box282_03_-_Default_0']: THREE.Mesh;
    ['Shape216_02_-_Default_0']: THREE.Mesh;
    ['Box283_03_-_Default_0']: THREE.Mesh;
    ['Shape217_02_-_Default_0']: THREE.Mesh;
    ['Box284_03_-_Default_0']: THREE.Mesh;
    ['Shape218_02_-_Default_0']: THREE.Mesh;
    ['Box285_03_-_Default_0']: THREE.Mesh;
    ['Shape219_02_-_Default_0']: THREE.Mesh;
    ['Box286_03_-_Default_0']: THREE.Mesh;
    ['Shape220_02_-_Default_0']: THREE.Mesh;
    ['Box287_03_-_Default_0']: THREE.Mesh;
    ['Shape221_02_-_Default_0']: THREE.Mesh;
    ['Box288_03_-_Default_0']: THREE.Mesh;
    ['Shape222_02_-_Default_0']: THREE.Mesh;
    ['Box289_03_-_Default_0']: THREE.Mesh;
    ['Shape223_02_-_Default_0']: THREE.Mesh;
    ['Box290_03_-_Default_0']: THREE.Mesh;
    ['Shape224_02_-_Default_0']: THREE.Mesh;
    ['Box291_03_-_Default_0']: THREE.Mesh;
    ['Shape225_02_-_Default_0']: THREE.Mesh;
    ['Box292_03_-_Default_0']: THREE.Mesh;
    ['Shape226_02_-_Default_0']: THREE.Mesh;
    ['Box293_03_-_Default_0']: THREE.Mesh;
    ['Shape227_02_-_Default_0']: THREE.Mesh;
    ['Box294_03_-_Default_0']: THREE.Mesh;
    ['Shape228_02_-_Default_0']: THREE.Mesh;
    ['Box295_03_-_Default_0']: THREE.Mesh;
    ['Shape229_02_-_Default_0']: THREE.Mesh;
    ['Box296_03_-_Default_0']: THREE.Mesh;
    ['Shape230_02_-_Default_0']: THREE.Mesh;
    ['Box297_03_-_Default_0']: THREE.Mesh;
    ['Shape231_02_-_Default_0']: THREE.Mesh;
    ['Box298_03_-_Default_0']: THREE.Mesh;
    ['Shape232_02_-_Default_0']: THREE.Mesh;
    ['Box299_03_-_Default_0']: THREE.Mesh;
    ['Shape233_02_-_Default_0']: THREE.Mesh;
    ['Line087_04_-_Default_0']: THREE.Mesh;
    ['Line088_04_-_Default_0']: THREE.Mesh;
    ['Line089_04_-_Default_0']: THREE.Mesh;
    ['Line090_04_-_Default_0']: THREE.Mesh;
    ['Line091_04_-_Default_0']: THREE.Mesh;
    ['Line092_04_-_Default_0']: THREE.Mesh;
    ['Cone137_01_-_Default_0']: THREE.Mesh;
    ['Cone138_01_-_Default_0']: THREE.Mesh;
    ['Cone139_01_-_Default_0']: THREE.Mesh;
    ['Line093_04_-_Default_0']: THREE.Mesh;
    ['Cone140_01_-_Default_0']: THREE.Mesh;
    ['Cone141_01_-_Default_0']: THREE.Mesh;
    ['Cone142_01_-_Default_0']: THREE.Mesh;
    ['Cone143_01_-_Default_0']: THREE.Mesh;
    ['Cone144_01_-_Default_0']: THREE.Mesh;
    ['Cone145_01_-_Default_0']: THREE.Mesh;
    ['Cone146_01_-_Default_0']: THREE.Mesh;
    ['Cone147_01_-_Default_0']: THREE.Mesh;
    ['Cone148_01_-_Default_0']: THREE.Mesh;
    ['Cone149_01_-_Default_0']: THREE.Mesh;
    ['Line094_04_-_Default_0']: THREE.Mesh;
    ['Cone150_01_-_Default_0']: THREE.Mesh;
    ['Cone151_01_-_Default_0']: THREE.Mesh;
    ['Cone152_01_-_Default_0']: THREE.Mesh;
    ['Cone153_01_-_Default_0']: THREE.Mesh;
    Box300_Wall_Paint_0: THREE.Mesh;
    Box301_Wall_Paint_0: THREE.Mesh;
    Box302_Wall_Paint_0: THREE.Mesh;
    Box303_Wall_Paint_0: THREE.Mesh;
    Box304_Wall_Paint_0: THREE.Mesh;
    Box305_Wall_Paint_0: THREE.Mesh;
    Box306_Wall_Paint_0: THREE.Mesh;
    Box307_Wall_Paint_0: THREE.Mesh;
    ['Line095_05_-_Default_0']: THREE.Mesh;
    ['Line096_06_-_Default_0']: THREE.Mesh;
    ['Shape234_02_-_Default_0']: THREE.Mesh;
    ['Box308_03_-_Default_0']: THREE.Mesh;
    ['Box309_03_-_Default_0']: THREE.Mesh;
    ['Shape235_02_-_Default_0']: THREE.Mesh;
    ['Box310_03_-_Default_0']: THREE.Mesh;
    ['Shape236_02_-_Default_0']: THREE.Mesh;
    ['Box311_03_-_Default_0']: THREE.Mesh;
    ['Shape237_02_-_Default_0']: THREE.Mesh;
    ['Box312_03_-_Default_0']: THREE.Mesh;
    ['Shape238_02_-_Default_0']: THREE.Mesh;
    ['Box313_03_-_Default_0']: THREE.Mesh;
    ['Shape239_02_-_Default_0']: THREE.Mesh;
    ['Box314_03_-_Default_0']: THREE.Mesh;
    ['Shape240_02_-_Default_0']: THREE.Mesh;
    ['Box315_03_-_Default_0']: THREE.Mesh;
    ['Shape241_02_-_Default_0']: THREE.Mesh;
    ['Box316_03_-_Default_0']: THREE.Mesh;
    ['Shape242_02_-_Default_0']: THREE.Mesh;
    ['Box317_03_-_Default_0']: THREE.Mesh;
    ['Shape243_02_-_Default_0']: THREE.Mesh;
    ['Box318_03_-_Default_0']: THREE.Mesh;
    ['Shape244_02_-_Default_0']: THREE.Mesh;
    ['Box319_03_-_Default_0']: THREE.Mesh;
    ['Shape245_02_-_Default_0']: THREE.Mesh;
    ['Box320_03_-_Default_0']: THREE.Mesh;
    ['Shape246_02_-_Default_0']: THREE.Mesh;
    ['Box321_03_-_Default_0']: THREE.Mesh;
    ['Shape247_02_-_Default_0']: THREE.Mesh;
    ['Box322_03_-_Default_0']: THREE.Mesh;
    ['Shape248_02_-_Default_0']: THREE.Mesh;
    ['Box323_03_-_Default_0']: THREE.Mesh;
    ['Shape249_02_-_Default_0']: THREE.Mesh;
    ['Box324_03_-_Default_0']: THREE.Mesh;
    ['Shape250_02_-_Default_0']: THREE.Mesh;
    ['Box325_03_-_Default_0']: THREE.Mesh;
    ['Shape251_02_-_Default_0']: THREE.Mesh;
    ['Box326_03_-_Default_0']: THREE.Mesh;
    ['Shape252_02_-_Default_0']: THREE.Mesh;
    ['Box327_03_-_Default_0']: THREE.Mesh;
    ['Shape253_02_-_Default_0']: THREE.Mesh;
    ['Box328_03_-_Default_0']: THREE.Mesh;
    ['Shape254_02_-_Default_0']: THREE.Mesh;
    ['Box329_03_-_Default_0']: THREE.Mesh;
    ['Shape255_02_-_Default_0']: THREE.Mesh;
    ['Box330_03_-_Default_0']: THREE.Mesh;
    ['Shape256_02_-_Default_0']: THREE.Mesh;
    ['Box331_03_-_Default_0']: THREE.Mesh;
    ['Shape257_02_-_Default_0']: THREE.Mesh;
    ['Box332_03_-_Default_0']: THREE.Mesh;
    ['Shape258_02_-_Default_0']: THREE.Mesh;
    ['Box333_03_-_Default_0']: THREE.Mesh;
    ['Shape259_02_-_Default_0']: THREE.Mesh;
    ['Line097_04_-_Default_0']: THREE.Mesh;
    ['Line098_04_-_Default_0']: THREE.Mesh;
    ['Line099_04_-_Default_0']: THREE.Mesh;
    ['Line100_04_-_Default_0']: THREE.Mesh;
    ['Line101_04_-_Default_0']: THREE.Mesh;
    ['Line102_04_-_Default_0']: THREE.Mesh;
    ['Cone154_01_-_Default_0']: THREE.Mesh;
    ['Cone155_01_-_Default_0']: THREE.Mesh;
    ['Cone156_01_-_Default_0']: THREE.Mesh;
    ['Line103_04_-_Default_0']: THREE.Mesh;
    ['Cone157_01_-_Default_0']: THREE.Mesh;
    ['Cone158_01_-_Default_0']: THREE.Mesh;
    ['Cone159_01_-_Default_0']: THREE.Mesh;
    ['Cone160_01_-_Default_0']: THREE.Mesh;
    ['Cone161_01_-_Default_0']: THREE.Mesh;
    ['Cone162_01_-_Default_0']: THREE.Mesh;
    ['Cone163_01_-_Default_0']: THREE.Mesh;
    ['Cone164_01_-_Default_0']: THREE.Mesh;
    ['Cone165_01_-_Default_0']: THREE.Mesh;
    ['Cone166_01_-_Default_0']: THREE.Mesh;
    ['Line104_04_-_Default_0']: THREE.Mesh;
    ['Cone167_01_-_Default_0']: THREE.Mesh;
    ['Cone168_01_-_Default_0']: THREE.Mesh;
    ['Cone169_01_-_Default_0']: THREE.Mesh;
    ['Cone170_01_-_Default_0']: THREE.Mesh;
    Box334_Wall_Paint_0: THREE.Mesh;
    Box335_Wall_Paint_0: THREE.Mesh;
    Box336_Wall_Paint_0: THREE.Mesh;
    Box337_Wall_Paint_0: THREE.Mesh;
    Box338_Wall_Paint_0: THREE.Mesh;
    Box339_Wall_Paint_0: THREE.Mesh;
    Box340_Wall_Paint_0: THREE.Mesh;
    Box341_Wall_Paint_0: THREE.Mesh;
    ['Line105_05_-_Default_0']: THREE.Mesh;
    ['Line106_06_-_Default_0']: THREE.Mesh;
    ['Shape260_02_-_Default_0']: THREE.Mesh;
    ['Box342_03_-_Default_0']: THREE.Mesh;
    ['Box343_03_-_Default_0']: THREE.Mesh;
    ['Shape261_02_-_Default_0']: THREE.Mesh;
    ['Box344_03_-_Default_0']: THREE.Mesh;
    ['Shape262_02_-_Default_0']: THREE.Mesh;
    ['Box345_03_-_Default_0']: THREE.Mesh;
    ['Shape263_02_-_Default_0']: THREE.Mesh;
    ['Box346_03_-_Default_0']: THREE.Mesh;
    ['Shape264_02_-_Default_0']: THREE.Mesh;
    ['Box347_03_-_Default_0']: THREE.Mesh;
    ['Shape265_02_-_Default_0']: THREE.Mesh;
    ['Box348_03_-_Default_0']: THREE.Mesh;
    ['Shape266_02_-_Default_0']: THREE.Mesh;
    ['Box349_03_-_Default_0']: THREE.Mesh;
    ['Shape267_02_-_Default_0']: THREE.Mesh;
    ['Box350_03_-_Default_0']: THREE.Mesh;
    ['Shape268_02_-_Default_0']: THREE.Mesh;
    ['Box351_03_-_Default_0']: THREE.Mesh;
    ['Shape269_02_-_Default_0']: THREE.Mesh;
    ['Box352_03_-_Default_0']: THREE.Mesh;
    ['Shape270_02_-_Default_0']: THREE.Mesh;
    ['Box353_03_-_Default_0']: THREE.Mesh;
    ['Shape271_02_-_Default_0']: THREE.Mesh;
    ['Box354_03_-_Default_0']: THREE.Mesh;
    ['Shape272_02_-_Default_0']: THREE.Mesh;
    ['Box355_03_-_Default_0']: THREE.Mesh;
    ['Shape273_02_-_Default_0']: THREE.Mesh;
    ['Box356_03_-_Default_0']: THREE.Mesh;
    ['Shape274_02_-_Default_0']: THREE.Mesh;
    ['Box357_03_-_Default_0']: THREE.Mesh;
    ['Shape275_02_-_Default_0']: THREE.Mesh;
    ['Box358_03_-_Default_0']: THREE.Mesh;
    ['Shape276_02_-_Default_0']: THREE.Mesh;
    ['Box359_03_-_Default_0']: THREE.Mesh;
    ['Shape277_02_-_Default_0']: THREE.Mesh;
    ['Box360_03_-_Default_0']: THREE.Mesh;
    ['Shape278_02_-_Default_0']: THREE.Mesh;
    ['Box361_03_-_Default_0']: THREE.Mesh;
    ['Shape279_02_-_Default_0']: THREE.Mesh;
    ['Box362_03_-_Default_0']: THREE.Mesh;
    ['Shape280_02_-_Default_0']: THREE.Mesh;
    ['Box363_03_-_Default_0']: THREE.Mesh;
    ['Shape281_02_-_Default_0']: THREE.Mesh;
    ['Box364_03_-_Default_0']: THREE.Mesh;
    ['Shape282_02_-_Default_0']: THREE.Mesh;
    ['Box365_03_-_Default_0']: THREE.Mesh;
    ['Shape283_02_-_Default_0']: THREE.Mesh;
    ['Box366_03_-_Default_0']: THREE.Mesh;
    ['Shape284_02_-_Default_0']: THREE.Mesh;
    ['Box367_03_-_Default_0']: THREE.Mesh;
    ['Shape285_02_-_Default_0']: THREE.Mesh;
    ['Line107_04_-_Default_0']: THREE.Mesh;
    ['Line108_04_-_Default_0']: THREE.Mesh;
    ['Line109_04_-_Default_0']: THREE.Mesh;
    ['Line110_04_-_Default_0']: THREE.Mesh;
    ['Line111_04_-_Default_0']: THREE.Mesh;
    ['Line112_04_-_Default_0']: THREE.Mesh;
    ['Cone171_01_-_Default_0']: THREE.Mesh;
    ['Cone172_01_-_Default_0']: THREE.Mesh;
    ['Cone173_01_-_Default_0']: THREE.Mesh;
    ['Line113_04_-_Default_0']: THREE.Mesh;
    ['Cone174_01_-_Default_0']: THREE.Mesh;
    ['Cone175_01_-_Default_0']: THREE.Mesh;
    ['Cone176_01_-_Default_0']: THREE.Mesh;
    ['Cone177_01_-_Default_0']: THREE.Mesh;
    ['Cone178_01_-_Default_0']: THREE.Mesh;
    ['Cone179_01_-_Default_0']: THREE.Mesh;
    ['Cone180_01_-_Default_0']: THREE.Mesh;
    ['Cone181_01_-_Default_0']: THREE.Mesh;
    ['Cone182_01_-_Default_0']: THREE.Mesh;
    ['Cone183_01_-_Default_0']: THREE.Mesh;
    ['Line114_04_-_Default_0']: THREE.Mesh;
    ['Cone184_01_-_Default_0']: THREE.Mesh;
    ['Cone185_01_-_Default_0']: THREE.Mesh;
    ['Cone186_01_-_Default_0']: THREE.Mesh;
    ['Cone187_01_-_Default_0']: THREE.Mesh;
    Box368_Wall_Paint_0: THREE.Mesh;
    Box369_Wall_Paint_0: THREE.Mesh;
    Box370_Wall_Paint_0: THREE.Mesh;
    Box371_Wall_Paint_0: THREE.Mesh;
    Box372_Wall_Paint_0: THREE.Mesh;
    Box373_Wall_Paint_0: THREE.Mesh;
    Box374_Wall_Paint_0: THREE.Mesh;
    Box375_Wall_Paint_0: THREE.Mesh;
    ['Line115_05_-_Default_0']: THREE.Mesh;
    ['Line116_06_-_Default_0']: THREE.Mesh;
    ['Shape286_02_-_Default_0']: THREE.Mesh;
    ['Box376_03_-_Default_0']: THREE.Mesh;
    ['Box377_03_-_Default_0']: THREE.Mesh;
    ['Shape287_02_-_Default_0']: THREE.Mesh;
    ['Box378_03_-_Default_0']: THREE.Mesh;
    ['Shape288_02_-_Default_0']: THREE.Mesh;
    ['Box379_03_-_Default_0']: THREE.Mesh;
    ['Shape289_02_-_Default_0']: THREE.Mesh;
    ['Box380_03_-_Default_0']: THREE.Mesh;
    ['Shape290_02_-_Default_0']: THREE.Mesh;
    ['Box381_03_-_Default_0']: THREE.Mesh;
    ['Shape291_02_-_Default_0']: THREE.Mesh;
    ['Box382_03_-_Default_0']: THREE.Mesh;
    ['Shape292_02_-_Default_0']: THREE.Mesh;
    ['Box383_03_-_Default_0']: THREE.Mesh;
    ['Shape293_02_-_Default_0']: THREE.Mesh;
    ['Box384_03_-_Default_0']: THREE.Mesh;
    ['Shape294_02_-_Default_0']: THREE.Mesh;
    ['Box385_03_-_Default_0']: THREE.Mesh;
    ['Shape295_02_-_Default_0']: THREE.Mesh;
    ['Box386_03_-_Default_0']: THREE.Mesh;
    ['Shape296_02_-_Default_0']: THREE.Mesh;
    ['Box387_03_-_Default_0']: THREE.Mesh;
    ['Shape297_02_-_Default_0']: THREE.Mesh;
    ['Box388_03_-_Default_0']: THREE.Mesh;
    ['Shape298_02_-_Default_0']: THREE.Mesh;
    ['Box389_03_-_Default_0']: THREE.Mesh;
    ['Shape299_02_-_Default_0']: THREE.Mesh;
    ['Box390_03_-_Default_0']: THREE.Mesh;
    ['Shape300_02_-_Default_0']: THREE.Mesh;
    ['Box391_03_-_Default_0']: THREE.Mesh;
    ['Shape301_02_-_Default_0']: THREE.Mesh;
    ['Box392_03_-_Default_0']: THREE.Mesh;
    ['Shape302_02_-_Default_0']: THREE.Mesh;
    ['Box393_03_-_Default_0']: THREE.Mesh;
    ['Shape303_02_-_Default_0']: THREE.Mesh;
    ['Box394_03_-_Default_0']: THREE.Mesh;
    ['Shape304_02_-_Default_0']: THREE.Mesh;
    ['Box395_03_-_Default_0']: THREE.Mesh;
    ['Shape305_02_-_Default_0']: THREE.Mesh;
    ['Box396_03_-_Default_0']: THREE.Mesh;
    ['Shape306_02_-_Default_0']: THREE.Mesh;
    ['Box397_03_-_Default_0']: THREE.Mesh;
    ['Shape307_02_-_Default_0']: THREE.Mesh;
    ['Box398_03_-_Default_0']: THREE.Mesh;
    ['Shape308_02_-_Default_0']: THREE.Mesh;
    ['Box399_03_-_Default_0']: THREE.Mesh;
    ['Shape309_02_-_Default_0']: THREE.Mesh;
    ['Box400_03_-_Default_0']: THREE.Mesh;
    ['Shape310_02_-_Default_0']: THREE.Mesh;
    ['Box401_03_-_Default_0']: THREE.Mesh;
    ['Shape311_02_-_Default_0']: THREE.Mesh;
    ['Line117_04_-_Default_0']: THREE.Mesh;
    ['Line118_04_-_Default_0']: THREE.Mesh;
    ['Line119_04_-_Default_0']: THREE.Mesh;
    ['Line120_04_-_Default_0']: THREE.Mesh;
    ['Line121_04_-_Default_0']: THREE.Mesh;
    ['Line122_04_-_Default_0']: THREE.Mesh;
    ['Cone188_01_-_Default_0']: THREE.Mesh;
    ['Cone189_01_-_Default_0']: THREE.Mesh;
    ['Cone190_01_-_Default_0']: THREE.Mesh;
    ['Line123_04_-_Default_0']: THREE.Mesh;
    ['Cone191_01_-_Default_0']: THREE.Mesh;
    ['Cone192_01_-_Default_0']: THREE.Mesh;
    ['Cone193_01_-_Default_0']: THREE.Mesh;
    ['Cone194_01_-_Default_0']: THREE.Mesh;
    ['Cone195_01_-_Default_0']: THREE.Mesh;
    ['Cone196_01_-_Default_0']: THREE.Mesh;
    ['Cone197_01_-_Default_0']: THREE.Mesh;
    ['Cone198_01_-_Default_0']: THREE.Mesh;
    ['Cone199_01_-_Default_0']: THREE.Mesh;
    ['Cone200_01_-_Default_0']: THREE.Mesh;
    ['Line124_04_-_Default_0']: THREE.Mesh;
    ['Cone201_01_-_Default_0']: THREE.Mesh;
    ['Cone202_01_-_Default_0']: THREE.Mesh;
    ['Cone203_01_-_Default_0']: THREE.Mesh;
    ['Cone204_01_-_Default_0']: THREE.Mesh;
    Box402_Wall_Paint_0: THREE.Mesh;
    Box403_Wall_Paint_0: THREE.Mesh;
    Box404_Wall_Paint_0: THREE.Mesh;
    Box405_Wall_Paint_0: THREE.Mesh;
    Box406_Wall_Paint_0: THREE.Mesh;
    Box407_Wall_Paint_0: THREE.Mesh;
    Box408_Wall_Paint_0: THREE.Mesh;
    Box409_Wall_Paint_0: THREE.Mesh;
    Line125_Metal_0: THREE.Mesh;
    ['Line126_14_-_Polished_Aluminum_0']: THREE.Mesh;
    ['Box410_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box411_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box412_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box413_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box414_11_-_Default_0']: THREE.Mesh;
    ['Box415_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box416_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box417_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box418_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box419_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box420_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box421_11_-_Default_0']: THREE.Mesh;
    ['Box422_12_-_Car_Paint_0']: THREE.Mesh;
    ['Box423_12_-_Car_Paint_0']: THREE.Mesh;
    ['Box424_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box425_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box426_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box427_13_-_Brushed_Metal_#2_0']: THREE.Mesh;
    ['Box428_03_-_Default_0']: THREE.Mesh;
    ['Shape312_02_-_Default_0']: THREE.Mesh;
    ['Box429_03_-_Default_0']: THREE.Mesh;
    ['Shape313_02_-_Default_0']: THREE.Mesh;
    ['Box430_03_-_Default_0']: THREE.Mesh;
    ['Shape314_02_-_Default_0']: THREE.Mesh;
    ['Box431_03_-_Default_0']: THREE.Mesh;
    ['Shape315_02_-_Default_0']: THREE.Mesh;
    ['Box436_03_-_Default_0']: THREE.Mesh;
    ['Box437_03_-_Default_0']: THREE.Mesh;
    ['Box438_03_-_Default_0']: THREE.Mesh;
    ['Box439_03_-_Default_0']: THREE.Mesh;
    ['Shape320_02_-_Default_0']: THREE.Mesh;
    ['Shape321_02_-_Default_0']: THREE.Mesh;
    ['Shape322_02_-_Default_0']: THREE.Mesh;
    ['Shape323_02_-_Default_0']: THREE.Mesh;
    ['Box440_03_-_Default_0']: THREE.Mesh;
  };
  materials: {
    ['13_-_Brushed_Metal_2']: THREE.MeshStandardMaterial;
    ['05_-_Default']: THREE.MeshStandardMaterial;
    ['06_-_Default']: THREE.MeshStandardMaterial;
    Solid_Glass: THREE.MeshStandardMaterial;
    Ceramic: THREE.MeshStandardMaterial;
    ['02_-_Default']: THREE.MeshStandardMaterial;
    ['03_-_Default']: THREE.MeshStandardMaterial;
    ['04_-_Default']: THREE.MeshStandardMaterial;
    ['01_-_Default']: THREE.MeshStandardMaterial;
    Wall_Paint: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
    ['14_-_Polished_Aluminum']: THREE.MeshStandardMaterial;
    ['11_-_Default']: THREE.MeshStandardMaterial;
    ['12_-_Car_Paint']: THREE.MeshStandardMaterial;
  };
};

export default function Building6(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('@assets/buildingModel/Building6.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line001_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[1975.676, 0, -1153.662]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line003_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 129.921, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line005_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 118.11, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line006_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[2062.988, 0, -1317.313]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[2031.933, -168.187, -1173.284]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 129.921, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box002_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 188.881, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box003_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 188.881, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape001_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 129.921, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box004_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 188.881, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape002_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 129.921, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box005_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 188.881, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape003_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 129.921, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box006_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 188.881, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape004_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 129.921, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box007_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 188.881, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape005_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 129.921, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box008_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 188.881, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape006_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 129.921, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box009_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 188.881, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape007_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 129.921, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box010_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 188.881, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape008_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 129.921, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box011_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 188.881, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape009_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 129.921, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box012_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 188.881, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape010_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 129.921, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box013_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 188.881, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape011_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 129.921, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box014_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 188.881, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape012_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 129.921, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box015_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 188.881, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape013_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 129.921, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box016_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 188.881, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape014_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 129.921, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box017_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 188.881, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape015_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 129.921, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box018_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 188.881, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape016_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 129.921, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box019_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 188.881, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape017_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 129.921, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box020_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 188.881, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape018_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 129.921, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box021_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 188.881, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape019_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 129.921, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box022_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 188.881, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape020_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 129.921, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box023_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 188.881, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape021_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 129.921, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box024_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 188.881, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape022_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 129.921, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box025_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 188.881, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape023_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 129.921, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box026_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 188.881, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape024_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 129.921, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box027_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 188.881, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape025_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 129.921, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line007_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 153.543, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line008_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 153.543, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line009_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 153.543, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line010_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 153.543, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line011_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 153.543, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line012_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 153.543, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone001_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 129.921, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone002_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 129.921, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone003_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 129.921, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line013_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 153.543, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone004_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 129.921, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone005_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 129.921, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone006_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 129.921, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone007_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 129.921, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone008_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 129.921, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone009_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 129.921, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone010_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 129.921, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone011_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 129.921, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone012_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 129.921, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone013_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 129.921, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line014_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 153.543, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone014_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 129.921, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone015_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 129.921, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone016_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 129.921, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone017_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 129.921, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box028_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 129.921, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box029_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 129.921, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box030_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 129.921, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box031_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 129.921, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box032_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 129.921, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box033_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 129.921, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box034_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 129.921, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box035_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 129.921, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line015_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 248.031, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line016_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 236.22, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape026_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 248.031, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box036_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 306.991, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box037_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 306.991, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape027_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 248.031, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box038_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 306.991, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape028_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 248.031, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box039_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 306.991, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape029_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 248.031, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box040_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 306.991, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape030_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 248.031, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box041_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 306.991, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape031_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 248.031, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box042_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 306.991, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape032_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 248.031, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box043_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 306.991, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape033_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 248.031, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box044_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 306.991, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape034_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 248.031, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box045_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 306.991, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape035_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 248.031, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box046_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 306.991, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape036_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 248.031, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box047_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 306.991, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape037_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 248.031, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box048_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 306.991, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape038_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 248.031, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box049_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 306.991, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape039_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 248.031, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box050_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 306.991, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape040_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 248.031, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box051_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 306.991, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape041_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 248.031, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box052_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 306.991, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape042_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 248.031, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box053_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 306.991, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape043_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 248.031, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box054_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 306.991, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape044_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 248.031, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box055_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 306.991, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape045_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 248.031, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box056_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 306.991, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape046_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 248.031, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box057_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 306.991, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape047_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 248.031, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box058_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 306.991, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape048_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 248.031, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box059_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 306.991, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape049_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 248.031, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box060_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 306.991, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape050_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 248.031, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box061_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 306.991, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape051_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 248.031, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line017_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 271.654, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line018_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 271.654, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line019_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 271.654, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line020_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 271.654, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line021_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 271.654, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line022_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 271.654, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone018_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 248.031, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone019_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 248.031, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone020_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 248.031, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line023_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 271.654, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone021_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 248.031, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone022_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 248.031, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone023_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 248.031, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone024_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 248.031, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone025_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 248.031, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone026_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 248.031, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone027_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 248.031, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone028_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 248.031, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone029_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 248.031, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone030_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 248.031, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line024_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 271.654, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone031_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 248.031, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone032_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 248.031, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone033_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 248.031, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone034_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 248.031, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box062_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 248.031, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box063_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 248.031, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box064_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 248.031, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box065_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 248.031, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box066_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 248.031, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box067_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 248.031, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box068_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 248.031, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box069_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 248.031, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line025_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 366.142, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line026_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 354.331, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape052_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 366.142, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box070_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 425.101, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box071_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 425.101, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape053_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 366.142, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box072_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 425.101, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape054_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 366.142, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box073_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 425.101, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape055_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 366.142, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box074_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 425.101, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape056_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 366.142, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box075_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 425.101, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape057_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 366.142, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box076_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 425.101, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape058_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 366.142, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box077_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 425.101, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape059_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 366.142, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box078_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 425.101, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape060_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 366.142, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box079_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 425.101, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape061_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 366.142, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box080_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 425.101, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape062_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 366.142, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box081_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 425.101, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape063_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 366.142, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box082_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 425.101, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape064_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 366.142, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box083_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 425.101, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape065_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 366.142, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box084_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 425.101, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape066_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 366.142, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box085_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 425.101, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape067_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 366.142, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box086_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 425.101, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape068_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 366.142, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box087_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 425.101, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape069_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 366.142, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box088_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 425.101, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape070_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 366.142, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box089_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 425.101, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape071_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 366.142, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box090_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 425.101, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape072_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 366.142, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box091_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 425.101, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape073_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 366.142, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box092_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 425.101, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape074_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 366.142, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box093_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 425.101, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape075_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 366.142, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box094_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 425.101, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape076_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 366.142, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box095_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 425.101, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape077_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 366.142, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line027_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 389.764, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line028_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 389.764, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line029_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 389.764, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line030_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 389.764, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line031_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 389.764, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line032_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 389.764, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone035_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 366.142, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone036_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 366.142, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone037_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 366.142, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line033_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 389.764, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone038_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 366.142, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone039_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 366.142, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone040_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 366.142, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone041_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 366.142, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone042_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 366.142, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone043_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 366.142, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone044_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 366.142, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone045_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 366.142, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone046_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 366.142, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone047_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 366.142, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line034_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 389.764, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone048_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 366.142, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone049_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 366.142, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone050_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 366.142, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone051_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 366.142, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box096_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 366.142, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box097_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 366.142, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box098_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 366.142, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box099_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 366.142, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box100_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 366.142, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box101_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 366.142, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box102_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 366.142, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box103_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 366.142, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line035_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 484.252, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line036_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 472.441, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape078_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 484.252, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box104_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 543.211, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box105_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 543.211, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape079_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 484.252, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box106_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 543.211, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape080_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 484.252, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box107_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 543.211, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape081_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 484.252, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box108_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 543.211, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape082_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 484.252, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box109_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 543.211, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape083_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 484.252, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box110_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 543.211, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape084_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 484.252, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box111_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 543.211, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape085_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 484.252, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box112_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 543.211, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape086_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 484.252, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box113_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 543.211, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape087_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 484.252, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box114_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 543.211, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape088_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 484.252, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box115_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 543.211, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape089_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 484.252, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box116_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 543.211, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape090_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 484.252, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box117_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 543.211, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape091_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 484.252, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box118_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 543.211, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape092_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 484.252, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box119_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 543.211, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape093_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 484.252, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box120_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 543.211, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape094_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 484.252, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box121_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 543.211, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape095_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 484.252, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box122_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 543.211, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape096_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 484.252, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box123_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 543.211, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape097_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 484.252, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box124_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 543.211, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape098_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 484.252, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box125_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 543.211, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape099_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 484.252, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box126_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 543.211, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape100_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 484.252, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box127_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 543.211, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape101_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 484.252, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box128_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 543.211, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape102_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 484.252, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box129_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 543.211, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape103_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 484.252, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line037_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 507.874, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line038_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 507.874, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line039_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 507.874, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line040_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 507.874, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line041_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 507.874, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line042_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 507.874, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone052_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 484.252, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone053_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 484.252, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone054_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 484.252, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line043_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 507.874, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone055_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 484.252, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone056_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 484.252, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone057_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 484.252, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone058_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 484.252, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone059_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 484.252, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone060_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 484.252, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone061_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 484.252, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone062_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 484.252, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone063_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 484.252, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone064_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 484.252, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line044_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 507.874, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone065_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 484.252, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone066_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 484.252, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone067_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 484.252, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone068_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 484.252, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box130_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 484.252, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box131_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 484.252, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box132_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 484.252, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box133_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 484.252, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box134_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 484.252, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box135_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 484.252, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box136_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 484.252, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box137_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 484.252, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line045_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 602.362, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line046_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 590.551, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape104_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 602.362, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box138_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 661.322, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box139_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 661.322, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape105_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 602.362, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box140_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 661.322, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape106_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 602.362, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box141_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 661.322, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape107_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 602.362, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box142_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 661.322, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape108_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 602.362, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box143_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 661.322, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape109_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 602.362, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box144_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 661.322, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape110_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 602.362, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box145_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 661.322, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape111_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 602.362, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box146_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 661.322, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape112_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 602.362, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box147_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 661.322, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape113_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 602.362, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box148_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 661.322, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape114_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 602.362, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box149_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 661.322, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape115_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 602.362, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box150_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 661.322, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape116_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 602.362, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box151_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 661.322, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape117_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 602.362, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box152_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 661.322, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape118_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 602.362, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box153_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 661.322, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape119_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 602.362, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box154_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 661.322, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape120_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 602.362, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box155_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 661.322, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape121_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 602.362, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box156_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 661.322, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape122_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 602.362, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box157_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 661.322, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape123_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 602.362, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box158_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 661.322, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape124_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 602.362, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box159_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 661.322, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape125_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 602.362, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box160_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 661.322, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape126_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 602.362, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box161_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 661.322, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape127_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 602.362, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box162_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 661.322, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape128_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 602.362, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box163_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 661.322, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape129_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 602.362, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line047_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 625.984, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line048_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 625.984, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line049_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 625.984, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line050_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 625.984, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line051_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 625.984, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line052_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 625.984, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone069_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 602.362, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone070_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 602.362, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone071_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 602.362, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line053_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 625.984, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone072_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 602.362, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone073_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 602.362, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone074_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 602.362, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone075_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 602.362, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone076_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 602.362, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone077_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 602.362, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone078_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 602.362, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone079_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 602.362, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone080_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 602.362, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone081_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 602.362, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line054_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 625.984, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone082_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 602.362, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone083_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 602.362, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone084_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 602.362, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone085_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 602.362, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box164_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 602.362, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box165_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 602.362, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box166_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 602.362, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box167_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 602.362, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box168_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 602.362, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box169_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 602.362, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box170_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 602.362, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box171_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 602.362, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line055_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 720.472, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line056_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 708.661, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape130_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 720.472, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box172_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 779.432, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box173_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 779.432, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape131_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 720.472, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box174_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 779.432, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape132_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 720.472, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box175_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 779.432, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape133_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 720.472, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box176_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 779.432, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape134_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 720.472, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box177_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 779.432, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape135_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 720.472, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box178_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 779.432, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape136_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 720.472, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box179_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 779.432, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape137_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 720.472, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box180_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 779.432, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape138_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 720.472, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box181_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 779.432, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape139_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 720.472, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box182_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 779.432, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape140_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 720.472, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box183_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 779.432, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape141_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 720.472, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box184_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 779.432, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape142_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 720.472, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box185_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 779.432, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape143_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 720.472, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box186_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 779.432, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape144_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 720.472, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box187_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 779.432, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape145_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 720.472, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box188_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 779.432, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape146_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 720.472, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box189_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 779.432, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape147_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 720.472, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box190_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 779.432, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape148_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 720.472, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box191_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 779.432, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape149_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 720.472, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box192_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 779.432, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape150_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 720.472, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box193_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 779.432, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape151_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 720.472, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box194_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 779.432, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape152_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 720.472, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box195_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 779.432, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape153_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 720.472, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box196_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 779.432, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape154_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 720.472, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box197_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 779.432, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape155_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 720.472, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line057_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 744.094, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line058_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 744.094, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line059_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 744.094, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line060_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 744.094, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line061_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 744.094, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line062_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 744.094, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone086_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 720.472, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone087_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 720.472, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone088_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 720.472, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line063_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 744.094, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone089_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 720.472, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone090_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 720.472, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone091_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 720.472, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone092_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 720.472, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone093_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 720.472, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone094_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 720.472, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone095_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 720.472, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone096_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 720.472, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone097_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 720.472, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone098_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 720.472, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line064_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 744.094, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone099_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 720.472, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone100_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 720.472, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone101_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 720.472, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone102_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 720.472, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box198_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 720.472, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box199_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 720.472, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box200_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 720.472, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box201_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 720.472, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box202_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 720.472, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box203_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 720.472, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box204_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 720.472, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box205_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 720.472, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line065_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 838.583, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line066_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 826.772, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape156_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 838.583, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box206_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 897.542, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box207_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 897.542, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape157_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 838.583, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box208_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 897.542, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape158_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 838.583, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box209_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 897.542, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape159_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 838.583, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box210_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 897.542, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape160_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 838.583, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box211_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 897.542, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape161_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 838.583, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box212_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 897.542, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape162_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 838.583, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box213_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 897.542, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape163_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 838.583, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box214_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 897.542, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape164_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 838.583, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box215_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 897.542, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape165_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 838.583, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box216_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 897.542, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape166_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 838.583, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box217_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 897.542, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape167_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 838.583, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box218_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 897.542, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape168_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 838.583, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box219_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 897.542, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape169_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 838.583, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box220_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 897.542, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape170_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 838.583, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box221_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 897.542, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape171_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 838.583, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box222_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 897.542, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape172_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 838.583, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box223_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 897.542, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape173_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 838.583, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box224_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 897.542, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape174_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 838.583, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box225_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 897.542, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape175_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 838.583, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box226_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 897.542, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape176_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 838.583, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box227_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 897.542, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape177_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 838.583, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box228_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 897.542, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape178_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 838.583, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box229_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 897.542, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape179_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 838.583, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box230_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 897.542, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape180_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 838.583, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box231_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 897.542, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape181_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 838.583, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line067_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 862.205, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line068_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 862.205, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line069_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 862.205, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line070_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 862.205, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line071_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 862.205, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line072_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 862.205, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone103_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 838.583, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone104_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 838.583, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone105_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 838.583, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line073_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 862.205, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone106_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 838.583, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone107_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 838.583, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone108_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 838.583, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone109_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 838.583, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone110_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 838.583, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone111_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 838.583, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone112_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 838.583, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone113_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 838.583, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone114_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 838.583, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone115_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 838.583, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line074_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 862.205, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone116_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 838.583, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone117_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 838.583, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone118_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 838.583, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone119_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 838.583, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box232_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 838.583, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box233_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 838.583, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box234_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 838.583, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box235_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 838.583, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box236_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 838.583, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box237_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 838.583, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box238_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 838.583, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box239_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 838.583, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line075_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 956.693, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line076_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 944.882, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape182_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 956.693, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box240_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1015.652, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box241_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1015.652, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape183_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 956.693, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box242_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1015.652, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape184_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 956.693, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box243_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1015.652, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape185_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 956.693, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box244_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 1015.652, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape186_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 956.693, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box245_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 1015.652, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape187_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 956.693, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box246_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 1015.652, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape188_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 956.693, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box247_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 1015.652, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape189_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 956.693, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box248_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 1015.652, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape190_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 956.693, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box249_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 1015.652, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape191_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 956.693, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box250_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 1015.652, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape192_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 956.693, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box251_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 1015.652, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape193_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 956.693, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box252_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 1015.652, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape194_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 956.693, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box253_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 1015.652, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape195_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 956.693, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box254_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 1015.652, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape196_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 956.693, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box255_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 1015.652, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape197_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 956.693, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box256_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 1015.652, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape198_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 956.693, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box257_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 1015.652, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape199_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 956.693, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box258_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 1015.652, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape200_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 956.693, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box259_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 1015.652, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape201_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 956.693, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box260_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 1015.652, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape202_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 956.693, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box261_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 1015.652, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape203_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 956.693, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box262_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 1015.652, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape204_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 956.693, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box263_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 1015.652, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape205_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 956.693, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box264_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 1015.652, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape206_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 956.693, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box265_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 1015.652, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape207_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 956.693, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line077_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 980.315, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line078_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 980.315, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line079_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 980.315, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line080_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 980.315, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line081_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 980.315, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line082_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 980.315, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone120_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 956.693, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone121_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 956.693, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone122_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 956.693, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line083_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 980.315, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone123_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 956.693, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone124_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 956.693, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone125_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 956.693, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone126_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 956.693, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone127_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 956.693, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone128_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 956.693, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone129_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 956.693, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone130_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 956.693, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone131_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 956.693, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone132_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 956.693, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line084_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 980.315, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone133_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 956.693, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone134_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 956.693, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone135_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 956.693, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone136_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 956.693, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box266_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 956.693, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box267_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 956.693, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box268_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 956.693, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box269_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 956.693, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box270_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 956.693, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box271_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 956.693, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box272_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 956.693, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box273_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 956.693, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line085_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 1074.803, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line086_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 1062.992, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape208_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1074.803, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box274_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1133.762, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box275_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1133.762, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape209_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1074.803, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box276_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1133.762, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape210_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1074.803, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box277_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1133.762, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape211_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1074.803, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box278_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 1133.762, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape212_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 1074.803, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box279_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 1133.762, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape213_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 1074.803, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box280_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 1133.762, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape214_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 1074.803, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box281_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 1133.762, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape215_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 1074.803, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box282_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 1133.762, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape216_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 1074.803, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box283_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 1133.762, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape217_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 1074.803, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box284_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 1133.762, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape218_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 1074.803, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box285_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 1133.762, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape219_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 1074.803, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box286_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 1133.762, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape220_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 1074.803, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box287_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 1133.762, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape221_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 1074.803, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box288_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 1133.762, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape222_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 1074.803, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box289_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 1133.762, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape223_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 1074.803, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box290_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 1133.762, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape224_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 1074.803, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box291_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 1133.762, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape225_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 1074.803, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box292_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 1133.762, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape226_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 1074.803, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box293_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 1133.762, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape227_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 1074.803, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box294_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 1133.762, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape228_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 1074.803, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box295_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 1133.762, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape229_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 1074.803, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box296_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 1133.762, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape230_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 1074.803, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box297_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 1133.762, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape231_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 1074.803, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box298_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 1133.762, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape232_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 1074.803, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box299_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 1133.762, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape233_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 1074.803, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line087_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 1098.425, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line088_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 1098.425, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line089_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 1098.425, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line090_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 1098.425, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line091_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 1098.425, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line092_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 1098.425, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone137_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1074.803, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone138_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1074.803, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone139_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1074.803, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line093_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 1098.425, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone140_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 1074.803, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone141_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1074.803, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone142_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1074.803, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone143_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1074.803, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone144_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1074.803, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone145_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 1074.803, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone146_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 1074.803, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone147_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1074.803, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone148_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1074.803, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone149_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1074.803, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line094_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 1098.425, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone150_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 1074.803, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone151_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 1074.803, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone152_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 1074.803, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone153_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 1074.803, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box300_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 1074.803, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box301_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 1074.803, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box302_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 1074.803, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box303_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1074.803, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box304_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1074.803, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box305_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1074.803, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box306_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 1074.803, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box307_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 1074.803, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line095_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 1192.913, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line096_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 1181.102, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape234_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1192.913, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box308_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1251.873, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box309_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1251.873, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape235_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1192.913, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box310_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1251.873, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape236_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1192.913, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box311_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1251.873, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape237_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1192.913, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box312_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 1251.873, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape238_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 1192.913, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box313_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 1251.873, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape239_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 1192.913, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box314_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 1251.873, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape240_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 1192.913, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box315_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 1251.873, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape241_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 1192.913, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box316_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 1251.873, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape242_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 1192.913, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box317_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 1251.873, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape243_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 1192.913, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box318_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 1251.873, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape244_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 1192.913, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box319_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 1251.873, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape245_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 1192.913, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box320_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 1251.873, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape246_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 1192.913, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box321_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 1251.873, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape247_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 1192.913, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box322_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 1251.873, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape248_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 1192.913, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box323_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 1251.873, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape249_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 1192.913, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box324_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 1251.873, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape250_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 1192.913, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box325_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 1251.873, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape251_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 1192.913, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box326_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 1251.873, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape252_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 1192.913, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box327_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 1251.873, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape253_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 1192.913, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box328_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 1251.873, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape254_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 1192.913, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box329_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 1251.873, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape255_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 1192.913, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box330_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 1251.873, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape256_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 1192.913, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box331_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 1251.873, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape257_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 1192.913, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box332_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 1251.873, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape258_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 1192.913, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box333_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 1251.873, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape259_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 1192.913, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line097_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 1216.535, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line098_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 1216.535, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line099_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 1216.535, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line100_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 1216.535, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line101_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 1216.535, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line102_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 1216.535, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone154_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1192.913, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone155_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1192.913, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone156_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1192.913, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line103_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 1216.535, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone157_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 1192.913, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone158_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1192.913, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone159_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1192.913, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone160_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1192.913, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone161_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1192.913, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone162_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 1192.913, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone163_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 1192.913, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone164_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1192.913, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone165_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1192.913, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone166_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1192.913, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line104_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 1216.535, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone167_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 1192.913, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone168_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 1192.913, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone169_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 1192.913, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone170_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 1192.913, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box334_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 1192.913, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box335_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 1192.913, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box336_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 1192.913, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box337_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1192.913, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box338_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1192.913, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box339_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1192.913, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box340_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 1192.913, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box341_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 1192.913, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line105_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 1311.024, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line106_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 1299.213, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape260_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1311.024, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box342_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1369.983, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box343_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1369.983, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape261_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1311.024, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box344_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1369.983, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape262_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1311.024, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box345_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1369.983, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape263_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1311.024, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box346_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 1369.983, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape264_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 1311.024, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box347_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 1369.983, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape265_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 1311.024, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box348_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 1369.983, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape266_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 1311.024, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box349_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 1369.983, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape267_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 1311.024, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box350_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 1369.983, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape268_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 1311.024, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box351_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 1369.983, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape269_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 1311.024, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box352_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 1369.983, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape270_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 1311.024, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box353_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 1369.983, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape271_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 1311.024, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box354_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 1369.983, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape272_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 1311.024, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box355_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 1369.983, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape273_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 1311.024, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box356_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 1369.983, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape274_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 1311.024, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box357_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 1369.983, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape275_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 1311.024, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box358_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 1369.983, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape276_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 1311.024, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box359_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 1369.983, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape277_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 1311.024, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box360_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 1369.983, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape278_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 1311.024, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box361_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 1369.983, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape279_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 1311.024, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box362_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 1369.983, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape280_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 1311.024, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box363_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 1369.983, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape281_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 1311.024, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box364_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 1369.983, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape282_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 1311.024, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box365_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 1369.983, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape283_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 1311.024, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box366_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 1369.983, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape284_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 1311.024, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box367_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 1369.983, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape285_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 1311.024, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line107_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 1334.646, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line108_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 1334.646, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line109_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 1334.646, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line110_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 1334.646, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line111_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 1334.646, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line112_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 1334.646, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone171_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1311.024, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone172_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1311.024, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone173_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1311.024, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line113_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 1334.646, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone174_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 1311.024, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone175_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1311.024, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone176_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1311.024, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone177_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1311.024, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone178_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1311.024, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone179_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 1311.024, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone180_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 1311.024, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone181_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1311.024, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone182_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1311.024, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone183_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1311.024, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line114_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 1334.646, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone184_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 1311.024, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone185_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 1311.024, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone186_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 1311.024, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone187_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 1311.024, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box368_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 1311.024, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box369_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 1311.024, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box370_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 1311.024, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box371_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1311.024, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box372_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1311.024, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box373_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1311.024, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box374_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 1311.024, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box375_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 1311.024, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line115_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[2000.775, 1429.134, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line116_06_-_Default_0'].geometry}
          material={materials['06_-_Default']}
          position={[2059.595, 1417.323, -1169.938]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape286_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1429.134, -1146.033]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box376_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1488.093, -1688.641]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box377_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1488.093, -1594.656]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape287_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1429.134, -1052.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box378_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1488.093, -1499.972]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape288_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1429.134, -957.364]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box379_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2422.115, 1488.093, -1405.944]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape289_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2000.775, 1429.134, -863.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box380_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.293, 1488.093, -1573.585]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape290_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1390.953, 1429.134, -1030.977]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box381_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2262.841, 1488.093, -1432.409]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape291_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2805.449, 1429.134, -1011.068]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box382_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2096.814, 1488.093, -1171.161]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape292_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.154, 1429.134, -1713.769]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box383_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.274, 1488.093, -943.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape293_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.615, 1429.134, -1485.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box384_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2097.168, 1488.093, -699.336]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape294_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2518.508, 1429.134, -1241.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box385_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1812.432, 1488.093, -1095.163]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape295_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2233.772, 1429.134, -1637.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box386_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.413, 1488.093, -904.797]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape296_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.754, 1429.134, -1447.405]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box387_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.62, 1488.093, -811.918]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape297_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2048.96, 1429.134, -1354.526]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box388_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.79, 1488.093, -715.162]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape298_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.13, 1429.134, -1257.77]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box389_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 1317.887, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape299_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2049.172, 1429.134, -1163.761]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box390_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1749.358, 1488.093, -559.537]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape300_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1206.75, 1429.134, -980.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box391_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1907.031, 1488.093, -559.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape301_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1364.423, 1429.134, -981.1]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box392_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.885, 1488.093, -819.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape302_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.545, 1429.134, -277.023]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box393_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2191.959, 1488.093, -1055.678]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape303_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.619, 1429.134, -513.071]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box394_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2192.325, 1488.093, -1292.067]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape304_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1770.985, 1429.134, -749.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box395_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2369.716, 1488.093, -1346.005]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape305_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2912.323, 1429.134, -924.665]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box396_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2320.297, 1488.093, -1747.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape306_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2862.905, 1429.134, -1326.155]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box397_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 1488.093, -1747.668]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape307_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, 1429.134, -1326.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box398_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2005.219, 1488.093, -1747.537]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape308_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2547.827, 1429.134, -1326.197]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box399_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1847.685, 1488.093, -1747.389]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape309_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2390.292, 1429.134, -1326.049]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box400_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1726.181, 1488.093, -1432.823]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape310_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.521, 1429.134, -1975.431]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box401_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1725.958, 1488.093, -1282.493]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape311_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2147.298, 1429.134, -1825.101]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line117_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.349, 1452.756, -1173.132]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line118_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.687, 1452.756, -937.155]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line119_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2214.949, 1452.756, -700.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line120_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 1452.756, -1094.605]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line121_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1703.018, 1452.756, -1569.203]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line122_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2494.535, 1452.756, -1407.615]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone188_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1429.134, -1347.808]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone189_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1429.134, -1541.048]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone190_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2511.738, 1429.134, -1747.813]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line123_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[2261.971, 1452.756, -1325.919]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone191_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2322.213, 1429.134, -1308.576]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone192_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1429.134, -1228.769]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone193_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1429.134, -1117.164]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone194_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1429.134, -993.085]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone195_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2231.754, 1429.134, -881.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone196_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.233, 1429.134, -756.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone197_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[2232.347, 1429.134, -645.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone198_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1429.134, -556.833]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone199_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1429.134, -748.753]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone200_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1535.69, 1429.134, -961.685]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line124_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1553.207, 1452.756, -901.971]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone201_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 1429.134, -1039.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone202_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.793, 1429.134, -1149.506]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone203_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 1429.134, -1512.712]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cone204_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1685.72, 1429.134, -1624.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box402_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 1429.134, -1569.419]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box403_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2447.224, 1429.134, -1666.635]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box404_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2227.106, 1429.134, -1383.52]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box405_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1429.134, -1190.392]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box406_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1429.134, -954.318]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box407_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[2133.564, 1429.134, -718.166]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box408_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1747.656, 1429.134, -1107.312]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box409_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[1578.496, 1429.134, -915.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line125_Metal_0.geometry}
          material={materials.Metal}
          position={[2026.955, 1581.211, -1124.713]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line126_14_-_Polished_Aluminum_0'].geometry}
          material={materials['14_-_Polished_Aluminum']}
          position={[2026.955, 1545.993, -1124.713]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box410_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[1951.14, 0, -555.61]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box411_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[1864.103, 0, -555.61]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box412_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[1793.074, 0, -555.61]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box413_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[1705.508, 0, -555.61]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box414_11_-_Default_0'].geometry}
          material={materials['11_-_Default']}
          position={[2067.544, 0, -555.61]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box415_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[2197.57, 0, -553.138]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box416_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[2197.57, 0, -723.809]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box417_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[2197.57, 0, -824.273]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box418_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[1650.971, 0, -914.176]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box419_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[2197.57, 0, -1059.866]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box420_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[2197.57, 0, -1201.759]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box421_11_-_Default_0'].geometry}
          material={materials['11_-_Default']}
          position={[2407.861, -14.536, -1349.79]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box422_12_-_Car_Paint_0'].geometry}
          material={materials['12_-_Car_Paint']}
          position={[1944.581, 1526.639, -1497.406]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box423_12_-_Car_Paint_0'].geometry}
          material={materials['12_-_Car_Paint']}
          position={[1717.478, 1526.639, -744.421]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box424_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[2197.57, 0, -962.792]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box425_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[1719.914, 0, -1189.848]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box426_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[1725.586, 0, -1323.961]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box427_13_-_Brushed_Metal_#2_0'].geometry}
          material={materials['13_-_Brushed_Metal_2']}
          position={[1725.586, 0, -1647.46]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box428_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2162.794, 23.876, -1703.814]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape312_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2705.402, -35.083, -1282.474]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box429_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2068.976, 23.876, -1703.814]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape313_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2611.584, -35.083, -1282.474]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box430_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1975.158, 23.876, -1703.814]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape314_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2517.766, -35.083, -1282.474]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box431_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1881.34, 23.876, -1703.814]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape315_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[2423.948, -35.083, -1282.474]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box436_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2188.547, 23.876, -695.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box437_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2188.547, 23.876, -944.369]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box438_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2188.547, 23.876, -1054.636]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box439_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[2188.547, 23.876, -1175.336]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape320_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1767.207, -35.083, -152.76]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape321_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1767.207, -35.083, -401.761]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape322_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1767.207, -35.083, -512.028]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape323_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
          position={[1767.207, -35.083, -632.729]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box440_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1627.831, 1488.75, -621.153]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(require('@assets/buildingModel/Building6.glb'));
