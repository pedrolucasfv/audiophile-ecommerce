import { Story, Meta } from '@storybook/react'
import Product, { ProductProps } from '.'

export default {
  title: 'Product',
  component: Product,
  args: {
    title: 'new product',
    name: 'XX99 MARK ll HEADPHONES',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: 2.999,
    image: '/img/image-product.jpg'
  }
} as Meta

export const Default: Story<ProductProps> = (args) => (
  <div style={{ maxWidth: 1000 }}>
    <Product {...args} />
  </div>
)
