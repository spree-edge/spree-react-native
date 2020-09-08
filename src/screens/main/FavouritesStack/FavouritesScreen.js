import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FavouritesScreen = () => {
  return (
    <View style={styles.centeredContent}>
      <Text>FavouritesScreen</Text>
    </View>
  )
}

export default FavouritesScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})