import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../screens/main/ProfileStack/ProfileScreen'
import { Menu, ShoppingBag, Search } from '../library/icons'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'

const ProfileStack = createStackNavigator()

function ProfileStackNavigator ({ navigation }) {

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerLeft: () => <Menu size={24} style={{color: colors.black}} 
          onPress={() => navigation.openDrawer()}
        />,
        headerRight: () => <>
          <Search size={24} style={{color: colors.black, marginRight: 14}} />
          <ShoppingBag size={24} style={{color: colors.black}} onPress={() => navigation.navigate('Bag')} />
        </>,
        headerLeftContainerStyle: {
          paddingHorizontal: 22
        },
        headerTitleStyle: {
          ...globalStyles.latoBold18
        },
        headerRightContainerStyle: {
          paddingHorizontal: 18,
          flexDirection: 'row',
          alignItems: 'center',
        }
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackNavigator