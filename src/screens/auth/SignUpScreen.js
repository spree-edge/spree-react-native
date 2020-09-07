import * as React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/global'
import ChevronLeft from '../../../assets/icons/ChevronLeft'
import { colors } from '../../res/palette'
import { Button, Input } from 'react-native-elements'
import Eye from '../../../assets/icons/Eye'

const SignUpScreen = ({ navigation }) => {
  // const password = React.createRef()
  const [secureTextEntryToggle, setSecureTextEntryToggle] = React.useState(true)

  return (
    <View style={globalStyles.container}>
      <ChevronLeft style={[globalStyles.mt32, {color: colors.black}]} 
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
          <TouchableHighlight
            style={[globalStyles.btnBlock, globalStyles.primary, globalStyles.mt32 ]}
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
