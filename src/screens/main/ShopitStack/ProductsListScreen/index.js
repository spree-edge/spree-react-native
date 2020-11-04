import * as React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Filters, SortAZ } from '../../../../library/icons'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'
import { styles } from './styles'
import { connect } from 'react-redux'
import { BottomSheet, ListItem } from 'react-native-elements'
import ActivityIndicatorCard from '../../../../library/components/ActivityIndicatorCard'
import { getTaxon, getProductsList, getProduct } from '../../../../redux'

const FlatListImageItem = ({ item, onPress, imageStyle, itemContainerStyle }) => {

  return (
    <TouchableOpacity onPress={onPress} style={itemContainerStyle}>
      <Image
        source={{
          uri: `http://192.168.1.5:3000/${item.images[0].styles[3].url}`
        }}
        style={{ width: imageStyle.width, height: imageStyle.height, resizeMode: 'cover' }}
      />
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.description}>Women Sea Wash Pleated Dress</Text>
        <View style={styles.pricingContainer}>
          <Text style={[styles.prices, {color: colors.black}]}>{item.display_price[0] + (item.price / 100 * 70).toPrecision(4)}</Text>
          <Text style={[styles.prices, styles.price]}>${item.price}</Text>
          <Text style={[styles.prices, styles.discountPercent]}>(30% OFF)</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const ProductListScreen = ({ navigation, route, dispatch, productsList, saving, minimumPrice, maximumPrice }) => {

  const [pageIndex, setPageIndex] = React.useState(1)
  const [isSortOverlayVisible, setIsSortOverlayVisible] = React.useState(false);
 
  const isTaxon = route.params?.taxon

  const productsSortList = [
    { 
      title: 'Price: lowest to high',
      onPress: () => setProductListLowToHigh()
    },
    {
      title: 'Price: highest to low',
      onPress: () => setProductListHighToLow()
    },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: colors.error },
      titleStyle: { color: 'white' },
      onPress: () => setIsSortOverlayVisible(false),
    },
  ];

  const setProductListHighToLow = () => {
    productsList.sort((a, b) => a.price < b.price ? 1 : -1)
    setIsSortOverlayVisible(false)
  }

  const setProductListLowToHigh = () => {
    productsList.sort((a, b) => a.price > b.price ? 1 : -1)
    setIsSortOverlayVisible(false)
  }

  React.useEffect(() => {
    isTaxon
    ? dispatch(getTaxon(route.params.id))
    : dispatch(getProductsList(null, {
        pageIndex,
        filter: {
          name: route.params?.searchQuery || '',
          price: `${minimumPrice},${maximumPrice}`
        }
      }))
    navigation.setOptions({ title: route.params.title || route.params.searchQuery })
  }, [])

  const handleProductLoad = async (id) => {
    await dispatch(getProduct(id))
    navigation.navigate('ProductDetail')
  }

  const newJustInRenderItem = ({ item }) => {
    return (
      <FlatListImageItem
        key={item.id}
        item={item}
        onPress={() => handleProductLoad(item.id)}
        imageStyle={styles.newJustInImage}
        itemContainerStyle={styles.newJustInItemContainer}
      />
    )
  }

  if(saving) {
    return (
      <ActivityIndicatorCard />
    )
  } else
  return (
    <>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBlock} onPress={() => setIsSortOverlayVisible(true)} >
          <SortAZ size={22} style={{ color: colors.black }}/>
          <Text style={globalStyles.latoRegular14}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterBlock, { borderWidth: 2 }]} onPress={() => navigation.navigate('FiltersTabNavigator', {titie: route.params.title})}>
          <Filters size={22} style={{ color: colors.black,
            transform: [{ rotate: "90deg" }]
          }} />
          <Text style={globalStyles.latoRegular14}> Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={[globalStyles.containerFluid, globalStyles.mt24]}>
        <FlatList
          data={productsList}
          keyExtractor={item => item.id}
          renderItem={newJustInRenderItem}
          numColumns={2}
          onEndReachedThreshold={0.3}
          onEndReached={({ distanceFromEnd }) => {
            if(!isTaxon)
            {
              setPageIndex(pageIndex + 1)
              dispatch(getProductsList(null, { pageIndex: pageIndex+1 }))
            } else {null}
          }}
          ListFooterComponent={() => <ActivityIndicator size="large" /> }
        />
      </View>
      <BottomSheet isVisible={isSortOverlayVisible}>
        {productsSortList.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const isTaxon = ownProps.route.params?.taxon

  return {
    productsList: isTaxon
      ? state.taxons.taxon.products
      : state.products.productsList,
    saving: isTaxon
      ? state.taxons.saving
      : state.products.saving,
    minimumPrice: state.products.params.priceRange.minimum,
    maximumPrice: state.products.params.priceRange.maximum
  }
}

export default connect(mapStateToProps)(ProductListScreen)