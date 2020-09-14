import * as React from 'react'
import { Image, TouchableOpacity } from 'react-native'

const FlatListImageItem = ({ item, onPress, imageStyle, itemContainerStyle, ...props }) => (
  <TouchableOpacity onPress={onPress} style={itemContainerStyle}>
    <Image source={item.source} style={{width: imageStyle.width, height: imageStyle.height }} />
  </TouchableOpacity>
);

export default FlatListImageItem