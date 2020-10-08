import * as React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { globalStyles } from '../../styles/global'

const ActivityIndicatorCard = () => (
  <View style={[ globalStyles.containerFluid, globalStyles.centeredContent ]}>
    <ActivityIndicator size="large" />
  </View>
)

export default ActivityIndicatorCard