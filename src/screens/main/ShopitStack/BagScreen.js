import * as React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'
import { Divider, Input, Button } from 'react-native-elements'
import ProductCard from '../../../library/components/ProductCard'

const BagScreen = ({ navigation }) => {
  const [inputBorder, setInputBorder] = React.useState(false)

  return (
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
          <Text style={[ styles.titleMedium, globalStyles.mb8 ]}>Promo Code</Text>
          <Input
            placeholder="Enter Promo Code" 
            keyboardType="default"
            onFocus={() => setInputBorder(true)}
            onBlur={() => setInputBorder(false)}
            containerStyle={[globalStyles.mb16, {
              backgroundColor: '#fff', 
              height: 52, 
              borderRadius: 4,
              borderWidth: 1,
              borderColor: inputBorder ? colors.primary : '#ccc',
            }]}
            inputStyle={globalStyles.latoRegular}
            inputContainerStyle={{ borderBottomColor: '#fff'}}
            rightIcon={() => <Text style={styles.inputRight}>Apply</Text>}
          />
        </View>
      </View>

      <View style={styles.priceDetailsContainer}>
        <View style={[ globalStyles.container, globalStyles.mt8 ]}>
          <Text style={[ styles.titleMedium]}>Price Details</Text>
        </View>
        <Divider style={styles.dividerStyle} />
        <View style={[ globalStyles.container, globalStyles.mt8 ]}>
          <View style={[ styles.priceDetailsRow, globalStyles.mt8 ]}>
            <Text style={[ globalStyles.label, styles.productDetailsText]}>Subtotal</Text>
            <Text style={[ globalStyles.label, styles.productDetailsText]}>$50.00</Text>
          </View>
          <View style={[ styles.priceDetailsRow, globalStyles.mt8 ]}>
            <Text style={[ globalStyles.label, styles.productDetailsText]}>Promo Discount</Text>
            <Text style={[ globalStyles.label, styles.productDetailsText]}>-$3.40</Text>
          </View>
        </View>
        <Divider style={styles.dividerStyle} />
        <View style={globalStyles.container}>
          <Button
            title="Proceed to Checkout"
            type="solid"
            containerStyle={{flex: 1}}
            buttonStyle={[ globalStyles.btn, globalStyles.primary, globalStyles.mt16]}
            onPress={() => navigation.navigate('ShippingAddress')}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={[globalStyles.textPrimary, globalStyles.subhead]}>Continue Shopping</Text>
      </View>
    </ScrollView>
  )
}

export default BagScreen

const styles = StyleSheet.create({
  titleMedium: {
    ...globalStyles.descriptiveItem,
    ...globalStyles.textDark,
  },
  productDetailsText: {
    fontSize: 14
  },
  inputRight: {
    ...globalStyles.latoRegular,
    ...globalStyles.textPrimary,
  },
  priceDetailsContainer: {
    ...globalStyles.containerFluid,
    ...globalStyles.bgWhite,
    ...globalStyles.mt16,
    paddingBottom: 32
  },
  priceDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1
  },
  dividerStyle: {
    ...globalStyles.mt8,
    backgroundColor: '#f5f5f5'
  },
  footer: {
    ...globalStyles.containerFluid,
    ...globalStyles.centeredContent,
    ...globalStyles.mb114,
    ...globalStyles.mt32
  }
})

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
    imageSource: require('../../../../assets/images/favorites/product-image-1/product-image.png'),
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
    imageSource: require('../../../../assets/images/favorites/product-image-2/product-image-2.png'),
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
    imageSource: require('../../../../assets/images/favorites/product-image-3/product-image-3.png'),
    description: 'Metallic Lipstick Pink 4 - 3.7 g'
  }
]