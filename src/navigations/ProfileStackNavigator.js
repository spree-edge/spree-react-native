import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../screens/main/ProfileStack/ProfileScreen'

const ProfileStack = createStackNavigator()

function ProfileStackNavigator () {

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackNavigator