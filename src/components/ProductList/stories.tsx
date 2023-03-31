import { Story, Meta } from '@storybook/react'
import ProductList, { ProductListProps } from '.'

export default {
  title: 'ProductList',
  component: ProductList,
  args: [
    {
      name: 'XX99 MARK ll HEADPHONES',
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      price: 2.999,
      image: '/img/image-product.jpg',
      productID: '124u81264712',
      category: 'headphones'
    },
    {
      name: 'XX99 MARK ll HEADPHONES',
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      price: 2.999,
      image: '/img/image-product.jpg',
      productID: '1247612456712',
      category: 'headphones'
    }
  ]
} as Meta

export const Default: Story<ProductListProps> = (args) => (
  <ProductList {...args} />
)
