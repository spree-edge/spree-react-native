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
    // borderWidth: 2
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
    // backgroundColor: '#f5f5f5',
    // borderWidth: 2
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: colors.black,
    fontFamily: 'lato-regular',
    fontSize: 16
  },
  listIcon: {
    padding: 12
  },
  buttonBlockStyle: {
    ...globalStyles.mt32,
    backgroundColor: colors.primary,
    borderRadius: 24,
    height: 48,
  },
})