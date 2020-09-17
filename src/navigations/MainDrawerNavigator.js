import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigator from './MainTabNavigator'
import CustomDrawerContent from '../library/components/CustomDrawerContent'
import { colors } from '../res/palette'
import { Browse } from '../library/icons'

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator()

export default function MainDrawerNavigator() {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          width: '75%'
          // borderWidth: 2,
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: colors.primary
        }}
      >
        <Drawer.Screen name="Shopit" component={MainTabNavigator} options={{
          drawerLabel: 'Browse Catalogue',
          drawerIcon: ({ focused, color, size }) => <Browse size={size} style={{color}} />
        }} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </>
  );
}

// const styles = StyleSheet.create({
//   centeredContent: {
//     ...globalStyles.containerFluid,
//     ...globalStyles.centeredContent
//     // borderWidth: 2
//   }
// })