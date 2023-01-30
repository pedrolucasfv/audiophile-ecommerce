import { Story, Meta } from '@storybook/react'
import ProductInfo, { ProductInfoProps } from '.'

export default {
  title: 'ProductInfo',
  component: ProductInfo,
  args: {
    text: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
    items: [
      {
        item: 'Headphone Unit',
        quantity: 1
      },
      {
        item: 'Replacement Earcups',
        quantity: 2
      },
      {
        item: 'User Manual',
        quantity: 1
      },
      {
        item: '3.5mm 5m Audio Cable',
        quantity: 1
      },
      {
        item: 'Travel Bag',
        quantity: 1
      }
    ]
  }
} as Meta

export const Default: Story<ProductInfoProps> = (args) => (
  <ProductInfo {...args} />
)
