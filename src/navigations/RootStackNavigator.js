import * as React from "react"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ActivityIndicator, View } from 'react-native'

import MainDrawerNavigator from './MainDrawerNavigator'

import SignInScreen from '../screens/auth/SignInScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import OnboardingAScreen from '../screens/onboarding/OnboardingAScreen'
import OnboardingBScreen from '../screens/onboarding/OnboardingBScreen'
import OnboardingCScreen from '../screens/onboarding/OnboardingCScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen'
import EnterCodeScreen from '../screens/auth/EnterCodeScreen'

import { globalStyles } from '../styles/global'
import { AuthContext } from '../library/utils/context'
import AsyncStorage from '@react-native-community/async-storage'
import { retrieveToken, userLogin, userLogout, userRegister } from '../redux/actionCreators/authentication'
import { connect } from 'react-redux'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // background: 'rgb(255, 255, 255)',
  },
};

const RootStack = createStackNavigator()

function RootStackNavigator({ authState, dispatch}) {

  const authContext = React.useMemo(
    () => ({
    signIn: (email, password) => {
      
      fetch('http://10.0.2.2:3000/spree_oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'token=InpmWTRUckMwTHVNZ202d2RVTVg4N0ExNTkwNTYxMTc5MDk5Ig%3D%3D--751c67228985fd14c7edbeddfd9952518997f1e5; guest_token=InpmWTRUckMwTHVNZ202d2RVTVg4N0ExNTkwNTYxMTc5MDk5Ig%3D%3D--751c67228985fd14c7edbeddfd9952518997f1e5; connect.sid=s%3AYJFykEuccStMImXWZtqGrv97Qg5dpOMy.yLOFiVNLb1no8MB9a%2BfvhEu1UZYSOzfVrTcB77oBxW8'
        },
        body: JSON.stringify({
          'username': email,
          'password': password,
          'grant_type': "password"
        })
      })
      .then(res => res.json())
      .then(async data => {
        try{
          await AsyncStorage.setItem('userToken', data.access_token)
          await AsyncStorage.setItem('email', email)
          dispatch(userLogin(email, data.access_token))
        } catch(e) {
          console.log(e)
        }
      })
    },
    signOut: async () => {

      try{
        await AsyncStorage.removeItem('userToken')
        await AsyncStorage.removeItem('email')
      } catch(e) {
        console.log(e)
      }
      dispatch(userLogout())
    },
    signUp: (userName, email, password) => {
      fetch('http://10.0.2.2:3000/api/v2/storefront/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
        body: JSON.stringify({
          'user': {
            'email': email,
            'password': password,
            'password_confirmation': password
          }
        })
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data, email, password)
        dispatch(userRegister(userName, email))
      })
    },
  }), [])

  React.useEffect(() => {
    const bootstrapAsync = async() => {
      let userToken = null
      let email = null

      try {
        userToken = await AsyncStorage.getItem('userToken')
        email = await AsyncStorage.getItem('email')
      } catch (e) {
        console.log(e)
      }
      dispatch(retrieveToken(userToken, email))
    }

    bootstrapAsync();
    // return () => {
    //   cleanup
    // }
  }, [])

  if( authState.isLoading ) {    //Splash Screen can be shown
    return (
      <View style={[ globalStyles.containerFluid, globalStyles.centeredContent ]}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={MyTheme}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          {
            authState.userToken !== null ? (
              <>
                <RootStack.Screen name="MainDrawerNavigator" component={MainDrawerNavigator} />
              </>
            ) : (
              <>
                <RootStack.Screen name="OnboardingA" component={OnboardingAScreen} />
                <RootStack.Screen name="OnboardingB" component={OnboardingBScreen} />
                <RootStack.Screen name="OnboardingC" component={OnboardingCScreen} />
                <RootStack.Screen name="SignIn" component={SignInScreen} />
                <RootStack.Screen name="SignUp" component={SignUpScreen} />
                <RootStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
                <RootStack.Screen name="EnterCode" component={EnterCodeScreen} />
              </>
            )
          }
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

const mapStateToProps = state => ({
  authState: state.authentication
})

export default connect(mapStateToProps)(RootStackNavigator)