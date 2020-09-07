import * as React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/global'
import ChevronLeft from '../../../assets/icons/ChevronLeft'
import { colors } from '../../res/palette'
import { Button, Input } from 'react-native-elements'
import Eye from '../../../assets/icons/Eye'

const ResetPasswordScreen = ({ navigation }) => {
  const [newPasswordSecureEntryToggle, setNewPasswordSecureEntryToggle] = React.useState(true)
  const [confPasswordSecureEntryToggle, setConfPasswordSecureEntryToggle] = React.useState(true)

  return (
    <View style={globalStyles.container}>
      <ChevronLeft style={[globalStyles.mt32, {color: colors.black}]} 
        onPress={navigation.goBack}
      />
      <Text style={[globalStyles.title, globalStyles.mt16]}>Reset Password</Text>
      <Text
        style={[globalStyles.mt16, globalStyles.mb32, {color: colors.gray, lineHeight: 20}]}
      >
        Hi John Doe. Create new password for your Shopit account.
      </Text>
      <View style={[globalStyles.containerFluid, { justifyContent: "flex-start" }]}>
        <Input
          // ref={password}
          placeholder="New Password" 
          secureTextEntry={newPasswordSecureEntryToggle}
          containerStyle={[globalStyles.mb16, {backgroundColor: '#fff', height: 52, borderRadius: 4, }]}
          inputStyle={{fontFamily: 'lato-regular',}}
          inputContainerStyle={{ borderBottomColor: '#fff'}}
          rightIcon={<Eye style={{color: colors.gray}} onPress={() => setNewPasswordSecureEntryToggle(!newPasswordSecureEntryToggle)} />}
        />
        <Input
          // ref={password}
          placeholder="Re-enter Password" 
          secureTextEntry={confPasswordSecureEntryToggle}
          containerStyle={[globalStyles.mb16, {backgroundColor: '#fff', height: 52, borderRadius: 4, }]}
          inputStyle={{fontFamily: 'lato-regular',}}
          inputContainerStyle={{ borderBottomColor: '#fff'}}
          rightIcon={<Eye style={{color: colors.gray}} onPress={() => setConfPasswordSecureEntryToggle(!confPasswordSecureEntryToggle)} />}
        />
        <TouchableHighlight
          style={[globalStyles.btnBlock, globalStyles.primary, globalStyles.mt32 ]}
        >
          <Text style={[globalStyles.subhead, { color: "#fff" }]}>
            Submit & Login
          </Text>
        </TouchableHighlight>
        <View style={[globalStyles.mt32, {flexDirection: 'row', alignSelf: 'center', alignItems: 'center'}]}>
          <Text style={{color: colors.gray, fontSize: 16}}>Don't have and account ? </Text>
          <Text
            style={[globalStyles.descriptionText, {color: colors.primary, fontSize: 16}]}
            onPress={() => navigation.navigate('SignUp')}
          > Signup</Text>
        </View>
      </View>
    </View>
  )
}

export default ResetPasswordScreen
