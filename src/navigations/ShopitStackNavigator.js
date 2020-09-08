import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/main/ShopitStack/HomeScreen'
import { Menu, ShoppingBag, Bell } from '../library/icons'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'

const ShopitStack = createStackNavigator()

function ShopitStackNavigator () {

  return (
    <ShopitStack.Navigator
      screenOptions={{
        headerLeft: () => <Menu style={{color: colors.black}} />,
        headerRight: () => <>
          <Bell style={{color: colors.black, marginRight: 14}} />
          <ShoppingBag style={{color: colors.black}} />
        </>,
        headerLeftContainerStyle: {
          // borderWidth: 2,
          paddingHorizontal: 22
        },
        headerTitleStyle: {
          ...globalStyles.headline3
        },
        headerRightContainerStyle: {
          // borderWidth: 2,
          paddingHorizontal: 18,
          flexDirection: 'row',
          alignItems: 'center',
        }
      }}
    >
      <ShopitStack.Screen name="Shopit" component={HomeScreen} />
    </ShopitStack.Navigator>
  )
}

export default ShopitStackNavigator