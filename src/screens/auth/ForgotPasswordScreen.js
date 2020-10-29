import * as React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft } from '../../library/icons'
import { Input, Button } from 'react-native-elements'
import { styles } from './styles'

const ForgotPasswordScreen = ({ navigation }) => {
  const [inputEmailBorder, setInputEmailBorder] = React.useState(false)
  
  const [email, setEmail] = React.useState('')

  return (
    <View style={globalStyles.container}>
      <ChevronLeft size={24} style={styles.backButton} 
        onPress={navigation.goBack}
      />
      <Text style={styles.title}>Forget Password ?</Text>
      <Text style={[ styles.label, globalStyles.mt16, globalStyles.mb32 ]}>
        Please enter your email address to receive 4-digit code via email to create a new password.
      </Text>
      <Input
        placeholder="Enter Registered Email" 
        keyboardType="email-address"
        onFocus={() => setInputEmailBorder(true)}
        onBlur={() => setInputEmailBorder(false)}
        containerStyle={[ styles.inputMainContainer, {borderWidth: inputEmailBorder ? 1 : 0 } ]}
        inputStyle={styles.inputStyle}
        inputContainerStyle={[ styles.inputContainerStyle, { paddingTop: 5 }]}
        onChangeText={setEmail}
      />
      <Button
        title="Send Me Now"
        buttonStyle={styles.buttonBlockStyle}
        titleStyle={globalStyles.latoBold16}
        onPress={() => navigation.navigate('EnterCode')}
      />
    </View>
  )
}

export default ForgotPasswordScreen
