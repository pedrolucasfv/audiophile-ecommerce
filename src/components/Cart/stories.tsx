import { Story, Meta } from '@storybook/react'
import Cart, { CartProps } from '.'

export default {
  title: 'Cart',
  component: Cart,
  args: {
    items: [
      {
        image: '/img/image-product.jpg',
        nameProduct: 'XX99 MK ll',
        unit: 3,
        price: 5000
      },
      {
        image: '/img/image-product.jpg',
        nameProduct: 'XX99 MK ll',
        unit: 5,
        price: 2000
      }
    ]
  }
} as Meta

export const Default: Story<CartProps> = (args) => <Cart {...args} />
