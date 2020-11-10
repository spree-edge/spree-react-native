import * as React from 'react'
import { View, ScrollView } from 'react-native'
import ProductCard from '../../../library/components/ProductCard'
import { globalStyles } from '../../../styles/global'
import { useSelector } from 'react-redux'

const FavouritesScreen = () => {
  const favourites = useSelector(state => state.products.favourites)

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        {
          favourites.map(ele => <ProductCard
            key={ele.id}
            shoppingBag
            imageSource={ele.images[0].styles[3].url}
            {...ele}
          />)
        }
      </View>
    </ScrollView>
  )
}

export default FavouritesScreen