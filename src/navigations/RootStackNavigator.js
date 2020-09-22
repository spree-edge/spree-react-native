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
import { AuthContext } from '../library/components/context'
import AsyncStorage from '@react-native-community/async-storage'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // background: 'rgb(255, 255, 255)',
  },
};

const RootStack = createStackNavigator()

export default function RootStackNavigator() {
  // const [isSignedIn, setIsSignedIn] = React.useState(false)  //Try making signed in

  // const [isLoading, setIsLoading] = React.useState(true)
  // const [userToken, setUserToken] = React.useState(null)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        }
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(
    () => ({
    signIn: (userName, password) => {
      let userToken = null
      
      fetch('http://10.0.2.2:3000/spree_oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'token=InpmWTRUckMwTHVNZ202d2RVTVg4N0ExNTkwNTYxMTc5MDk5Ig%3D%3D--751c67228985fd14c7edbeddfd9952518997f1e5; guest_token=InpmWTRUckMwTHVNZ202d2RVTVg4N0ExNTkwNTYxMTc5MDk5Ig%3D%3D--751c67228985fd14c7edbeddfd9952518997f1e5; connect.sid=s%3AYJFykEuccStMImXWZtqGrv97Qg5dpOMy.yLOFiVNLb1no8MB9a%2BfvhEu1UZYSOzfVrTcB77oBxW8'
        },
        body: JSON.stringify({
          'username': userName,
          'password': password,
          'grant_type': "password"
        })
      })
      .then(res => res.json())
      .then(async data => {
        try{
          await AsyncStorage.setItem('userToken', data.access_token)
          dispatch({ type: 'LOGIN', id: userName, token: data.access_token })
        } catch(e) {
          console.log(e)
        }
      })
    },
    signOut: async () => {
      try{
        await AsyncStorage.removeItem('userToken')
      } catch(e) {
        console.log(e)
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
      setUserToken('fgkj')
      setIsLoading(false)
    },
  }), [])

  React.useEffect(() => {
    const bootstrapAsync = async() => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken})
    }

    bootstrapAsync();
    // return () => {
    //   cleanup
    // }
  }, [])

  if( loginState.isLoading ) {    //Splash Screen can be shown
    return (
      <View style={[globalStyles.containerFluid, globalStyles.centeredContent ]}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={MyTheme}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          {
            loginState.userToken !== null ? (
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