import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'

export const styles = StyleSheet.create({
  productDetailsText: {
    fontSize: 14
  },
  inputWrapperStyle: {
    ...globalStyles.mb16,
    backgroundColor: '#fff', 
    height: 52, 
    borderRadius: 4,
    borderWidth: 1,
  },
  btnStyle: {
    ...globalStyles.btnBlock,
    ...globalStyles.mt16,
    backgroundColor: colors.primary
  },
  inputRight: {
    ...globalStyles.latoRegular,
    ...globalStyles.textPrimary,
  },
  priceDetailsContainer: {
    ...globalStyles.containerFluid,
    ...globalStyles.bgWhite,
    ...globalStyles.mt16,
    paddingBottom: 32
  },
  priceDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dividerStyle: {
    ...globalStyles.mt8,
    backgroundColor: '#f5f5f5'
  },
  footer: {
    ...globalStyles.containerFluid,
    ...globalStyles.centeredContent,
    ...globalStyles.mb114,
    ...globalStyles.mt32
  },
  commonFooter: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopWidth: 2,
    borderTopColor: colors.background,
  },statusBarWrapper: {
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
    paddingLeft: 5,
    borderBottomColor: '#fff'
  },
  containerStyle: {
    ...globalStyles.mt16,
    backgroundColor: '#fff', 
    height: 52, 
    borderRadius: 4,
  },
  inlineContainer: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
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