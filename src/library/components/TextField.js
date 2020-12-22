import * as React from "react"
import { View, StyleSheet } from "react-native"
import { globalStyles } from '../../styles/global'
import { colors } from '../../res/palette'
import { Input } from 'react-native-elements'

const TextField = ({
  placeholder,
  keyboardType,
  containerStyle,
  inputStyle,
  inputContainerStyle,
  rightElement,
  onChangeText,
  value,
}) => {
  const [inputBorder, setInputBorder] = React.useState(false)

  return (
    <View>
      <Input
        placeholder={placeholder || "Please Apply a placeholder"}
        keyboardType={keyboardType || "default"}
        onFocus={() => setInputBorder(true)}
        onBlur={() => setInputBorder(false)}
        containerStyle={[containerStyle, {
          borderColor: inputBorder ? colors.primary : '#ccc',
        }]}
        inputStyle={ inputStyle || globalStyles.latoRegular}
        inputContainerStyle={inputContainerStyle || { borderBottomColor: '#fff'}}
        rightIcon={() => rightElement}
        onChangeText={onChangeText}
        value={value}
        // onEndEditing={() => console.log(value)}      
      />
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({
  container: {
    ...globalStyles.mb16,
    backgroundColor: '#fff', 
    height: 52, 
    borderRadius: 4,
    borderWidth: 1,
  },
  inputRight: {
    ...globalStyles.latoRegular,
    ...globalStyles.textPrimary,
  },
})