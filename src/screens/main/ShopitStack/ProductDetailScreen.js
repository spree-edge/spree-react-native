import * as React from 'react'
import { View, ScrollView, Text, FlatList, TouchableHighlight, StyleSheet, Image } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'
import { Avatar, Input, Button, Card } from 'react-native-elements'
import { Smile,
  SmileSad,
  Dollar,
  ShoppingCart,
  Repeat,
  CustomIconTruck,
  CustomIconOriginal,
  IcOutlineAssignmentReturn,
  RiSecurePaymentFill
} from '../../../library/icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CarouselProductCard = () => {
  return (
    // <Card>
    //   <Card.Title>Tokyo Talkies</Card.Title>
    //   <Card.Divider/>
    //   <Card.Image source={require('../images/pic2.jpg')}>
    //     <Text style={{marginBottom: 10}}>
    //     Women Printed A-Line...
    //     </Text>
    //     <Button
    //       icon={<Icon name='code' color='#ffffff' />}
    //       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    //       title='VIEW NOW' />
    //   </Card.Image>
    // </Card>
    <View style={styles.carouselProductCard}>
      <Image
        source={require('../../../../assets/images/womens-dress-product-list-images/product-img.png')}
        style={{
          width: 140,
          height: 186
        }}
      />
      <View>
        <Text style={[globalStyles.descriptiveItem, styles.paletteBlack]}>Tokyo Talkies</Text>
        <Text style={globalStyles.label}>Women Printed A-Line...</Text>
        <View style={styles.carouselCardPricingContainer}>
          <Text style={[styles.carouselCardPrices, styles.carouselCardDiscountedPrice]}>$29.90</Text>
          <Text style={[styles.carouselCardPrices, styles.carouselCardPrice]}>$32.90</Text>
          <Text style={[styles.carouselCardPrices, styles.carouselCardDiscountPercent]}>(20% OFF)</Text>
        </View>
      </View>
    </View>
  )
}

