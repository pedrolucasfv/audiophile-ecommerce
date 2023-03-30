import { Story, Meta } from '@storybook/react'
import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input,
  args: {
    name: 'name',
    label: 'Product Name',
    placeholder: 'COLOCA O NOME AI',
    type: 'text'
  }
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} />
