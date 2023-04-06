import { Meta, Story } from '@storybook/react'
import Form, { FormProps } from '.'

export default {
  title: 'Form',
  component: Form,
  args: {
    productSelected: {
      name: '',
      price: 0,
      description: '',
      productID: '',
      category: '',
      image: ''
    },
    type: 'add'
  }
} as Meta

export const Default: Story<FormProps> = (args) => <Form {...args} />
