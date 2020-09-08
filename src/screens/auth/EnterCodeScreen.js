import * as React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft } from '../../library/icons'
import { colors } from '../../res/palette'
import { Input } from 'react-native-elements'

const EnterCodeScreen = ({ navigation }) => {

  return (
    <View style={globalStyles.container}>
      <ChevronLeft style={[globalStyles.mt32, {color: colors.black}]} 
        onPress={navigation.goBack}
      />
      <Text style={[globalStyles.title, globalStyles.mt16]}>Enter Code</Text>
      <Text
        style={[globalStyles.mt16, globalStyles.mb32, {color: colors.gray, lineHeight: 20}]}
      >
         We have sent an email with 4-digit password reset code. Enter code below to continue.
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
        onPress={() => navigation.navigate('ResetPassword')}
      >
        <Text style={[globalStyles.subhead, { color: "#fff" }]}>
          Submit & Continue
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default EnterCodeScreen
