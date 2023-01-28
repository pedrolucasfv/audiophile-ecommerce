import { Story, Meta } from '@storybook/react'
import CategoryCard, { CategoryCardProps } from '.'

export default {
  title: 'CategoryCard',
  component: CategoryCard,
  args: {
    image: '/img/image-product.jpg',
    title: 'Headphones'
  }
} as Meta

export const Default: Story<CategoryCardProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <CategoryCard {...args} />
  </div>
)
