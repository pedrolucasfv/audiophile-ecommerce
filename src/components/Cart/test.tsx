import { screen } from '@testing-library/react'

import Cart from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

const args = {
  items: [
    {
      image: '/img/image-product.jpg',
      nameProduct: 'XX99 MK ll',
      unit: 3,
      price: 5000
    },
    {
      image: '/img/image-product.jpg',
      nameProduct: 'DJ44 MJ PP',
      unit: 5,
      price: 2000
    }
  ]
}

describe('<Cart />', () => {
  it('should render the headings', () => {
    renderWithTheme(<Cart {...args} />)
    expect(screen.getByRole('heading', { name: /Cart/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Total/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /XX99 MK ll/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /DJ44 MJ PP/i })
    ).toBeInTheDocument()
  })
  it('should render the total price correctly', () => {
    renderWithTheme(<Cart {...args} />)
    expect(screen.getByRole('heading', { name: 'R$25000' })).toBeInTheDocument()
  })
})
