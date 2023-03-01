import { render } from '@testing-library/react'

import Gallery from '.'

const args = {
  firstImage:
    '/img/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
  secondImage:
    '/img/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
  thirdImage:
    '/img/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
}

describe('<Gallery />', () => {
  it('should render the heading', () => {
    render(<Gallery {...args} />)
  })
})
