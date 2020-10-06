import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { globalStyles } from '../../../../../styles/global'
import { Button } from 'react-native-elements'
import ProductCard from '../../../../../library/components/ProductCard'
import TextField from '../../../../../library/components/TextField'
import { styles } from './styles'
import { checkoutStyles } from '../styles'
import CheckoutDetailsCard from '../../../../../library/components/CheckoutDetailsCard'
import ActionButtonFooter from '../../../../../library/components/ActionButtonFooter'

const BagScreen = ({ navigation }) => {
  const [promoCode, setPromoCode] = React.useState('')

  return (
    <View style={ globalStyles.containerFluid }>
      <ScrollView>
        <View style={globalStyles.container}>
          {
            BAG.map(ele => <ProductCard 
              key={ele.id}
              counter
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

        <CheckoutDetailsCard title="Price Details" />

        <View style={styles.footer}>
          <Text style={[globalStyles.textPrimary, globalStyles.subhead]}>Continue Shopping</Text>
        </View>
      </ScrollView>
      
      <ActionButtonFooter
        title="Proceed to Checkout"
        onPress={() => navigation.navigate('ShippingAddress')}
      />
    </View>
  )
}

export default BagScreen

const BAG = [
  {
    id: 1,
    name: 'Tokyo Talkies',
    color: '#c4d5ef',
    size: 'M',
    price: 32.90,
    soldOut: false,
    discountedPrice: 29.90,
    discountPercent: 20,
    imageSource: require('../../../../../../assets/images/favorites/product-image-1/product-image.png'),
    description: 'Women Sea Wash Pleated Dress'
  },
  {
    id: 2,
    name: 'W',
    color: '#feeb7d',
    size: 'M',
    price: 19.90,
    soldOut: false,
    discountedPrice: 25.90,
    discountPercent: 20,
    imageSource: require('../../../../../../assets/images/favorites/product-image-2/product-image-2.png'),
    description: 'Women Yellow & Green Floral Print Kurta'
  },
  {
    id: 3,
    name: 'Joy Colors',
    color: '#c5496c',
    size: '',
    price: 3.90,
    soldOut: false,
    discountedPrice: 2.00,
    discountPercent: 20,
    imageSource: require('../../../../../../assets/images/favorites/product-image-3/product-image-3.png'),
    description: 'Metallic Lipstick Pink 4 - 3.7 g'
  }
]