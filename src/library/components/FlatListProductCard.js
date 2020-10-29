import * as React from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../../styles/global'
import { colors } from '../../res/palette'

const FlatListProductCard = ({ item, onPress, imageStyle, itemContainerStyle }) => (
  <TouchableOpacity onPress={onPress} style={itemContainerStyle}>
    <Image source={item.source} style={{ width: imageStyle.width, height: imageStyle.height }} />
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.pricingContainer}>
        <Text style={[styles.prices, styles.discountedPrice]}>${item.discountedPrice}</Text>
        <Text style={[styles.prices, styles.price]}>${item.price}</Text>
        <Text style={[styles.prices, styles.discountPercent]}>({item.discountPercent}% OFF)</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export default FlatListProductCard

const styles = StyleSheet.create({
  detailsContainer: {
    ...globalStyles.container,
    paddingVertical: 10
  },
  title: {
    ...globalStyles.latoBold14
  },
  description: {
    ...globalStyles.latoRegular,
    color: colors.gray
  },
  pricingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 160,
  },
  prices: {
    ...globalStyles.latoBold14
  },
  discountedPrice: {
    ...globalStyles.prices,
    color: colors.black
  },
  price: {
    ...globalStyles.prices,
    color: colors.gray,
    textDecorationLine: 'line-through'
  },
  discountPercent: {
    ...globalStyles.prices,
    color: colors.error
  },
})