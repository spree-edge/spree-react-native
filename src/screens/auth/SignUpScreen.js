import * as React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft, Eye } from '../../library/icons'
import { colors } from '../../res/palette'
import { Button, Input } from 'react-native-elements'
import { AuthContext } from '../../library/components/context'

const SignUpScreen = ({ navigation }) => {
  // const password = React.createRef()
  const [secureTextEntryToggle, setSecureTextEntryToggle] = React.useState(true)
  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { signUp } = React.useContext(AuthContext)

  return (
    <View style={globalStyles.container}>
      <ChevronLeft size={24} style={[globalStyles.mt32, {color: colors.black}]} 
        onPress={navigation.goBack}
      />
      <Text style={[globalStyles.title, globalStyles.mt16]}>Join Shopit</Text>
      <View style={[globalStyles.containerFluid, { justifyContent: 'space-evenly',}]}>
        <View style={[{justifyContent: "center",}]}>
          <Input
            placeholder="Name" 
            containerStyle={[globalStyles.mb16, {backgroundColor: '#fff', height: 52, borderRadius: 4, }]}
            inputStyle={{fontFamily: 'lato-regular',}}
            inputContainerStyle={{ paddingTop: 5, borderBottomColor: '#fff'}}
          />
          <Input
            placeholder="Email" 
            keyboardType="email-address"
            containerStyle={[globalStyles.mb16, {backgroundColor: '#fff', height: 52, borderRadius: 4, }]}
            inputStyle={{fontFamily: 'lato-regular',}}
            inputContainerStyle={{ paddingTop: 5, borderBottomColor: '#fff'}}
            onChangeText={text => setEmail(text)}
            // onEndEditing={() => console.log(email)}
          />
          <Input
            // ref={password}
            placeholder="Password"
            secureTextEntry={secureTextEntryToggle}
            containerStyle={[globalStyles.mb16, {backgroundColor: '#fff', height: 52, borderRadius: 4, }]}
            inputStyle={{fontFamily: 'lato-regular',}}
            inputContainerStyle={{ borderBottomColor: '#fff'}}
            rightIcon={<Eye size={24} style={{color: colors.gray}} onPress={() => setSecureTextEntryToggle(!secureTextEntryToggle)} />}
            onChangeText={text => setPassword(text)}
            // onEndEditing={() => console.log(password)}
          />
          <TouchableHighlight
            style={[globalStyles.btnBlock, globalStyles.primary, globalStyles.mt32 ]}
            // onPress={() => signUp(email, password)}
          >
            <Text style={[globalStyles.subhead, { color: "#fff" }]}>
              Create Account
            </Text>
          </TouchableHighlight>
          <View style={[globalStyles.mt32, {flexDirection: 'row', alignSelf: 'center', alignItems: 'center'}]}>
            <Text style={{color: colors.gray, fontSize: 16}}>Already have an account? </Text>
            <Text
              style={[globalStyles.descriptionText, {color: colors.primary, fontSize: 16}]}
              onPress={() => navigation.navigate('SignIn')}
            > Login</Text>
            {/* <Button
              title="Signup"
              type="clear"
              titleStyle={[globalStyles.descriptionText, {color: colors.primary, fontSize: 16}]}
            /> */}
          </View>
        </View>
        <View>
          <Text
            style={[globalStyles.descriptionText, {color: colors.primary, fontSize: 16, alignSelf: 'center'}]}
            onPress={() => navigation.navigate('SignIn')}
          > Terms of Use & Privacy Policy</Text>
        </View>
      </View>
    </View>
  )
}

export default SignUpScreen
