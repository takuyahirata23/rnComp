import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Text, Button, NativeBaseProvider } from './src'

import { Colors } from 'react-native/Libraries/NewAppScreen'

const theme = {
  colors: {
    info: {
      500: '#FFD100',
    },
    success: {
      500: '#001489',
    },
    light: {
      500: '#D4D3D9',
    },
    singletons: {
      lightText: '#ffffff',
      darkText: '#000000',
    },
  },
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Text underline>Yoooo</Text>
        <Button text="Register Now" onPress={() => null} />
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default App
