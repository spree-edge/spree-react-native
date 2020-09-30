import * as React from 'react'
import { View, Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const MySlideComponent = ({ data }) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
      }}
    >
      <Image
        source={data.source}
      />
    </View>
  )
}

export default class MyCarousel extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      activeSlide: 1,
      entries: [
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
      ]
    }
  }

  _renderItem ({item, index}) {
      return <MySlideComponent key={item.id} data={item} />
  }

  get pagination () {
      const { entries, activeSlide } = this.state;
      return (
          <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
      );
  }

  render () {
      return (
          <View>
              <Carousel
                data={this.state.entries}
                renderItem={this._renderItem}
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                sliderWidth={200}
                itemWidth={250}
              />
              { this.pagination }
          </View>
      );
  }
}