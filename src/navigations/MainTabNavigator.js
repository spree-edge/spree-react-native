import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../res/palette'
import { Home, MenuGridR, Heart, Profile } from '../library/icons'
import ShopitStackNavigator from './ShopitStackNavigator'
import CategoriesStackNavigator from './CategoriesStackNavigator'
import FavouritesStackNavigator from './FavouritesStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.black
      }}
    >
      <Tab.Screen name="Shopit" component={ShopitStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => <Home color={color} size={size} />
        }}
      />
      <Tab.Screen name="Categories" component={CategoriesStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => <MenuGridR color={color} size={size} />
        }}
      />
      <Tab.Screen name="Favourites" component={FavouritesStackNavigator} 
        options={{
          tabBarIcon: ({color, size}) => <Heart color={color} size={size} />
        }}
      />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} 
        options={{
          tabBarIcon: ({color, size}) => <Profile color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator