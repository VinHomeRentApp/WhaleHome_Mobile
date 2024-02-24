/* eslint-disable react/no-unescaped-entities */
import { typoColor } from '@constants/appColors';
import { ScrollView, StyleSheet } from 'react-native';
import HomeWelcomeField from './Components/HomeBody/HomeWelcomeField';
import HomeSearchField from './Components/HomeBody/HomeSearchField';
import HomeCategoryField from './Components/HomeBody/HomeCategoryField';
import HomeSaleField from './Components/HomeBody/HomeSaleField';
import HomeFeatureEstate from './Components/HomeBody/HomeFeatureEstate';
import HomeTopUser from './Components/HomeBody/HomeTopUser';
import { useUsers } from '@services/queries/user.queries';
import { usePosts } from '@services/queries/post.queries';
import { useZones } from '@services/queries/zone.queries';
import useRootContext from '@hooks/useRootContext';

const HomeScreen = () => {
  const { dispatch } = useRootContext();
  const userQuery = useUsers();
  const usePost = usePosts();
  const useZone = useZones(dispatch);
  const posts = usePost.data?.data.data;
  const zones = useZone.data?.data.data;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[HomeScreenStyles.homeContainer]}>
      {/* Hello Field */}
      <HomeWelcomeField />

      {/* Search Field */}
      <HomeSearchField />

      {/* CategoryField */}
      <HomeCategoryField zones={zones} />

      {/* House Sale Field */}
      <HomeSaleField />

      {/* Features Estate */}
      <HomeFeatureEstate posts={posts} />

      {/* Top Estate */}
      <HomeTopUser />
    </ScrollView>
  );
};

const HomeScreenStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: typoColor.black3
  }
});

export default HomeScreen;
