import { StyleSheet } from 'react-native'
import { colors } from '../../../res/palette'
import { globalStyles } from '../../../styles/global'

export const styles = StyleSheet.create({
  footer: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopWidth: 2,
    borderTopColor: colors.background,
  },
  footerAction: {
    ...globalStyles.btn,
    ...globalStyles.btnSolid,
    margin: '4%',
    height: 48,
  },
})