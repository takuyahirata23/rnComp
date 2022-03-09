import React from 'react'
import { Text as NBText } from 'native-base'

import type { ITextProps } from 'native-base'

export default function Text({ children, ...rest }: ITextProps) {
  return <NBText {...rest}>{children}</NBText>
}
