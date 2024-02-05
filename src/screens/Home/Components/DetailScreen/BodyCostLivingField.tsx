import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const BodyCostLivingField = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <TextComponent styles={styles.titleText} content='Cost of Living' />
        <Pressable>
          <TextComponent content='view details' />
        </Pressable>
      </View>
      <View style={styles.costBodyContainer}>
        <TextComponent styles={styles.costTitle} content='$ 830/month' />
        <TextComponent styles={styles.costDetail} content='From average citizen spend around this location' />
      </View>
    </View>
  );
};

export default BodyCostLivingField;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  costBodyContainer: {
    backgroundColor: typoColor.white1,
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    padding: 15
  },
  costTitle: {
    color: typoColor.black1,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10
  },
  costDetail: {
    color: typoColor.black1,
    fontSize: 12,
    marginLeft: 10
  }
});
