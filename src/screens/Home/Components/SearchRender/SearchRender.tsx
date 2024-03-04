import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
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
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState('');

  const areaQuery = useAreas();
  const buildingQuery = useBuildings();
  const zoneQuery = useZones();

  const areas = areaQuery.data?.data.data || [];
  const allZones = zoneQuery.data?.data.data || [];
  const allBuildings = buildingQuery.data?.data.data || [];

  // Lọc zones dựa vào area đã chọn
  const zones = selectedArea ? allZones.filter((zone) => zone.area.id.toString() === selectedArea) : [];

  // Lọc buildings dựa vào area và zone đã chọn
  const buildings = allBuildings.filter((building) => {
    return (
      building.zone.area.id.toString() === selectedArea &&
      (!selectedZone || building.zone.id.toString() === selectedZone)
    );
  });

  // Xử lý khi thay đổi giá trị của area
  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
    setSelectedZone(''); // Reset zone khi thay đổi area
    setSelectedBuilding(''); // Reset building khi thay đổi area
  };

  // Xử lý khi thay đổi giá trị của zone
  const handleZoneChange = (value: string) => {
    setSelectedZone(value);
    setSelectedBuilding(''); // Reset building khi thay đổi zone
  };

  return (
    <>
      <View style={styles.titleFoundRoomField}>
        {/* Area selection */}
        <View style={styles.selectFieldContainer}>
          <View style={styles.selectField}>
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={{ label: 'Select Area', value: '' }}
              value={selectedArea}
              onValueChange={handleAreaChange}
              items={areas.map((area) => ({ label: area.name, value: area.id.toString() }))}
            />
          </View>
        </View>

        {/* Zone selection */}
        <View style={styles.selectFieldContainer}>
          <View style={styles.selectField}>
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={{ label: 'Select Zone', value: '' }}
              value={selectedZone}
              onValueChange={handleZoneChange}
              items={zones.map((zone) => ({ label: zone.name, value: zone.id.toString() }))}
            />
          </View>
        </View>

        {/* Building selection */}
        <View style={styles.selectFieldContainer}>
          <View style={styles.selectField}>
            <RNPickerSelect
              style={pickerSelectStyles}
              value={selectedBuilding}
              placeholder={{ label: 'Select Building', value: '' }}
              onValueChange={(value) => setSelectedBuilding(value)}
              items={buildings.map((building) => ({ label: building.name, value: building.id.toString() }))}
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: typoColor.black1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderRadius: 4
  },
  inputAndroid: {
    color: typoColor.black1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8
  },
  placeholder: { color: typoColor.black1 }
});
