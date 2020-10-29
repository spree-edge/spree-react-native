import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const ActionButtonFooter = ({ title, onPress }) => {
  return (
    <View style={styles.footer}>
      <Button
        title={title}
        type="solid"
        buttonStyle={ styles.footerAction }
        titleStyle={ globalStyles.latoBold16 }
        onPress={onPress}
      />
    </View>
  )
}

export default ActionButtonFooter