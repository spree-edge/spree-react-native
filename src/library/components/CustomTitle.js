import * as React from 'react'
import { Text } from 'react-native'

const CustomTitle = ({ title, length }) => {
  return (
    <Text>{title} <Text style={{
      fontSize: 12
    }}>{`(${length} items)`}</Text></Text>
  )
}

export default CustomTitle