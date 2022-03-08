import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Pressable } from 'native-base'

import Text from './Text'

import type { ReactNode } from 'react'

type Props = {
  onPress: () => void
  variant?: 'info' | 'success' | 'light'
  text: string | ReactNode
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
  text,
  shadow,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Pressable
        shadow={shadow ? 6 : 0}
        borderRadius="md"
        py={3}
        _light={{
          backgroundColor: `${variant}.500`,
        }}
        isFocused={false}
      >
        <Text color={textColor[variant]} fontWeight="bold" textAlign="center">
          {text}
        </Text>
      </Pressable>
    </TouchableOpacity>
  )
}
