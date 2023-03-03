import { Story, Meta } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon
} as Meta

export const Default: Story = () => (
  <div style={{ margin: '3rem 3rem' }}>
    <CartIcon />
  </div>
)

export const WithItems: Story = (args) => (
  <div style={{ margin: '3rem 3rem' }}>
    <CartIcon {...args} />
  </div>
)

WithItems.args = {
  totalQuantity: 3
}
