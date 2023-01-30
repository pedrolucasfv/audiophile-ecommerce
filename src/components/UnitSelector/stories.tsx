import { Story, Meta } from '@storybook/react'
import UnitSelector, { UnitSelectorProps } from '.'

export default {
  title: 'UnitSelector',
  component: UnitSelector,
  args: {
    unit: 0
  }
} as Meta

export const Default: Story<UnitSelectorProps> = (args) => (
  <div style={{ maxWidth: 200 }}>
    <UnitSelector {...args} />
  </div>
)
