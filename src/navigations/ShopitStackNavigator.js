import * as React from "react"
import { Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/main/ShopitStack/HomeScreen'
import WomensDressListScreen from '../screens/main/ShopitStack/WomensDressListScreen'
import ProductDetailScreen from '../screens/main/ShopitStack/ProductDetailScreen'
import ShippingAddressScreen from '../screens/main/ShopitStack/CheckoutScreens/ShippingAddressScreen'
import PaymentScreen from '../screens/main/ShopitStack/CheckoutScreens/PaymentScreen'
import BagScreen from '../screens/main/ShopitStack/CheckoutScreens/BagScreen'
import FiltersDrawerNavigator from './FiltersDrawerNavigator'
import { Menu, ShoppingBag, Bell, Heart, Share } from '../library/icons'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'

const ShopitStack = createStackNavigator()

function ShopitStackNavigator ({ navigation }) {

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
          // borderWidth: 2,
          paddingHorizontal: 18,
          flexDirection: 'row',
          alignItems: 'center',
        }
      }}
    >
      <ShopitStack.Screen name="Shopit" component={HomeScreen}
        options={{
          headerLeft: () => <Menu size={24} style={{color: colors.black}}
            onPress={() => navigation.openDrawer()}
          />,
          headerLeftContainerStyle: {
            // borderWidth: 2,
            paddingHorizontal: 22
          }
        }}
      />
      <ShopitStack.Screen name="WomensDressList" component={WomensDressListScreen}
        options={{ headerTitle: 'Womens Dress'}}
      />
      <ShopitStack.Screen name="ProductDetail" component={ProductDetailScreen}
        options={{
          headerTitle: 'Tokyo Talkies',
          headerRightContainerStyle: styles.headerRight,
          headerRight: () => (
            <>
              <Share size={24} style={{color: colors.black}} />
              <Heart size={24} style={{color: colors.black}} />
              <ShoppingBag size={24} style={{color: colors.black}} />
            </>
          ),
        }}
      />
      <ShopitStack.Screen name="Bag" component={BagScreen}
        options={{
          headerTitle: 'Your Bag',
          headerRight: () => <Heart size={24} style={{color: colors.black}} />
        }}
      />
      <ShopitStack.Screen name="FiltersDrawerNavigator" component={FiltersDrawerNavigator}
        options={{
          headerTitle: 'Filters',
          headerRight: () => <Text style={styles.resetButton}>Reset All</Text>
        }}
      />
      <ShopitStack.Screen name="ShippingAddress" component={ShippingAddressScreen}
        options={{
          headerTitle: 'Shipping Address',
          headerRight: () => <Heart size={24} style={{color: colors.black}} />
        }}
      />
      <ShopitStack.Screen name="CheckoutPayment" component={PaymentScreen}
        options={{
          headerTitle: 'Payment',
          headerRight: () => <Heart size={24} style={{color: colors.black}} />
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
    // borderWidth: 1,
  },
  resetButton: {
    ...globalStyles.textPrimary
  }
})