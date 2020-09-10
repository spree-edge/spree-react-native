import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center'
  },
  containerFluid: {
    flex: 1
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
    lineHeight: 40,
  },
  headline3: {
    fontFamily: 'lato-bold',
    fontSize: 18,
  },
  subhead: {
    fontFamily: 'lato-bold',
    fontSize: 16
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
  }
})