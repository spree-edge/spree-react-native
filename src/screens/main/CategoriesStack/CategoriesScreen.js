import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CategoriesScreen = () => {
  return (
    <View style={styles.centeredContent}>
      <Text>CategoriesScreen</Text>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})