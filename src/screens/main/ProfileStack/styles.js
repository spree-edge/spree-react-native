import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'

export const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyles.containerFluid,
    backgroundColor: colors.white
  },
  centeredContent: {
    ...globalStyles.containerFluid,
    ...globalStyles.centeredContent
  },
  avatar: {
    width: 80,
    height: 80
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  profileName: {
    ...globalStyles.latoBold16,
    color: colors.white,
    marginRight: 4
  },
  jumbotron: {
    height: 168,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    ...globalStyles.latoRegular16,
    ...globalStyles.textDark,
    flex: 1,
  },
  listIcon: {
    padding: 12
  },
  buttonBlockStyle: {
    ...globalStyles.mt32,
    ...globalStyles.btnBlock,
    ...globalStyles.btnPrimary
  },
})