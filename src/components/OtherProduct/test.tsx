import { screen } from '@testing-library/react'

import OtherProduct from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

const args = {
  nameProduct: 'XX99 MARK ll',
  image: '/img/image-product.jpg',
  link: '/'
}

describe('<OtherProduct />', () => {
  it('should render correctly', () => {
    renderWithTheme(<OtherProduct {...args} />)
    expect(
      screen.getByRole('img', { name: /Product Image/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /XX99 MARK ll/i })
    ).toBeInTheDocument()
  })
})
