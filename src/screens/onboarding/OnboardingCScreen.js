import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const OnboardingCScreen = ({ navigation }) => {
  return (
    <View style={styles.centeredContent}>
      <Text>OnboardingCScreen</Text>
      <Button title="SignIn" 
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  )
}

export default OnboardingCScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})