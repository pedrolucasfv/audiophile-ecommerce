import { Story, Meta } from '@storybook/react'
import UnitSelector from '.'

export default {
  title: 'UnitSelector',
  component: UnitSelector
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 200 }}>
    <UnitSelector />
  </div>
)
