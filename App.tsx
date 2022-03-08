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

const a = 'click'
const b = 'clicked'

const App = () => {
  const [text, setText] = React.useState(true)

  const toggle = () => setText(prev => !prev)
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Text underline>Yoooo</Text>
        <Button text={text ? a : b} onPress={toggle} />
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default App
