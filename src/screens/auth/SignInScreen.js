import * as React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft, Eye } from '../../library/icons'
import { colors } from '../../res/palette'
import { Button, Input } from 'react-native-elements'
import { AuthContext } from '../../library/utils/context'
import { styles } from './styles'
import { userLogin } from '../../redux/actions/authActions'
import TextField from '../../library/components/TextField'


const SignInScreen = ({ navigation, dispatch }) => {
  // const password = React.createRef()
  const [secureTextEntryToggle, setSecureTextEntryToggle] = React.useState(true)
  const [inputEmailBorder, setInputEmailBorder] = React.useState(false)
  const [inputPasswordBorder, setInputPasswordBorder] = React.useState(false)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { signIn } = React.useContext(AuthContext)

  const handleLogin = () =>  {
    dispatch(userLogin({
      username: email, 
      password: password,
      grant_type: "password"
    }))
  }


  return (
    <View style={globalStyles.container}>
      <ChevronLeft size={24} style={styles.backButton}
        onPress={navigation.goBack}
      />
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.mainContainer}>
        <TextField
          placeholder="Email"
          inputStyle={styles.inputStyle}
          containerStyle={[styles.containerStyle, globalStyles.mb16]}
          inputContainerStyle={styles.inputContainerStyle}
          onChangeText={setEmail}
          value={email}
        />
        {/* <Input
          placeholder="Email" 
          keyboardType="email-address"
          onFocus={() => setInputEmailBorder(true)}
          onBlur={() => setInputEmailBorder(false)}
          containerStyle={[ styles.inputMainContainer, { borderWidth: inputEmailBorder ? 1 : 0 } ]}
          inputStyle={ styles.inputStyle }
          inputContainerStyle={[ styles.inputContainerStyle, { paddingTop: 5 }]}
          onChangeText={setEmail}
          // onEndEditing={() => console.log(email)}
        /> */}
        <Input
          placeholder="Password" 
          secureTextEntry={secureTextEntryToggle}
          onFocus={() => setInputPasswordBorder(true)}
          onBlur={() => setInputPasswordBorder(false)}
          containerStyle={[ styles.inputMainContainer, {borderWidth: inputPasswordBorder ? 1 : 0 }]}
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
          rightIcon={<Eye size={24} style={{color: colors.gray}} onPress={() => setSecureTextEntryToggle(!secureTextEntryToggle)} />}
          onChangeText={setPassword}
          // onEndEditing={() => console.log(password)}
        />
        <Button 
          title="Password help ?"
          type="clear"
          containerStyle={{ alignSelf: 'flex-end' }}
          titleStyle={styles.formClearActionButton}
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <Button
          title="Login to Shopit"
          buttonStyle={ styles.buttonBlockStyle }
          titleStyle={ globalStyles.latoBold16 }
          onPress={ handleLogin }
        />
        <View style={styles.footer}>
          <Text style={styles.label}>Don't have an account ? </Text>
          <Text
            style={styles.footerAction}
            onPress={() => navigation.navigate('SignUp')}
          > Signup</Text>
        </View>
      </View>
    </View>
  )
}

export default connect()(SignInScreen)
