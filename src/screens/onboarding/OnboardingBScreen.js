import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const OnboardingBScreen = ({ navigation }) => {
  return (
    <View style={styles.centeredContent}>
      <Text>OnboardingBScreen</Text>
      <Button title="OnboardingC" 
        onPress={() => navigation.navigate('OnboardingC')}
      />
    </View>
  )
}

export default OnboardingBScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})