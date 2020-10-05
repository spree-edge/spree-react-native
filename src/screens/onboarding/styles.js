import { StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'
import { colors } from '../../res/palette'

export const styles = StyleSheet.create({
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
  inactive: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  active: {
    width: 16,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#ee3168"
  },
  dotsContainer: {
    ...globalStyles.mt32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 70,
  },
  footerActions: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'baseline', 
    marginTop: 24
  },
  title: {
    ...globalStyles.title,
    color: colors.white
  },
  description: {
    ...globalStyles.latoRegular14,
    color: colors.white
  },
  footerIcon: {
    color: '#fff',
    marginLeft: 8
  },
  footerAction: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerActionText: {
    ...globalStyles.latoBold14,
    color: colors.white
  }
})