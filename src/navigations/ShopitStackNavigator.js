import * as React from "react"
import { Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/main/ShopitStack/HomeScreen'
import ProductsListScreen from '../screens/main/ShopitStack/ProductsListScreen'
import ProductDetailScreen from '../screens/main/ShopitStack/ProductDetailScreen'
import ShippingAddressScreen from '../screens/main/ShopitStack/CheckoutScreens/ShippingAddressScreen'
import PaymentScreen from '../screens/main/ShopitStack/CheckoutScreens/PaymentScreen'
import BagScreen from '../screens/main/ShopitStack/CheckoutScreens/BagScreen'
import FiltersTabNavigator from './FiltersTabNavigator'
import { Menu, ShoppingBag, Bell, Heart, Share } from '../library/icons'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'
import { useSelector } from 'react-redux'
import CustomTitle from '../library/components/CustomTitle'

const ShopitStack = createStackNavigator()

function ShopitStackNavigator ({ navigation }) {
  const productsList = useSelector(state => state.products.productsList)

  return (
    <ShopitStack.Navigator
      screenOptions={{
        headerRight: () => <>
          <Bell size={24} style={{color: colors.black, marginRight: 14}} />
          <ShoppingBag size={24} style={{color: colors.black}}
            onPress={() => navigation.navigate('Bag')}
          />
        </>,
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
      <ShopitStack.Screen name="Shop" component={HomeScreen}
        options={{
          headerTitle: 'Spree Shop',
          headerLeft: () => <Menu size={24} style={{color: colors.black}}
            onPress={() => navigation.openDrawer()}
          />,
          headerLeftContainerStyle: {
            paddingHorizontal: 22
          }
        }}
      />
      <ShopitStack.Screen name="ProductsList" component={ProductsListScreen}
        options={({ route }) => ({ headerTitle: <CustomTitle title={route.params.title || route.params.searchQuery || 'ProductsList'} length={productsList.length} /> })}
      />
      <ShopitStack.Screen name="ProductDetail" component={ProductDetailScreen}
        options={{
          headerTitle: 'Tokyo Talkies',
          headerRightContainerStyle: styles.headerRight,
          headerRight: () => (
            <>
              <Share size={24} style={{color: colors.black}} />
              <Heart size={24} style={{color: colors.black}} onPress={() => navigation.navigate('Favorites')} />
              <ShoppingBag size={24} style={{color: colors.black}} onPress={() => navigation.navigate('Bag')} />
            </>
          ),
        }}
      />
      <ShopitStack.Screen name="Bag" component={BagScreen}
        options={{
          headerTitle: 'Your Bag',
          headerRight: () => <Heart size={24} style={{color: colors.black}} onPress={() => navigation.navigate('Favorites')} />
        }}
      />
      <ShopitStack.Screen name="FiltersTabNavigator" component={FiltersTabNavigator}
        options={{
          headerTitle: 'Filters',
          headerRight: () => <Text style={styles.resetButton}>Reset All</Text>
        }}
      />
      <ShopitStack.Screen name="ShippingAddress" component={ShippingAddressScreen}
        options={{
          headerTitle: 'Shipping Address',
          headerRight: () => <Heart size={24} style={{color: colors.black}} onPress={() => navigation.navigate('Favorites')} />
        }}
      />
      <ShopitStack.Screen name="CheckoutPayment" component={PaymentScreen}
        options={{
          headerTitle: 'Payment',
          headerRight: () => <Heart size={24} style={{color: colors.black}} onPress={() => navigation.navigate('Favorites')} />
        }}
      />
    </ShopitStack.Navigator>
  )
}

export default ShopitStackNavigator

const styles = StyleSheet.create({
  headerRight: {
    borderColor: '#000',
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resetButton: {
    ...globalStyles.textPrimary
  }
})