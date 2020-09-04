import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  cover: {
    width: '100%',
  },
  onboardingCardTitle: {
    fontFamily: 'lato-bold',
    fontSize: 34,
    color: '#fff'
  },
  descriptionText: {
    fontFamily: 'lato-regular',
    fontSize: 14,
    color: '#fff'
  },
  onboardingCardContainer: {
    flex: 1,
    paddingVertical: 48,
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
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptiveItem: {
    fontFamily: 'lato-bold',
    fontSize: 14,
    color: '#fff'
  }
})