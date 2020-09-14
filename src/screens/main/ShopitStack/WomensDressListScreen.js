import * as React from 'react'
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { Filters, SortAZ } from '../../../library/icons'
// import FlatListImageItem  from '../../../library/components/FlatListImageItem'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'

const FlatListImageItem = ({ item, onPress, imageStyle, itemContainerStyle, ...props }) => (
  <TouchableOpacity onPress={onPress} style={itemContainerStyle}>
    <Image source={item.source} style={{width: imageStyle.width, height: imageStyle.height }} />
    <View style={[globalStyles.container, styles.detailsContainer]}>
      <Text style={[globalStyles.descriptiveItem, styles.paletteBlack]}>{item.name}</Text>
      <Text style={[globalStyles.descriptionText, styles.description]}>{item.description}</Text>
      <View style={styles.pricingContainer}>
        <Text style={[styles.prices, {color: '#000'}]}>${item.discountedPrice}</Text>
        <Text style={[styles.prices, styles.price]}>${item.price}</Text>
        <Text style={[styles.prices, styles.discountPercent]}>({item.discountPercent}% OFF)</Text>
      </View>
    </View>
  </TouchableOpacity>
)

const WomensDressListScreen = () => {

  const newJustInRenderItem = ({ item }) => {
    return (
      <FlatListImageItem
        key={item.id}
        item={item}
        onPress={() => console.log(item.id)}
        imageStyle={styles.newJustInImage}
        itemContainerStyle={styles.newJustInItemContainer}
      />
    )
  }

  return (
    <ScrollView>
      <View style={styles.filterContainer}>
        <View style={styles.filterBlock}>
          <SortAZ size={22} style={{color: colors.black}}/>
          <Text style={[globalStyles.lead]}>Sort</Text>
        </View>
        <View style={styles.filterBlock}>
          <Filters size={22} style={{color: colors.black,
          transform: [{ rotate: "90deg" }]
        }}/>
          <Text style={[globalStyles.lead]}>Filter</Text>
        </View>
      </View>
      <View style={[globalStyles.container, globalStyles.mt24]}>
        <FlatList
          data={WOMENS_DRESS_LIST}
          keyExtractor={item => item.id}
          renderItem={newJustInRenderItem}
          numColumns={2}
          // contentContainerStyle={{borderWidth: 2, flexGrow: 1, justifyContent: 'center'}}
        />
      </View>
    </ScrollView>
  )
}

export default WomensDressListScreen

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white
  },
  filterBlock: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    borderStartColor: 'grey',
    alignItems: 'center',
    padding: 10,
    borderEndWidth: .7,
    borderTopWidth: .2,
    borderBottomWidth: .2
  },
  newJustInImage: {
    width: 185,
    height: 250,
  },
  newJustInItemContainer: {
    marginRight: 16,
    marginBottom: 16,
    backgroundColor: colors.white
  },
  paletteBlack: {
    color: colors.black
  },
  description: {
    fontSize: 12,
    color: '#9b9b9b'
  },
  pricingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 160,
    // borderWidth: 2
  },
  prices: {
    fontFamily: 'lato-bold',
  },
  discountPercent: {
    color: colors.error
  },
  detailsContainer: {
    paddingVertical: 10
  },
  price: {
    color: colors.gray,
    textDecorationLine: 'line-through'
  }
})

const WOMENS_DRESS_LIST = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../assets/images/womens-dress-product-list-images/product-img.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../assets/images/womens-dress-product-list-images/product-img-2.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../assets/images/womens-dress-product-list-images/product-img-3.png')
  },
  {
    id: 'bd7abcde-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../assets/images/womens-dress-product-list-images/product-img-4.png')
  },
  {
    id: 'bd7fghij-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../assets/images/womens-dress-product-list-images/product-img-5.png')
  },
  {
    id: 'bd7klmno-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../assets/images/womens-dress-product-list-images/product-img-6.png')
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../assets/images/womens-dress-product-list-images/product-img-7.png')
   },
   {
     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-8.png')
   },
   {
     id: '58694a0f-3da1-471f-bd96-145571e29d72',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-9.png')
   },
   {
     id: 'bd7abcde-c1b1-46c2-aed5-3ad53abb28ba',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-10.png')
   },
   {
     id: 'bd7fghij-c1b1-46c2-aed5-3ad53abb28ba',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-11.png')
   },
   {
     id: 'bd7klmno-c1b1-46c2-aed5-3ad53abb28ba',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-12.png')
   },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../assets/images/womens-dress-product-list-images/product-img-13.png')
   },
   {
     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-14.png')
   },
   {
     id: '58694a0f-3da1-471f-bd96-145571e29d72',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-15.png')
   },
   {
     id: 'bd7abcde-c1b1-46c2-aed5-3ad53abb28ba',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-16.png')
   },
   {
     id: 'bd7fghij-c1b1-46c2-aed5-3ad53abb28ba',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-17.png')
   },
   {
     id: 'bd7klmno-c1b1-46c2-aed5-3ad53abb28ba',
     name: 'Tokyo Talkies',
     price: 32.90,
     discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
     source: require('../../../../assets/images/womens-dress-product-list-images/product-img-18.png')
   }
]