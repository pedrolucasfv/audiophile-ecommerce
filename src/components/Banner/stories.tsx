import { Story, Meta } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    nameProduct: 'XX99 MARK ll HEADPHONES',
    title: 'NEW PRODUCT',
    description:
      'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    image: '/img/image-product.jpg'
  }
} as Meta

export const Default: Story = (args) => <Banner {...args} />
