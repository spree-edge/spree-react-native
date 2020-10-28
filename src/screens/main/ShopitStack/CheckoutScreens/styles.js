import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'

export const checkoutStyles = StyleSheet.create({
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
  inputWrapperStyle: {
    ...globalStyles.mb16,
    backgroundColor: '#fff', 
    height: 52, 
    borderRadius: 4,
    borderWidth: 1,
  },
  inputRightText: {
    ...globalStyles.latoRegular,
    ...globalStyles.textPrimary,
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
  rowContainer: {
    flexDirection: 'row',
  },
  w48: {
    width: '48%',
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
  shippingIndicatorLine: {
    flex: 1,
    borderBottomWidth: .8,
    marginBottom: 10,
    marginHorizontal: 10,
  },
})