import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

const HomeCategoryField = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.categoryContainer} horizontal={true}>
      <Pressable>
        <View style={[styles.categoryOption, styles.categoryActive]}>
          <TextComponent content='Categories' styles={styles.textCategory} />
        </View>
      </Pressable>

      <Pressable>
        <View style={styles.categoryOption}>
          <TextComponent content='Categories' styles={styles.textCategory} />
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.categoryOption}>
          <TextComponent content='Categories' styles={styles.textCategory} />
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.categoryOption}>
          <TextComponent content='Categories' styles={styles.textCategory} />
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.categoryOption}>
          <TextComponent content='Categories' styles={styles.textCategory} />
        </View>
      </Pressable>
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
  textCategory: {
    fontWeight: 'bold'
  }
});
