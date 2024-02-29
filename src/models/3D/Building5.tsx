/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei/native';
import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Circle001_glass_0: THREE.Mesh;
    Box433_rail_0: THREE.Mesh;
    Box434_rail_0: THREE.Mesh;
    Box435_rail_0: THREE.Mesh;
    Box436_rail_0: THREE.Mesh;
    Box437_rail_0: THREE.Mesh;
    Box438_rail_0: THREE.Mesh;
    Box439_rail_0: THREE.Mesh;
    Box440_rail_0: THREE.Mesh;
    Line455_floor_0: THREE.Mesh;
    Line456_floor_0: THREE.Mesh;
    Line457_floor_0: THREE.Mesh;
    Line458_floor_0: THREE.Mesh;
    Line459_floor_0: THREE.Mesh;
    Line460_floor_0: THREE.Mesh;
    Line461_floor_0: THREE.Mesh;
    Line462_floor_0: THREE.Mesh;
    ['Box697_Material_#25_0']: THREE.Mesh;
    ['Box698_Material_#25_0']: THREE.Mesh;
    ['Box699_Material_#25_0']: THREE.Mesh;
    ['Box701_Material_#25_0']: THREE.Mesh;
    ['Box702_Material_#25_0']: THREE.Mesh;
    ['Box703_Material_#25_0']: THREE.Mesh;
    ['Box704_Material_#25_0']: THREE.Mesh;
    ['Box705_Material_#25_0']: THREE.Mesh;
    ['Box706_Material_#25_0']: THREE.Mesh;
    ['Box707_Material_#25_0']: THREE.Mesh;
    ['Box708_Material_#25_0']: THREE.Mesh;
    ['Line412_Material_#6_0']: THREE.Mesh;
    ['Line413_Material_#6_0']: THREE.Mesh;
    Line416_glass_0: THREE.Mesh;
    Line417_glass_0: THREE.Mesh;
    Line418_glass_0: THREE.Mesh;
    Line420_glass_0: THREE.Mesh;
    Line421_glass_0: THREE.Mesh;
    Line422_glass_0: THREE.Mesh;
    Line423_glass_0: THREE.Mesh;
    Line424_glass_0: THREE.Mesh;
    Line425_glass_0: THREE.Mesh;
    Line426_glass_0: THREE.Mesh;
    Line427_glass_0: THREE.Mesh;
    Line428_glass_0: THREE.Mesh;
    Line429_glass_0: THREE.Mesh;
    Line430_glass_0: THREE.Mesh;
    Line431_glass_0: THREE.Mesh;
    Line432_glass_0: THREE.Mesh;
    Line433_glass_0: THREE.Mesh;
    Line434_glass_0: THREE.Mesh;
    Line435_glass_0: THREE.Mesh;
    Line436_glass_0: THREE.Mesh;
    Line437_glass_0: THREE.Mesh;
    Line438_glass_0: THREE.Mesh;
    Line439_glass_0: THREE.Mesh;
    Line440_glass_0: THREE.Mesh;
    Line441_glass_0: THREE.Mesh;
    Line442_glass_0: THREE.Mesh;
    Line443_glass_0: THREE.Mesh;
    ['Line445_Material_#11_0']: THREE.Mesh;
    ['Line446_Material_#11_0']: THREE.Mesh;
    ['Line454_Material_#6_0']: THREE.Mesh;
    Rectangle109_rail_0: THREE.Mesh;
    Rectangle110_rail_0: THREE.Mesh;
    Rectangle111_rail_0: THREE.Mesh;
    Rectangle112_rail_0: THREE.Mesh;
    Rectangle113_rail_0: THREE.Mesh;
    Rectangle114_rail_0: THREE.Mesh;
    Rectangle115_rail_0: THREE.Mesh;
    Rectangle116_rail_0: THREE.Mesh;
    Rectangle117_rail_0: THREE.Mesh;
    Rectangle118_rail_0: THREE.Mesh;
    Rectangle119_rail_0: THREE.Mesh;
    Rectangle120_rail_0: THREE.Mesh;
    Shape231_rail_0: THREE.Mesh;
    Shape232_rail_0: THREE.Mesh;
    Shape233_rail_0: THREE.Mesh;
    Shape235_rail_0: THREE.Mesh;
    Shape236_rail_0: THREE.Mesh;
    Shape237_rail_0: THREE.Mesh;
    Shape238_rail_0: THREE.Mesh;
    Shape239_rail_0: THREE.Mesh;
    Shape240_rail_0: THREE.Mesh;
    Shape241_rail_0: THREE.Mesh;
    Shape242_rail_0: THREE.Mesh;
    Shape251_rail_0: THREE.Mesh;
    Shape252_rail_0: THREE.Mesh;
    Shape253_rail_0: THREE.Mesh;
    Shape254_rail_0: THREE.Mesh;
    ['Line463_Material_#16_0']: THREE.Mesh;
    Plane001_frame_0: THREE.Mesh;
    ['Box001_Material_#25_0']: THREE.Mesh;
    ['Box002_Material_#25_0']: THREE.Mesh;
    ['Box081_Material_#25_0']: THREE.Mesh;
    ['Box082_Material_#25_0']: THREE.Mesh;
    ['Box123_Material_#25_0']: THREE.Mesh;
    ['Box124_Material_#25_0']: THREE.Mesh;
    ['Line038_Material_#11_0']: THREE.Mesh;
    Line008_glass_0: THREE.Mesh;
    Shape002_rail_0: THREE.Mesh;
    Line020_glass_0: THREE.Mesh;
    Line019_glass_0: THREE.Mesh;
    Line007_glass_0: THREE.Mesh;
    Shape001_rail_0: THREE.Mesh;
    Line017_glass_0: THREE.Mesh;
    Shape011_rail_0: THREE.Mesh;
    Line018_glass_0: THREE.Mesh;
    Shape012_rail_0: THREE.Mesh;
    Line029_glass_0: THREE.Mesh;
    Rectangle007_rail_0: THREE.Mesh;
    Rectangle008_rail_0: THREE.Mesh;
    Rectangle009_rail_0: THREE.Mesh;
    Line030_glass_0: THREE.Mesh;
    Rectangle010_rail_0: THREE.Mesh;
    Rectangle011_rail_0: THREE.Mesh;
    Rectangle012_rail_0: THREE.Mesh;
    Line011_glass_0: THREE.Mesh;
    Shape005_rail_0: THREE.Mesh;
    Line023_glass_0: THREE.Mesh;
    Line024_glass_0: THREE.Mesh;
    Line012_glass_0: THREE.Mesh;
    Shape006_rail_0: THREE.Mesh;
    ['Box135_Material_#21_0']: THREE.Mesh;
    ['Box136_Material_#21_0']: THREE.Mesh;
    ['Box137_Material_#21_0']: THREE.Mesh;
    ['Box138_Material_#21_0']: THREE.Mesh;
    ['Box139_Material_#21_0']: THREE.Mesh;
    ['Box140_Material_#21_0']: THREE.Mesh;
    ['Box141_Material_#21_0']: THREE.Mesh;
    ['Box142_Material_#21_0']: THREE.Mesh;
    ['Box143_Material_#21_0']: THREE.Mesh;
    ['Box144_Material_#21_0']: THREE.Mesh;
    ['Line044_Material_#21_0']: THREE.Mesh;
    ['Line045_Material_#21_0']: THREE.Mesh;
    ['Line046_Material_#21_0']: THREE.Mesh;
    Line031_glass_0: THREE.Mesh;
    Shape024_rail_0: THREE.Mesh;
    Line033_glass_0: THREE.Mesh;
    Shape022_rail_0: THREE.Mesh;
    ['Line004_Material_#6_0']: THREE.Mesh;
    ['Line003_Material_#6_0']: THREE.Mesh;
    ['Line049_Material_#6_0']: THREE.Mesh;
    Line016_glass_0: THREE.Mesh;
    ['Box004_Material_#25_0']: THREE.Mesh;
    ['Box083_Material_#25_0']: THREE.Mesh;
    ['Box084_Material_#25_0']: THREE.Mesh;
    ['Box103_Material_#25_0']: THREE.Mesh;
    ['Box104_Material_#25_0']: THREE.Mesh;
    ['Line039_Material_#11_0']: THREE.Mesh;
    Line010_glass_0: THREE.Mesh;
    Shape004_rail_0: THREE.Mesh;
    Line022_glass_0: THREE.Mesh;
    Line021_glass_0: THREE.Mesh;
    Line015_glass_0: THREE.Mesh;
    Line034_glass_0: THREE.Mesh;
    Shape025_rail_0: THREE.Mesh;
    Line013_glass_0: THREE.Mesh;
    Shape007_rail_0: THREE.Mesh;
    Line025_glass_0: THREE.Mesh;
    Line026_glass_0: THREE.Mesh;
    Line014_glass_0: THREE.Mesh;
    Shape008_rail_0: THREE.Mesh;
    Shape009_rail_0: THREE.Mesh;
    Shape010_rail_0: THREE.Mesh;
    Line028_glass_0: THREE.Mesh;
    Rectangle004_rail_0: THREE.Mesh;
    Rectangle005_rail_0: THREE.Mesh;
    Rectangle006_rail_0: THREE.Mesh;
    Rectangle001_rail_0: THREE.Mesh;
    Line027_glass_0: THREE.Mesh;
    Rectangle002_rail_0: THREE.Mesh;
    Rectangle003_rail_0: THREE.Mesh;
    ['Box134_Material_#21_0']: THREE.Mesh;
    ['Line040_Material_#21_0']: THREE.Mesh;
    ['Line042_Material_#21_0']: THREE.Mesh;
    ['Line043_Material_#21_0']: THREE.Mesh;
    ['Box133_Material_#21_0']: THREE.Mesh;
    ['Box132_Material_#21_0']: THREE.Mesh;
    ['Box131_Material_#21_0']: THREE.Mesh;
    ['Box130_Material_#21_0']: THREE.Mesh;
    ['Box129_Material_#21_0']: THREE.Mesh;
    ['Box127_Material_#21_0']: THREE.Mesh;
    ['Box128_Material_#21_0']: THREE.Mesh;
    ['Box126_Material_#21_0']: THREE.Mesh;
    ['Box125_Material_#21_0']: THREE.Mesh;
    Line009_glass_0: THREE.Mesh;
    ['Box003_Material_#25_0']: THREE.Mesh;
    Shape003_rail_0: THREE.Mesh;
    Shape023_rail_0: THREE.Mesh;
    Line032_glass_0: THREE.Mesh;
    ['Box441_Material_#25_0']: THREE.Mesh;
    ['Box442_Material_#25_0']: THREE.Mesh;
    ['Box443_Material_#25_0']: THREE.Mesh;
    ['Box444_Material_#25_0']: THREE.Mesh;
    ['Box445_Material_#25_0']: THREE.Mesh;
    ['Box446_Material_#25_0']: THREE.Mesh;
    ['Box447_Material_#25_0']: THREE.Mesh;
    ['Box448_Material_#25_0']: THREE.Mesh;
    ['Box449_Material_#25_0']: THREE.Mesh;
    ['Box450_Material_#25_0']: THREE.Mesh;
    ['Box451_Material_#25_0']: THREE.Mesh;
    ['Box452_Material_#25_0']: THREE.Mesh;
    ['Box453_Material_#21_0']: THREE.Mesh;
    ['Box454_Material_#21_0']: THREE.Mesh;
    ['Box455_Material_#21_0']: THREE.Mesh;
    ['Box456_Material_#21_0']: THREE.Mesh;
    ['Box457_Material_#21_0']: THREE.Mesh;
    ['Box458_Material_#21_0']: THREE.Mesh;
    ['Box459_Material_#21_0']: THREE.Mesh;
    ['Box460_Material_#21_0']: THREE.Mesh;
    ['Box461_Material_#21_0']: THREE.Mesh;
    ['Box462_Material_#21_0']: THREE.Mesh;
    ['Line087_Material_#21_0']: THREE.Mesh;
    ['Line088_Material_#21_0']: THREE.Mesh;
    ['Line089_Material_#21_0']: THREE.Mesh;
    ['Box463_Material_#21_0']: THREE.Mesh;
    ['Box464_Material_#21_0']: THREE.Mesh;
    ['Box465_Material_#21_0']: THREE.Mesh;
    ['Box466_Material_#21_0']: THREE.Mesh;
    ['Box467_Material_#21_0']: THREE.Mesh;
    ['Box468_Material_#21_0']: THREE.Mesh;
    ['Box469_Material_#21_0']: THREE.Mesh;
    ['Box470_Material_#21_0']: THREE.Mesh;
    ['Box471_Material_#21_0']: THREE.Mesh;
    ['Box472_Material_#21_0']: THREE.Mesh;
    ['Line090_Material_#21_0']: THREE.Mesh;
    ['Line091_Material_#21_0']: THREE.Mesh;
    ['Line092_Material_#21_0']: THREE.Mesh;
    ['Line052_Material_#6_0']: THREE.Mesh;
    ['Line053_Material_#6_0']: THREE.Mesh;
    Line056_glass_0: THREE.Mesh;
    Line057_glass_0: THREE.Mesh;
    Line058_glass_0: THREE.Mesh;
    Line059_glass_0: THREE.Mesh;
    Line060_glass_0: THREE.Mesh;
    Line061_glass_0: THREE.Mesh;
    Line062_glass_0: THREE.Mesh;
    Line063_glass_0: THREE.Mesh;
    Line064_glass_0: THREE.Mesh;
    Line065_glass_0: THREE.Mesh;
    Line066_glass_0: THREE.Mesh;
    Line067_glass_0: THREE.Mesh;
    Line068_glass_0: THREE.Mesh;
    Line069_glass_0: THREE.Mesh;
    Line070_glass_0: THREE.Mesh;
    Line071_glass_0: THREE.Mesh;
    Line072_glass_0: THREE.Mesh;
    Line073_glass_0: THREE.Mesh;
    Line074_glass_0: THREE.Mesh;
    Line075_glass_0: THREE.Mesh;
    Line076_glass_0: THREE.Mesh;
    Line077_glass_0: THREE.Mesh;
    Line078_glass_0: THREE.Mesh;
    Line079_glass_0: THREE.Mesh;
    Line080_glass_0: THREE.Mesh;
    Line081_glass_0: THREE.Mesh;
    Line082_glass_0: THREE.Mesh;
    Line083_glass_0: THREE.Mesh;
    ['Line085_Material_#11_0']: THREE.Mesh;
    ['Line086_Material_#11_0']: THREE.Mesh;
    ['Line094_Material_#6_0']: THREE.Mesh;
    Rectangle013_rail_0: THREE.Mesh;
    Rectangle014_rail_0: THREE.Mesh;
    Rectangle015_rail_0: THREE.Mesh;
    Rectangle016_rail_0: THREE.Mesh;
    Rectangle017_rail_0: THREE.Mesh;
    Rectangle018_rail_0: THREE.Mesh;
    Rectangle019_rail_0: THREE.Mesh;
    Rectangle020_rail_0: THREE.Mesh;
    Rectangle021_rail_0: THREE.Mesh;
    Rectangle022_rail_0: THREE.Mesh;
    Rectangle023_rail_0: THREE.Mesh;
    Rectangle024_rail_0: THREE.Mesh;
    Shape039_rail_0: THREE.Mesh;
    Shape040_rail_0: THREE.Mesh;
    Shape041_rail_0: THREE.Mesh;
    Shape042_rail_0: THREE.Mesh;
    Shape043_rail_0: THREE.Mesh;
    Shape044_rail_0: THREE.Mesh;
    Shape045_rail_0: THREE.Mesh;
    Shape046_rail_0: THREE.Mesh;
    Shape047_rail_0: THREE.Mesh;
    Shape048_rail_0: THREE.Mesh;
    Shape049_rail_0: THREE.Mesh;
    Shape050_rail_0: THREE.Mesh;
    Shape059_rail_0: THREE.Mesh;
    Shape060_rail_0: THREE.Mesh;
    Shape061_rail_0: THREE.Mesh;
    Shape062_rail_0: THREE.Mesh;
    ['Box473_Material_#25_0']: THREE.Mesh;
    ['Box474_Material_#25_0']: THREE.Mesh;
    ['Box475_Material_#25_0']: THREE.Mesh;
    ['Box476_Material_#25_0']: THREE.Mesh;
    ['Box477_Material_#25_0']: THREE.Mesh;
    ['Box478_Material_#25_0']: THREE.Mesh;
    ['Box479_Material_#25_0']: THREE.Mesh;
    ['Box480_Material_#25_0']: THREE.Mesh;
    ['Box481_Material_#25_0']: THREE.Mesh;
    ['Box482_Material_#25_0']: THREE.Mesh;
    ['Box483_Material_#25_0']: THREE.Mesh;
    ['Box484_Material_#25_0']: THREE.Mesh;
    ['Box485_Material_#21_0']: THREE.Mesh;
    ['Box486_Material_#21_0']: THREE.Mesh;
    ['Box487_Material_#21_0']: THREE.Mesh;
    ['Box488_Material_#21_0']: THREE.Mesh;
    ['Box489_Material_#21_0']: THREE.Mesh;
    ['Box490_Material_#21_0']: THREE.Mesh;
    ['Box491_Material_#21_0']: THREE.Mesh;
    ['Box492_Material_#21_0']: THREE.Mesh;
    ['Box493_Material_#21_0']: THREE.Mesh;
    ['Box494_Material_#21_0']: THREE.Mesh;
    ['Line132_Material_#21_0']: THREE.Mesh;
    ['Line133_Material_#21_0']: THREE.Mesh;
    ['Line134_Material_#21_0']: THREE.Mesh;
    ['Box495_Material_#21_0']: THREE.Mesh;
    ['Box496_Material_#21_0']: THREE.Mesh;
    ['Box497_Material_#21_0']: THREE.Mesh;
    ['Box498_Material_#21_0']: THREE.Mesh;
    ['Box499_Material_#21_0']: THREE.Mesh;
    ['Box500_Material_#21_0']: THREE.Mesh;
    ['Box501_Material_#21_0']: THREE.Mesh;
    ['Box502_Material_#21_0']: THREE.Mesh;
    ['Box503_Material_#21_0']: THREE.Mesh;
    ['Box504_Material_#21_0']: THREE.Mesh;
    ['Line135_Material_#21_0']: THREE.Mesh;
    ['Line136_Material_#21_0']: THREE.Mesh;
    ['Line137_Material_#21_0']: THREE.Mesh;
    ['Line097_Material_#6_0']: THREE.Mesh;
    ['Line098_Material_#6_0']: THREE.Mesh;
    Line101_glass_0: THREE.Mesh;
    Line102_glass_0: THREE.Mesh;
    Line103_glass_0: THREE.Mesh;
    Line104_glass_0: THREE.Mesh;
    Line105_glass_0: THREE.Mesh;
    Line106_glass_0: THREE.Mesh;
    Line107_glass_0: THREE.Mesh;
    Line108_glass_0: THREE.Mesh;
    Line109_glass_0: THREE.Mesh;
    Line110_glass_0: THREE.Mesh;
    Line111_glass_0: THREE.Mesh;
    Line112_glass_0: THREE.Mesh;
    Line113_glass_0: THREE.Mesh;
    Line114_glass_0: THREE.Mesh;
    Line115_glass_0: THREE.Mesh;
    Line116_glass_0: THREE.Mesh;
    Line117_glass_0: THREE.Mesh;
    Line118_glass_0: THREE.Mesh;
    Line119_glass_0: THREE.Mesh;
    Line120_glass_0: THREE.Mesh;
    Line121_glass_0: THREE.Mesh;
    Line122_glass_0: THREE.Mesh;
    Line123_glass_0: THREE.Mesh;
    Line124_glass_0: THREE.Mesh;
    Line125_glass_0: THREE.Mesh;
    Line126_glass_0: THREE.Mesh;
    Line127_glass_0: THREE.Mesh;
    Line128_glass_0: THREE.Mesh;
    ['Line130_Material_#11_0']: THREE.Mesh;
    ['Line131_Material_#11_0']: THREE.Mesh;
    ['Line139_Material_#6_0']: THREE.Mesh;
    Rectangle025_rail_0: THREE.Mesh;
    Rectangle026_rail_0: THREE.Mesh;
    Rectangle027_rail_0: THREE.Mesh;
    Rectangle028_rail_0: THREE.Mesh;
    Rectangle029_rail_0: THREE.Mesh;
    Rectangle030_rail_0: THREE.Mesh;
    Rectangle031_rail_0: THREE.Mesh;
    Rectangle032_rail_0: THREE.Mesh;
    Rectangle033_rail_0: THREE.Mesh;
    Rectangle034_rail_0: THREE.Mesh;
    Rectangle035_rail_0: THREE.Mesh;
    Rectangle036_rail_0: THREE.Mesh;
    Shape063_rail_0: THREE.Mesh;
    Shape064_rail_0: THREE.Mesh;
    Shape065_rail_0: THREE.Mesh;
    Shape066_rail_0: THREE.Mesh;
    Shape067_rail_0: THREE.Mesh;
    Shape068_rail_0: THREE.Mesh;
    Shape069_rail_0: THREE.Mesh;
    Shape070_rail_0: THREE.Mesh;
    Shape071_rail_0: THREE.Mesh;
    Shape072_rail_0: THREE.Mesh;
    Shape073_rail_0: THREE.Mesh;
    Shape074_rail_0: THREE.Mesh;
    Shape083_rail_0: THREE.Mesh;
    Shape084_rail_0: THREE.Mesh;
    Shape085_rail_0: THREE.Mesh;
    Shape086_rail_0: THREE.Mesh;
    ['Box505_Material_#25_0']: THREE.Mesh;
    ['Box506_Material_#25_0']: THREE.Mesh;
    ['Box507_Material_#25_0']: THREE.Mesh;
    ['Box508_Material_#25_0']: THREE.Mesh;
    ['Box509_Material_#25_0']: THREE.Mesh;
    ['Box510_Material_#25_0']: THREE.Mesh;
    ['Box511_Material_#25_0']: THREE.Mesh;
    ['Box512_Material_#25_0']: THREE.Mesh;
    ['Box513_Material_#25_0']: THREE.Mesh;
    ['Box514_Material_#25_0']: THREE.Mesh;
    ['Box515_Material_#25_0']: THREE.Mesh;
    ['Box516_Material_#25_0']: THREE.Mesh;
    ['Box517_Material_#21_0']: THREE.Mesh;
    ['Box518_Material_#21_0']: THREE.Mesh;
    ['Box519_Material_#21_0']: THREE.Mesh;
    ['Box520_Material_#21_0']: THREE.Mesh;
    ['Box521_Material_#21_0']: THREE.Mesh;
    ['Box522_Material_#21_0']: THREE.Mesh;
    ['Box523_Material_#21_0']: THREE.Mesh;
    ['Box524_Material_#21_0']: THREE.Mesh;
    ['Box525_Material_#21_0']: THREE.Mesh;
    ['Box526_Material_#21_0']: THREE.Mesh;
    ['Line177_Material_#21_0']: THREE.Mesh;
    ['Line178_Material_#21_0']: THREE.Mesh;
    ['Line179_Material_#21_0']: THREE.Mesh;
    ['Box527_Material_#21_0']: THREE.Mesh;
    ['Box528_Material_#21_0']: THREE.Mesh;
    ['Box529_Material_#21_0']: THREE.Mesh;
    ['Box530_Material_#21_0']: THREE.Mesh;
    ['Box531_Material_#21_0']: THREE.Mesh;
    ['Box532_Material_#21_0']: THREE.Mesh;
    ['Box533_Material_#21_0']: THREE.Mesh;
    ['Box534_Material_#21_0']: THREE.Mesh;
    ['Box535_Material_#21_0']: THREE.Mesh;
    ['Box536_Material_#21_0']: THREE.Mesh;
    ['Line180_Material_#21_0']: THREE.Mesh;
    ['Line181_Material_#21_0']: THREE.Mesh;
    ['Line182_Material_#21_0']: THREE.Mesh;
    ['Line142_Material_#6_0']: THREE.Mesh;
    ['Line143_Material_#6_0']: THREE.Mesh;
    Line146_glass_0: THREE.Mesh;
    Line147_glass_0: THREE.Mesh;
    Line148_glass_0: THREE.Mesh;
    Line149_glass_0: THREE.Mesh;
    Line150_glass_0: THREE.Mesh;
    Line151_glass_0: THREE.Mesh;
    Line152_glass_0: THREE.Mesh;
    Line153_glass_0: THREE.Mesh;
    Line154_glass_0: THREE.Mesh;
    Line155_glass_0: THREE.Mesh;
    Line156_glass_0: THREE.Mesh;
    Line157_glass_0: THREE.Mesh;
    Line158_glass_0: THREE.Mesh;
    Line159_glass_0: THREE.Mesh;
    Line160_glass_0: THREE.Mesh;
    Line161_glass_0: THREE.Mesh;
    Line162_glass_0: THREE.Mesh;
    Line163_glass_0: THREE.Mesh;
    Line164_glass_0: THREE.Mesh;
    Line165_glass_0: THREE.Mesh;
    Line166_glass_0: THREE.Mesh;
    Line167_glass_0: THREE.Mesh;
    Line168_glass_0: THREE.Mesh;
    Line169_glass_0: THREE.Mesh;
    Line170_glass_0: THREE.Mesh;
    Line171_glass_0: THREE.Mesh;
    Line172_glass_0: THREE.Mesh;
    Line173_glass_0: THREE.Mesh;
    ['Line175_Material_#11_0']: THREE.Mesh;
    ['Line176_Material_#11_0']: THREE.Mesh;
    ['Line184_Material_#6_0']: THREE.Mesh;
    Rectangle037_rail_0: THREE.Mesh;
    Rectangle038_rail_0: THREE.Mesh;
    Rectangle039_rail_0: THREE.Mesh;
    Rectangle040_rail_0: THREE.Mesh;
    Rectangle041_rail_0: THREE.Mesh;
    Rectangle042_rail_0: THREE.Mesh;
    Rectangle043_rail_0: THREE.Mesh;
    Rectangle044_rail_0: THREE.Mesh;
    Rectangle045_rail_0: THREE.Mesh;
    Rectangle046_rail_0: THREE.Mesh;
    Rectangle047_rail_0: THREE.Mesh;
    Rectangle048_rail_0: THREE.Mesh;
    Shape087_rail_0: THREE.Mesh;
    Shape088_rail_0: THREE.Mesh;
    Shape089_rail_0: THREE.Mesh;
    Shape090_rail_0: THREE.Mesh;
    Shape091_rail_0: THREE.Mesh;
    Shape092_rail_0: THREE.Mesh;
    Shape093_rail_0: THREE.Mesh;
    Shape094_rail_0: THREE.Mesh;
    Shape095_rail_0: THREE.Mesh;
    Shape096_rail_0: THREE.Mesh;
    Shape097_rail_0: THREE.Mesh;
    Shape098_rail_0: THREE.Mesh;
    Shape107_rail_0: THREE.Mesh;
    Shape108_rail_0: THREE.Mesh;
    Shape109_rail_0: THREE.Mesh;
    Shape110_rail_0: THREE.Mesh;
    ['Box537_Material_#25_0']: THREE.Mesh;
    ['Box538_Material_#25_0']: THREE.Mesh;
    ['Box539_Material_#25_0']: THREE.Mesh;
    ['Box540_Material_#25_0']: THREE.Mesh;
    ['Box541_Material_#25_0']: THREE.Mesh;
    ['Box542_Material_#25_0']: THREE.Mesh;
    ['Box543_Material_#25_0']: THREE.Mesh;
    ['Box544_Material_#25_0']: THREE.Mesh;
    ['Box545_Material_#25_0']: THREE.Mesh;
    ['Box546_Material_#25_0']: THREE.Mesh;
    ['Box547_Material_#25_0']: THREE.Mesh;
    ['Box548_Material_#25_0']: THREE.Mesh;
    ['Box549_Material_#21_0']: THREE.Mesh;
    ['Box550_Material_#21_0']: THREE.Mesh;
    ['Box551_Material_#21_0']: THREE.Mesh;
    ['Box552_Material_#21_0']: THREE.Mesh;
    ['Box553_Material_#21_0']: THREE.Mesh;
    ['Box554_Material_#21_0']: THREE.Mesh;
    ['Box555_Material_#21_0']: THREE.Mesh;
    ['Box556_Material_#21_0']: THREE.Mesh;
    ['Box557_Material_#21_0']: THREE.Mesh;
    ['Box558_Material_#21_0']: THREE.Mesh;
    ['Line222_Material_#21_0']: THREE.Mesh;
    ['Line223_Material_#21_0']: THREE.Mesh;
    ['Line224_Material_#21_0']: THREE.Mesh;
    ['Box559_Material_#21_0']: THREE.Mesh;
    ['Box560_Material_#21_0']: THREE.Mesh;
    ['Box561_Material_#21_0']: THREE.Mesh;
    ['Box562_Material_#21_0']: THREE.Mesh;
    ['Box563_Material_#21_0']: THREE.Mesh;
    ['Box564_Material_#21_0']: THREE.Mesh;
    ['Box565_Material_#21_0']: THREE.Mesh;
    ['Box566_Material_#21_0']: THREE.Mesh;
    ['Box567_Material_#21_0']: THREE.Mesh;
    ['Box568_Material_#21_0']: THREE.Mesh;
    ['Line225_Material_#21_0']: THREE.Mesh;
    ['Line226_Material_#21_0']: THREE.Mesh;
    ['Line227_Material_#21_0']: THREE.Mesh;
    ['Line187_Material_#6_0']: THREE.Mesh;
    ['Line188_Material_#6_0']: THREE.Mesh;
    Line191_glass_0: THREE.Mesh;
    Line192_glass_0: THREE.Mesh;
    Line193_glass_0: THREE.Mesh;
    Line194_glass_0: THREE.Mesh;
    Line195_glass_0: THREE.Mesh;
    Line196_glass_0: THREE.Mesh;
    Line197_glass_0: THREE.Mesh;
    Line198_glass_0: THREE.Mesh;
    Line199_glass_0: THREE.Mesh;
    Line200_glass_0: THREE.Mesh;
    Line201_glass_0: THREE.Mesh;
    Line202_glass_0: THREE.Mesh;
    Line203_glass_0: THREE.Mesh;
    Line204_glass_0: THREE.Mesh;
    Line205_glass_0: THREE.Mesh;
    Line206_glass_0: THREE.Mesh;
    Line207_glass_0: THREE.Mesh;
    Line208_glass_0: THREE.Mesh;
    Line209_glass_0: THREE.Mesh;
    Line210_glass_0: THREE.Mesh;
    Line211_glass_0: THREE.Mesh;
    Line212_glass_0: THREE.Mesh;
    Line213_glass_0: THREE.Mesh;
    Line214_glass_0: THREE.Mesh;
    Line215_glass_0: THREE.Mesh;
    Line216_glass_0: THREE.Mesh;
    Line217_glass_0: THREE.Mesh;
    Line218_glass_0: THREE.Mesh;
    ['Line220_Material_#11_0']: THREE.Mesh;
    ['Line221_Material_#11_0']: THREE.Mesh;
    ['Line229_Material_#6_0']: THREE.Mesh;
    Rectangle049_rail_0: THREE.Mesh;
    Rectangle050_rail_0: THREE.Mesh;
    Rectangle051_rail_0: THREE.Mesh;
    Rectangle052_rail_0: THREE.Mesh;
    Rectangle053_rail_0: THREE.Mesh;
    Rectangle054_rail_0: THREE.Mesh;
    Rectangle055_rail_0: THREE.Mesh;
    Rectangle056_rail_0: THREE.Mesh;
    Rectangle057_rail_0: THREE.Mesh;
    Rectangle058_rail_0: THREE.Mesh;
    Rectangle059_rail_0: THREE.Mesh;
    Rectangle060_rail_0: THREE.Mesh;
    Shape111_rail_0: THREE.Mesh;
    Shape112_rail_0: THREE.Mesh;
    Shape113_rail_0: THREE.Mesh;
    Shape114_rail_0: THREE.Mesh;
    Shape115_rail_0: THREE.Mesh;
    Shape116_rail_0: THREE.Mesh;
    Shape117_rail_0: THREE.Mesh;
    Shape118_rail_0: THREE.Mesh;
    Shape119_rail_0: THREE.Mesh;
    Shape120_rail_0: THREE.Mesh;
    Shape121_rail_0: THREE.Mesh;
    Shape122_rail_0: THREE.Mesh;
    Shape131_rail_0: THREE.Mesh;
    Shape132_rail_0: THREE.Mesh;
    Shape133_rail_0: THREE.Mesh;
    Shape134_rail_0: THREE.Mesh;
    ['Box569_Material_#25_0']: THREE.Mesh;
    ['Box570_Material_#25_0']: THREE.Mesh;
    ['Box571_Material_#25_0']: THREE.Mesh;
    ['Box572_Material_#25_0']: THREE.Mesh;
    ['Box573_Material_#25_0']: THREE.Mesh;
    ['Box574_Material_#25_0']: THREE.Mesh;
    ['Box575_Material_#25_0']: THREE.Mesh;
    ['Box576_Material_#25_0']: THREE.Mesh;
    ['Box577_Material_#25_0']: THREE.Mesh;
    ['Box578_Material_#25_0']: THREE.Mesh;
    ['Box579_Material_#25_0']: THREE.Mesh;
    ['Box580_Material_#25_0']: THREE.Mesh;
    ['Box581_Material_#21_0']: THREE.Mesh;
    ['Box582_Material_#21_0']: THREE.Mesh;
    ['Box583_Material_#21_0']: THREE.Mesh;
    ['Box584_Material_#21_0']: THREE.Mesh;
    ['Box585_Material_#21_0']: THREE.Mesh;
    ['Box586_Material_#21_0']: THREE.Mesh;
    ['Box587_Material_#21_0']: THREE.Mesh;
    ['Box588_Material_#21_0']: THREE.Mesh;
    ['Box589_Material_#21_0']: THREE.Mesh;
    ['Box590_Material_#21_0']: THREE.Mesh;
    ['Line267_Material_#21_0']: THREE.Mesh;
    ['Line268_Material_#21_0']: THREE.Mesh;
    ['Line269_Material_#21_0']: THREE.Mesh;
    ['Box591_Material_#21_0']: THREE.Mesh;
    ['Box592_Material_#21_0']: THREE.Mesh;
    ['Box593_Material_#21_0']: THREE.Mesh;
    ['Box594_Material_#21_0']: THREE.Mesh;
    ['Box595_Material_#21_0']: THREE.Mesh;
    ['Box596_Material_#21_0']: THREE.Mesh;
    ['Box597_Material_#21_0']: THREE.Mesh;
    ['Box598_Material_#21_0']: THREE.Mesh;
    ['Box599_Material_#21_0']: THREE.Mesh;
    ['Box600_Material_#21_0']: THREE.Mesh;
    ['Line270_Material_#21_0']: THREE.Mesh;
    ['Line271_Material_#21_0']: THREE.Mesh;
    ['Line272_Material_#21_0']: THREE.Mesh;
    ['Line232_Material_#6_0']: THREE.Mesh;
    ['Line233_Material_#6_0']: THREE.Mesh;
    Line236_glass_0: THREE.Mesh;
    Line237_glass_0: THREE.Mesh;
    Line238_glass_0: THREE.Mesh;
    Line239_glass_0: THREE.Mesh;
    Line240_glass_0: THREE.Mesh;
    Line241_glass_0: THREE.Mesh;
    Line242_glass_0: THREE.Mesh;
    Line243_glass_0: THREE.Mesh;
    Line244_glass_0: THREE.Mesh;
    Line245_glass_0: THREE.Mesh;
    Line246_glass_0: THREE.Mesh;
    Line247_glass_0: THREE.Mesh;
    Line248_glass_0: THREE.Mesh;
    Line249_glass_0: THREE.Mesh;
    Line250_glass_0: THREE.Mesh;
    Line251_glass_0: THREE.Mesh;
    Line252_glass_0: THREE.Mesh;
    Line253_glass_0: THREE.Mesh;
    Line254_glass_0: THREE.Mesh;
    Line255_glass_0: THREE.Mesh;
    Line256_glass_0: THREE.Mesh;
    Line257_glass_0: THREE.Mesh;
    Line258_glass_0: THREE.Mesh;
    Line259_glass_0: THREE.Mesh;
    Line260_glass_0: THREE.Mesh;
    Line261_glass_0: THREE.Mesh;
    Line262_glass_0: THREE.Mesh;
    Line263_glass_0: THREE.Mesh;
    ['Line265_Material_#11_0']: THREE.Mesh;
    ['Line266_Material_#11_0']: THREE.Mesh;
    ['Line274_Material_#6_0']: THREE.Mesh;
    Rectangle061_rail_0: THREE.Mesh;
    Rectangle062_rail_0: THREE.Mesh;
    Rectangle063_rail_0: THREE.Mesh;
    Rectangle064_rail_0: THREE.Mesh;
    Rectangle065_rail_0: THREE.Mesh;
    Rectangle066_rail_0: THREE.Mesh;
    Rectangle067_rail_0: THREE.Mesh;
    Rectangle068_rail_0: THREE.Mesh;
    Rectangle069_rail_0: THREE.Mesh;
    Rectangle070_rail_0: THREE.Mesh;
    Rectangle071_rail_0: THREE.Mesh;
    Rectangle072_rail_0: THREE.Mesh;
    Shape135_rail_0: THREE.Mesh;
    Shape136_rail_0: THREE.Mesh;
    Shape137_rail_0: THREE.Mesh;
    Shape138_rail_0: THREE.Mesh;
    Shape139_rail_0: THREE.Mesh;
    Shape140_rail_0: THREE.Mesh;
    Shape141_rail_0: THREE.Mesh;
    Shape142_rail_0: THREE.Mesh;
    Shape143_rail_0: THREE.Mesh;
    Shape144_rail_0: THREE.Mesh;
    Shape145_rail_0: THREE.Mesh;
    Shape146_rail_0: THREE.Mesh;
    Shape155_rail_0: THREE.Mesh;
    Shape156_rail_0: THREE.Mesh;
    Shape157_rail_0: THREE.Mesh;
    Shape158_rail_0: THREE.Mesh;
    ['Box601_Material_#25_0']: THREE.Mesh;
    ['Box602_Material_#25_0']: THREE.Mesh;
    ['Box603_Material_#25_0']: THREE.Mesh;
    ['Box604_Material_#25_0']: THREE.Mesh;
    ['Box605_Material_#25_0']: THREE.Mesh;
    ['Box606_Material_#25_0']: THREE.Mesh;
    ['Box607_Material_#25_0']: THREE.Mesh;
    ['Box608_Material_#25_0']: THREE.Mesh;
    ['Box609_Material_#25_0']: THREE.Mesh;
    ['Box610_Material_#25_0']: THREE.Mesh;
    ['Box611_Material_#25_0']: THREE.Mesh;
    ['Box612_Material_#25_0']: THREE.Mesh;
    ['Box613_Material_#21_0']: THREE.Mesh;
    ['Box614_Material_#21_0']: THREE.Mesh;
    ['Box615_Material_#21_0']: THREE.Mesh;
    ['Box616_Material_#21_0']: THREE.Mesh;
    ['Box617_Material_#21_0']: THREE.Mesh;
    ['Box618_Material_#21_0']: THREE.Mesh;
    ['Box619_Material_#21_0']: THREE.Mesh;
    ['Box620_Material_#21_0']: THREE.Mesh;
    ['Box621_Material_#21_0']: THREE.Mesh;
    ['Box622_Material_#21_0']: THREE.Mesh;
    ['Line312_Material_#21_0']: THREE.Mesh;
    ['Line313_Material_#21_0']: THREE.Mesh;
    ['Line314_Material_#21_0']: THREE.Mesh;
    ['Box623_Material_#21_0']: THREE.Mesh;
    ['Box624_Material_#21_0']: THREE.Mesh;
    ['Box625_Material_#21_0']: THREE.Mesh;
    ['Box626_Material_#21_0']: THREE.Mesh;
    ['Box627_Material_#21_0']: THREE.Mesh;
    ['Box628_Material_#21_0']: THREE.Mesh;
    ['Box629_Material_#21_0']: THREE.Mesh;
    ['Box630_Material_#21_0']: THREE.Mesh;
    ['Box631_Material_#21_0']: THREE.Mesh;
    ['Box632_Material_#21_0']: THREE.Mesh;
    ['Line315_Material_#21_0']: THREE.Mesh;
    ['Line316_Material_#21_0']: THREE.Mesh;
    ['Line317_Material_#21_0']: THREE.Mesh;
    ['Line277_Material_#6_0']: THREE.Mesh;
    ['Line278_Material_#6_0']: THREE.Mesh;
    Line281_glass_0: THREE.Mesh;
    Line282_glass_0: THREE.Mesh;
    Line283_glass_0: THREE.Mesh;
    Line284_glass_0: THREE.Mesh;
    Line285_glass_0: THREE.Mesh;
    Line286_glass_0: THREE.Mesh;
    Line287_glass_0: THREE.Mesh;
    Line288_glass_0: THREE.Mesh;
    Line289_glass_0: THREE.Mesh;
    Line290_glass_0: THREE.Mesh;
    Line291_glass_0: THREE.Mesh;
    Line292_glass_0: THREE.Mesh;
    Line293_glass_0: THREE.Mesh;
    Line294_glass_0: THREE.Mesh;
    Line295_glass_0: THREE.Mesh;
    Line296_glass_0: THREE.Mesh;
    Line297_glass_0: THREE.Mesh;
    Line298_glass_0: THREE.Mesh;
    Line299_glass_0: THREE.Mesh;
    Line300_glass_0: THREE.Mesh;
    Line301_glass_0: THREE.Mesh;
    Line302_glass_0: THREE.Mesh;
    Line303_glass_0: THREE.Mesh;
    Line304_glass_0: THREE.Mesh;
    Line305_glass_0: THREE.Mesh;
    Line306_glass_0: THREE.Mesh;
    Line307_glass_0: THREE.Mesh;
    Line308_glass_0: THREE.Mesh;
    ['Line310_Material_#11_0']: THREE.Mesh;
    ['Line311_Material_#11_0']: THREE.Mesh;
    ['Line319_Material_#6_0']: THREE.Mesh;
    Rectangle073_rail_0: THREE.Mesh;
    Rectangle074_rail_0: THREE.Mesh;
    Rectangle075_rail_0: THREE.Mesh;
    Rectangle076_rail_0: THREE.Mesh;
    Rectangle077_rail_0: THREE.Mesh;
    Rectangle078_rail_0: THREE.Mesh;
    Rectangle079_rail_0: THREE.Mesh;
    Rectangle080_rail_0: THREE.Mesh;
    Rectangle081_rail_0: THREE.Mesh;
    Rectangle082_rail_0: THREE.Mesh;
    Rectangle083_rail_0: THREE.Mesh;
    Rectangle084_rail_0: THREE.Mesh;
    Shape159_rail_0: THREE.Mesh;
    Shape160_rail_0: THREE.Mesh;
    Shape161_rail_0: THREE.Mesh;
    Shape162_rail_0: THREE.Mesh;
    Shape163_rail_0: THREE.Mesh;
    Shape164_rail_0: THREE.Mesh;
    Shape165_rail_0: THREE.Mesh;
    Shape166_rail_0: THREE.Mesh;
    Shape167_rail_0: THREE.Mesh;
    Shape168_rail_0: THREE.Mesh;
    Shape169_rail_0: THREE.Mesh;
    Shape170_rail_0: THREE.Mesh;
    Shape179_rail_0: THREE.Mesh;
    Shape180_rail_0: THREE.Mesh;
    Shape181_rail_0: THREE.Mesh;
    Shape182_rail_0: THREE.Mesh;
    ['Box633_Material_#25_0']: THREE.Mesh;
    ['Box634_Material_#25_0']: THREE.Mesh;
    ['Box635_Material_#25_0']: THREE.Mesh;
    ['Box636_Material_#25_0']: THREE.Mesh;
    ['Box637_Material_#25_0']: THREE.Mesh;
    ['Box638_Material_#25_0']: THREE.Mesh;
    ['Box639_Material_#25_0']: THREE.Mesh;
    ['Box640_Material_#25_0']: THREE.Mesh;
    ['Box641_Material_#25_0']: THREE.Mesh;
    ['Box642_Material_#25_0']: THREE.Mesh;
    ['Box643_Material_#25_0']: THREE.Mesh;
    ['Box644_Material_#25_0']: THREE.Mesh;
    ['Box645_Material_#21_0']: THREE.Mesh;
    ['Box646_Material_#21_0']: THREE.Mesh;
    ['Box647_Material_#21_0']: THREE.Mesh;
    ['Box648_Material_#21_0']: THREE.Mesh;
    ['Box649_Material_#21_0']: THREE.Mesh;
    ['Box650_Material_#21_0']: THREE.Mesh;
    ['Box651_Material_#21_0']: THREE.Mesh;
    ['Box652_Material_#21_0']: THREE.Mesh;
    ['Box653_Material_#21_0']: THREE.Mesh;
    ['Box654_Material_#21_0']: THREE.Mesh;
    ['Line357_Material_#21_0']: THREE.Mesh;
    ['Line358_Material_#21_0']: THREE.Mesh;
    ['Line359_Material_#21_0']: THREE.Mesh;
    ['Box655_Material_#21_0']: THREE.Mesh;
    ['Box656_Material_#21_0']: THREE.Mesh;
    ['Box657_Material_#21_0']: THREE.Mesh;
    ['Box658_Material_#21_0']: THREE.Mesh;
    ['Box659_Material_#21_0']: THREE.Mesh;
    ['Box660_Material_#21_0']: THREE.Mesh;
    ['Box661_Material_#21_0']: THREE.Mesh;
    ['Box662_Material_#21_0']: THREE.Mesh;
    ['Box663_Material_#21_0']: THREE.Mesh;
    ['Box664_Material_#21_0']: THREE.Mesh;
    ['Line360_Material_#21_0']: THREE.Mesh;
    ['Line361_Material_#21_0']: THREE.Mesh;
    ['Line362_Material_#21_0']: THREE.Mesh;
    ['Line322_Material_#6_0']: THREE.Mesh;
    ['Line323_Material_#6_0']: THREE.Mesh;
    Line326_glass_0: THREE.Mesh;
    Line327_glass_0: THREE.Mesh;
    Line328_glass_0: THREE.Mesh;
    Line329_glass_0: THREE.Mesh;
    Line330_glass_0: THREE.Mesh;
    Line331_glass_0: THREE.Mesh;
    Line332_glass_0: THREE.Mesh;
    Line333_glass_0: THREE.Mesh;
    Line334_glass_0: THREE.Mesh;
    Line335_glass_0: THREE.Mesh;
    Line336_glass_0: THREE.Mesh;
    Line337_glass_0: THREE.Mesh;
    Line338_glass_0: THREE.Mesh;
    Line339_glass_0: THREE.Mesh;
    Line340_glass_0: THREE.Mesh;
    Line341_glass_0: THREE.Mesh;
    Line342_glass_0: THREE.Mesh;
    Line343_glass_0: THREE.Mesh;
    Line344_glass_0: THREE.Mesh;
    Line345_glass_0: THREE.Mesh;
    Line346_glass_0: THREE.Mesh;
    Line347_glass_0: THREE.Mesh;
    Line348_glass_0: THREE.Mesh;
    Line349_glass_0: THREE.Mesh;
    Line350_glass_0: THREE.Mesh;
    Line351_glass_0: THREE.Mesh;
    Line352_glass_0: THREE.Mesh;
    Line353_glass_0: THREE.Mesh;
    ['Line355_Material_#11_0']: THREE.Mesh;
    ['Line356_Material_#11_0']: THREE.Mesh;
    ['Line364_Material_#6_0']: THREE.Mesh;
    Rectangle085_rail_0: THREE.Mesh;
    Rectangle086_rail_0: THREE.Mesh;
    Rectangle087_rail_0: THREE.Mesh;
    Rectangle088_rail_0: THREE.Mesh;
    Rectangle089_rail_0: THREE.Mesh;
    Rectangle090_rail_0: THREE.Mesh;
    Rectangle091_rail_0: THREE.Mesh;
    Rectangle092_rail_0: THREE.Mesh;
    Rectangle093_rail_0: THREE.Mesh;
    Rectangle094_rail_0: THREE.Mesh;
    Rectangle095_rail_0: THREE.Mesh;
    Rectangle096_rail_0: THREE.Mesh;
    Shape183_rail_0: THREE.Mesh;
    Shape184_rail_0: THREE.Mesh;
    Shape185_rail_0: THREE.Mesh;
    Shape186_rail_0: THREE.Mesh;
    Shape187_rail_0: THREE.Mesh;
    Shape188_rail_0: THREE.Mesh;
    Shape189_rail_0: THREE.Mesh;
    Shape190_rail_0: THREE.Mesh;
    Shape191_rail_0: THREE.Mesh;
    Shape192_rail_0: THREE.Mesh;
    Shape193_rail_0: THREE.Mesh;
    Shape194_rail_0: THREE.Mesh;
    Shape203_rail_0: THREE.Mesh;
    Shape204_rail_0: THREE.Mesh;
    Shape205_rail_0: THREE.Mesh;
    Shape206_rail_0: THREE.Mesh;
    ['Box665_Material_#25_0']: THREE.Mesh;
    ['Box666_Material_#25_0']: THREE.Mesh;
    ['Box667_Material_#25_0']: THREE.Mesh;
    ['Box668_Material_#25_0']: THREE.Mesh;
    ['Box669_Material_#25_0']: THREE.Mesh;
    ['Box670_Material_#25_0']: THREE.Mesh;
    ['Box671_Material_#25_0']: THREE.Mesh;
    ['Box672_Material_#25_0']: THREE.Mesh;
    ['Box673_Material_#25_0']: THREE.Mesh;
    ['Box674_Material_#25_0']: THREE.Mesh;
    ['Box675_Material_#25_0']: THREE.Mesh;
    ['Box676_Material_#25_0']: THREE.Mesh;
    ['Box677_Material_#21_0']: THREE.Mesh;
    ['Box678_Material_#21_0']: THREE.Mesh;
    ['Box679_Material_#21_0']: THREE.Mesh;
    ['Box680_Material_#21_0']: THREE.Mesh;
    ['Box681_Material_#21_0']: THREE.Mesh;
    ['Box682_Material_#21_0']: THREE.Mesh;
    ['Box683_Material_#21_0']: THREE.Mesh;
    ['Box684_Material_#21_0']: THREE.Mesh;
    ['Box685_Material_#21_0']: THREE.Mesh;
    ['Box686_Material_#21_0']: THREE.Mesh;
    ['Line402_Material_#21_0']: THREE.Mesh;
    ['Line403_Material_#21_0']: THREE.Mesh;
    ['Line404_Material_#21_0']: THREE.Mesh;
    ['Box687_Material_#21_0']: THREE.Mesh;
    ['Box688_Material_#21_0']: THREE.Mesh;
    ['Box689_Material_#21_0']: THREE.Mesh;
    ['Box690_Material_#21_0']: THREE.Mesh;
    ['Box691_Material_#21_0']: THREE.Mesh;
    ['Box692_Material_#21_0']: THREE.Mesh;
    ['Box693_Material_#21_0']: THREE.Mesh;
    ['Box694_Material_#21_0']: THREE.Mesh;
    ['Box695_Material_#21_0']: THREE.Mesh;
    ['Box696_Material_#21_0']: THREE.Mesh;
    ['Line405_Material_#21_0']: THREE.Mesh;
    ['Line406_Material_#21_0']: THREE.Mesh;
    ['Line407_Material_#21_0']: THREE.Mesh;
    ['Line367_Material_#6_0']: THREE.Mesh;
    ['Line368_Material_#6_0']: THREE.Mesh;
    Line371_glass_0: THREE.Mesh;
    Line372_glass_0: THREE.Mesh;
    Line373_glass_0: THREE.Mesh;
    Line374_glass_0: THREE.Mesh;
    Line375_glass_0: THREE.Mesh;
    Line376_glass_0: THREE.Mesh;
    Line377_glass_0: THREE.Mesh;
    Line378_glass_0: THREE.Mesh;
    Line379_glass_0: THREE.Mesh;
    Line380_glass_0: THREE.Mesh;
    Line381_glass_0: THREE.Mesh;
    Line382_glass_0: THREE.Mesh;
    Line383_glass_0: THREE.Mesh;
    Line384_glass_0: THREE.Mesh;
    Line385_glass_0: THREE.Mesh;
    Line386_glass_0: THREE.Mesh;
    Line387_glass_0: THREE.Mesh;
    Line388_glass_0: THREE.Mesh;
    Line389_glass_0: THREE.Mesh;
    Line390_glass_0: THREE.Mesh;
    Line391_glass_0: THREE.Mesh;
    Line392_glass_0: THREE.Mesh;
    Line393_glass_0: THREE.Mesh;
    Line394_glass_0: THREE.Mesh;
    Line395_glass_0: THREE.Mesh;
    Line396_glass_0: THREE.Mesh;
    Line397_glass_0: THREE.Mesh;
    Line398_glass_0: THREE.Mesh;
    ['Line400_Material_#11_0']: THREE.Mesh;
    ['Line401_Material_#11_0']: THREE.Mesh;
    ['Line409_Material_#6_0']: THREE.Mesh;
    Rectangle097_rail_0: THREE.Mesh;
    Rectangle098_rail_0: THREE.Mesh;
    Rectangle099_rail_0: THREE.Mesh;
    Rectangle100_rail_0: THREE.Mesh;
    Rectangle101_rail_0: THREE.Mesh;
    Rectangle102_rail_0: THREE.Mesh;
    Rectangle103_rail_0: THREE.Mesh;
    Rectangle104_rail_0: THREE.Mesh;
    Rectangle105_rail_0: THREE.Mesh;
    Rectangle106_rail_0: THREE.Mesh;
    Rectangle107_rail_0: THREE.Mesh;
    Rectangle108_rail_0: THREE.Mesh;
    Shape207_rail_0: THREE.Mesh;
    Shape208_rail_0: THREE.Mesh;
    Shape209_rail_0: THREE.Mesh;
    Shape210_rail_0: THREE.Mesh;
    Shape211_rail_0: THREE.Mesh;
    Shape212_rail_0: THREE.Mesh;
    Shape213_rail_0: THREE.Mesh;
    Shape214_rail_0: THREE.Mesh;
    Shape215_rail_0: THREE.Mesh;
    Shape216_rail_0: THREE.Mesh;
    Shape217_rail_0: THREE.Mesh;
    Shape218_rail_0: THREE.Mesh;
    Shape227_rail_0: THREE.Mesh;
    Shape228_rail_0: THREE.Mesh;
    Shape229_rail_0: THREE.Mesh;
    Shape230_rail_0: THREE.Mesh;
    ['Line410_Material_#25_0']: THREE.Mesh;
    Line414_wall_0: THREE.Mesh;
    Line415_wall_0: THREE.Mesh;
    Box709_rail_0: THREE.Mesh;
    Box710_rail_0: THREE.Mesh;
    Box711_rail_0: THREE.Mesh;
    Box712_rail_0: THREE.Mesh;
    Box713_rail_0: THREE.Mesh;
    Box714_rail_0: THREE.Mesh;
    Box715_rail_0: THREE.Mesh;
    Box716_rail_0: THREE.Mesh;
    ['Box717_Material_#21_0']: THREE.Mesh;
    Box718_rail_0: THREE.Mesh;
    ['Line447_Material_#21_0']: THREE.Mesh;
    ['Line448_Material_#21_0']: THREE.Mesh;
    ['Line449_Material_#21_0']: THREE.Mesh;
    Box719_rail_0: THREE.Mesh;
    Box720_rail_0: THREE.Mesh;
    Box721_rail_0: THREE.Mesh;
    Box722_rail_0: THREE.Mesh;
    Box723_rail_0: THREE.Mesh;
    Box724_rail_0: THREE.Mesh;
    Box725_rail_0: THREE.Mesh;
    Box726_rail_0: THREE.Mesh;
    Box727_rail_0: THREE.Mesh;
    Box728_rail_0: THREE.Mesh;
    ['Line450_Material_#21_0']: THREE.Mesh;
    ['Line451_Material_#21_0']: THREE.Mesh;
    ['Line452_Material_#21_0']: THREE.Mesh;
    ['Box700_Material_#25_0']: THREE.Mesh;
    Shape234_rail_0: THREE.Mesh;
    Line419_glass_0: THREE.Mesh;
    ['Line001_Material_#25_0']: THREE.Mesh;
    Line006_wall_0: THREE.Mesh;
    Line005_wall_0: THREE.Mesh;
    ['Line050_Material_#25_0']: THREE.Mesh;
    Line054_wall_0: THREE.Mesh;
    Line055_wall_0: THREE.Mesh;
    ['Line095_Material_#25_0']: THREE.Mesh;
    Line099_wall_0: THREE.Mesh;
    Line100_wall_0: THREE.Mesh;
    ['Line140_Material_#25_0']: THREE.Mesh;
    Line144_wall_0: THREE.Mesh;
    Line145_wall_0: THREE.Mesh;
    ['Line185_Material_#25_0']: THREE.Mesh;
    Line189_wall_0: THREE.Mesh;
    Line190_wall_0: THREE.Mesh;
    ['Line230_Material_#25_0']: THREE.Mesh;
    Line234_wall_0: THREE.Mesh;
    Line235_wall_0: THREE.Mesh;
    ['Line275_Material_#25_0']: THREE.Mesh;
    Line279_wall_0: THREE.Mesh;
    Line280_wall_0: THREE.Mesh;
    ['Line320_Material_#25_0']: THREE.Mesh;
    Line324_wall_0: THREE.Mesh;
    Line325_wall_0: THREE.Mesh;
    ['Line365_Material_#25_0']: THREE.Mesh;
    Line369_wall_0: THREE.Mesh;
    Line370_wall_0: THREE.Mesh;
    ['Line464_Material_#8_0']: THREE.Mesh;
    ['Shape255_Material_#9_0']: THREE.Mesh;
    ['Shape256_Material_#10_0']: THREE.Mesh;
    ['Box729_Material_#12_0']: THREE.Mesh;
    ['Line465_Material_#13_0']: THREE.Mesh;
    Line466_glass_0: THREE.Mesh;
    Rectangle121_rail_0: THREE.Mesh;
    Rectangle122_rail_0: THREE.Mesh;
    Rectangle123_rail_0: THREE.Mesh;
    Line467_glass_0: THREE.Mesh;
    Rectangle124_rail_0: THREE.Mesh;
    Rectangle125_rail_0: THREE.Mesh;
    Rectangle126_rail_0: THREE.Mesh;
    Line468_glass_0: THREE.Mesh;
    Rectangle127_rail_0: THREE.Mesh;
    Rectangle128_rail_0: THREE.Mesh;
    Rectangle129_rail_0: THREE.Mesh;
    Line469_glass_0: THREE.Mesh;
    Rectangle130_rail_0: THREE.Mesh;
    Rectangle131_rail_0: THREE.Mesh;
    Rectangle132_rail_0: THREE.Mesh;
    ['Line470_Material_#17_0']: THREE.Mesh;
    Line471_glass_0: THREE.Mesh;
    Shape257_rail_0: THREE.Mesh;
    Line472_glass_0: THREE.Mesh;
    Shape258_rail_0: THREE.Mesh;
    Line473_glass_0: THREE.Mesh;
    Shape259_rail_0: THREE.Mesh;
    ['Line474_Material_#11_0']: THREE.Mesh;
    ['Box730_Material_#15_0']: THREE.Mesh;
    ['Box731_Material_#15_0']: THREE.Mesh;
    ['Box732_Material_#15_0']: THREE.Mesh;
    ['Box733_Material_#15_0']: THREE.Mesh;
    ['Box734_Material_#15_0']: THREE.Mesh;
    ['Shape260_Material_#18_0']: THREE.Mesh;
    ['Shape261_Material_#18_0']: THREE.Mesh;
    ['Shape262_Material_#18_0']: THREE.Mesh;
    ['Shape263_Material_#18_0']: THREE.Mesh;
    ['Shape264_Material_#18_0']: THREE.Mesh;
    ['Shape265_Material_#18_0']: THREE.Mesh;
    ['Shape266_Material_#18_0']: THREE.Mesh;
    ['Shape267_Material_#18_0']: THREE.Mesh;
    ['Shape268_Material_#18_0']: THREE.Mesh;
    ['Line475_Material_#19_0']: THREE.Mesh;
    Line476_floor_0: THREE.Mesh;
    Line477_floor_0: THREE.Mesh;
    Line478_floor_0: THREE.Mesh;
    Line479_floor_0: THREE.Mesh;
    Line480_floor_0: THREE.Mesh;
    Line481_floor_0: THREE.Mesh;
    Line482_floor_0: THREE.Mesh;
    Line483_floor_0: THREE.Mesh;
    ['Box735_Material_#20_0']: THREE.Mesh;
    ['Box736_Material_#20_0']: THREE.Mesh;
    ['Box737_Material_#20_0']: THREE.Mesh;
    ['Box738_Material_#20_0']: THREE.Mesh;
  };
  materials: {
    glass: THREE.MeshStandardMaterial;
    rail: THREE.MeshStandardMaterial;
    floor: THREE.MeshStandardMaterial;
    Material_25: THREE.MeshStandardMaterial;
    Material_6: THREE.MeshStandardMaterial;
    Material_11: THREE.MeshStandardMaterial;
    Material_16: THREE.MeshStandardMaterial;
    frame: THREE.MeshStandardMaterial;
    Material_21: THREE.MeshStandardMaterial;
    wall: THREE.MeshStandardMaterial;
    Material_8: THREE.MeshStandardMaterial;
    Material_9: THREE.MeshStandardMaterial;
    Material_10: THREE.MeshStandardMaterial;
    Material_12: THREE.MeshStandardMaterial;
    Material_13: THREE.MeshStandardMaterial;
    Material_17: THREE.MeshStandardMaterial;
    Material_15: THREE.MeshStandardMaterial;
    Material_18: THREE.MeshStandardMaterial;
    Material_19: THREE.MeshStandardMaterial;
    Material_20: THREE.MeshStandardMaterial;
  };
};

