import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import FavouritesScreen from '../screens/main/FavouritesStack/FavouritesScreen'

const FavouritesStack = createStackNavigator()

function FavouritesStackNavigator () {

  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen name="Favourites" component={FavouritesScreen} />
    </FavouritesStack.Navigator>
  )
}

export default FavouritesStackNavigator