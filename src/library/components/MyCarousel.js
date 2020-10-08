import * as React from 'react'
import { View, Image, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { colors } from '../../res/palette'

const MySlideComponent = ({ data }) => {
  return (
    <View>
      <Image
        source={data.source}
        style={{
          width: '100%',
          height: 500,
          resizeMode: 'cover'
        }}
      />
    </View>
  )
}

const _renderItem = ({ item, index }) => {
  return <MySlideComponent key={item.id} data={item} />
}

const MyCarousel = props => {
  const [activeSlide, setActiveSlide] = React.useState(0)
  const { width, height } = Dimensions.get('screen');
  const [entries] = React.useState([
    {
      id: 1,
      source: require('../../../assets/images/womens-dress-product-list-images/product-img.png')
    },
    {
      id: 2,
      source: require('../../../assets/images/womens-dress-product-list-images/product-img.png')
    },
    {
      id: 3,
      source: require('../../../assets/images/womens-dress-product-list-images/product-img.png')
    },
    {
      id: 4,
      source: require('../../../assets/images/womens-dress-product-list-images/product-img.png')
    },
    {
      id: 5,
      source: require('../../../assets/images/womens-dress-product-list-images/product-img.png')
    },
  ])

  return (
    <View>
      <Carousel
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={index => setActiveSlide(index)}
        sliderWidth={width}
        itemWidth={width}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ 
          backgroundColor: colors.white,
          borderColor: 'black',
          paddingTop: 8,
          paddingBottom: 5
          // borderWidth: 2,
        }}
        dotColor={colors.primary}
        dotStyle={{
          width: 20,
          height: 7,
          borderRadius: 10,
          marginHorizontal: -4,
          backgroundColor: colors.white
        }}
        inactiveDotStyle={{
          width: 12,
          height: 12,
          borderRadius: 10,
        }}
        inactiveDotColor={colors.gray}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  )
}

export default MyCarousel