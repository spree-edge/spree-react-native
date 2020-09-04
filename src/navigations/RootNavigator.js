import * as React from "react"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/main/HomeScreen'
import SignInScreen from '../screens/auth/SignInScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import OnboardingAScreen from '../screens/onboarding/OnboardingAScreen'
import OnboardingBScreen from '../screens/onboarding/OnboardingBScreen'
import OnboardingCScreen from '../screens/onboarding/OnboardingCScreen'

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
      <RootStack.Navigator>
        {
          isSignedIn ? (
            <>
              <RootStack.Screen name="Home" component={HomeScreen} />
            </>
          ) : (
            <>
              <RootStack.Screen name="OnboardingA" component={OnboardingAScreen} options={{headerShown: false}} />
              <RootStack.Screen name="OnboardingB" component={OnboardingBScreen} options={{headerShown: false}}/>
              <RootStack.Screen name="OnboardingC" component={OnboardingCScreen} options={{headerShown: false}}/>
              <RootStack.Screen name="SignIn" component={SignInScreen} />
              <RootStack.Screen name="SignUp" component={SignUpScreen} />
            </>
          )
        }
      </RootStack.Navigator>
    </NavigationContainer>
  )
}