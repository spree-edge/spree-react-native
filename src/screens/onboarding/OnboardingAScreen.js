import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const OnboardingAScreen = ({ navigation }) => {
  return (
    <View style={styles.centeredContent}>
      <Text>OnboardingAScreen</Text>
      <Button title="OnboardingB" 
        onPress={() => navigation.navigate('OnboardingB')}
      />
    </View>
  )
}

export default OnboardingAScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})