import { StyleSheet } from 'react-native'
import { colors } from '../res/palette'

export const globalStyles = StyleSheet.create({
  /**
   * Wrappers
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
  textDark: {
    color: colors.black
  },
  bgWhite: {
    backgroundColor: colors.white
  },
  descriptionText: {
    fontFamily: 'lato-regular',
    fontSize: 14,
    color: '#fff'
  },
  descriptiveItem: {
    fontFamily: 'lato-bold',
    fontSize: 14,
    color: '#fff'
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

  onboardingCover: {
    resizeMode: 'cover',
    flex: 2,
    width: '100%',
  },
  onboardingCardContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '10%',
    alignSelf: 'center',
    backgroundColor: '#C8BBB5'
  },
  roundedButton: {
    width: 128,
    height: 36,
    backgroundColor: '#EE3168',
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
  blockTextInput: {
    borderRadius: 4,
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  primary: {
    backgroundColor: '#EE3168',
    borderColor: '#EE3168'
  },
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
  btn: {
    borderColor: colors.primary,
    borderRadius: 24
  }
})