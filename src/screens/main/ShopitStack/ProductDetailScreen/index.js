import React, { useState } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'
import { Avatar, Button, Divider } from 'react-native-elements'
import MyCarousel from '../../../../library/components/MyCarousel'
import { Snackbar } from 'react-native-paper'
import {
  Smile,
  SmileSad,
  Dollar,
  ShoppingCart,
  Repeat,
  CustomIconTruck,
  CustomIconOriginal,
  IcOutlineAssignmentReturn,
  RiSecurePaymentFill
} from '../../../../library/icons'
import TextField from '../../../../library/components/TextField'
import ActivityIndicatorCard from '../../../../library/components/ActivityIndicatorCard'
import { addItem, setProductFavourite } from '../../../../redux'
import { connect } from 'react-redux'
import { styles } from './styles'
import { capitalizeFirstLetter } from '../../../../res/helperFunctions'
import { HOST } from '../../../../res/env'

const CarouselProductCard = ({ imageURI }) => {
  return (
    <View style={styles.carouselProductCard}> 
      <Image
        source={{
          uri: imageURI
        }}
        style={{
          width: 150,
          height: 196
        }}
      />
      <View style={styles.carouselProductDescription}>
        <Text style={globalStyles.latoBold14}>Tokyo Talkies</Text>
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

const ProductDetailScreen = ({ dispatch, product, auth, saving }) => {
  const [pincode, setPincode] = useState('')

  const [isVariantSelected, setIsVariantSelected] = useState(true)
  const [activeColor, setActiveColor] = useState(product.default_variant.option_values[0].presentation)
  const [activeSize, setActiveSize] = useState('')
  const [selectedVariant, setSelectedVariant] = useState({})
  const [imageURI, setImageURI] = useState(`${HOST}/${product.variants[0].images[0].styles[3].url}`)

  const [snackbarVisible, setSnackbarVisible] = useState(false)

  const [variantDistinctColors] = useState([...new Set(product.variants.map(variant => variant.option_values[0].presentation))])

  const handleColorSelection = ({index, color}) => {
    setActiveColor(color)
    setActiveSize('')
    setSelectedVariant({})
    setIsVariantSelected(true)
    setImageURI(`${HOST}/${product.variants[index].images[0].styles[3].url}`)
  }

  const handleAddToBag = () => {
    dispatch(addItem(
      {
        variant_id: selectedVariant.id,
        quantity: 1,
      }
    ))
    // setSnackbarVisible(true)
  }

  if(saving) {
    return (
      <ActivityIndicatorCard />
    )
  } else
  return (
    <>
      <ScrollView style={globalStyles.containerFluid}>
        <MyCarousel key={imageURI} imageURI={imageURI} />
        <View style={ styles.containerFluid }>
          <View style={[ globalStyles.container, globalStyles.pb16 ]}>
            <Text style={ globalStyles.latoBold18 }>{ product.name }</Text>
            <Text style={ styles.description }>{ product.description }</Text>
            <View style={[ styles.pricingContainer, globalStyles.mt8 ]}>
              <Text style={ styles.discountedPrice }>{ product.display_price }</Text>
              <Text style={ styles.price }>$32.90</Text>
              <Text style={ styles.discountPercent }>(20% OFF)</Text>
              <Text style={[ globalStyles.latoBold14, globalStyles.textSuccess ]}>Inclusive of all taxes</Text>
            </View>
          </View>
        </View>
        <View style={[ styles.containerFluid, globalStyles.mt16 ]}>
          <View style={[ globalStyles.container, globalStyles.pv8 ]}>
            <Text style={ globalStyles.latoBold14 }>You get it for
              <Text style={[ globalStyles.prices, globalStyles.textPrimary ]}> $25.49</Text>
              <Text style={[ globalStyles.prices, globalStyles.textSuccess ]}> (Save $4.50)</Text>
            </Text>
          </View>
        </View>
        <View style={[ styles.containerFluid, globalStyles.mt8 ]}>
          <View style={[ globalStyles.container, globalStyles.pv8 ]}>
            <View style={styles.rowContainer}>
              <Button
                title="Save For Later"
                type="outline"
                disabled={isVariantSelected}
                disabledStyle={{ borderColor: colors.gray, color: colors.gray }}
                containerStyle={{ flex: 1, marginRight: 16 }}
                buttonStyle={globalStyles.btn}
                titleStyle={styles.titleStyle}
                onPress={() => dispatch(setProductFavourite(selectedVariant))}
              />
              <Button
                title="Add To Bag"
                type="solid"
                disabled={isVariantSelected}
                disabledStyle={{ backgroundColor: colors.gray }}
                disabledTitleStyle={{ color: colors.white }}
                containerStyle={{flex: 1}}
                buttonStyle={[ globalStyles.btn, globalStyles.btnSolid ]}
                onPress={handleAddToBag}
              />
            </View>
            <View style={ globalStyles.mt16 }>
              <Text style={ globalStyles.latoBold14 }>Select Color</Text>
              <ScrollView horizontal={true} style={[ styles.rowContainer, globalStyles.mt8 ]}>
                {
                  variantDistinctColors.map((color, index) => (
                    <Avatar
                      key={index}
                      size="small"
                      rounded
                      onPress={() => handleColorSelection(
                        {
                          index: index,
                          color: color
                        }
                      )}
                      containerStyle={{
                        backgroundColor: `${color}`,
                        marginRight: 16,
                        borderWidth: 1,
                        padding: 1,
                        borderColor: color !== activeColor ? colors.gray : colors.primary
                      }}
                    />
                  ))
                }
              </ScrollView>
            </View>
            <View>
              {activeColor ? <View style={[ styles.sizingTitleContainer, globalStyles.mt16 ]}>
                <Text style={[ globalStyles.latoBold14, globalStyles.textDark ]}>Select Size</Text>
                <Text style={[ globalStyles.latoBold14, globalStyles.textPrimary ]}>Size Help?</Text>
              </View> : null }
              <View style={[ styles.rowContainer, globalStyles.mt8 ]}>
                {
                  product.variants.map((variant, index) => {
                    if(variant.option_values[0].presentation === activeColor) {
                      return <Avatar
                        key={index}
                        size="small"
                        title={`${variant.option_values[1].presentation}`}
                        onPress={() => {
                            setActiveSize(variant.option_values[1].presentation)
                            setSelectedVariant(variant)
                            setIsVariantSelected(false)
                          }
                        }
                        rounded
                        activeOpacity={0.7}
                        containerStyle={{
                          backgroundColor: colors.white,
                          marginRight: 16,
                          borderColor: variant.option_values[1].presentation !== activeSize ? colors.black : colors.primary,
                          borderWidth: 1
                        }}
                        titleStyle={[globalStyles.latoBold14, 
                          variant.option_values[1].presentation !== activeSize ? globalStyles.textDark : globalStyles.textPrimary
                        ]}
                      />
                    } else { return null }
                  })
                }
              </View>
            </View>
          </View>
        </View>
        <View style={[ styles.containerFluid, globalStyles.mt8, globalStyles.pv8 ]}>
          <View style={ globalStyles.container }>
            <View>
              <Text style={ globalStyles.latoBold14 }>Product Detail & Care</Text>
              <View style={[ styles.unorderedListItem, globalStyles.mt8 ]}>
                {
                  product.product_properties.map(property => (
                    <Text key={property.id} style={globalStyles.label}>
                      {'\u2022'} {capitalizeFirstLetter(property.name)}: {property.value}
                    </Text>
                  ))
                }
              </View>
            </View>
            <View style={ globalStyles.mt16 }>
              <Text style={ globalStyles.latoBold14 }>Description</Text>
              <Text style={[ globalStyles.label, globalStyles.mt8 ]}>
                { product.description }
              </Text>
            </View>
            <View style={ globalStyles.mt16 }>
              <Text style={ globalStyles.latoBold14 }>Manufacturer</Text>
              <Text style={[ globalStyles.label, globalStyles.mt8 ]}>Freeway Clothing Co, 768/1, Vijaynagar, New Delhi 116708</Text>
            </View>
            <View style={ globalStyles.mt16 }>
              <Text style={ globalStyles.latoBold14 }>Manufacturer Country</Text>
              <Text style={[ globalStyles.label, globalStyles.mt8 ]}>India</Text>
            </View>
          </View>
        </View>
        <View style={[ styles.containerFluid, globalStyles.mt8, globalStyles.pv8 ]}>
          <View style={ globalStyles.container }>
            <Text style={ globalStyles.latoBold14 }>Customer Reviews (309)</Text>
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
              }].map((item, i, arr) => (
                <View key={item.id} style={ globalStyles.pv8 }>
                  <Text style={globalStyles.latoRegular}>{ item.review }</Text>
                  <View style={styles.reviewFooter}>
                    <Text style={globalStyles.label}>{ item.reviewer }  | { item.date }</Text>
                    <View style={styles.likesDislikesContainer}>
                      <View style={styles.likesContainer}>
                        <Smile size={20} style={{color: colors.gray}}/>
                        <Text style={globalStyles.label}> { item.likes }</Text>
                      </View>
                      <View style={styles.likesContainer}>
                        <SmileSad size={20} style={{color: colors.gray}}/>
                        <Text style={globalStyles.label}> { item.dislikes }</Text>
                      </View>
                    </View>
                  </View>
                  { i !== arr.length - 1  && <Divider style={styles.reviewBorder} /> }
                </View>
              ))
            }
            <TouchableOpacity>
              <Text style={styles.reviewFooterAction}>View All (309)</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[ styles.containerFluid, globalStyles.mt8, globalStyles.pv8 ]}>
          <View style={ globalStyles.container }>
            <Text style={[ globalStyles.latoBold14, globalStyles.mb8 ]}>Check Delivery</Text>
            <TextField
              placeholder=" Enter PIN Code"
              containerStyle={styles.inputWrapperStyle}
              rightElement={<Text style={styles.inputRight}>Check</Text>}
              onChangeText={setPincode}
              value={pincode}
            />
            <View style={ styles.deliveryOffersContainer }>
              <ShoppingCart size={18} style={[styles.deliveryOffersIcon, {transform: [{ rotateY: '180deg' }]} ]}/>
              <Text style={ globalStyles.latoBold14 }>Delivery by Thursday, Sep 05</Text>
            </View>
            <View style={ styles.deliveryOffersContainer }>
              <Dollar size={18} style={ styles.deliveryOffersIcon }/>
              <Text style={ globalStyles.latoBold14 }>Cash on delivery available</Text>
            </View>
            <View style={ styles.deliveryOffersContainer }>
              <Repeat size={18} style={ styles.deliveryOffersIcon }/>
              <Text style={ globalStyles.latoBold14 }>Return & exchange available within 10 days</Text>
            </View>
          </View>
        </View>
        <View style={[ styles.containerFluid, globalStyles.mt8, globalStyles.pv16 ]}>
          <View style={globalStyles.container}>
            <View style={styles.alikeProductsHeader}>
              <Text style={[ globalStyles.latoBold14, globalStyles.mb16 ]}>Your might also like</Text>
              <Text style={[ globalStyles.label, globalStyles.latoBold14 ]}>12 more</Text>
            </View>
          </View>
          <ScrollView horizontal={true} style={styles.carouselProductsContainer}>
            <CarouselProductCard imageURI={imageURI} />
            <CarouselProductCard imageURI={imageURI} />
            <CarouselProductCard imageURI={imageURI} />
          </ScrollView>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.footerItemListContainer}>
            <View style={styles.footerItemContainer}>
              <CustomIconTruck size={32} style={styles.footerIcon} />
              <Text style={styles.footerText}>Fastest Delivery</Text>
            </View>
            <View style={styles.footerItemContainer}>
              <CustomIconOriginal size={32} style={styles.footerIcon} />
              <Text style={styles.footerText}>100% Original</Text>
            </View>
            <View style={styles.footerItemContainer}>
              <IcOutlineAssignmentReturn size={32} style={styles.footerIcon} />
              <Text style={styles.footerText}>Easy Returns</Text>
            </View>
            <View style={styles.footerItemContainer}>
              <RiSecurePaymentFill size={32} style={styles.footerIcon} />
              <Text style={styles.footerText}>Secure Payment</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Snackbar
        visible={snackbarVisible}
        duration={2000}
        >
        Added to Bag !
      </Snackbar>
    </>
  )
}

const mapStateToProps = state => ({
  product: state.products.product,
  auth: state.auth,
  saving: state.products.saving
})

export default connect(mapStateToProps)(ProductDetailScreen)