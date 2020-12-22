import * as React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft } from '../../library/icons'
import { Input, Button } from 'react-native-elements'
import { styles } from './styles'

const EnterCodeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <ChevronLeft size={24} style={styles.backButton} 
        onPress={navigation.goBack}
      />
      <Text style={styles.title}>Enter Code</Text>
      <Text
        style={[ styles.label, globalStyles.mt16, globalStyles.mb32 ]}
      >
         We have sent an email with 4-digit password reset code. Enter code below to continue.
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={ styles.inputRoundedContainer }>
          <Input style={styles.inputRoundedBackground} />
        </View>
        <View style={ styles.inputRoundedContainer }>
          <Input style={styles.inputRoundedBackground} />
        </View>
        <View style={ styles.inputRoundedContainer }>
          <Input style={styles.inputRoundedBackground} />
        </View>
        <View style={ styles.inputRoundedContainer }>
          <Input style={styles.inputRoundedBackground} />
        </View>
      </View>
      <Button
        title="Submit & Continue"
        buttonStyle={styles.buttonBlockStyle}
        titleStyle={globalStyles.latoBold16}
        onPress={() => navigation.navigate('ResetPassword')}
      />
    </View>
  )
}

export default EnterCodeScreen
