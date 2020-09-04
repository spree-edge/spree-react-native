import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.centeredContent}>
      <Text>SignInScreen</Text>
      <Button title="SignUp" 
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})