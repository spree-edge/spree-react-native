import * as React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft, Eye } from '../../library/icons'
import { colors } from '../../res/palette'
import { Button, Input } from 'react-native-elements'
import { AuthContext } from '../../library/utils/context'
import { styles } from './styles'

import { accountCreate } from '../../redux/actions/accountActions'


const SignUpScreen = ({ navigation, dispatch }) => {
  const [secureTextEntryToggle, setSecureTextEntryToggle] = React.useState(true)
  
  const [inputUserNameBorder, setInputUserNameBorder] = React.useState(false)
  const [inputEmailBorder, setInputEmailBorder] = React.useState(false)
  const [inputPasswordBorder, setInputPasswordBorder] = React.useState(false)
  const [inputPasswordConfirmationBorder, setInputPasswordConfirmationBorder] = React.useState(false)

  const [userName, setUserName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')

  const { signUp } = React.useContext(AuthContext)

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
      <Text style={styles.title}>Join Shopit</Text>
      <View style={[globalStyles.containerFluid, { justifyContent: 'space-evenly',}]}>
        <View>
          <Input
            placeholder="Name"
            onFocus={() => setInputUserNameBorder(true)}
            onBlur={() => setInputUserNameBorder(false)}
            containerStyle={[styles.inputMainContainer, { borderWidth: inputUserNameBorder ? 1 : 0 }]}
            inputStyle={styles.inputStyle}
            inputContainerStyle={[ styles.inputContainerStyle, { paddingTop: 5 }]}
            onChangeText={setUserName}
            // onEndEditing={() => console.log(userName)}
          />
          <Input
            placeholder="Email" 
            keyboardType="email-address"
            onFocus={() => setInputEmailBorder(true)}
            onBlur={() => setInputEmailBorder(false)}
            containerStyle={[styles.inputMainContainer, { borderWidth: inputEmailBorder ? 1 : 0 }]}
            inputStyle={styles.inputStyle}
            inputContainerStyle={[ styles.inputContainerStyle, { paddingTop: 5 }]}
            onChangeText={setEmail}
            // onEndEditing={() => console.log(email)}
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
            // onEndEditing={() => console.log(password)}
          />
          <Input
            placeholder="Password Confirmation"
            secureTextEntry={secureTextEntryToggle}
            onFocus={() => setInputPasswordConfirmationBorder(true)}
            onBlur={() => setInputPasswordConfirmationBorder(false)}
            containerStyle={[ styles.inputMainContainer, { borderWidth: inputPasswordBorder ? 1 : 0 }]}
            inputStyle={ styles.inputStyle }
            inputContainerStyle={ styles.inputContainerStyle }
            rightIcon={<Eye size={24} style={{ color: colors.gray }} onPress={() => setSecureTextEntryToggle(!secureTextEntryToggle)} />}
            onChangeText={setPasswordConfirmation}
            // onEndEditing={() => console.log(password)}
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