const ProductDetailScreen = ({ route, navigation }) => {
  const [inputBorder, setInputBorder] = React.useState(false)

  return (
    <ScrollView style={globalStyles.containerFluid}>
      <View style={[ globalStyles.containerFluid, globalStyles.bgWhite ]}>
        <View style={[ globalStyles.container, globalStyles.mt16, globalStyles.mb16 ]}>
          <Text style={[ globalStyles.descriptiveItem, styles.title ]}>Tokyo Talkies</Text>
          <Text style={[ globalStyles.descriptionText, styles.description ]}>Women Sea Wash Pleated Dress</Text>
          <View style={styles.pricingContainer}>
            <Text style={[ styles.prices, styles.discountedPrice ]}>$29.90</Text>
            <Text style={[ styles.prices, styles.price ]}>$32.90</Text>
            <Text style={[ styles.prices, styles.discountPercent ]}>(20% OFF)</Text>
            <Text style={[ styles.prices, globalStyles.textSuccess ]}>Inclusive of all taxes</Text>
          </View>
        </View>
      </View>
      <View style={[ globalStyles.containerFluid, globalStyles.bgWhite , globalStyles.mt16 ]}>
        <View style={[ globalStyles.container, globalStyles.mt8, globalStyles.mb8 ]}>
          <Text>You get it for <Text style={[ styles.prices, globalStyles.textPrimary ]}>$25.49 </Text>
           <Text style={[ styles.prices, globalStyles.textSuccess ]}>(Save $4.50)</Text> </Text>
        </View>
      </View>
      <View style={[ globalStyles.containerFluid, globalStyles.bgWhite , globalStyles.mt8 ]}>
        <View style={[ globalStyles.container, globalStyles.mt8, globalStyles.mb8 ]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
              title="Save For Later"
              type="outline"
              containerStyle={{flex: 1, marginRight: 16}}
              buttonStyle={[ globalStyles.btn, styles.btnOutlined]}
              titleStyle={styles.titleStyle}
            />
            <Button
              title="Add To Bag"
              type="solid"
              containerStyle={{flex: 1}}
              buttonStyle={[ globalStyles.btn, styles.btnSolid]}
            />
          </View>
          <View style={[ globalStyles.mt16 ]}>
            <Text style={[ globalStyles.descriptiveItem, globalStyles.textDark, globalStyles.mb8 ]}>Select Color</Text>
            <View style={styles.rowContainer}>
              {
                [
                  '#c4d5ef',
                  '#cfefc4',
                  '#d16b6e',
                  '#221f25',
                  '#b9d7d4',
                ].map((color, index) => (
                  <Avatar
                    key={index}
                    size="small"
                    rounded 
                    containerStyle={{backgroundColor: `${color}`, marginRight: 16}}
                  />
                ))
              }
            </View>
          </View>
          <View>
            <View style={[ styles.sizingTitleContainer, globalStyles.mt16, globalStyles.mb8 ]}>
              <Text style={[ globalStyles.descriptiveItem, globalStyles.textDark ]}>Select Size</Text>
              <Text style={[ globalStyles.descriptiveItem, globalStyles.textPrimary ]}>Size Help?</Text>
            </View>
            <View style={styles.rowContainer}>
              {
                [
                  'S',
                  'M',
                  'L',
                  'XL',
                  'XXL',
                ].map((size, index) => (
                  <Avatar
                    key={index}
                    size="small"
                    title={`${size}`}
                    rounded
                    activeOpacity={0.7}
                    containerStyle={{
                      backgroundColor: `${colors.white}`,
                      marginRight: 16,
                      borderColor: `${colors.black}`,
                      borderWidth: 1
                    }}
                    titleStyle={styles.titleMedium}
                  />
                ))
              }
            </View>
          </View>
        </View>
      </View>
      <View style={[ globalStyles.containerFluid, globalStyles.bgWhite , globalStyles.mt16 ]}>
        <View style={[ globalStyles.container, globalStyles.mt8 ]}>
          <Text style={[ styles.titleMedium, globalStyles.mb8 ]}>Product Detail & Care</Text>
          <View style={ styles.unorderedListItem }>
            <Text style={globalStyles.label}>
              {'\u2022'} Color: Periwinkle blue
            </Text>
            <Text style={globalStyles.label}>
              {'\u2022'} Fit n flared, flowy silhouette
            </Text>
            <Text style={globalStyles.label}>
              {'\u2022'} Peter-pan collar, front button closure
            </Text>
            <Text style={globalStyles.label}>
              {'\u2022'} Three-quarter sleeves
            </Text>
            <Text style={globalStyles.label}>
              {'\u2022'} Buckle belted waist front
            </Text>
            <Text style={globalStyles.label}>
              {'\u2022'} Mid-weight georgette
            </Text>
            <Text style={globalStyles.label}>
              {'\u2022'} Machine Wash
            </Text>
          </View>
        </View>
        <View style={[ globalStyles.container, globalStyles.mt16 ]}>
          <Text style={[ styles.titleMedium, globalStyles.mb8 ]}>Description</Text>
          <Text style={globalStyles.label}>Periwinkle blue woven accordian pleats empire dress. This midi dress is cut from pleated poly georgette. It has a peterpan collar neckline, sheer billowy three-quarter sleeves, and a toned buckle waist to balance the sweeping accordion skirt.</Text>
        </View>
        <View style={[ globalStyles.container, globalStyles.mt16 ]}>
          <Text style={[ styles.titleMedium, globalStyles.mb8 ]}>Manufacturer</Text>
          <Text style={globalStyles.label}>Freeway Clothing Co, 768/1, Vijaynagar, New Delhi 116708</Text>
        </View>
        <View style={[ globalStyles.container, globalStyles.mt16 ]}>
          <Text style={[ styles.titleMedium, globalStyles.mb8 ]}>Manufacturer Country</Text>
          <Text style={globalStyles.label}>India</Text>
        </View>
      </View>
      <View style={[ globalStyles.containerFluid, globalStyles.bgWhite , globalStyles.mt16 ]}>
        <View style={[ globalStyles.container, globalStyles.mt8 ]}>
          <Text style={[ styles.titleMedium, globalStyles.mb8 ]}>Customer Reviews (309)</Text>
          {
            [{
              id: 0,
              review: 'Purchasing the dress online was super easy and they were delivered quick. My partner absolutely loves his new dress! Perfect! All she had to do was swap them over with his old party dress.',
              reviewer: 'Devendar Rathore',
              date: 'Aug 19, 2020',
              likes: 16,
              dislikes: 7
            },
            {
              id: 1,
              review: 'My old dress was become dull and stale. But this new dress is super amazing and fits nicely to me. Thanks for super quick delivery and good service.',
              reviewer: 'Devendar Rathore',
              date: 'Aug 19, 2020',
              likes: 46,
              dislikes: 6
            }].map(item => (
              <View key={item.id} style={styles.reviewContainerStyle}>
                <Text style={globalStyles.latoRegular}>{item.review}</Text>
                <View style={[styles.reviewFooter, globalStyles.mt8]}>
                  <Text style={globalStyles.label}>{item.reviewer}  | {item.date}</Text>
                  <View style={styles.likesDislikesContainer}>
                    <View style={styles.likesContainer}>
                      <Smile size={20} style={{color: colors.gray}}/>
                      <Text style={globalStyles.label}>{item.likes}</Text>
                    </View>
                    <View style={styles.likesContainer}>
                      <SmileSad size={20} style={{color: colors.gray}}/>
                      <Text style={globalStyles.label}> {item.dislikes}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))
          }
          <TouchableOpacity>
            <Text style={[globalStyles.descriptiveItem, globalStyles.textPrimary]}>View All (309)</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[ globalStyles.containerFluid, globalStyles.bgWhite , globalStyles.mt16 ]}>
        <View style={[ globalStyles.container, globalStyles.mt8, globalStyles.mb8 ]}>
          <Text style={[ styles.titleMedium, globalStyles.mb8 ]}>Check Delivery</Text>
          <Input
            placeholder="Enter PIN Code" 
            keyboardType="default"
            onFocus={() => setInputBorder(true)}
            onBlur={() => setInputBorder(false)}
            containerStyle={[globalStyles.mb16, {
              backgroundColor: '#fff', 
              height: 52, 
              borderRadius: 4,
              borderWidth: 1,
              borderColor: inputBorder ? colors.primary : '#ccc',
            }]}
            inputStyle={globalStyles.latoRegular}
            inputContainerStyle={{ borderBottomColor: '#fff'}}
            rightIcon={() => <Text style={styles.inputRight}>Apply</Text>}
          />
          <View style={styles.deliveryOffersContainer}>
            <ShoppingCart size={18} style={{color: colors.black, marginRight: 8, transform: [{ rotateY: '180deg' }] }}/>
            <Text style={[globalStyles.descriptiveItem, {color: colors.black}]}>Delivery by Thursday, Sep 05</Text>
          </View>
          <View style={styles.deliveryOffersContainer}>
            <Dollar size={18} style={{color: colors.black, marginRight: 8}}/>
            <Text style={[globalStyles.descriptiveItem, {color: colors.black}]}>Cash on delivery available</Text>
          </View>
          <View style={styles.deliveryOffersContainer}>
            <Repeat size={18} style={{color: colors.black, marginRight: 8}}/>
            <Text style={[globalStyles.descriptiveItem, {color: colors.black}]}>Return & exchange available within 10 days</Text>
          </View>
        </View>
      </View>
      <View style={[ globalStyles.containerFluid, globalStyles.bgWhite , globalStyles.mt16 ]}>
        <View style={[ globalStyles.container, globalStyles.mt8, globalStyles.mb8 ]}>
          <View style={styles.alikeProductsHeader}>
            <Text style={[ styles.titleMedium, globalStyles.mb8 ]}>Your might also like</Text>
            <Text style={[ globalStyles.label, globalStyles.textBold ]}>12 more</Text>
          </View>
          <CarouselProductCard />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerItemListContainer}>
          <View style={styles.footerItemContainer}>
            <CustomIconTruck size={32} style={{color: colors.gray}} />
            <Text style={styles.footerText}>Fastest Delivery</Text>
          </View>
          <View style={styles.footerItemContainer}>
            <CustomIconOriginal size={32} style={{color: colors.gray}} />
            <Text style={styles.footerText}>100% Original</Text>
          </View>
          <View style={styles.footerItemContainer}>
            <IcOutlineAssignmentReturn size={32} style={{color: colors.gray}} />
            <Text style={styles.footerText}>Easy Returns</Text>
          </View>
          <View style={styles.footerItemContainer}>
            <RiSecurePaymentFill size={32} style={{color: colors.gray}} />
            <Text style={styles.footerText}>Secure Payment</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  pricingContainer: {
    ...globalStyles.mt8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    // borderWidth: 2
  },
  price: {
    color: colors.gray,
    textDecorationLine: 'line-through'
  },
  prices: {
    fontFamily: 'lato-bold',
    paddingRight: 8
  },
  discountedPrice: {
    color: colors.black
  },
  discountPercent: {
    color: colors.error
  },
  backgroundPaletteWhite: {
    backgroundColor: colors.white
  },
  description: {
    fontSize: 14,
    marginTop: 4,
    color: colors.gray
  },
  title: {
    fontSize: 18,
    color: colors.black
  },
  titleMedium: {
    ...globalStyles.descriptiveItem,
    ...globalStyles.textDark,
  },
  btn: {
    borderColor: colors.primary,
    borderRadius: 24
  },
  btnOutlined: {
    backgroundColor: colors.white,
  },
  btnSolid: {
    backgroundColor: colors.primary
  },
  titleStyle: {
    fontFamily: 'lato-bold',
    color: colors.primary
  },
  rowContainer: {
    flexDirection: 'row',
    // borderWidth: 2
  },
  colorBadge: {
    width: 24,
    height: 24,
    borderRadius: 24,
    marginRight: 15
  },
  sizingTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  reviewContainerStyle: {
    paddingVertical: 8
  },
  reviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  likesDislikesContainer: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 2
  },
  likesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputRight: {
    ...globalStyles.latoRegular,
    ...globalStyles.textPrimary,
  },
  deliveryOffersContainer: {
    ...globalStyles.mt8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerContainer: {
    ...globalStyles.containerFluid,
    ...globalStyles.mt32,
    ...globalStyles.mb114, 
    backgroundColor: colors.background
  },
  footerItemListContainer: {
    ...globalStyles.container, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerItemContainer: {
    alignItems: 'center'
  },
  footerText: {
    ...globalStyles.textBold,
    ...globalStyles.mt8,
    fontSize: 11
  },
  alikeProductsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  carouselProductCard: {
    borderWidth: 2,
    width: 140
  },
  pricingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 180,
    // borderWidth: 2
  },
  carouselCardPrice: {
    color: colors.gray,
    textDecorationLine: 'line-through'
  },
  carouselCardDiscountPercent: {
    fontSize: 12,
    color: colors.error
  },
  carouselCardDiscountedPrice: {
    fontSize: 12,
    color: colors.black
  },
  paletteBlack: {
    fontSize: 12,
    color: colors.black
  },
  carouselProductBrand: {
    fontFamily: 'lato-bold',
    fontSize: 11,
  },
  carouselCardPrices: {
    fontFamily: 'lato-bold',
    paddingRight: 2
  },
  carouselCardPricingContainer: {
    ...globalStyles.mt8,
    borderWidth: 2,
    flex: 1
  }
})