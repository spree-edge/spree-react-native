import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import FavouritesScreen from '../screens/main/FavouritesStack/FavouritesScreen'
import { Menu, ShoppingBag, Search } from '../library/icons'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'

const FavouritesStack = createStackNavigator()

function FavouritesStackNavigator () {

  return (
    <FavouritesStack.Navigator
      screenOptions={{
        headerLeft: () => <Menu style={{color: colors.black}} />,
        headerRight: () => <>
          <Search style={{color: colors.black, marginRight: 14}} />
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
      <FavouritesStack.Screen name="Favorites" component={FavouritesScreen} />
    </FavouritesStack.Navigator>
  )
}

export default FavouritesStackNavigator