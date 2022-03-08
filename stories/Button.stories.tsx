import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../src'
import withProvider from './Provider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = args => (
//     <Button {...args} />
// )
const Template: ComponentStory<typeof Button> = args =>
  withProvider(Button)(args)

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  text: 'REGISTER NOW',
}

export const InfoWithShadow = Template.bind({})
InfoWithShadow.args = {
  text: 'REGISTER NOW',
  shadow: true,
}

export const Success = Template.bind({})
Success.args = {
  text: 'SUCCESS!',
  variant: 'success',
}

export const Light = Template.bind({})
Light.args = {
  text: 'Cancel',
  variant: 'light',
}
