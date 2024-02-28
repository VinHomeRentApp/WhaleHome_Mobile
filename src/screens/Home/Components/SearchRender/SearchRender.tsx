import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useAreas } from '@services/queries/area.queries';
import { useBuildings } from '@services/queries/building.queries';
import { useZones } from '@services/queries/zone.queries';
import globalStyle from '@styles/globalStyle';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

type SearchRenderProps = {
  postLength: number;
};

const SearchRender = ({ postLength }: SearchRenderProps) => {
  const { dispatch } = useRootContext();
  const [zone, setZone] = useState('');
  const [area, setArea] = useState('');
  const [building, setBuilding] = useState('');

  const areaQuery = useAreas();
  const buildingQuery = useBuildings();
  const zoneQuery = useZones(dispatch);

  const zones = zoneQuery.data?.data.data;
  const buildings = buildingQuery.data?.data.data;
  const areas = areaQuery.data?.data.data;

  console.log('zones', zones);
  console.log('buildings', buildings);
  console.log('areas', areas);

  return (
    <>
      <View style={styles.titleFoundRoomField}>
        <View style={styles.selectFieldContainer}>
          <View style={styles.selectField}>
            <RNPickerSelect
              style={{
                inputIOS: {
                  color: typoColor.black1
                },
                placeholder: { color: typoColor.black1 }
              }}
              placeholder={{ label: 'Select Area', color: typoColor.black1, value: '' }}
              darkTheme={true}
              onValueChange={(value) => setArea(value)}
              items={areas ? areas.map((area) => ({ label: area.name, value: area.id })) : []} // Check if areas is defined before mapping
            />
          </View>
        </View>

        <View style={styles.selectFieldContainer}>
          <View style={styles.selectField}>
            <RNPickerSelect
              style={{
                placeholder: { color: typoColor.black1 }
              }}
              placeholder={{ label: 'Select Zone', value: '' }}
              onValueChange={(value) => setZone(value)}
              items={zones ? zones.map((zone) => ({ label: zone.name, value: zone.id })) : []} // Check if zones is defined before mapping
            />
          </View>
        </View>

        <View style={styles.selectFieldContainer}>
          <View style={styles.selectField}>
            <RNPickerSelect
              style={{
                placeholder: { color: typoColor.black1 }
              }}
              placeholder={{ label: 'Select Building', value: '' }}
              onValueChange={(value) => setBuilding(value)}
              items={buildings ? buildings.map((building) => ({ label: building.name, value: building.id })) : []} // Check if buildings is defined before mapping
            />
          </View>
        </View>
      </View>
      <View style={styles.titleFoundRoomField}>
        <TextComponent styles={styles.titleFoundRooms} content={`Found ${postLength} Posts`} />
        <Pressable style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <Image style={styles.filterIcon} resizeMode='contain' source={require('@assets/images/filterIcon.png')} />
        </Pressable>
      </View>
    </>
  );
};

export default SearchRender;

const styles = StyleSheet.create({
  titleFoundRoomField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  titleFoundRooms: {
    fontSize: 18,
    fontFamily: fontFam.bold
  },
  filterIcon: {
    height: 20
  },
  selectFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: typoColor.yellow1,
    padding: 5,
    borderRadius: 20
  },
  selectField: {
    width: 100,
    padding: 5,
    position: 'relative',
    top: 1,
    left: 2
  }
});
