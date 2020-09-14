import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/main/ShopitStack/HomeScreen'
import WomensDressListScreen from '../screens/main/ShopitStack/WomensDressListScreen'
import { Menu, ShoppingBag, Bell } from '../library/icons'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'

const ShopitStack = createStackNavigator()

function ShopitStackNavigator () {

  return (
    <ShopitStack.Navigator
      screenOptions={{
        headerRight: () => <>
          <Bell size={24} style={{color: colors.black, marginRight: 14}} />
          <ShoppingBag size={24} style={{color: colors.black}} />
        </>,
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
      <ShopitStack.Screen name="Shopit" component={HomeScreen}
        options={{
          headerLeft: () => <Menu size={24} style={{color: colors.black}} />,
          headerLeftContainerStyle: {
            // borderWidth: 2,
            paddingHorizontal: 22
          }
        }}
      />
      <ShopitStack.Screen name="WomensDressList" component={WomensDressListScreen}
        options={{ headerTitle: 'Womens Dress'}}
      />
    </ShopitStack.Navigator>
  )
}

export default ShopitStackNavigator