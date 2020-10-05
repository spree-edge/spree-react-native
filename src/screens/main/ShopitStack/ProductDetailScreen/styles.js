import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'

export const styles = StyleSheet.create({
  containerFluid: {
    ...globalStyles.containerFluid,
    ...globalStyles.bgWhite,
  },
  pricingContainer: {
    ...globalStyles.mt8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    // borderWidth: 2
  },
  prices: {
    fontFamily: 'lato-bold',
    paddingRight: 8
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
  description: {
    ...globalStyles.latoRegular14,
    marginTop: 4,
    color: colors.gray
  },
  title: {
    ...globalStyles.latoBold18,
    color: colors.black
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
  sizingTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  reviewFooter: {
    ...globalStyles.mt8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reviewBorder: {
    ...globalStyles.mt16,
    backgroundColor: colors.gray
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
  deliveryOffersIcon: {
    color: colors.black,
    marginRight: 8
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
  reviewFooterAction: {
    ...globalStyles.mt8,
    ...globalStyles.latoBold14,
    ...globalStyles.textPrimary
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
  },
  inputWrapperStyle: {
    ...globalStyles.mb16,
    backgroundColor: '#fff', 
    height: 52, 
    borderRadius: 4,
    borderWidth: 1,
  },
  footerIcon: {
    color: colors.gray
  }
})