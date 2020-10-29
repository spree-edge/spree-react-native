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
  containerStyle: {
    backgroundColor: '#fff',
    height: 52,
    borderRadius: 4,
  },
  inputStyle: { 
    ...globalStyles.latoRegular16
  },
  inputContainerStyle: {
    paddingLeft: 5,
    borderBottomColor: '#fff'
  },
  formClearActionButton: {
    ...globalStyles.textPrimary,
    ...globalStyles.latoRegular14,
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
  },
  label: {
    ...globalStyles.textSecondary,
    ...globalStyles.latoRegular16,
  },
  footerAction: {
    ...globalStyles.textPrimary,
    ...globalStyles.latoRegular16,
  },
  inputRoundedBackground: {
    height: 52,
    borderRadius: 26,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  inputRoundedContainer: { 
    width: 73
  }
})