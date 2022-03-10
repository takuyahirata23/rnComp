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
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
    },
    Oswald: {
      700: {
        normal: 'Oswald-Bold',
      },
    },
  },
  fonts: {
    heading: 'Oswald',
    body: 'Roboto',
    mono: 'Roboto',
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
        <Text fontFamily="heading" fontWeight="700">
          Hello World
        </Text>
        <Text fontWeight={400} fontFamily="body">
          Almost before we knew it, we had left the ground.
        </Text>
        <Button onPress={toggle}>{text ? a : b}</Button>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default App
