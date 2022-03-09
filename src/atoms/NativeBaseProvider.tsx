import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'

import type { ReactNode } from 'react'
import type { ICustomTheme } from 'native-base'

type Props = {
  children: ReactNode
  theme: ICustomTheme
}

export default function Provider({ theme, children }: Props) {
  const extendedTheme = extendTheme(theme)
  return (
    <NativeBaseProvider theme={extendedTheme}>{children}</NativeBaseProvider>
  )
}
