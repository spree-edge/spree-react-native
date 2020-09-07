import * as React from "react";
import { View, TextInput } from "react-native";
import { globalStyles } from '../../styles/global'
import { colors } from '../../res/palette'
import Eye from '../../../assets/icons/Eye'

const TextField = ({ secureTextEntry, }) => {
  return (
    <View
      style={[
        globalStyles.blockTextInput,
        globalStyles.mb16,
        { 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff', 
        },
      ]}
    >
      <TextInput
        placeholderTextColor={colors.gray}
        style={{ fontFamily: 'lato-regular', padding: 16 }}
      />
      <Eye style={{color: colors.gray, paddingHorizontal: 20}} />
    </View>
  )
}

export default TextField