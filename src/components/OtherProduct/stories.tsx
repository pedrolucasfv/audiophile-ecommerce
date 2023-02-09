import { Story, Meta } from '@storybook/react'
import OtherProduct, { OtherProductProps } from '.'

export default {
  title: 'OtherProduct',
  component: OtherProduct,
  args: {
    nameProduct: 'XX99 MARK ll',
    image: '/img/image-product.jpg',
    link: '/'
  }
} as Meta

export const Default: Story<OtherProductProps> = (args) => (
  <OtherProduct {...args} />
)
