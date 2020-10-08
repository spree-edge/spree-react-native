import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'

export const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white
  },
  filterBlock: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    borderStartColor: 'grey',
    alignItems: 'center',
    padding: 10,
    borderEndWidth: .7,
    borderTopWidth: .2,
    borderBottomWidth: .2
  },
  newJustInImage: {
    width: 185,
    height: 250,
  },
  newJustInItemContainer: {
    marginRight: 16,
    marginBottom: 16,
    backgroundColor: colors.white
  },
  paletteBlack: {
    color: colors.black
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
    // borderWidth: 2
  },
  prices: {
    fontFamily: 'lato-bold',
  },
  discountPercent: {
    color: colors.error
  },
  detailsContainer: {
    ...globalStyles.container,
    paddingVertical: 10
  },
  price: {
    color: colors.gray,
    textDecorationLine: 'line-through'
  }
})