import TextComponent from '@components/ui/TextComponent';
import { typoColor } from '@constants/appColors';
import globalStyle from '@styles/globalStyle';
import React, { Dispatch } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type TabHeaderProps = {
  tabMessages: boolean;
  tabNotification: boolean;
  setTabMessages: Dispatch<React.SetStateAction<boolean>>;
  setTabNotification: Dispatch<React.SetStateAction<boolean>>;
};

const TabHeader = ({ tabMessages, tabNotification, setTabMessages, setTabNotification }: TabHeaderProps) => {
  function handleSetMessagesTab() {
    setTabMessages(true);
    setTabNotification(false);
  }

  function handleSetNotificationTab() {
    setTabNotification(true);
    setTabMessages(false);
  }
  return (
    <View style={styles.tabContainer}>
      <Pressable
        onPress={handleSetNotificationTab}
        style={({ pressed }) => [
          styles.tab,
          pressed && globalStyle.pressed,
          tabNotification ? styles.tabActive : styles.tabInactive
        ]}
      >
        <TextComponent
          styles={[styles.tabText, tabNotification ? styles.tabActiveText : styles.tabInactiveText]}
          content='Notification'
        />
      </Pressable>

      <Pressable
        onPress={handleSetMessagesTab}
        style={({ pressed }) => [
          styles.tab,
          pressed && globalStyle.pressed,
          tabMessages ? styles.tabActive : styles.tabInactive
        ]}
      >
        <TextComponent
          styles={[styles.tabText, tabMessages ? styles.tabActiveText : styles.tabInactiveText]}
          content='Messages'
        />
      </Pressable>
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 40,
    backgroundColor: typoColor.white1,
    height: 60,
    borderRadius: 30
  },
  tab: {
    height: 40,
    width: '45%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabActive: {
    backgroundColor: typoColor.yellow1
  },
  tabInactive: {
    backgroundColor: 'transparent'
  },
  tabActiveText: {
    color: typoColor.white2
  },
  tabInactiveText: {
    color: typoColor.gray5
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 15
  }
});
