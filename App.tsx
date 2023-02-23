import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular as Inter400Regular,
  Inter_700Bold as Inter700Bold,
} from '@expo-google-fonts/inter'

import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter400Regular,
    Inter700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0D0D0D"
        translucent
      />
      <Home />
    </>
  )
}
