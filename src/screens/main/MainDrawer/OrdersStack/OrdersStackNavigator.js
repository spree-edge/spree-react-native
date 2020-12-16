import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import OrdersScreen from './OrdersScreen'
import { Menu, ShoppingBag, Search } from '../../../../library/icons'
import { colors } from '../../../../res/palette'
import { globalStyles } from '../../../../styles/global'

const OrdersStack = createStackNavigator()

function OrdersStackNavigator ({ navigation }) {

  return (
    <OrdersStack.Navigator
      screenOptions={{
        headerLeft: () => <Menu size={24} style={{color: colors.black}} 
          onPress={() => navigation.openDrawer()}
        />,
        headerRight: () => <>
          <Search size={24} style={{color: colors.black, marginRight: 14}} />
          <ShoppingBag size={24} style={{color: colors.black}} onPress={() => navigation.navigate('Bag')} />
        </>,
        headerLeftContainerStyle: {
          paddingHorizontal: 22
        },
        headerTitleStyle: {
          ...globalStyles.latoBold18
        },
        headerRightContainerStyle: {
          paddingHorizontal: 18,
          flexDirection: 'row',
          alignItems: 'center',
        }
      }}
    >
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
    </OrdersStack.Navigator>
  )
}

export default OrdersStackNavigator