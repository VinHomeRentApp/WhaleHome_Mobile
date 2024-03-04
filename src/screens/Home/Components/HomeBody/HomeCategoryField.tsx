import Loading from '@components/ui/Loading';
import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import useRootContext from '@hooks/useRootContext';
import { useZones } from '@services/queries/zone.queries';
import globalStyle from '@styles/globalStyle';
import { handlePressCategory } from '@usecases/HandleCategories';
import { isEmpty } from 'lodash';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

const HomeCategoryField = () => {
  const { state, dispatch } = useRootContext();
  const { zones, selectedZone } = state.zone;
  const useZone = useZones();

  const { isLoading } = useZone;

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.categoryContainer} horizontal={true}>
      {isLoading ? (
        <Loading />
      ) : isEmpty(zones) ? (
        <View>
          <TextComponent content='Not Found Any Zones' />
        </View>
      ) : (
        zones.map((zone, key) => (
          <Pressable
            onPress={() => handlePressCategory(zone, dispatch)}
            key={key}
            style={({ pressed }) => [pressed && globalStyle.pressed]}
          >
            <View
              style={[
                styles.categoryOption,
                zone.name === selectedZone.name ? styles.categoryActive : styles.categoryInActive
              ]}
            >
              <TextComponent
                content={zone.name}
                styles={[
                  styles.textCategory,
                  zone.name === selectedZone.name ? styles.textCategoryActive : styles.textCategoryInactive
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
    marginTop: 30,
    marginBottom: 20
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
