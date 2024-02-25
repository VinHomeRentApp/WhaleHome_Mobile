import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import useRootContext from '@hooks/useRootContext';
import globalStyle from '@styles/globalStyle';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Zone from 'src/models/class/Zone.class';

type HomeCategoryFieldProps = {
  zones: Zone[] | undefined;
};

const HomeCategoryField = ({ zones }: HomeCategoryFieldProps) => {
  const { state } = useRootContext();
  const { isZoneLoading } = state.zone;

  const [activeZone, setActiveZone] = useState('Rainbow');

  if (!zones) {
    return (
      <View>
        <TextComponent content='Not Found Any Zones' />
      </View>
    );
  }

  const handlePressCategory = (name: string) => {
    setActiveZone(name);
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.categoryContainer} horizontal={true}>
      {isZoneLoading ? (
        <ActivityIndicator size={24} />
      ) : (
        zones.map((zone, key) => (
          <Pressable
            onPress={() => handlePressCategory(zone.name)}
            key={key}
            style={({ pressed }) => [pressed && globalStyle.pressed]}
          >
            <View
              style={[
                styles.categoryOption,
                zone.name === activeZone ? styles.categoryActive : styles.categoryInActive
              ]}
            >
              <TextComponent
                content={zone.name}
                styles={[
                  styles.textCategory,
                  zone.name === activeZone ? styles.textCategoryActive : styles.textCategoryInactive
                ]}
              />
            </View>
          </Pressable>
        ))
      )}
    </ScrollView>
  );
};

export default HomeCategoryField;

const styles = StyleSheet.create({
  categoryContainer: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  categoryOption: {
    height: 45,
    width: 100,
    borderRadius: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryActive: {
    backgroundColor: typoColor.yellow1
  },
  categoryInActive: { backgroundColor: typoColor.gray1 },
  textCategoryActive: {
    color: typoColor.gray4
  },
  textCategoryInactive: {
    color: typoColor.black2
  },
  textCategory: {
    fontWeight: 'bold'
  }
});
