import TextComponent from '@components/ui/TextComponent';
import fontFam from '@constants/fontFamilies';
import { useUsersWithPagination } from '@services/queries/user.queries';
import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import HomeUserItem from './HomeUserItem';

const HomeTopUser = () => {
  const currentPage = 1;
  const currentLimit = 5;
  const currentField = 'email';
  const userQueries = useUsersWithPagination({ field: currentField, page: currentPage, size: currentLimit });

  const users = userQueries.data?.data.data.listResult;

  if (!users) {
    return (
      <View>
        <TextComponent content='Not Found Any Users' />
      </View>
    );
  }

  return (
    <View style={styles.topUser}>
      <View>
        <View style={styles.topUserTitleContainer}>
          <TextComponent content='Top Estate Agent' styles={styles.topUserTitle} />
          <Pressable>
            <TextComponent content='Explore' />
          </Pressable>
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <HomeUserItem user={item} />}
      />
    </View>
  );
};

export default HomeTopUser;

const styles = StyleSheet.create({
  topUser: { marginBottom: 100, marginTop: -50 },
  topUserTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  topUserTitle: {
    fontSize: 18,
    fontFamily: fontFam.bold
  }
});
