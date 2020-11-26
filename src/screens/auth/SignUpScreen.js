import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft, Eye } from '../../library/icons'
import { colors } from '../../res/palette'
import { Button, Input } from 'react-native-elements'
import { styles } from './styles'
import TextField from '../../library/components/TextField'
import { accountCreate } from '../../redux'


const SignUpScreen = ({ navigation, dispatch }) => {
  const [secureTextEntryToggle, setSecureTextEntryToggle] = useState(true)
  
  const [inputPasswordBorder, setInputPasswordBorder] = useState(false)
  const [inputPasswordConfirmationBorder, setInputPasswordConfirmationBorder] = useState(false)

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSignup = () =>  {
    dispatch(accountCreate(
      {
        user: {
          email: email, 
          password: password,
          password_confirmation: passwordConfirmation
        }
      }
    ))
  }

  return (
    <View style={globalStyles.container}>
      <ChevronLeft size={24} style={styles.backButton} 
        onPress={navigation.goBack}
      />
      <Text style={styles.title}>Join Spree Shop</Text>
      <View style={[globalStyles.containerFluid, { justifyContent: 'space-evenly',}]}>
        <View>
          <TextField
            placeholder="Name"
            inputStyle={styles.inputStyle}
            containerStyle={[styles.containerStyle, globalStyles.mb16]}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={setUserName}
            value={userName}
          />
          <TextField
            placeholder="Email"
            inputStyle={styles.inputStyle}
            containerStyle={[styles.containerStyle, globalStyles.mb16]}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={setEmail}
            value={email}
          />
          <Input
            placeholder="Password"
            secureTextEntry={secureTextEntryToggle}
            onFocus={() => setInputPasswordBorder(true)}
            onBlur={() => setInputPasswordBorder(false)}
            containerStyle={[ styles.inputMainContainer, { borderWidth: inputPasswordBorder ? 1 : 0 }]}
            inputStyle={ styles.inputStyle }
            inputContainerStyle={ styles.inputContainerStyle }
            rightIcon={<Eye size={24} style={{ color: colors.gray }} onPress={() => setSecureTextEntryToggle(!secureTextEntryToggle)} />}
            onChangeText={setPassword}
          />
          <Input
            placeholder="Password Confirmation"
            secureTextEntry={secureTextEntryToggle}
            onFocus={() => setInputPasswordConfirmationBorder(true)}
            onBlur={() => setInputPasswordConfirmationBorder(false)}
            containerStyle={[ styles.inputMainContainer, { borderWidth: inputPasswordConfirmationBorder ? 1 : 0 }]}
            inputStyle={ styles.inputStyle }
            inputContainerStyle={ styles.inputContainerStyle }
            rightIcon={<Eye size={24} style={{ color: colors.gray }} onPress={() => setSecureTextEntryToggle(!secureTextEntryToggle)} />}
            onChangeText={setPasswordConfirmation}
          />
          <Button
            title="Create Account"
            buttonStyle={styles.buttonBlockStyle}
            titleStyle={globalStyles.latoBold16}
            onPress={handleSignup}
          />
          <View style={styles.footer}>
            <Text style={styles.label}>Already have an account? </Text>
            <Text
              style={styles.footerAction}
              onPress={() => navigation.navigate('SignIn')}
            > Login</Text>
          </View>
        </View>
        <View>
          <Text
            style={[ styles.footerAction, { alignSelf: 'center' }]}
            onPress={() => navigation.navigate('SignIn')}
          > Terms of Use & Privacy Policy</Text>
        </View>
      </View>
    </View>
  )
}

export default connect()(SignUpScreen)
