import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SignUpScreen = () => {
  return (
    <View style={styles.centeredContent}>
      <Text>SignUpScreen</Text>
      <Button title="SignUp" 
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})