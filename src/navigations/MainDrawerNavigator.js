import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigator from './MainTabNavigator'
// import OrdersScreen from '../screens/main/MainDrawer/OrdersScreen'
import OrdersStackNavigator from '../screens/main/MainDrawer/OrdersStack/OrdersStackNavigator'
import CustomDrawerContent from '../library/components/CustomDrawerContent'
import { colors } from '../res/palette'
import { Browse, ShoppingBag } from '../library/icons'

const Drawer = createDrawerNavigator()

export default function MainDrawerNavigator() {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          width: '75%'
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: colors.primary,
          activeBackgroundColor: colors.white
        }}
      >
        <Drawer.Screen name="Shopit" component={MainTabNavigator} options={{
            drawerLabel: 'Browse Catalogue',
            drawerIcon: ({ focused, color, size }) => <Browse size={size} style={{color}} />
          }}
        />
        <Drawer.Screen name="Orders" component={OrdersStackNavigator} options={{
            drawerLabel: 'Orders',
            drawerIcon: ({ focused, color, size }) => <ShoppingBag size={size} style={{color}} />
          }}
        />
      </Drawer.Navigator>
    </>
  );
}