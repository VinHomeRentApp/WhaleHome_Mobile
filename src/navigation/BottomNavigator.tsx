import { accentColor } from '@constants/appColors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HeaderBottomTabs from '@screens/Home/Components/HomeHeader/RightHeader/RightHeader';
import ProfileHeader from '@screens/Home/Components/ProfileHeader/ProfileHeader';
import RightSearchHeader from '@screens/Home/Components/SearchHeader/SearchHeader';
import FavoriteScreen from '@screens/Home/FavoriteScreen';
import HomeScreen from '@screens/Home/HomeScreen';
import ProfileScreen from '@screens/Home/ProfileScreen';
import SearchScreen from '@screens/Home/SearchScreen';
import { RootBottomTabsList } from '@type/navigation.types';
import { Heart, Home, Profile, SearchNormal1 } from 'iconsax-react-native';
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
          header: () => <RightSearchHeader />,
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
          headerShown: false,
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
