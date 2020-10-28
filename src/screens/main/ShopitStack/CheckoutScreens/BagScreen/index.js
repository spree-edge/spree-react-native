import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { globalStyles } from '../../../../../styles/global'
import ProductCard from '../../../../../library/components/ProductCard'
import TextField from '../../../../../library/components/TextField'
import { styles } from './styles'
import { checkoutStyles } from '../styles'
import { connect } from 'react-redux'
import { getCart, removeLineItem, setQuantity } from '../../../../../redux'
import CheckoutDetailsCard from '../../../../../library/components/CheckoutDetailsCard'
import ActionButtonFooter from '../../../../../library/components/ActionButtonFooter'
import ActivityIndicatorCard from '../../../../../library/components/ActivityIndicatorCard'

const BagScreen = ({ navigation, dispatch, saving, cart, lineItemQuantity }) => {
  const [promoCode, setPromoCode] = React.useState('')

  React.useEffect(() => {
    dispatch(getCart())
  }, [])

  const handleRemoveLineItem = (lineItemId) => {
    dispatch(removeLineItem(lineItemId))
  }

  const handleIncrementQuantity = (lineItemId, lineItemQuantity) => {
    dispatch(setQuantity(
      {
        line_item_id: lineItemId,
        quantity: lineItemQuantity + 1
      }
    ))
  }

  const handleDecrementQuantity = (lineItemId, lineItemQuantity) => {
    if(lineItemQuantity === 1) {
      handleRemoveLineItem(lineItemId)
    } else {
      dispatch(setQuantity(
        {
          line_item_id: lineItemId,
          quantity: lineItemQuantity - 1
        }
      ))
    }
  }

  if(saving) {
    return (
      <ActivityIndicatorCard />
    )
  } else
  return (
    <View style={ globalStyles.containerFluid }>
      <ScrollView>
        <View style={globalStyles.container}>
          {
            cart.line_items.map(ele => <ProductCard 
              key={ele.id}
              counter
              onIncrementQuantity={() => handleIncrementQuantity(ele.id, ele.quantity)}
              onDecrementQuantity={() => handleDecrementQuantity(ele.id, ele.quantity)}
              onRemoveLineItem={() => handleRemoveLineItem(ele.id)}
              {...ele}
            />)
          }
        </View>
        <View style={[globalStyles.containerFluid, globalStyles.bgWhite, globalStyles.mt16]}>
          <View style={[ globalStyles.container, globalStyles.mt8 ]}>
            <Text style={[ globalStyles.latoBold14, globalStyles.mb8 ]}>Promo Code</Text>
            <TextField
              placeholder=" Enter Promo Code"
              containerStyle={checkoutStyles.inputWrapperStyle}
              rightElement={<Text style={checkoutStyles.inputRightText}>Apply</Text>}
              onChangeText={setPromoCode}
              value={promoCode}
            />
          </View>
        </View>

        <CheckoutDetailsCard title="Price Details" display_total={cart && cart.display_total} />

        <View style={styles.footer}>
          <Text style={[globalStyles.textPrimary, globalStyles.latoBold16]}>Continue Shopping</Text>
        </View>
      </ScrollView>
      
      <ActionButtonFooter
        title="Proceed to Checkout"
        onPress={() => navigation.navigate('ShippingAddress')}
      />
    </View>
  )
}

const mapStateToProps = state => ({
  saving: state.cart.saving,
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(BagScreen)