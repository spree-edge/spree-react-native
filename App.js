import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'
import RootNavigator from './src/navigations/RootNavigator'
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
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
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
