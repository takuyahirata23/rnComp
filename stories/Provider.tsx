import React from 'react'

import { NativeBaseProvider } from '../src'

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

const withProvider = (Component: any) => (props: { [key: string]: unknown }) =>
  (
    <NativeBaseProvider theme={theme}>
      <Component {...props} />
    </NativeBaseProvider>
  )

export default withProvider
