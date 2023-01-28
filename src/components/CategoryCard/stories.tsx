import { Story, Meta } from '@storybook/react'
import CategoryCard, { CategoryCardProps } from '.'

export default {
  title: 'CategoryCard',
  component: CategoryCard,
  args: {
    image: '/img/image-headphones.png',
    title: 'Headphones',
    link: '/headphones'
  }
} as Meta

export const Default: Story<CategoryCardProps> = (args) => (
  <div style={{ maxWidth: 400, margin: '10rem auto' }}>
    <CategoryCard {...args} />
  </div>
)
