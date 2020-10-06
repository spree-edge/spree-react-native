import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'
import { Button } from 'react-native-elements'

const ActionButtonFooter = ({ title, onPress }) => {
  return (
    <View style={styles.footer}>
      <Button
        title={title}
        type="solid"
        // containerStyle={{flex: 1}}
        buttonStyle={ styles.footerAction }
        titleStyle={ globalStyles.latoBold16 }
        onPress={onPress}
      />
    </View>
  )
}

export default ActionButtonFooter

const styles = StyleSheet.create({
  footer: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopWidth: 2,
    borderTopColor: colors.background,
    // borderWidth: 1
  },
  footerAction: {
    ...globalStyles.btn,
    ...globalStyles.primary,
    margin: '4%',
    height: 48,
  },
})