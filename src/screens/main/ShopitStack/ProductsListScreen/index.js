import * as React from 'react'
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { Filters, SortAZ } from '../../../../library/icons'
import FlatListProductCard from '../../../../library/components/FlatListProductCard'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'
import { styles } from './styles'
import { connect } from 'react-redux'
import { getProductsList } from '../../../../redux/actions/productActions'

const FlatListImageItem = ({ item, onPress, imageStyle, itemContainerStyle }) => {
  // console.log(item)
  const imageURI = item && item.images[0].styles[4].url
  console.log(imageURI)

  return (
    <TouchableOpacity onPress={onPress} style={itemContainerStyle}>
      <Image
        // source={{
        //   uri: `http://192.168.1.7:3000/${item.images[0].styles[4].url}`
        // }}
        // source={item.source}
        style={{ width: imageStyle.width, height: imageStyle.height }}
      />
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
}

const ProductListScreen = ({ navigation, dispatch, productsList }) => {
  // console.log(productsList)

  React.useEffect(() => {
    dispatch(getProductsList())
    // return () => {
    //   cleanup
    // }
  }, [])

  const newJustInRenderItem = ({ item }) => {
    return (
      <FlatListProductCard
        key={item.id}
        item={item}
        onPress={() => navigation.navigate('ProductDetail', { itemId: item.id + 1, defaultVariant: 117/* item.default_variant */ })}
        imageStyle={styles.newJustInImage}
        itemContainerStyle={styles.newJustInItemContainer}
      />
      // <FlatListImageItem
      //   key={item.id}
      //   item={item}
      //   onPress={() => navigation.navigate('ProductDetail', { itemId: item.id })}
      //   imageStyle={styles.newJustInImage}
      //   itemContainerStyle={styles.newJustInItemContainer}
      // />
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
        {/* <FlatList
          data={productsList}
          keyExtractor={item => item.id}
          renderItem={newJustInRenderItem}
          numColumns={2}
          // contentContainerStyle={{borderWidth: 2, flexGrow: 1, justifyContent: 'center'}}
        /> */}
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => ({
  productsList: state.products.productsList
})

export default connect(mapStateToProps)(ProductListScreen)

const WOMENS_DRESS_LIST = [
  {
    id: 0,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img.png')
  },
  {
    id: 1,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-2.png')
  },
  {
    id: 2,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-3.png')
  },
  {
    id: 3,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-4.png')
  },
  {
    id: 4,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-5.png')
  },
  {
    id: 5,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-6.png')
  },
  {
    id: 6,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-7.png')
  },
  {
    id: 7,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-8.png')
  },
  {
    id: 8,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-9.png')
  },
  {
    id: 9,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-10.png')
  },
  {
    id: 10,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-11.png')
  },
  {
    id: 11,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-12.png')
  },
  {
    id: 12,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-13.png')
  },
  {
    id: 13,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-14.png')
  },
  {
    id: 14,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-15.png')
  },
  {
    id: 15,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-16.png')
  },
  {
    id: 16,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-17.png')
  },
  {
    id: 17,
    name: 'Tokyo Talkies',
    price: 32.90,
    discountedPrice: 29.90,
    discountPercent: 20,
    description: 'Women Sea Wash Pleated Dress',
    source: require('../../../../../assets/images/womens-dress-product-list-images/product-img-18.png')
   }
]