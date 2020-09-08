import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from '../screens/main/CategoriesStack/CategoriesScreen'

const CategoriesStack = createStackNavigator()

function CategoriesStackNavigator () {

  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
    </CategoriesStack.Navigator>
  )
}

export default CategoriesStackNavigator