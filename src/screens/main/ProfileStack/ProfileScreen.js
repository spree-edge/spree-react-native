import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProfileScreen = () => {
  return (
    <View style={styles.centeredContent}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})