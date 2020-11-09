import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { globalStyles } from '../../../../../styles/global'
import ProductCard from '../../../../../library/components/ProductCard'
import TextField from '../../../../../library/components/TextField'
import { styles } from './styles'
import { checkoutStyles } from '../styles'
import { connect } from 'react-redux'
import { Snackbar } from 'react-native-paper'
import CheckoutDetailsCard from '../../../../../library/components/CheckoutDetailsCard'
import ActionButtonFooter from '../../../../../library/components/ActionButtonFooter'
import ActivityIndicatorCard from '../../../../../library/components/ActivityIndicatorCard'
import { getCart, removeLineItem, setQuantity, getDefaultCountry, getCountriesList } from '../../../../../redux'

const BagScreen = ({ navigation, dispatch, saving, cart }) => {
  const [promoCode, setPromoCode] = React.useState('')
  const [snackbarVisible, setSnackbarVisible] = React.useState(false)

  React.useEffect(() => {
    dispatch(getCart())
  }, [])

  const handleToCheckout = async () => {
    if(cart.state === "cart") {
      await dispatch(getDefaultCountry())
      await dispatch(getCountriesList())
      navigation.navigate('ShippingAddress')
    } else {
      navigation.navigate('CheckoutPayment')
    }
  }

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
    <>
      <View style={ globalStyles.containerFluid }>
        <ScrollView>
          <View style={globalStyles.container}>
            {
              cart.line_items.map((ele, i) => <ProductCard 
                key={i}
                cart
                counter
                imageSource={ele.variant.images[0].styles[3].url}
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
          onPress={handleToCheckout}
        />
      </View>
      <Snackbar
        visible={snackbarVisible}
        duration={3000}
        >
        SetQuantity Success !
      </Snackbar>
    </>
  )
}

const mapStateToProps = state => ({
  saving: state.checkout.saving,
  cart: state.checkout.cart,
})

export default connect(mapStateToProps)(BagScreen)