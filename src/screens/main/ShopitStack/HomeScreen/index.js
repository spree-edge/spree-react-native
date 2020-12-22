import * as React from 'react'
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native'
import { SearchBar, Image } from 'react-native-elements'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'
import { connect } from 'react-redux'
import { styles } from './styles'

const Item = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => console.log(item)} style={styles.flatListImageItemContainer}>
      <Image source={item.source} style={styles.flatListImageItem} />
    </TouchableOpacity>
  )
}

const FlatListImageItem = ({ item, onPress, imageStyle, itemContainerStyle }) => (
  <TouchableOpacity onPress={onPress} style={itemContainerStyle}>
    <Image source={item.source} style={{ width: imageStyle.width, height: imageStyle.height }} />
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const newJustInRenderItem = ({ item }) => {
    return (
      <FlatListImageItem
        item={item}
        onPress={() => console.log(item.id)}
        imageStyle={styles.newJustInImage}
        itemContainerStyle={styles.newJustInItemContainer}
      />
    )
  }

  return (
    <ScrollView style={globalStyles.containerFluid}>
      <View style={globalStyles.container}>
        <SearchBar
          platform="ios"
          value={searchQuery}
          placeholder="Search shop catalogue"
          onChangeText={text => setSearchQuery(text)}
          inputContainerStyle={{ backgroundColor: colors.white }}
          containerStyle={{ backgroundColor: colors.background }}
          inputStyle={ globalStyles.latoRegular16 }
          searchIcon={{ color: colors.black }}
          onSubmitEditing={() => {
            navigation.navigate('ProductsList', { searchQuery })
          }}
        />
      </View>
      <Image
        source={require('../../../../../assets/images/banner-first-order-discount/banner-first-order-discount.png')}
        style={styles.bannerFirst}
        onPress={() => {
          navigation.navigate('ProductsList', { title: 'Womens Dress' })
        }}
      />
      <Image
        source={require('../../../../../assets/images/discount-stripe/DiscountStripe.png')}
        style={styles.discountStripe}
      />
      <Image
        source={require('../../../../../assets/images/banner-EOS-sale/banner-EOS-sale.png')}
        style={styles.bannerEndOfSale}
      />
      <Text style={styles.hoardingBoard}>
        Free Shipping For You Till Midnight !
      </Text>
      <View style={styles.flatListContainer}>
        <View style={globalStyles.container}>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Item item={item} />}
            numColumns={3}
            ListHeaderComponent={() => <Text style={[styles.flatListHeaderText, { marginLeft: 8 }]}>EXPLORE TOP BRANDS</Text>}
          />
        </View>
      </View>
      <View style={styles.flatListContainer}>
        <View
          style={globalStyles.container}
        >
          <FlatList
            data={BEST_DEAL_CARD_DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Image source={item.source} style={styles.bestDealCards} /> }
            ListHeaderComponent={() => <Text style={styles.flatListHeaderText}>BEST DEALS</Text> }
          />
        </View>
      </View>
      <View style={globalStyles.containerFluid}>
        <Image source={require('../../../../../assets/images/banner-festive-trend-card/banner-festive-trend-card.png')}
          style={styles.bannerFestiveTrend}
        />
      </View>
      <View style={[styles.flatListContainer, {
          marginBottom: 114
        }
      ]}>
        <View
          style={globalStyles.container}
        >
          <FlatList
            data={NEW_JUST_IN_DATA}
            keyExtractor={item => item.id}
            renderItem={newJustInRenderItem}
            numColumns={3}
            ListHeaderComponent={() => <Text style={styles.flatListHeaderText}>NEW JUST IN</Text>}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default connect()(HomeScreen)

const DATA = [
  {
   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
   source: require('../../../../../assets/images/top-brands/top-brands-card1.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    source: require('../../../../../assets/images/top-brands/top-brands-card2.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    source: require('../../../../../assets/images/top-brands/top-brands-card3.png')
  },
  {
    id: 'bd7abcde-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/top-brands/top-brands-card4.png')
  },
  {
    id: 'bd7fghij-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/top-brands/top-brands-card5.png')
  },
  {
    id: 'bd7klmno-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/top-brands/top-brands-card6.png')
  },
  {
    id: 'bd7pqrst-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/top-brands/top-brands-card7.png')
  },
  {
    id: 'bd7uvwxy-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/top-brands/top-brands-card8.png')
  },
  {
    id: 'bd7zabcd-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/top-brands/top-brands-card9.png')
  }
]

const BEST_DEAL_CARD_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/best-deal-cards/best-deal-card1/best-deal-card.png')
   },
   {
     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
     source: require('../../../../../assets/images/best-deal-cards/best-deal-card2/best-deal-card.png')
   },
   {
     id: '58694a0f-3da1-471f-bd96-145571e29d72',
     source: require('../../../../../assets/images/best-deal-cards/best-deal-card3/best-deal-card.png')
   },
   {
     id: 'bd7abcde-c1b1-46c2-aed5-3ad53abb28ba',
     source: require('../../../../../assets/images/best-deal-cards/best-deal-card4/best-deal-card.png')
   },
];

const NEW_JUST_IN_DATA = [
  {
   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
   source: require('../../../../../assets/images/new-just-in/new-just-in-card1/card.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    source: require('../../../../../assets/images/new-just-in/new-just-in-card2/card.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    source: require('../../../../../assets/images/new-just-in/new-just-in-card3/card.png')
  },
  {
    id: 'bd7abcde-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/new-just-in/new-just-in-card4/card.png')
  },
  {
    id: 'bd7fghij-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/new-just-in/new-just-in-card5/card.png')
  },
  {
    id: 'bd7klmno-c1b1-46c2-aed5-3ad53abb28ba',
    source: require('../../../../../assets/images/new-just-in/new-just-in-card6/card.png')
  }
]