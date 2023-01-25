import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    color: 'primary',
    text: 'SEE PRODUCT'
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
