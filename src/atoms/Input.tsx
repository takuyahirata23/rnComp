import React from 'react'
import { Input as RBInput, VStack } from 'native-base'

import Text from './Text'

import type { IInputProps } from 'native-base'

export interface Props extends IInputProps {
  error: string
}

export default function Input({
  error,
  placeholder = '',
  isRequired,
  ...rest
}: Props) {
  return (
    <VStack space={1}>
      <RBInput
        placeholder={placeholder.concat(isRequired ? '*' : '')}
        isRequired={isRequired}
        borderColor={error ? 'danger.500' : undefined}
        {...rest}
      />
      {error && (
        <Text fontSize="xs" ml={2} color="danger.500">
          {error}
        </Text>
      )}
    </VStack>
  )
}
