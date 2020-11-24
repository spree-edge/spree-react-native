import { StyleSheet, Dimensions } from 'react-native'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'

const windowWidth = Dimensions.get('window')

export const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newJustInImage: {
    width: 109,
    height: 148,
  },
  newJustInItemContainer: {
    marginRight: 16,
    marginBottom: 16,
  },
  flatListHeaderText: {
    ...globalStyles.latoRegular14,
    color: colors.black,
    marginVertical: 16,
  },
  bannerFirst: {
    width: '100%',
    height: 329
  },
  discountStripe: {
    ...globalStyles.mt16,
    width: '100%',
    height: 60
  },
  bannerEndOfSale: {
    ...globalStyles.mt16,
    width: '100%', 
    height: 308
  },
  hoardingBoard: {
    ...globalStyles.latoRegular14,
    ...globalStyles.mt16,
    textAlign: 'center',
    color: colors.black,
    paddingVertical: 14,
    backgroundColor: colors.white
  },
  flatListContainer: {
    ...globalStyles.containerFluid,
    ...globalStyles.mt16,
    backgroundColor: colors.white
  },
  bestDealCards: {
    width: "100%",
    height: 200,
    marginBottom: 16
  },
  bannerFestiveTrend: {
    width: '100%',
    height: 294,
    paddingVertical: 16
  },
  flatListImageItemContainer: {
    marginRight: 10,
    marginBottom: 10
  },
  flatListImageItem: {
    width: 109,
    height: 160,
  }
})