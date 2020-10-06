import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../../../styles/global'
import { colors } from '../../../../../res/palette'

export const styles = StyleSheet.create({
  statusBarWrapper: {
    ...globalStyles.containerFluid,
    ...globalStyles.bgWhite,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  statusBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  inputStyle: { 
    ...globalStyles.latoRegular14,
    color: colors.gray
  },
  inputContainerStyle: {
    // paddingTop: 5,
    paddingLeft: 5,
    borderBottomColor: '#fff'
  },
  containerStyle: {
    ...globalStyles.mt16,
    backgroundColor: '#fff', 
    height: 52, 
    borderRadius: 4,
  },
  w48: {
    width: '48%',
  },
  inlineContainer: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    // borderWidth: 2
  },
  iconStyle: {
    color: colors.primary,
    marginRight: 8
  },
  footer: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopWidth: 2,
    borderTopColor: colors.background,
    // borderWidth: 1
  },
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
    // borderWidth: 1
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
  footerAction: {
    ...globalStyles.btn,
    ...globalStyles.primary,
    margin: '4%',
    height: 48,
  }
})