export default function Building5(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('@assets/buildingModel/Building5.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={[0.2, 0.2, 0.2]} position={[-4, -10, 0]}>
      <group scale={0.01}>
        <group position={[-2618.015, 119.497, 162.523]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box135_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box136_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box137_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box138_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box139_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box140_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box141_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box142_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box143_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box144_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line044_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line045_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line046_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.11, 7.919]}
          />
        </group>
        <group position={[-5293.636, 119.497, 162.523]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box134_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line040_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line042_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line043_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box133_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box132_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box131_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box130_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box129_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box127_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box128_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box126_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box125_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
        </group>
        <group position={[-5293.636, 441.042, 162.523]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box453_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box454_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box455_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box456_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box457_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box458_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box459_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box460_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box461_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box462_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line087_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line088_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line089_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-2618.015, 441.042, 162.523]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box463_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box464_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box465_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box466_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box467_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box468_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box469_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box470_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box471_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box472_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line090_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line091_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line092_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-5293.636, 762.588, 162.523]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box485_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box486_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box487_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box488_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box489_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box490_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box491_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box492_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box493_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box494_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line132_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line133_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line134_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-2618.015, 762.588, 162.523]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box495_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box496_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box497_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box498_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box499_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box500_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box501_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box502_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box503_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box504_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line135_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line136_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line137_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.11, 7.919]}
          />
        </group>
        <group position={[-5293.636, 1084.133, 162.523]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box517_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box518_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box519_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box520_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box521_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box522_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box523_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box524_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box525_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box526_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line177_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line178_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line179_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-2618.015, 1084.133, 162.523]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box527_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box528_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box529_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box530_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box531_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box532_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box533_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box534_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box535_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box536_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line180_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line181_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line182_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-5293.636, 1405.679, 162.523]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box549_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box550_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box551_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box552_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box553_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box554_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box555_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box556_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box557_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box558_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line222_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line223_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line224_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-2618.015, 1405.679, 162.523]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box559_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box560_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box561_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box562_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box563_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box564_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box565_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box566_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box567_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box568_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line225_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line226_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line227_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-5293.636, 1727.224, 162.523]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box581_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box582_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box583_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box584_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box585_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box586_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box587_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box588_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box589_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box590_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line267_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line268_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line269_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-2618.015, 1727.224, 162.523]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box591_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box592_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box593_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box594_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box595_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box596_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box597_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box598_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box599_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box600_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line270_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line271_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line272_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-5293.636, 2048.77, 162.523]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box613_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box614_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box615_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box616_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box617_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box618_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box619_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box620_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box621_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box622_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line312_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line313_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line314_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-2618.015, 2048.77, 162.523]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box623_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box624_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box625_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box626_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box627_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box628_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box629_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box630_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box631_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box632_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line315_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.502]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line316_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line317_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-5293.636, 2370.315, 162.523]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box645_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box646_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box647_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box648_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box649_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box650_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box651_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box652_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box653_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box654_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line357_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line358_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line359_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-2618.015, 2370.315, 162.523]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box655_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box656_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box657_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box658_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box659_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box660_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box661_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box662_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box663_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box664_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line360_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line361_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line362_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-5293.636, 2691.861, 162.523]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box677_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box678_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box679_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box680_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box681_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box682_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box683_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box684_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box685_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box686_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line402_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line403_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line404_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-2618.015, 2691.861, 162.523]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box687_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[44.632, 477.466, -9.708]}
            rotation={[0, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box688_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[6.575, 360.854, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box689_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-41.241, 161.349, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box690_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-19.774, 263.749, -9.708]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box691_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-58.939, 41.182, -9.708]}
            rotation={[0, 0, -0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box692_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-69.983, -78.888, -9.708]}
            rotation={[0, 0, -0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box693_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-73.253, -199.006, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box694_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-71.32, -317.917, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box695_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-53.683, -478.137, -9.708]}
            rotation={[0, 0, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box696_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[57.696, -478.137, -9.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line405_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, -1.503]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line406_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 3.208]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line407_Material_#21_0'].geometry}
            material={materials.Material_21}
            position={[-25.821, -50.109, 7.919]}
          />
        </group>
        <group position={[-3956.56, 3280.935, 388.459]} rotation={[-Math.PI / 2, 0, 0]} scale={1.048}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape256_Material_#10_0'].geometry}
            material={materials.Material_10}
            position={[0, 71.404, -3242.78]}
          />
        </group>
        <group position={[-2372.305, -155.583, 394.505]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape257_rail_0.geometry}
            material={materials.rail}
            position={[-1337.169, 618.444, -275.823]}
          />
        </group>
        <group position={[-3059.576, -155.583, 665.831]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape258_rail_0.geometry}
            material={materials.rail}
            position={[-1337.169, 618.444, -275.823]}
          />
        </group>
        <group position={[-3090.229, -155.583, -820.512]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape259_rail_0.geometry}
            material={materials.rail}
            position={[-1337.169, 618.444, -275.823]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_glass_0.geometry}
          material={materials.glass}
          position={[-3956.56, 0.2, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box433_rail_0.geometry}
          material={materials.rail}
          position={[-3803.881, -13.295, 317.565]}
          rotation={[-Math.PI / 2, 0, -0.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box434_rail_0.geometry}
          material={materials.rail}
          position={[-3804.825, 0.205, 315.154]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box435_rail_0.geometry}
          material={materials.rail}
          position={[-3820.409, -13.295, 382.464]}
          rotation={[-Math.PI / 2, 0, -0.481]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box436_rail_0.geometry}
          material={materials.rail}
          position={[-3869.478, -13.295, 439.4]}
          rotation={[-Math.PI / 2, 0, -0.962]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box437_rail_0.geometry}
          material={materials.rail}
          position={[-3961.373, -13.295, 466.741]}
          rotation={[-Math.PI / 2, 0, -1.614]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box438_rail_0.geometry}
          material={materials.rail}
          position={[-4109.907, -13.295, 317.523]}
          rotation={[-Math.PI / 2, 0, 0.025]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box439_rail_0.geometry}
          material={materials.rail}
          position={[-4093.34, -13.295, 382.405]}
          rotation={[-Math.PI / 2, 0, 0.481]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box440_rail_0.geometry}
          material={materials.rail}
          position={[-4043.536, -13.295, 439.708]}
          rotation={[-Math.PI / 2, 0, 0.962]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line455_floor_0.geometry}
          material={materials.floor}
          position={[-2854.141, 1580.015, 659.644]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line456_floor_0.geometry}
          material={materials.floor}
          position={[-3489.802, 1580.015, 659.644]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line457_floor_0.geometry}
          material={materials.floor}
          position={[-4427.236, 1580.015, 659.644]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line458_floor_0.geometry}
          material={materials.floor}
          position={[-5062.699, 1580.015, 659.644]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line459_floor_0.geometry}
          material={materials.floor}
          position={[-2854.141, 1580.015, -692.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line460_floor_0.geometry}
          material={materials.floor}
          position={[-3489.802, 1580.015, -692.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line461_floor_0.geometry}
          material={materials.floor}
          position={[-4427.236, 1580.015, -692.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line462_floor_0.geometry}
          material={materials.floor}
          position={[-5062.699, 1580.015, -692.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box697_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 3018.175, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box698_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 3018.175, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box699_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 3018.175, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box701_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 3018.381, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box702_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 3018.381, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box703_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 3018.381, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box704_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 3018.381, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box705_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 3006.126, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box706_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 3006.483, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box707_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 3006.126, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box708_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 3006.483, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line412_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 2894.109, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line413_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 3212.863, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line416_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 3058.079, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line417_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 3058.079, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line418_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 3058.079, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line420_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 3058.079, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line421_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 3058.079, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line422_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 3058.079, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line423_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 3058.079, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line424_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 3043.112, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line425_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 3043.112, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line426_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 3043.112, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line427_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 3043.112, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line428_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 3058.079, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line429_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 3058.079, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line430_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 3058.079, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line431_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 3058.079, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line432_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 3058.079, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line433_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 3058.079, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line434_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 3058.079, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line435_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 3058.079, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line436_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 3043.112, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line437_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 3043.112, -234.826]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line438_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 3043.112, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line439_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 3043.112, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line440_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 3045.656, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line441_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 3045.656, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line442_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 3045.656, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line443_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 3045.656, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line445_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 2887.473, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line446_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, 2887.473, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line454_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 3211.2, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle109_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 3035.905, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle110_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 3044.444, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle111_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 3044.444, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle112_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 3035.905, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle113_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 3044.444, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle114_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 3044.444, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle115_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 3035.905, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle116_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 3044.444, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle117_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 3044.444, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle118_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 3035.905, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle119_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 3044.444, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle120_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 3044.444, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape231_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 2894.109, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape232_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 2894.109, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape233_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 2894.109, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape235_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 2894.109, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape236_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 2894.109, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape237_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 2894.109, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape238_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 2894.109, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape239_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 2879.143, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape240_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 2879.143, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape241_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 2879.143, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape242_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 2879.143, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape251_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 2881.687, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape252_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 2881.687, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape253_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 2881.687, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape254_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 2881.687, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line463_Material_#16_0'].geometry}
          material={materials.Material_16}
          position={[-3324.997, -348.855, -34.254]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_frame_0.geometry}
          material={materials.frame}
          position={[-4060.725, -334.763, 136.39]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box001_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 124.266, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box002_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 124.266, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box081_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 124.472, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box082_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 124.472, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box123_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 112.216, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box124_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 112.573, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line038_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, -6.437, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line008_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 164.169, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape002_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 0.2, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line020_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 164.169, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line019_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 164.169, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line007_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 164.169, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape001_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 0.2, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line017_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 149.203, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape011_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, -14.767, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line018_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 149.203, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape012_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, -14.767, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line029_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 149.203, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle007_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 141.995, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle008_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 150.534, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle009_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 150.534, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line030_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 149.203, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle010_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 141.995, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle011_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 150.534, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle012_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 150.534, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line011_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 164.169, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape005_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 0.2, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line023_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 164.169, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line024_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 164.169, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line012_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 164.169, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape006_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 0.2, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line031_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 151.746, 470.166]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape024_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, -12.223, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line033_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 151.746, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape022_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, -12.223, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line004_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 318.954, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line003_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 0.2, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line049_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 317.291, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line016_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 149.203, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box004_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 124.266, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box083_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 124.472, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box084_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 124.472, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box103_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 112.216, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box104_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 112.573, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line039_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, -6.437, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line010_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 164.169, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape004_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 0.2, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line022_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 164.169, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line021_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 164.169, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line015_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 149.203, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line034_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 151.746, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape025_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, -12.223, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line013_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 164.169, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape007_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 0.2, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line025_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 164.169, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line026_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 164.169, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line014_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 164.169, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape008_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 0.2, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape009_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, -14.767, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape010_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, -14.767, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line028_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 149.203, -234.827]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle004_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 141.995, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle005_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 150.534, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle006_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 150.534, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle001_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 141.995, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line027_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 149.203, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle002_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 150.534, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle003_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 150.534, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line009_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 164.169, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box003_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 124.266, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape003_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 0.2, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape023_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, -12.223, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line032_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 151.746, 470.166]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box441_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 445.811, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box442_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 445.811, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box443_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 445.811, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box444_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 445.811, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box445_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 446.018, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box446_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 446.018, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box447_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 446.018, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box448_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 446.018, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box449_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 433.762, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box450_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 434.119, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box451_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 433.762, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box452_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 434.119, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line052_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 321.746, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line053_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 640.499, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line056_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 485.715, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line057_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 485.715, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line058_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 485.715, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line059_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 485.715, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line060_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 485.715, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line061_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 485.715, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line062_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 485.715, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line063_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 485.715, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line064_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 470.748, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line065_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 470.748, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line066_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 470.748, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line067_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 470.748, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line068_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 485.715, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line069_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 485.715, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line070_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 485.715, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line071_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 485.715, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line072_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 485.715, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line073_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 485.715, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line074_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 485.715, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line075_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 485.715, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line076_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 470.748, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line077_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 470.748, -234.827]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line078_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 470.748, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line079_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 470.748, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line080_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 473.292, 470.166]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line081_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 473.292, 470.166]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line082_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 473.292, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line083_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 473.292, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line085_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 315.109, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line086_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, 315.109, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line094_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 638.837, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle013_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 463.541, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle014_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 472.08, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle015_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 472.08, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle016_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 463.541, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle017_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 472.08, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle018_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 472.08, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle019_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 463.541, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle020_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 472.08, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle021_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 472.08, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle022_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 463.541, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle023_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 472.08, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle024_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 472.08, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape039_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 321.746, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape040_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 321.746, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape041_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 321.746, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape042_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 321.746, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape043_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 321.746, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape044_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 321.746, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape045_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 321.746, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape046_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 321.746, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape047_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 306.779, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape048_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 306.779, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape049_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 306.779, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape050_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 306.779, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape059_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 309.323, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape060_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 309.323, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape061_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 309.323, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape062_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 309.323, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box473_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 767.357, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box474_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 767.357, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box475_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 767.357, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box476_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 767.357, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box477_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 767.563, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box478_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 767.563, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box479_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 767.563, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box480_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 767.563, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box481_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 755.308, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box482_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 755.664, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box483_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 755.308, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box484_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 755.664, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line097_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 643.291, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line098_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 962.045, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line101_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 807.26, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line102_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 807.26, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line103_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 807.26, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line104_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 807.26, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line105_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 807.26, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line106_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 807.26, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line107_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 807.26, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line108_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 807.26, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line109_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 792.294, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line110_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 792.294, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line111_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 792.294, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line112_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 792.294, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line113_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 807.26, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line114_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 807.26, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line115_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 807.26, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line116_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 807.26, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line117_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 807.26, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line118_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 807.26, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line119_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 807.26, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line120_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 807.26, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line121_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 792.294, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line122_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 792.294, -234.826]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line123_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 792.294, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line124_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 792.294, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line125_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 794.838, 470.166]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line126_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 794.838, 470.166]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line127_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 794.838, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line128_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 794.838, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line130_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 636.654, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line131_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, 636.654, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line139_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 960.382, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle025_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 785.086, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle026_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 793.625, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle027_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 793.625, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle028_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 785.086, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle029_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 793.625, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle030_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 793.625, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle031_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 785.086, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle032_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 793.625, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle033_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 793.625, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle034_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 785.086, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle035_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 793.625, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle036_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 793.625, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape063_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 643.291, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape064_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 643.291, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape065_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 643.291, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape066_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 643.291, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape067_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 643.291, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape068_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 643.291, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape069_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 643.291, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape070_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 643.291, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape071_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 628.324, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape072_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 628.324, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape073_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 628.324, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape074_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 628.324, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape083_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 630.868, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape084_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 630.868, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape085_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 630.868, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape086_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 630.868, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box505_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 1088.902, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box506_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 1088.902, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box507_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 1088.902, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box508_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 1088.902, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box509_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 1089.109, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box510_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 1089.109, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box511_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 1089.109, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box512_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 1089.109, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box513_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 1076.853, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box514_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 1077.21, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box515_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 1076.853, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box516_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 1077.21, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line142_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 964.837, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line143_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 1283.59, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line146_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 1128.806, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line147_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 1128.806, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line148_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 1128.806, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line149_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 1128.806, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line150_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 1128.806, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line151_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 1128.806, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line152_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 1128.806, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line153_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 1128.806, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line154_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 1113.839, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line155_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 1113.839, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line156_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 1113.839, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line157_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 1113.839, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line158_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 1128.806, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line159_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 1128.806, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line160_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 1128.806, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line161_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 1128.806, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line162_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 1128.806, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line163_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 1128.806, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line164_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 1128.806, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line165_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 1128.806, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line166_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 1113.839, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line167_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 1113.839, -234.826]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line168_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 1113.839, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line169_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 1113.839, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line170_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 1116.383, 470.166]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line171_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 1116.383, 470.166]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line172_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 1116.383, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line173_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 1116.383, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line175_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 958.2, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line176_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, 958.2, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line184_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 1281.928, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle037_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 1106.632, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle038_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 1115.171, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle039_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 1115.171, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle040_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 1106.632, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle041_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 1115.171, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle042_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 1115.171, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle043_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 1106.632, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle044_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 1115.171, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle045_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 1115.171, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle046_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 1106.632, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle047_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 1115.171, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle048_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 1115.171, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape087_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 964.837, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape088_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 964.837, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape089_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 964.837, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape090_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 964.837, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape091_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 964.837, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape092_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 964.837, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape093_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 964.837, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape094_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 964.837, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape095_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 949.87, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape096_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 949.87, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape097_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 949.87, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape098_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 949.87, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape107_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 952.414, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape108_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 952.414, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape109_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 952.414, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape110_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 952.414, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box537_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 1410.448, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box538_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 1410.448, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box539_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 1410.448, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box540_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 1410.448, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box541_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 1410.654, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box542_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 1410.654, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box543_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 1410.654, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box544_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 1410.654, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box545_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 1398.399, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box546_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 1398.756, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box547_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 1398.399, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box548_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 1398.756, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line187_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 1286.382, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line188_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 1605.136, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line191_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 1450.351, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line192_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 1450.351, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line193_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 1450.351, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line194_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 1450.351, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line195_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 1450.351, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line196_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 1450.351, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line197_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 1450.351, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line198_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 1450.351, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line199_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 1435.385, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line200_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 1435.385, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line201_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 1435.385, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line202_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 1435.385, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line203_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 1450.351, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line204_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 1450.351, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line205_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 1450.351, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line206_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 1450.351, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line207_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 1450.351, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line208_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 1450.351, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line209_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 1450.351, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line210_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 1450.351, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line211_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 1435.385, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line212_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 1435.385, -234.826]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line213_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 1435.385, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line214_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 1435.385, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line215_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 1437.929, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line216_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 1437.929, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line217_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 1437.929, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line218_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 1437.929, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line220_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 1279.746, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line221_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, 1279.746, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line229_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 1603.473, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle049_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 1428.177, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle050_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 1436.716, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle051_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 1436.716, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle052_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 1428.177, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle053_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 1436.716, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle054_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 1436.716, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle055_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 1428.177, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle056_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 1436.716, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle057_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 1436.716, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle058_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 1428.177, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle059_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 1436.716, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle060_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 1436.716, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape111_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 1286.382, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape112_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 1286.382, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape113_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 1286.382, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape114_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 1286.382, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape115_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 1286.382, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape116_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 1286.382, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape117_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 1286.382, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape118_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 1286.382, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape119_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 1271.416, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape120_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 1271.416, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape121_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 1271.416, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape122_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 1271.416, -1597.418]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape131_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 1273.959, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape132_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 1273.959, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape133_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 1273.959, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape134_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 1273.959, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box569_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 1731.993, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box570_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 1731.993, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box571_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 1731.993, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box572_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 1731.993, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box573_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 1732.2, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box574_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 1732.2, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box575_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 1732.2, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box576_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 1732.2, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box577_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 1719.944, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box578_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 1720.301, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box579_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 1719.944, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box580_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 1720.301, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line232_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 1607.928, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line233_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 1926.681, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line236_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 1771.897, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line237_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 1771.897, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line238_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 1771.897, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line239_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 1771.897, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line240_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 1771.897, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line241_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 1771.897, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line242_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 1771.897, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line243_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 1771.897, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line244_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 1756.93, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line245_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 1756.93, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line246_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 1756.93, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line247_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 1756.93, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line248_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 1771.897, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line249_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 1771.897, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line250_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 1771.897, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line251_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 1771.897, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line252_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 1771.897, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line253_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 1771.897, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line254_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 1771.897, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line255_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 1771.897, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line256_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 1756.93, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line257_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 1756.93, -234.826]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line258_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 1756.93, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line259_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 1756.93, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line260_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 1759.474, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line261_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 1759.474, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line262_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 1759.474, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line263_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 1759.474, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line265_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 1601.291, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line266_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, 1601.291, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line274_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 1925.019, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle061_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 1749.723, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle062_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 1758.262, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle063_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 1758.262, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle064_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 1749.723, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle065_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 1758.262, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle066_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 1758.262, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle067_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 1749.723, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle068_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 1758.262, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle069_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 1758.262, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle070_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 1749.723, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle071_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 1758.262, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle072_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 1758.262, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape135_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 1607.928, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape136_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 1607.928, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape137_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 1607.928, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape138_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 1607.928, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape139_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 1607.928, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape140_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 1607.928, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape141_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 1607.928, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape142_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 1607.928, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape143_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 1592.961, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape144_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 1592.961, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape145_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 1592.961, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape146_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 1592.961, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape155_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 1595.505, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape156_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 1595.505, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape157_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 1595.505, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape158_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 1595.505, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box601_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 2053.539, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box602_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 2053.539, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box603_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 2053.539, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box604_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 2053.539, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box605_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 2053.745, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box606_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 2053.745, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box607_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 2053.745, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box608_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 2053.745, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box609_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 2041.49, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box610_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 2041.846, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box611_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 2041.49, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box612_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 2041.846, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line277_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 1929.473, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line278_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 2248.227, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line281_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 2093.442, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line282_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 2093.442, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line283_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 2093.442, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line284_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 2093.442, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line285_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 2093.442, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line286_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 2093.442, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line287_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 2093.442, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line288_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 2093.442, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line289_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 2078.476, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line290_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 2078.476, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line291_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 2078.476, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line292_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 2078.476, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line293_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 2093.442, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line294_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 2093.442, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line295_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 2093.442, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line296_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 2093.442, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line297_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 2093.442, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line298_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 2093.442, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line299_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 2093.442, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line300_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 2093.442, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line301_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 2078.476, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line302_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 2078.476, -234.826]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line303_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 2078.476, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line304_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 2078.476, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line305_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 2081.02, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line306_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 2081.02, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line307_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 2081.02, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line308_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 2081.02, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line310_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 1922.837, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line311_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, 1922.837, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line319_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 2246.564, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle073_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 2071.268, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle074_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 2079.807, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle075_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 2079.807, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle076_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 2071.268, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle077_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 2079.807, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle078_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 2079.807, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle079_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 2071.268, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle080_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 2079.807, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle081_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 2079.807, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle082_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 2071.268, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle083_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 2079.807, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle084_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 2079.807, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape159_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 1929.473, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape160_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 1929.473, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape161_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 1929.473, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape162_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 1929.473, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape163_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 1929.473, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape164_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 1929.473, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape165_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 1929.473, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape166_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 1929.473, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape167_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 1914.506, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape168_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 1914.506, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape169_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 1914.506, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape170_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 1914.506, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape179_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 1917.05, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape180_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 1917.05, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape181_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 1917.05, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape182_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 1917.05, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box633_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 2375.084, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box634_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 2375.084, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box635_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 2375.084, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box636_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 2375.084, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box637_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 2375.291, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box638_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 2375.291, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box639_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 2375.291, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box640_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 2375.291, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box641_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 2363.035, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box642_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 2363.392, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box643_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 2363.035, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box644_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 2363.392, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line322_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 2251.019, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line323_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 2569.772, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line326_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 2414.988, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line327_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 2414.988, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line328_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 2414.988, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line329_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 2414.988, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line330_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 2414.988, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line331_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 2414.988, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line332_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 2414.988, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line333_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 2414.988, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line334_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 2400.021, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line335_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 2400.021, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line336_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 2400.021, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line337_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 2400.021, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line338_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 2414.988, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line339_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 2414.988, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line340_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 2414.988, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line341_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 2414.988, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line342_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 2414.988, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line343_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 2414.988, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line344_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 2414.988, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line345_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 2414.988, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line346_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 2400.021, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line347_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 2400.021, -234.826]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line348_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 2400.021, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line349_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 2400.021, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line350_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 2402.565, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line351_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 2402.565, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line352_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 2402.565, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line353_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 2402.565, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line355_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 2244.382, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line356_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, 2244.382, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line364_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 2568.11, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle085_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 2392.814, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle086_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 2401.353, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle087_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 2401.353, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle088_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 2392.814, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle089_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 2401.353, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle090_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 2401.353, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle091_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 2392.814, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle092_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 2401.353, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle093_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 2401.353, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle094_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 2392.814, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle095_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 2401.353, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle096_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 2401.353, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape183_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 2251.019, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape184_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 2251.019, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape185_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 2251.019, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape186_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 2251.019, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape187_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 2251.019, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape188_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 2251.019, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape189_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 2251.019, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape190_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 2251.019, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape191_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 2236.052, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape192_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 2236.052, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape193_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 2236.052, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape194_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 2236.052, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape203_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 2238.596, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape204_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 2238.596, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape205_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 2238.596, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape206_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 2238.596, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box665_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 2696.63, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box666_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 2696.63, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box667_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 2696.63, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box668_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 2696.63, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box669_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2855.804, 2696.836, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box670_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3491.972, 2696.836, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box671_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-4428.527, 2696.836, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box672_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 2696.836, -664.314]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box673_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.564, 2684.58, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box674_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5235.576, 2684.937, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box675_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.641, 2684.58, 464.197]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box676_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-2676.876, 2684.937, -509.604]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line367_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 2572.564, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line368_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 2891.318, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line371_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 2736.533, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line372_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 2736.533, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line373_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 2736.533, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line374_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 2736.533, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line375_glass_0.geometry}
          material={materials.glass}
          position={[-2856.164, 2736.533, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line376_glass_0.geometry}
          material={materials.glass}
          position={[-3489.792, 2736.533, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line377_glass_0.geometry}
          material={materials.glass}
          position={[-4425.844, 2736.533, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line378_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 2736.533, -654.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line379_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 2721.567, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line380_glass_0.geometry}
          material={materials.glass}
          position={[-5227.879, 2721.567, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line381_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 2721.567, 476.09]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line382_glass_0.geometry}
          material={materials.glass}
          position={[-2686.938, 2721.567, -497.124]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line383_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 2736.533, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line384_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 2736.533, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line385_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 2736.533, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line386_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 2736.533, 712.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line387_glass_0.geometry}
          material={materials.glass}
          position={[-3052.097, 2736.533, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line388_glass_0.geometry}
          material={materials.glass}
          position={[-3261.043, 2736.533, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line389_glass_0.geometry}
          material={materials.glass}
          position={[-4621.931, 2736.533, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line390_glass_0.geometry}
          material={materials.glass}
          position={[-4830.519, 2736.533, -714.659]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line391_glass_0.geometry}
          material={materials.glass}
          position={[-5224.881, 2721.567, 154.814]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line392_glass_0.geometry}
          material={materials.glass}
          position={[-5223.662, 2721.567, -234.826]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line393_glass_0.geometry}
          material={materials.glass}
          position={[-2687.593, 2721.567, -108.847]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line394_glass_0.geometry}
          material={materials.glass}
          position={[-2686.786, 2721.567, 304.942]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line395_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 2724.11, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line396_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 2724.11, 470.167]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line397_glass_0.geometry}
          material={materials.glass}
          position={[-3677.905, 2724.11, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line398_glass_0.geometry}
          material={materials.glass}
          position={[-4234.104, 2724.11, -503.397]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line400_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 2565.927, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line401_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-5316.482, 2565.927, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line409_Material_#6_0'].geometry}
          material={materials.Material_6}
          position={[-3956.887, 2889.655, 55.564]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle097_rail_0.geometry}
          material={materials.rail}
          position={[-5225.011, 2714.359, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle098_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 2722.898, 233.627]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle099_rail_0.geometry}
          material={materials.rail}
          position={[-5224.685, 2722.898, 102.388]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle100_rail_0.geometry}
          material={materials.rail}
          position={[-5223.793, 2714.359, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle101_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 2722.898, -156.014]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle102_rail_0.geometry}
          material={materials.rail}
          position={[-5223.467, 2722.898, -287.252]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle103_rail_0.geometry}
          material={materials.rail}
          position={[-2687.463, 2714.359, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle104_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 2722.898, -187.66]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle105_rail_0.geometry}
          material={materials.rail}
          position={[-2687.79, 2722.898, -56.421]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle106_rail_0.geometry}
          material={materials.rail}
          position={[-2686.655, 2714.359, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle107_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 2722.898, 226.129]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle108_rail_0.geometry}
          material={materials.rail}
          position={[-2686.981, 2722.898, 357.368]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape207_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 2572.564, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape208_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 2572.564, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape209_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 2572.564, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape210_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 2572.564, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape211_rail_0.geometry}
          material={materials.rail}
          position={[-3956.458, 2572.564, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape212_rail_0.geometry}
          material={materials.rail}
          position={[-4590.086, 2572.564, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape213_rail_0.geometry}
          material={materials.rail}
          position={[-5526.138, 2572.564, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape214_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 2572.564, -1273.287]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape215_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 2557.597, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape216_rail_0.geometry}
          material={materials.rail}
          position={[-4608.722, 2557.597, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape217_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 2557.597, -624.204]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape218_rail_0.geometry}
          material={materials.rail}
          position={[-2067.781, 2557.597, -1597.417]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape227_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 2560.141, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape228_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 2560.141, -630.127]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape229_rail_0.geometry}
          material={materials.rail}
          position={[-3058.748, 2560.141, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape230_rail_0.geometry}
          material={materials.rail}
          position={[-3614.946, 2560.141, -1603.691]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line410_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 2894.109, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line414_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 2894.109, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line415_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 2894.109, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box709_rail_0.geometry}
          material={materials.rail}
          position={[-5249.004, 3003.698, -314.943]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box710_rail_0.geometry}
          material={materials.rail}
          position={[-5287.061, 3003.698, -198.33]}
          rotation={[-Math.PI / 2, 0, -0.262]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box711_rail_0.geometry}
          material={materials.rail}
          position={[-5334.877, 3003.698, 1.174]}
          rotation={[-Math.PI / 2, 0, -0.262]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box712_rail_0.geometry}
          material={materials.rail}
          position={[-5313.41, 3003.698, -101.225]}
          rotation={[-Math.PI / 2, 0, -0.262]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box713_rail_0.geometry}
          material={materials.rail}
          position={[-5352.575, 3003.698, 121.341]}
          rotation={[-Math.PI / 2, 0, -0.175]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box714_rail_0.geometry}
          material={materials.rail}
          position={[-5363.619, 3003.698, 241.411]}
          rotation={[-Math.PI / 2, 0, -0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box715_rail_0.geometry}
          material={materials.rail}
          position={[-5366.889, 3003.698, 361.529]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box716_rail_0.geometry}
          material={materials.rail}
          position={[-5364.956, 3003.698, 480.44]}
          rotation={[-Math.PI / 2, 0, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box717_Material_#21_0'].geometry}
          material={materials.Material_21}
          position={[-5347.318, 3003.698, 640.66]}
          rotation={[-Math.PI / 2, 0, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box718_rail_0.geometry}
          material={materials.rail}
          position={[-5235.939, 3003.698, 640.66]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line447_Material_#21_0'].geometry}
          material={materials.Material_21}
          position={[-5319.457, 3011.903, 212.633]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line448_Material_#21_0'].geometry}
          material={materials.Material_21}
          position={[-5319.457, 3016.614, 212.633]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line449_Material_#21_0'].geometry}
          material={materials.Material_21}
          position={[-5319.457, 3021.325, 212.633]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box719_rail_0.geometry}
          material={materials.rail}
          position={[-2662.647, 3003.697, -314.943]}
          rotation={[-Math.PI / 2, 0, Math.PI / 9]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box720_rail_0.geometry}
          material={materials.rail}
          position={[-2624.59, 3003.698, -198.33]}
          rotation={[-Math.PI / 2, 0, 0.262]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box721_rail_0.geometry}
          material={materials.rail}
          position={[-2576.774, 3003.698, 1.174]}
          rotation={[-Math.PI / 2, 0, 0.262]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box722_rail_0.geometry}
          material={materials.rail}
          position={[-2598.241, 3003.698, -101.225]}
          rotation={[-Math.PI / 2, 0, 0.262]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box723_rail_0.geometry}
          material={materials.rail}
          position={[-2559.076, 3003.698, 121.341]}
          rotation={[-Math.PI / 2, 0, 0.175]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box724_rail_0.geometry}
          material={materials.rail}
          position={[-2548.032, 3003.698, 241.411]}
          rotation={[-Math.PI / 2, 0, 0.087]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box725_rail_0.geometry}
          material={materials.rail}
          position={[-2544.762, 3003.698, 361.529]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box726_rail_0.geometry}
          material={materials.rail}
          position={[-2546.695, 3003.698, 480.44]}
          rotation={[-Math.PI / 2, 0, -0.087]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box727_rail_0.geometry}
          material={materials.rail}
          position={[-2564.333, 3003.698, 640.66]}
          rotation={[-Math.PI / 2, 0, -0.087]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box728_rail_0.geometry}
          material={materials.rail}
          position={[-2675.711, 3003.698, 640.66]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line450_Material_#21_0'].geometry}
          material={materials.Material_21}
          position={[-2592.194, 3011.903, 212.633]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line451_Material_#21_0'].geometry}
          material={materials.Material_21}
          position={[-2592.194, 3016.614, 212.633]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line452_Material_#21_0'].geometry}
          material={materials.Material_21}
          position={[-2592.194, 3021.325, 212.633]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box700_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-5064.396, 3018.175, 662.492]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape234_rail_0.geometry}
          material={materials.rail}
          position={[-6161.737, 2894.109, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line419_glass_0.geometry}
          material={materials.glass}
          position={[-5061.443, 3058.079, 652.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line001_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 0.2, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line006_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 0.2, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line005_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 0.2, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line050_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 321.746, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line054_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 321.746, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line055_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 321.746, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line095_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 643.291, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line099_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 643.291, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line100_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 643.291, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line140_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 964.837, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line144_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 964.837, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line145_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 964.837, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line185_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 1286.382, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line189_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 1286.382, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line190_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 1286.382, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line230_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 1607.928, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line234_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 1607.928, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line235_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 1607.928, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line275_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 1929.473, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line279_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 1929.473, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line280_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 1929.473, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line320_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 2251.019, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line324_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 2251.019, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line325_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 2251.019, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line365_Material_#25_0'].geometry}
          material={materials.Material_25}
          position={[-3956.458, 2572.564, 33.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line369_wall_0.geometry}
          material={materials.wall}
          position={[-2584.235, 2572.564, 191.694]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line370_wall_0.geometry}
          material={materials.wall}
          position={[-5328.829, 2572.564, 191.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line464_Material_#8_0'].geometry}
          material={materials.Material_8}
          position={[-3591.238, -325.033, -278.774]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape255_Material_#9_0'].geometry}
          material={materials.Material_9}
          position={[-3956.56, 0.2, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box729_Material_#12_0'].geometry}
          material={materials.Material_12}
          position={[-3958.337, 3216.141, -237.004]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line465_Material_#13_0'].geometry}
          material={materials.Material_13}
          position={[-4005.128, 3252.957, 48.618]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line466_glass_0.geometry}
          material={materials.glass}
          position={[-2684.107, -197.513, -374.408]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle121_rail_0.geometry}
          material={materials.rail}
          position={[-2683.977, -204.72, -453.221]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle122_rail_0.geometry}
          material={materials.rail}
          position={[-2684.303, -196.181, -453.221]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle123_rail_0.geometry}
          material={materials.rail}
          position={[-2684.303, -196.181, -321.982]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line467_glass_0.geometry}
          material={materials.glass}
          position={[-2684.107, -197.513, -99.818]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle124_rail_0.geometry}
          material={materials.rail}
          position={[-2683.977, -204.72, -178.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle125_rail_0.geometry}
          material={materials.rail}
          position={[-2684.303, -196.181, -178.631]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle126_rail_0.geometry}
          material={materials.rail}
          position={[-2684.303, -196.181, -47.392]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line468_glass_0.geometry}
          material={materials.glass}
          position={[-4107.288, -197.513, 303.614]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle127_rail_0.geometry}
          material={materials.rail}
          position={[-4028.476, -204.72, 303.744]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle128_rail_0.geometry}
          material={materials.rail}
          position={[-4028.476, -196.181, 303.418]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle129_rail_0.geometry}
          material={materials.rail}
          position={[-4159.714, -196.181, 303.418]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line469_glass_0.geometry}
          material={materials.glass}
          position={[-3834.648, -197.513, 303.614]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle130_rail_0.geometry}
          material={materials.rail}
          position={[-3755.836, -204.72, 303.744]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle131_rail_0.geometry}
          material={materials.rail}
          position={[-3755.836, -196.181, 303.418]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle132_rail_0.geometry}
          material={materials.rail}
          position={[-3887.074, -196.181, 303.418]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line470_Material_#17_0'].geometry}
          material={materials.Material_17}
          position={[-3225.206, 1.114, -67.829]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.994}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line471_glass_0.geometry}
          material={materials.glass}
          position={[-2373.018, -267.436, 157.629]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line472_glass_0.geometry}
          material={materials.glass}
          position={[-2822.701, -267.436, 665.119]}
          rotation={[Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line473_glass_0.geometry}
          material={materials.glass}
          position={[-2853.354, -267.436, -821.225]}
          rotation={[Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line474_Material_#11_0'].geometry}
          material={materials.Material_11}
          position={[-2596.909, 1.057, 178.699]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box730_Material_#15_0'].geometry}
          material={materials.Material_15}
          position={[-4591.52, -330.067, -631.377]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box731_Material_#15_0'].geometry}
          material={materials.Material_15}
          position={[-5202.273, -330.067, -631.377]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box732_Material_#15_0'].geometry}
          material={materials.Material_15}
          position={[-5185.528, -330.067, 12.707]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box733_Material_#15_0'].geometry}
          material={materials.Material_15}
          position={[-5133.411, -330.067, 622.513]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box734_Material_#15_0'].geometry}
          material={materials.Material_15}
          position={[-4555.712, -330.067, 622.513]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape260_Material_#18_0'].geometry}
          material={materials.Material_18}
          position={[-3956.56, 257.792, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape261_Material_#18_0'].geometry}
          material={materials.Material_18}
          position={[-3956.56, 580.002, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape262_Material_#18_0'].geometry}
          material={materials.Material_18}
          position={[-3956.56, 902.212, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape263_Material_#18_0'].geometry}
          material={materials.Material_18}
          position={[-3956.56, 1224.422, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape264_Material_#18_0'].geometry}
          material={materials.Material_18}
          position={[-3956.56, 1546.633, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape265_Material_#18_0'].geometry}
          material={materials.Material_18}
          position={[-3956.56, 1868.843, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape266_Material_#18_0'].geometry}
          material={materials.Material_18}
          position={[-3956.56, 2188.339, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape267_Material_#18_0'].geometry}
          material={materials.Material_18}
          position={[-3956.56, 2507.835, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape268_Material_#18_0'].geometry}
          material={materials.Material_18}
          position={[-3956.56, 2827.331, 313.601]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.048}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line475_Material_#19_0'].geometry}
          material={materials.Material_19}
          position={[-4100.544, 0, -71.076]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line476_floor_0.geometry}
          material={materials.floor}
          position={[-3096.838, 1580.015, 694.536]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line477_floor_0.geometry}
          material={materials.floor}
          position={[-3305.423, 1580.015, 694.536]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line478_floor_0.geometry}
          material={materials.floor}
          position={[-4666.743, 1580.015, 694.536]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line479_floor_0.geometry}
          material={materials.floor}
          position={[-4875.305, 1580.015, 694.536]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line480_floor_0.geometry}
          material={materials.floor}
          position={[-3096.838, 1580.015, -726.547]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line481_floor_0.geometry}
          material={materials.floor}
          position={[-3305.423, 1580.015, -726.547]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line482_floor_0.geometry}
          material={materials.floor}
          position={[-4666.743, 1580.015, -726.547]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line483_floor_0.geometry}
          material={materials.floor}
          position={[-4875.305, 1580.015, -726.547]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box735_Material_#20_0'].geometry}
          material={materials.Material_20}
          position={[-3170.744, 0, 717.093]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box736_Material_#20_0'].geometry}
          material={materials.Material_20}
          position={[-4741.158, 0, 717.093]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box737_Material_#20_0'].geometry}
          material={materials.Material_20}
          position={[-3170.744, 0, -719.968]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box738_Material_#20_0'].geometry}
          material={materials.Material_20}
          position={[-4741.158, 0, -719.968]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(require('@assets/buildingModel/Building5.glb'));
