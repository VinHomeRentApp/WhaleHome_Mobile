import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import fontFam from '@constants/fontFamilies';
import useRootContext from '@hooks/useRootContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useBuildingsWithArea } from '@services/queries/building.queries';
import globalStyle from '@styles/globalStyle';
import { MainStackParamList } from '@type/navigation.types';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';

const HomeTopBuilding = () => {
  const { state } = useRootContext();
  const { selectedZone } = state.zone;
  const size = 9;
  const page = 1;
  const buildingQuery = useBuildingsWithArea({ areaId: selectedZone.area?.id || 1, size, page });
  const buildings = buildingQuery.data?.data.data.listResult;
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  if (!buildings) {
    <View>
      <TextComponent content='Not Found Any Building' />
    </View>;
  }

  return (
    <View style={{ marginLeft: 10 }}>
      <View style={styles.topBuildingTitleContainer}>
        <TextComponent styles={styles.topBuildingTitle} content='Top Building' />
      </View>
      <FlatList
        data={buildings}
        horizontal={true}
        keyExtractor={(item) => `${item.id}-${new Date()}`}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('Building3dScreen', { building: item })}
            style={({ pressed }) => [styles.topBuildingContainer, pressed && globalStyle.pressed]}
          >
            <View style={styles.buildingImage}>
              <Image
                style={styles.image}
                resizeMode='contain'
                source={require('@assets/images/building/building1.jpg')}
              />
            </View>
            <View style={styles.buildingText}>
              <TextComponent
                numberOfLines={1}
                styles={{ color: typoColor.black1, maxWidth: 120 }}
                content={`${item.name} - ${item.zone.name} - ${item.zone.area.name}`}
              />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default HomeTopBuilding;

const styles = StyleSheet.create({
  topBuildingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: typoColor.white1,
    width: 200,
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: 5,
    marginRight: 20
  },
  topBuildingTitleContainer: {
    marginLeft: 7,
    marginBottom: 10
  },
  topBuildingTitle: {
    fontFamily: fontFam.bold,
    fontSize: 18
  },
  buildingImage: {
    borderRadius: 20
  },
  image: {
    margin: 5,
    borderRadius: 20,
    height: 50,
    width: 50
  },
  buildingText: {
    margin: 5,
    color: typoColor.black1
  }
});
