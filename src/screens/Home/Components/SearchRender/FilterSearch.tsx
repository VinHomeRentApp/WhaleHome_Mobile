import { typoColor } from '@constants/appColors';
import { useAreas } from '@services/queries/area.queries';
import { useBuildings } from '@services/queries/building.queries';
import { useZones } from '@services/queries/zone.queries';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const FilterSearch = () => {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  const [selectedZone, setSelectedZone] = useState<number | null>(null);
  const [selectedBuilding, setSelectedBuilding] = useState<number | null>(null);

  const areaQuery = useAreas();
  const buildingQuery = useBuildings();
  const zoneQuery = useZones();

  const areas = areaQuery.data?.data.data || [];
  const allZones = zoneQuery.data?.data.data || [];
  const allBuildings = buildingQuery.data?.data.data || [];

  // Lọc zones dựa vào area đã chọn
  const zones = selectedArea ? allZones.filter((zone) => zone.area.id === selectedArea) : [];

  // Lọc buildings dựa vào area và zone đã chọn
  const buildings = allBuildings.filter((building) => {
    return building.zone.area.id === selectedArea && (!selectedZone || building.zone.id === selectedZone);
  });

  // Xử lý khi thay đổi giá trị của area
  const handleAreaChange = (value: number) => {
    setSelectedArea(value);
    setSelectedZone(null); // Reset zone khi thay đổi area
    setSelectedBuilding(null); // Reset building khi thay đổi area
  };

  // Xử lý khi thay đổi giá trị của zone
  const handleZoneChange = (value: number) => {
    setSelectedZone(value);
    setSelectedBuilding(null); // Reset building khi thay đổi zone
  };
  return (
    <View>
      <View style={styles.titleFoundRoomField}>
        {/* Area selection */}
        <View style={styles.selectFieldContainer}>
          <View style={styles.selectField}>
            <Dropdown
              onChange={(item) => setSelectedArea(item.id)}
              value={selectedArea ? String(selectedArea) : undefined}
              labelField='name'
              valueField='id'
              data={areas}
            />
          </View>
        </View>

        {/* Zone selection */}
        <View style={styles.selectFieldContainer}>
          <View style={styles.selectField}></View>
        </View>

        {/* Building selection */}
        <View style={styles.selectFieldContainer}>
          <View style={styles.selectField}></View>
        </View>
      </View>
    </View>
  );
};

export default FilterSearch;

const styles = StyleSheet.create({
  titleFoundRoomField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
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
