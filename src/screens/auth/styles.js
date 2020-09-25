import { StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'
import { colors } from '../../res/palette'

export const styles = StyleSheet.create({
  backButton: {
    ...globalStyles.title,
    ...globalStyles.mt48,
    color: colors.black
  },
  title: {
    ...globalStyles.title, 
    ...globalStyles.mt16
  },
  mainContainer: {
    ...globalStyles.containerFluid,
    justifyContent: "center"
  },
  inputMainContainer: {
    ...globalStyles.mb16,
    backgroundColor: '#fff', 
    height: 52, 
    borderRadius: 4,
    borderColor: colors.primary,
  },
  inputStyle: {
    fontFamily: 'lato-regular'
  },
  inputContainerStyle: {
    borderBottomColor: '#fff'
  },
  buttonBlockStyle: {
    ...globalStyles.mt32,
    backgroundColor: colors.primary,
    borderRadius: 24,
    height: 48,
  },
  footer: {
    ...globalStyles.mt32,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  }
})