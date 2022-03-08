import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Button as RBButton } from 'native-base'

type Props = {
  label: string
  onPress: () => void
  size: 'xs' | 'sm' | 'md' | 'lg'
}

export default function Button({ label, onPress, size = 'sm' }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <RBButton size={size}>{label}</RBButton>
    </TouchableOpacity>
  )
}
