import * as React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft } from '../../library/icons'
import { colors } from '../../res/palette'
import { Input } from 'react-native-elements'

const ForgotPasswordScreen = ({ navigation }) => {

  return (
    <View style={globalStyles.container}>
      <ChevronLeft size={24} style={[globalStyles.mt32, {color: colors.black}]} 
        onPress={navigation.goBack}
      />
      <Text style={[globalStyles.title, globalStyles.mt16]}>Forget Password ?</Text>
      <Text
        style={[globalStyles.mt16, globalStyles.mb32, {color: colors.gray, lineHeight: 20}]}
      >
        Please enter your email address to receive 4-digit code via email to create a new password.
      </Text>
      <Input
        placeholder="Enter Registered Email" 
        keyboardType="email-address"
        containerStyle={[{backgroundColor: '#fff', height: 52, borderRadius: 4, }]}
        inputStyle={{fontFamily: 'lato-regular',}}
        inputContainerStyle={{ paddingTop: 5, borderBottomColor: '#fff'}}
      />
      <TouchableHighlight
        style={[globalStyles.btnBlock, globalStyles.primary, globalStyles.mt32 ]}
        onPress={() => navigation.navigate('EnterCode')}
      >
        <Text style={[globalStyles.subhead, { color: "#fff" }]}>
          Send Me Now
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default ForgotPasswordScreen
