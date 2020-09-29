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
  descriptionText: {
    fontFamily: 'lato-regular',
    fontSize: 14,
    // color: '#fff'
  },
  descriptiveItem: {
    fontFamily: 'lato-bold',
    fontSize: 14,
    // color: '#fff'
  },
  title: {
    fontFamily: 'lato-bold',
    fontSize: 34,
  },
  headline3: {
    fontFamily: 'lato-bold',
    fontSize: 18,
  },
  subhead: {
    fontFamily: 'lato-bold',
    fontSize: 16
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
  textBold: { //lato-bold
    fontFamily: 'lato-bold'
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
  roundedBtnBlock: {
    flex: 1,
    borderRadius: 24
  },
  btnBlock: {
    borderWidth: 1,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderColor: colors.primary,
    borderRadius: 24
  },
  blockTextInput: {
    borderRadius: 4,
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
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
  }
})