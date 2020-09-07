import * as React from "react"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/main/HomeScreen'
import SignInScreen from '../screens/auth/SignInScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import OnboardingAScreen from '../screens/onboarding/OnboardingAScreen'
import OnboardingBScreen from '../screens/onboarding/OnboardingBScreen'
import OnboardingCScreen from '../screens/onboarding/OnboardingCScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen'
import EnterCodeScreen from '../screens/auth/EnterCodeScreen'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // background: 'rgb(255, 255, 255)',
  },
};

const RootStack = createStackNavigator()

export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false)  //Try making signed in

  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {
          isSignedIn ? (
            <>
              <RootStack.Screen name="Home" component={HomeScreen} options={{headerShown: true}} />
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
  )
}