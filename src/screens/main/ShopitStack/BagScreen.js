import * as React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'
import { Close, MathMinus, MathPlus } from '../../../library/icons'
import { Divider, Input, Button } from 'react-native-elements'

const BagItemCard = ({ imageSource, name, description, color, size, discountedPrice, price, discountPercent, soldOut }) => {
  return (
    <View style={{marginTop: 16}}>
      <View style={[styles.favouriteCardContainer,
        soldOut ? styles.inactiveCard : null
      ]}>
        <Image
          source={imageSource}
          style={styles.favouriteCardImage}
        />
        <View style={styles.favouriteProductDetailsContainer}>
          <View style={globalStyles.containerFluid}>
            <Text style={[globalStyles.descriptiveItem, styles.paletteBlack]}>{name}</Text>
            <Text style={[globalStyles.descriptionText, styles.description]}>{description}</Text>
            <View style={styles.attributeCounterContainer}>
              <View style={styles.attributeContainer}>
                <View style={[styles.colorBadge, {backgroundColor: `${color}`}]} />
                <View style={[styles.productSizeStyle]}>
                  <Text style={{paddingHorizontal: 5}}>{size}</Text>
                </View>
              </View>
              <View style={styles.counterContainer}>
                <MathMinus size={14} style={{color: colors.primary}} />
                <Text style={{color: colors.primary}}>1</Text>
                <MathPlus size={14} style={{color: colors.primary}} />
              </View>
            </View>
            <View style={styles.pricingContainer}>
              <Text style={[styles.prices, styles.discountedPrice]}>${discountedPrice}</Text>
              <Text style={[styles.prices, styles.price]}>${price}</Text>
              <Text style={[styles.prices, styles.discountPercent]}>({discountPercent}% OFF)</Text>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <Close size={18} style={{color: colors.black}} />
          </View>
        </View>
      </View>
      {soldOut ? <Text style={[globalStyles.descriptionText, styles.description]}>Sorry, this item is currently sold out.</Text> : null}
    </View>
  )
}

const BagScreen = () => {
  const [inputBorder, setInputBorder] = React.useState(false)

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        {
          BAG.map(ele => <BagItemCard 
            key={ele.id}
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
  favouriteCardContainer: {
    flexDirection: 'row'
  },
  inactiveCard: {
    opacity: 0.5
  },
  favouriteCardImage: {
    width: 100,
    height: 112
  },
  colorBadge: {
    width: 24,
    height: 24,
    borderRadius: 24,
    marginRight: 15
  },
  attributeContainer: {
    flexDirection: 'row',
    marginRight: 30,
    // borderWidth: 2
  },
  pricingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 180,
    // borderWidth: 2
  },
  price: {
    color: colors.gray,
    textDecorationLine: 'line-through'
  },
  prices: {
    fontFamily: 'lato-bold',
  },
  discountPercent: {
    color: colors.error
  },
  discountedPrice: {
    color: colors.black
  },
  paletteBlack: {
    color: colors.black
  },
  description: {
    fontSize: 11,
    marginTop: 4,
    color: colors.gray
  },
  productSizeStyle: {
    minWidth: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: "#222222",
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeShoppingBag: {
    width: 38,
    height: 38,
    borderRadius: 24,
    backgroundColor: "#ee3168",
    justifyContent: 'center',
    alignItems: 'center'
  },
  favouriteProductDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3%',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 112,
    // borderWidth: 1
  },
  actionsContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  counterContainer: {
    width: 62,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#ee316819",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  attributeCounterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    // borderWidth: 2,
  },
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