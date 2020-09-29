import * as React from 'react'
import { View, ScrollView } from 'react-native'
import ProductCard from '../../../library/components/ProductCard'
import { globalStyles } from '../../../styles/global'

const FavouritesScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        {
          FAVOURITES_PRODUCT.map(ele => <ProductCard 
            key={ele.id}
            shoppingBag
            {...ele}
          />)
        }
      </View>
    </ScrollView>
  )
}

export default FavouritesScreen

const FAVOURITES_PRODUCT = [
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