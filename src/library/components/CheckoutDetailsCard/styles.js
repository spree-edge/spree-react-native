import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/global'

export const styles = StyleSheet.create({
  orderTotalContainer: {
    ...globalStyles.containerFluid,
    ...globalStyles.bgWhite,
    ...globalStyles.mt24,
    paddingBottom: 32
  },
  orderTotalDetailsText: {
    ...globalStyles.label,
    fontSize: 14
  },
  orderDetailsRow: {
    ...globalStyles.mt8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dividerStyle: {
    ...globalStyles.mt8,
    backgroundColor: '#f5f5f5'
  },
  shippingIndicatorLine: {
    flex: 1,
    borderBottomWidth: .8,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  orderTotalAmountContainer: {
    ...globalStyles.container,
    ...globalStyles.mt8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})