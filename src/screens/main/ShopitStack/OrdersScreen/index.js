import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { globalStyles } from '../../../../styles/global'
import ProductCard from '../../../../library/components/ProductCard'
import { styles } from './styles'
import { connect } from 'react-redux'
import { getOrders } from '../../../../redux'
import ActionButtonFooter from '../../../../library/components/ActionButtonFooter'
import ActivityIndicatorCard from '../../../../library/components/ActivityIndicatorCard'

const OrdersScreen = ({ navigation, dispatch, saving, orders }) => {
  React.useEffect(() => {
    dispatch(getOrders())
  }, [])

  if(saving) {
    return (
      <ActivityIndicatorCard />
    )
  } else
  return (
    <>
      <View style={ globalStyles.containerFluid }>
        <ScrollView>
          <View style={globalStyles.container}>
            {
              // orders.line_items.map(ele => <ProductCard 
              //   key={ele.id}
              //   {...ele}
              // />)
              orders.map(order => 
                order.line_items.map(item => <ProductCard
                  orders
                  key={item.id}
                  {...item}
                />)
              )
            }
          </View>
        </ScrollView>
        
        <ActionButtonFooter
          title="Continue Shopping"
          onPress={() => {
            navigation.navigate('ProductsList')}
          }
        />
      </View>
    </>
  )
}

const mapStateToProps = state => ({
  saving: state.cart.saving,
  orders: state.account.orders
})

export default connect(mapStateToProps)(OrdersScreen)