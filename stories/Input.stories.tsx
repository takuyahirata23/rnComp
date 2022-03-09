import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '../src'
import withProvider from './Provider'

import type { Props } from '../src/atoms/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: Props) =>
  withProvider(Input)(args)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Name',
}

export const Password = Template.bind({})
Password.args = {
  placeholder: 'Password',
  type: 'password',
}

export const ErrorMessage = Template.bind({})
ErrorMessage.args = {
  placeholder: 'Email',
  value: 'invalid-email',
  error: 'Email is not valid',
}

export const RequiredField = Template.bind({})
RequiredField.args = {
  placeholder: 'Name',
  isRequired: true,
}
