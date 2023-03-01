import { Story, Meta } from '@storybook/react'
import Gallery, { GalleryProps } from '.'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    firstImage:
      '/img/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
    secondImage:
      '/img/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
    thirdImage:
      '/img/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
  }
} as Meta

export const Default: Story<GalleryProps> = (args) => <Gallery {...args} />
