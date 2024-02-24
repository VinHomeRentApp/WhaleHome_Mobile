import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import globalStyle from '@styles/globalStyle';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

const TabCategory = () => {
  const [allCategory, setAllCategory] = useState(true);
  const [reviewCategory, setReviewCategory] = useState(false);
  const [soldCategory, setSoldCategory] = useState(false);
  const [houseCategory, setHouseCategory] = useState(false);

  return (
    <View>
      <ScrollView horizontal={true} style={styles.categoryContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.category,
            pressed && globalStyle.pressed,
            !allCategory && styles.inactiveCategory
          ]}
        >
          <TextComponent styles={[styles.categoryText, !allCategory && styles.inactiveCategoryText]} content='All' />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.category,
            pressed && globalStyle.pressed,
            !reviewCategory && styles.inactiveCategory
          ]}
        >
          <TextComponent
            styles={[styles.categoryText, !reviewCategory && styles.inactiveCategoryText]}
            content='Review'
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.category,
            pressed && globalStyle.pressed,
            !soldCategory && styles.inactiveCategory
          ]}
        >
          <TextComponent styles={[styles.categoryText, !soldCategory && styles.inactiveCategoryText]} content='Sold' />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.category,
            pressed && globalStyle.pressed,
            !houseCategory && styles.inactiveCategory
          ]}
        >
          <TextComponent
            styles={[styles.categoryText, !houseCategory && styles.inactiveCategoryText]}
            content='House'
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default TabCategory;

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 35,
    paddingHorizontal: 10
  },
  category: {
    marginHorizontal: 10,
    backgroundColor: typoColor.yellow1,
    height: 65,
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20
  },
  activeCategory: {
    backgroundColor: typoColor.yellow1
  },
  inactiveCategory: {
    backgroundColor: typoColor.white1
  },
  inactiveCategoryText: {
    color: typoColor.black2
  },
  categoryText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});
