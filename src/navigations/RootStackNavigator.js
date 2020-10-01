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
import { retrieveToken, userLogin, userLogout, userRegister } from '../redux/actions/authActions'
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
    
  }), [])

  React.useEffect(() => {
    const bootstrapAsync = async() => {
      dispatch(userLogin({
        refresh_token: await AsyncStorage.getItem('refreshToken'), 
        grant_type: "refresh_token"
      }))
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
            authState.access_token ? (
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
  authState: state.auth
})

export default connect(mapStateToProps)(RootStackNavigator)