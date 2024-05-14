import { accentColor } from '@constants/appColors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '@screens/Home/FavoriteScreen/FavoriteScreen';
import HeaderBottomTabs from '@screens/Home/HomeScreen/HomeHeader/RightHeader/RightHeader';

import HomeScreen from '@screens/Home/HomeScreen/HomeScreen';
import PostScreen from '@screens/Home/PostScreen/PostScreen';
import PostScreenHeader from '@screens/Home/PostScreen/PostScreenHeader/PostScreenHeader';
import ProfileHeader from '@screens/Home/ProfileScreen/ProfileHeader/ProfileHeader';
import ProfileScreen from '@screens/Home/ProfileScreen/ProfileScreen';
import RightSearchHeader from '@screens/Home/SearchScreen/SearchHeader/SearchHeader';
import SearchScreen from '@screens/Home/SearchScreen/SearchScreen';

import { RootBottomTabsList } from '@type/navigation.types';
import { Heart, Home, PathToolSquare, Profile, SearchNormal1 } from 'iconsax-react-native';
import React from 'react';

const BottomTabs = createBottomTabNavigator<RootBottomTabsList>();

const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: {
          top: 15
        },
        tabBarStyle: {
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#252525',
          paddingBottom: 30,
          height: 70,
          borderTopWidth: 0,
          borderRadius: 22
        },
        tabBarShowLabel: false
      }}
    >
      <BottomTabs.Screen
        options={{
          header: () => <HeaderBottomTabs />,
          tabBarIcon: ({ focused }) => (
            <Home size='30' color={focused ? accentColor.isFocused : accentColor.isNotFocused} variant='Bold' />
          )
        }}
        name='HomePage'
        component={HomeScreen}
      />
      <BottomTabs.Screen
        options={{
          header: () => <RightSearchHeader content={`Search Result`} />,
          tabBarIcon: ({ focused }) => (
            <SearchNormal1
              size='30'
              color={focused ? accentColor.isFocused : accentColor.isNotFocused}
              variant='Bold'
            />
          )
        }}
        name='SearchScreen'
        component={SearchScreen}
      />
      <BottomTabs.Screen
        options={{
          header: () => <PostScreenHeader />,
          tabBarIcon: ({ focused }) => (
            <PathToolSquare
              size='30'
              color={focused ? accentColor.isFocused : accentColor.isNotFocused}
              variant='Bold'
            />
          )
        }}
        name='PostScreen'
        component={PostScreen}
      />
      <BottomTabs.Screen
        options={{
          header: () => <RightSearchHeader content='Favorite List' />,
          tabBarIcon: ({ focused }) => (
            <Heart size='30' color={focused ? accentColor.isFocused : accentColor.isNotFocused} variant='Bold' />
          )
        }}
        name='FavoriteScreen'
        component={FavoriteScreen}
      />

      <BottomTabs.Screen
        options={{
          header: () => <ProfileHeader />,
          tabBarIcon: ({ focused }) => (
            <Profile size='30' color={focused ? accentColor.isFocused : accentColor.isNotFocused} variant='Bold' />
          )
        }}
        name='ProfileScreen'
        component={ProfileScreen}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
