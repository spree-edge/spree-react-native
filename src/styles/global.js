import { StyleSheet } from 'react-native'
import { colors } from '../res/palette'

export const globalStyles = StyleSheet.create({
  /**
   * Containers
   */
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center'
  },
  containerFluid: {
    flex: 1
  },

  /**
   * Typography
   */
  textSuccess: {
    color: colors.success
  },
  textPrimary: {
    color: colors.primary
  },
  textSecondary: {
    color: colors.gray
  },
  textDark: {
    color: colors.black
  },
  bgWhite: {
    backgroundColor: colors.white
  },
  title: {
    fontFamily: 'lato-bold',
    fontSize: 34,
  },
  latoBold14: {
    fontFamily: 'lato-bold',
    fontSize: 14,
  },
  latoBold16: {
    fontFamily: 'lato-bold',
    fontSize: 16,
  },
  latoBold18: {
    fontFamily: 'lato-bold',
    fontSize: 18,
  },
  label: {
    fontFamily: 'lato-regular',
    color: colors.gray,
    fontSize: 12
  },
  latoRegular: {
    fontFamily: 'lato-regular',
    fontSize: 12,
    color: colors.black
  },
  latoRegular16: {
    fontFamily: 'lato-regular',
    fontSize: 16
  },
  latoRegular14: {
    fontFamily: 'lato-regular',
    fontSize: 14
  },

  /**
  * Pricing Text Typograhpy
  */
  prices: {
    fontFamily: 'lato-bold',
    paddingRight: 8
  },

  /**
   * Buttons
   */
  roundedButton: {
    width: 128,
    height: 36,
    backgroundColor: colors.primary,
    borderRadius: 24
  },
  btnBlock: {
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderColor: colors.primary,
    borderRadius: 24
  },
  btnPrimary: {
    backgroundColor: colors.primary
  },
  btnSolid: {
    backgroundColor: colors.primary,
  },
  btnOutlined: {
    backgroundColor: colors.white,
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  /**
   * Spacing
   */
  mt8: {
    marginTop: 8
  },
  mt16: {
    marginTop: 16
  },
  mt24: {
    marginTop: 24
  },
  mt32: {
    marginTop: 32
  },
  mt48: {
    marginTop: 48
  },
  mb8: {
    marginBottom: 8
  },
  mb16: {
    marginBottom: 16
  },
  mb24: {
    marginBottom: 24
  },
  mb32: {
    marginBottom: 32
  },
  mb114: {
    marginBottom: 114
  },
  pb16: {
    paddingBottom: 16
  },
  mv8: {
    marginVertical: 8
  },
  pv8: {
    paddingVertical: 8
  },
  pv16: {
    paddingVertical: 16
  }
})