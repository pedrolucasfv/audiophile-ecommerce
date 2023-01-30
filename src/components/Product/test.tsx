import { screen } from '@testing-library/react'

import Product from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

const args = {
  name: 'XX99 MARK ll HEADPHONES',
  description:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio.',
  price: 2.999,
  image: '/img/image-product.jpg'
}

describe('<Product />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Product {...args} title="new product" />)
    expect(
      screen.getByRole('heading', { name: /new product/i })
    ).toBeInTheDocument()
    //expect(screen.getByLabelText(/new product/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /XX99 MARK ll HEADPHONES/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /The new XX99 Mark II headphones is the pinnacle of pristine audio./i
      })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/price/i)).toBeInTheDocument()
  })
  it('should render without title', () => {
    renderWithTheme(<Product {...args} />)
    expect(screen.queryByLabelText(/new product/i)).not.toBeInTheDocument()
  })
})
