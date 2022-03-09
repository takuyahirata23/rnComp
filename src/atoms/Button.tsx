import React from 'react'
import { Pressable } from 'native-base'

import Text from './Text'

type Props = {
  onPress: () => void
  variant?: 'info' | 'success' | 'light'
  children: string
  shadow?: boolean
}

const textColor = {
  info: 'success',
  success: 'singletons.lightText',
  light: 'singletons.darkText',
}

export default function Button({
  onPress,
  variant = 'info',
  children,
  shadow,
}: Props) {
  return (
    <Pressable
      shadow={shadow ? 6 : 0}
      borderRadius="md"
      py={3}
      _light={{
        backgroundColor: `${variant}.500`,
      }}
      isFocused={false}
      onPress={onPress}
    >
      <Text color={textColor[variant]} fontWeight="bold" textAlign="center">
        {children}
      </Text>
    </Pressable>
  )
}
