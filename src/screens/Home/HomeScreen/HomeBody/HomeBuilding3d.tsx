/* eslint-disable react/no-unknown-property */
import BodyAdminContact from '@components/ui/AdminContact';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import { ArrowCircleLeft2 } from 'iconsax-react-native';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import Building1View360 from './ViewBuilding3dComponents/Building1View360';
import Building3View360 from './ViewBuilding3dComponents/Building3View360';

const HomeBuilding3dScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'Building3dScreen'>>();
  const { building } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  type buildingAreaName = 'S' | 'BE';

  let building3dView;
  switch (building.zone.area.name) {
    case 'S':
      building3dView = <Building3View360 />;
      break;
    default:
      building3dView = <Building1View360 />;
  }

  return (
    <SafeAreaView style={[globalStyle.container]}>
      {building3dView}
      <View style={styles.textField}>
        <TextComponent styles={styles.textTitle} content={`Buidling: ${building.name}`} />
        <View>
          <TextComponent content={`${building.name} - ${building.zone.name} - ${building.zone.area.name}`} />
        </View>
      </View>

      {/* Back button */}
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <ArrowCircleLeft2 size='35' color={typoColor.yellow1} variant='Bold' />
        </Pressable>
      </View>

      <View style={styles.bodyAdminContactContainer}>
        <BodyAdminContact />
      </View>
    </SafeAreaView>
  );
};

export default HomeBuilding3dScreen;

const styles = StyleSheet.create({
  container: {},
  textField: {
    marginTop: 20,
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 15,
    fontFamily: fontFam.bold
  },
  iconContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  bodyAdminContactContainer: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 20,
    width: '95%',
    zIndex: 1
  }
});
