import * as React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft, Eye } from '../../library/icons'
import { colors } from '../../res/palette'
import { Button, Input } from 'react-native-elements'

const SignInScreen = ({ navigation }) => {
  // const password = React.createRef()
  const [secureTextEntryToggle, setSecureTextEntryToggle] = React.useState(true)
  const [inputBorder, setInputBorder] = React.useState(false)

  return (
    <View style={globalStyles.container}>
      <ChevronLeft style={[globalStyles.mt32, {color: colors.black}]} 
        onPress={navigation.goBack}
      />
      <Text style={[globalStyles.title, globalStyles.mt16]}>Welcome Back!</Text>
      <View style={[globalStyles.containerFluid, { justifyContent: "center" }]}>
        <Input
          placeholder="Email" 
          keyboardType="email-address"
          onFocus={() => setInputBorder(true)}
          onBlur={() => setInputBorder(false)}
          containerStyle={[globalStyles.mb16, {
            backgroundColor: '#fff', 
            height: 52, 
            borderRadius: 4,
            borderWidth: inputBorder ? 1 : 0,
            borderColor: colors.primary
          }]}
          inputStyle={{fontFamily: 'lato-regular',}}
          inputContainerStyle={{ paddingTop: 5, borderBottomColor: '#fff'}}
        />
        <Input
          // ref={password}
          placeholder="Password" 
          secureTextEntry={secureTextEntryToggle}
          containerStyle={[globalStyles.mb16, {backgroundColor: '#fff', height: 52, borderRadius: 4, }]}
          inputStyle={{fontFamily: 'lato-regular',}}
          inputContainerStyle={{ borderBottomColor: '#fff'}}
          rightIcon={<Eye style={{color: colors.gray}} onPress={() => setSecureTextEntryToggle(!secureTextEntryToggle)} />}
        />
        <Button 
          title="Password help ?"
          type="clear"
          containerStyle={{alignSelf: 'flex-end'}}
          titleStyle={[globalStyles.descriptionText, {color: colors.primary,}]}
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <TouchableHighlight
          style={[globalStyles.btnBlock, globalStyles.primary, globalStyles.mt32 ]}
        >
          <Text style={[globalStyles.subhead, { color: "#fff" }]}>
            Login to Shopit
          </Text>
        </TouchableHighlight>
        <View style={[globalStyles.mt32, {flexDirection: 'row', alignSelf: 'center', alignItems: 'center'}]}>
          <Text style={{color: colors.gray, fontSize: 16}}>Don't have an account ? </Text>
          <Text
            style={[globalStyles.descriptionText, {color: colors.primary, fontSize: 16}]}
            onPress={() => navigation.navigate('SignUp')}
          > Signup</Text>
          {/* <Button
            title="Signup"
            type="clear"
            titleStyle={[globalStyles.descriptionText, {color: colors.primary, fontSize: 16}]}
          /> */}
        </View>
      </View>
    </View>
  )
}

export default SignInScreen
