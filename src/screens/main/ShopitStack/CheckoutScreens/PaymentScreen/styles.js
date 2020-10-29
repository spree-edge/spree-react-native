import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../../../styles/global'
import { colors } from '../../../../../res/palette'

export const styles = StyleSheet.create({
  inputStyle: {
    ...globalStyles.latoRegular,
    fontSize: 14, color: colors.gray
  },
  inputContainerStyle: {
    paddingLeft: 5,
    borderBottomColor: '#fff'
  },
  containerStyle: {
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
    marginRight: 6
  },
  label: {
    ...globalStyles.latoRegular14,
    color: colors.black
  },
  btnFixed: {
    margin: '2%',
    height: 48,
  },
  footer: {
    backgroundColor: colors.white,
  },
  dividerStyle: {
    ...globalStyles.mt8,
    backgroundColor: '#f5f5f5'
  },
  orderTotalContainer: {
    ...globalStyles.containerFluid,
    ...globalStyles.bgWhite,
    ...globalStyles.mt16,
    paddingBottom: 32
  },
  orderDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleMedium: {
    ...globalStyles.latoBold14,
    ...globalStyles.textDark,
  },
  modalCloseIcon: {
    alignSelf: 'flex-end'
  },
  btnOutlined: {
    backgroundColor: colors.white,
    borderWidth: 1,
    height: 48
  },
  titleStyle: {
    fontFamily: 'lato-bold',
    color: colors.primary,
    fontSize: 18,
  },
  modalContainer: {
    justifyContent: 'space-between',
    paddingVertical: '4%'
  },
  accordionSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16
  },
  accordionSelectorTitle: {
    ...globalStyles.latoRegular,
    flex: 1,
    marginLeft: 8 
  },
  outlinedInputContainer: {
    borderWidth: 1,
  },
})