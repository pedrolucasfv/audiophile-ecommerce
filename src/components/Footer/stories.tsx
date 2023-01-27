import { Story, Meta } from '@storybook/react'
import Footer, { FooterProps } from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    text: 'Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.',
    socialNetworks: {
      facebook: '/',
      instagram: '/',
      twitter: '/'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<FooterProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <Footer {...args} />
  </div>
)
