import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from '../screens/main/CategoriesStack/CategoriesScreen'
import { Menu, ShoppingBag, Search } from '../library/icons'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'

const CategoriesStack = createStackNavigator()

function CategoriesStackNavigator ({ navigation }) {

  return (
    <CategoriesStack.Navigator
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
      <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
    </CategoriesStack.Navigator>
  )
}

export default CategoriesStackNavigator