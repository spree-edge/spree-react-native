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
        inactiveTintColor: colors.black,
        labelStyle: {
          fontFamily: 'lato-bold'
        }
      }}
    >
      <Tab.Screen name="Shop" component={ShopitStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => <Home color={color} size={size} />
        }}
      />
      <Tab.Screen name="Categories" component={CategoriesStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => <MenuGridR color={color} size={size} />
        }}
      />
      <Tab.Screen name="Favorites" component={FavouritesStackNavigator} 
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