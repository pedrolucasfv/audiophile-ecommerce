import { Story, Meta } from '@storybook/react'
import ContentInfo, { ContentInfoProps } from '.'

export default {
  title: 'ContentInfo',
  component: ContentInfo,
  args: {
    image: '/img/image-best-gear.jpg',
    title: 'BRINGING YOU THE <span>BEST</span> AUDIO GEAR',
    text: 'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
  }
} as Meta

export const Default: Story<ContentInfoProps> = (args) => (
  <div style={{ maxWidth: 1100 }}>
    <ContentInfo {...args} />
  </div>
)
