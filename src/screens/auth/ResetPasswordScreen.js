import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft, Eye } from '../../library/icons'
import { colors } from '../../res/palette'
import { Input, Button } from 'react-native-elements'
import { styles } from './styles'

const ResetPasswordScreen = ({ navigation }) => {
  const [newPasswordSecureEntryToggle, setNewPasswordSecureEntryToggle] = useState(true)
  const [confPasswordSecureEntryToggle, setConfPasswordSecureEntryToggle] = useState(true)

  const [inputPasswordBorder, setInputPasswordBorder] = useState(false)
  const [inputConfPasswordBorder, setInputConfPasswordBorder] = useState(false)

  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  return (
    <View style={globalStyles.container}>
      <ChevronLeft size={24} style={styles.backButton} 
        onPress={navigation.goBack}
      />
      <Text style={styles.title}>Reset Password</Text>
      <Text
        style={[ styles.label, globalStyles.mt16, globalStyles.mb32 ]}
      >
        Hi John Doe. Create new password for your Spree Shop account.
      </Text>
      <View style={globalStyles.containerFluid}>
        <Input
          placeholder="New Password" 
          onFocus={() => setInputPasswordBorder(true)}
          onBlur={() => setInputPasswordBorder(false)}
          secureTextEntry={newPasswordSecureEntryToggle}
          containerStyle={[ styles.inputMainContainer, { borderWidth: inputPasswordBorder ? 1 : 0 }]}
          inputStyle={ styles.inputStyle }
          inputContainerStyle={ styles.inputContainerStyle }
          rightIcon={<Eye size={24} style={{color: colors.gray}} onPress={() => setNewPasswordSecureEntryToggle(!newPasswordSecureEntryToggle)} />}
          onChangeText={setPassword}
        />
        <Input
          placeholder="Re-enter Password"
          onFocus={() => setInputConfPasswordBorder(true)}
          onBlur={() => setInputConfPasswordBorder(false)}
          secureTextEntry={confPasswordSecureEntryToggle}
          containerStyle={[ styles.inputMainContainer, { borderWidth: inputConfPasswordBorder ? 1 : 0 }]}
          inputStyle={ styles.inputStyle }
          inputContainerStyle={ styles.inputContainerStyle }
          rightIcon={<Eye size={24} style={{color: colors.gray}} onPress={() => setConfPasswordSecureEntryToggle(!confPasswordSecureEntryToggle)} />}
          onChangeText={setConfPassword}
        />
        <Button
          title="Submit & Login"
          buttonStyle={ styles.buttonBlockStyle }
          titleStyle={ globalStyles.latoBold16 }
          onPress={() => navigation.navigate('SignIn')}
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

export default ResetPasswordScreen
