import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const FooterButtonComponent = () => {
  return (
    <Pressable style={({ pressed }) => [styles.viewAllButtonContainer, pressed && styles.activeButton]}>
      <TextComponent styles={styles.viewAllText} content='View All Rooms' />
    </Pressable>
  );
};

export default FooterButtonComponent;

const styles = StyleSheet.create({
  viewAllButtonContainer: {
    height: 60,
    marginHorizontal: 15,
    backgroundColor: typoColor.white1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewAllText: {
    color: typoColor.black2,
    fontSize: 16,
    fontWeight: 'bold'
  },
  activeButton: { backgroundColor: typoColor.yellow1 }
});
