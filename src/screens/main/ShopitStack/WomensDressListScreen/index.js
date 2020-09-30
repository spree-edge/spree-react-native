import * as React from 'react'
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { Filters, SortAZ } from '../../../../library/icons'
// import FlatListImageItem  from '../../../library/components/FlatListImageItem'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'
import { styles } from './styles'

const FlatListImageItem = ({ item, onPress, imageStyle, itemContainerStyle }) => (
  <TouchableOpacity onPress={onPress} style={itemContainerStyle}>
    <Image source={item.source} style={{ width: imageStyle.width, height: imageStyle.height }} />
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.pricingContainer}>
        <Text style={[styles.prices, {color: colors.black}]}>${item.discountedPrice}</Text>
        <Text style={[styles.prices, styles.price]}>${item.price}</Text>
        <Text style={[styles.prices, styles.discountPercent]}>({item.discountPercent}% OFF)</Text>
      </View>
    </View>
  </TouchableOpacity>
)

const WomensDressListScreen = ({ navigation }) => {

  const newJustInRenderItem = ({ item }) => {
    return (
      <FlatListImageItem
        key={item.id}
        item={item}
        onPress={() => navigation.navigate('ProductDetail', { itemId: item.id })}
        imageStyle={styles.newJustInImage}
        itemContainerStyle={styles.newJustInItemContainer}
      />
    )
  }

  return (
    <ScrollView>
      <View style={styles.filterContainer}>
        <View style={styles.filterBlock}>
          <SortAZ size={22} style={{ color: colors.black }}/>
          <Text style={globalStyles.latoRegular14}>Sort</Text>
        </View>
        <TouchableOpacity style={[styles.filterBlock, { borderWidth: 2 }]} onPress={() => navigation.navigate('FiltersDrawerNavigator')}>
          <Filters size={22} style={{ color: colors.black,
            transform: [{ rotate: "90deg" }]
          }} />
          <Text style={globalStyles.latoRegular14}> Filter</Text>
        </TouchableOpacity>
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

const WOMENS_DRESS_LIST = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-2.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-3.png')
  },
  {
    id: 'bd7abcde-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-4.png')
  },
  {
    id: 'bd7fghij-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-5.png')
  },
  {
    id: 'bd7klmno-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-6.png')
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-7.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-8.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-9.png')
  },
  {
    id: 'bd7abcde-c1b1-46c2-aed5-3ad53abb28bb',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-10.png')
  },
  {
    id: 'bd7fghij-c1b1-46c2-aed5-3ad53abb28bb',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-11.png')
  },
  {
    id: 'bd7klmno-c1b1-46c2-aed5-3ad53abb28bb',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-12.png')
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-13.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-14.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-15.png')
  },
  {
    id: 'bd7abcde-c1b1-46c2-aed5-3ad53abb28bc',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-16.png')
  },
  {
    id: 'bd7fghij-c1b1-46c2-aed5-3ad53abb28bc',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-17.png')
  },
  {
    id: 'bd7klmno-c1b1-46c2-aed5-3ad53abb28bc',
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-18.png')
   }
]