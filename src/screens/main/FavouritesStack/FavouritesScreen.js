import * as React from 'react'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { Close, ShoppingBag } from '../../../library/icons'
import { colors } from '../../../res/palette'

const FavouriteCard = ({ imageSource, name, description, color, size, discountedPrice, price, discountPercent, soldOut }) => {
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
          <View style={{flex: 1}}>
            <Text style={[globalStyles.descriptiveItem, styles.paletteBlack]}>{name}</Text>
            <Text style={[globalStyles.descriptionText, styles.description]}>{description}</Text>
            <View style={styles.attributeContainer}>
              <View style={[styles.colorBadge, {backgroundColor: `${color}`}]} />
              <View style={[styles.productSizeStyle]}>
                <Text style={{paddingHorizontal: 5}}>{size}</Text>
              </View>
            </View>
            <View style={styles.pricingContainer}>
              <Text style={[styles.prices, {color: '#000'}]}>${discountedPrice}</Text>
              <Text style={[styles.prices, styles.price]}>${price}</Text>
              <Text style={[styles.prices, styles.discountPercent]}>({discountPercent}% OFF)</Text>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <Close size={24} style={{color: colors.black}} />
            <View style={styles.activeShoppingBag}>
              <ShoppingBag size={24} style={{color: colors.white}} />
            </View>
          </View>
        </View>
      </View>
      {soldOut ? <Text style={[globalStyles.descriptionText, styles.description]}>Sorry, this item is currently sold out.</Text> : null}
    </View>
  )
}

const FavouritesScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        {
          favouriteProducts.map(ele => <FavouriteCard 
            key={ele.id}
            {...ele}
          />)
        }
      </View>
    </ScrollView>
  )
}

export default FavouritesScreen

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
    marginTop: 6,
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
  paletteBlack: {
    color: colors.black
  },
  description: {
    fontSize: 11,
    marginTop: 4,
    color: '#9b9b9b'
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
  }
})

const favouriteProducts = [
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
    name: 'Baggit',
    color: '#485949',
    size: 'One Size',
    price: 12.90,
    soldOut: true,
    discountedPrice: 29.90,
    discountPercent: 30,
    imageSource: require('../../../../assets/images/favorites/product-image-2/product-image-2.png'),
    description: 'Olive Green Textured Sling Bag'
  },
  {
    id: 3,
    name: 'Libas',
    color: '#221e34',
    size: 'M',
    price: 25.90,
    soldOut: false,
    discountedPrice: 9.90,
    discountPercent: 20,
    imageSource: require('../../../../assets/images/favorites/product-image-3/product-image-3.png'),
    description: 'Women Navy Blue Block Print Kurta'
  },
  {
    id: 4,
    name: 'Kurta',
    color: '#feeb7d',
    size: 'M',
    price: 25.90,
    soldOut: false,
    discountedPrice: 19.90,
    discountPercent: 20,
    imageSource: require('../../../../assets/images/favorites/product-image-4/product-image-4.png'),
    description: 'Women Yellow & Green Floral Print Kurta'
  },
  {
    id: 5,
    name: 'Lia Art Jewellery',
    color: '#c4d5ef',
    size: '',
    price: 32.90,
    soldOut: true,
    discountedPrice: 19.90,
    discountPercent: 20,
    imageSource: require('../../../../assets/images/favorites/product-image-5/product-image-5.png'),
    description: 'Gold-Plated & Green Classic Jhumkas'
  },
  {
    id: 6,
    name: 'Joy Colors',
    color: '#c5496c',
    size: '',
    price: 3.90,
    soldOut: false,
    discountedPrice: 2.00,
    discountPercent: 20,
    imageSource: require('../../../../assets/images/favorites/product-image-6/product-image-6.png'),
    description: 'Metallic Lipstick Pink 4 - 3.7 g'
  },
  {
    id: 7,
    name: 'Caprese',
    color: '#de4842',
    size: 'One Size',
    price: 25.90,
    soldOut: false,
    discountedPrice: 19.90,
    discountPercent: 20,
    imageSource: require('../../../../assets/images/favorites/product-image-7/product-image-7.png'),
    description: 'Pink Solid Handheld Bag'
  },
]