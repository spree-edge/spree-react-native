import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import FavouritesScreen from '../screens/main/FavouritesStack/FavouritesScreen'
import { Menu, ShoppingBag, Search } from '../library/icons'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'
import { useSelector } from 'react-redux'
import CustomTitle from '../library/components/CustomTitle'

const FavouritesStack = createStackNavigator()

function FavouritesStackNavigator ({ navigation }) {
  const favourites = useSelector(state => state.products.favourites)

  return (
    <FavouritesStack.Navigator
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
      <FavouritesStack.Screen name="Favorites" component={FavouritesScreen}
        options={{ headerTitle: <CustomTitle title="Favorites" length={favourites.length} /> }}
      />
    </FavouritesStack.Navigator>
  )
}

export default FavouritesStackNavigator