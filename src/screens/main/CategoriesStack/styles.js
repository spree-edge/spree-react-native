import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'

export const styles = StyleSheet.create({
  accordionLevel1: {
    height: 93,
    marginTop: 2,
  },
  accordionLevel2Style: {
    marginBottom: 1
  },
  accordionLevel1Title: {
    ...globalStyles.latoBold18,
    lineHeight: 24,
    color: colors.black,
    marginTop: 5,
  },
  accordionLevel1Description: {
    ...globalStyles.latoRegular,
    opacity: 0.7,
    lineHeight: 24,
  },
  accordionLevel2TitleStyle: {
    ...globalStyles.latoRegular16,
    color: colors.gray,
  },
  listItemTitle: {
    ...globalStyles.latoRegular14,
    color: colors.black,
  },
  listItem: {
    backgroundColor: '#f5f5f5',
    marginLeft: 10,
  },

  /**
   * Custom Accordion Styles
   */
  rowContainer: {
    flexDirection: 'row'
  },
  accordionItem: {
    flex: 1,
    padding: 24,
  },
  accordionSelectorContainer: {
    ...globalStyles.container,
    paddingTop: 16,
  },
  accordionLevel1TitleNew: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTitleNew: {
    ...globalStyles.latoRegular14,
    color: colors.black,
  }
})
