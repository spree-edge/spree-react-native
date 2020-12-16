import * as React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { globalStyles } from '../../../../../styles/global'
import { getCompletedOrders, resetCompletedOrders } from '../../../../../redux'
import ProductCard from '../../../../../library/components/ProductCard'
import ActivityIndicatorCard from '../../../../../library/components/ActivityIndicatorCard'

const OrdersScreen = ({ navigation, dispatch, orders, saving }) => {
  React.useEffect(() => {
    dispatch(getCompletedOrders())
    return () => {
      dispatch(resetCompletedOrders())
    }
  }, [])

  if(saving) {
    return (
      <ActivityIndicatorCard />
    )
  } else
  return (
    <ScrollView>
      <View style={[globalStyles.container, globalStyles.mb114]}>
        {
          orders.map(order => {
            return (
              <View style={globalStyles.mt24}>
                <Text style={globalStyles.latoRegular14}>Order ID : {order.number}</Text>
                {order.variants.map(variant => <ProductCard
                  key={variant.id}
                  imageSource={variant.images[0].styles[3].url}
                  {...variant}
                />)}
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => ({
  orders: state.account.orders,
  saving: state.account.saving
})

export default connect(mapStateToProps)(OrdersScreen)