import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'react-native-elements'
import RootStackNavigator from './src/navigations/RootStackNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const getFonts = () => Font.loadAsync({
  'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
  'lato-regular': require('./assets/fonts/Lato-Regular.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false)

  if(fontsLoaded) {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <PaperProvider>
            <RootStackNavigator />
          </PaperProvider>
        </ThemeProvider>
      </Provider>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
