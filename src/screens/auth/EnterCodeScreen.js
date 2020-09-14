import * as React from 'react'
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft } from '../../library/icons'
import { colors } from '../../res/palette'
import { Input } from 'react-native-elements'

const EnterCodeScreen = ({ navigation }) => {

  return (
    <View style={globalStyles.container}>
      <ChevronLeft size={24} style={[globalStyles.mt32, {color: colors.black}]} 
        onPress={navigation.goBack}
      />
      <Text style={[globalStyles.title, globalStyles.mt16]}>Enter Code</Text>
      <Text
        style={[globalStyles.mt16, globalStyles.mb32, {color: colors.gray, lineHeight: 20}]}
      >
         We have sent an email with 4-digit password reset code. Enter code below to continue.
      </Text>
      {/* <Input
        placeholder="Enter Registered Email" 
        keyboardType="email-address"
        containerStyle={[{backgroundColor: '#fff', height: 52, borderRadius: 4, }]}
        inputStyle={{fontFamily: 'lato-regular',}}
        inputContainerStyle={{ paddingTop: 5, borderBottomColor: '#fff'}}
      /> */}
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 73,
          }}
        >
          <Input
            style={styles.inputBackground}
          />
        </View>
        <View
          style={{
            width: 73,
          }}
        >
          <Input
            style={styles.inputBackground}
          />
        </View>
        <View
          style={{
            width: 73,
          }}
        >
          <Input
            style={styles.inputBackground}
          />
        </View>
        <View
          style={{
            width: 73,
          }}
        >
          <Input
            style={styles.inputBackground}
          />
        </View>
      </View>
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

const styles = StyleSheet.create({
  inputBackground: {
    height: 52,
    borderRadius: 26,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
  }
})