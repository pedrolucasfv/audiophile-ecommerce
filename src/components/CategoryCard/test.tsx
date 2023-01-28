import { screen } from '@testing-library/react'

import CategoryCard from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

const args = {
  image: '/img/image-product.jpg',
  title: 'Headphones',
  link: '/headphones'
}
describe('<CategoryCard />', () => {
  it('should render the CategoryCard', () => {
    renderWithTheme(<CategoryCard {...args} />)
    expect(
      screen.getByRole('img', { name: /Category Image/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Headphones/i })
    ).toBeInTheDocument()
  })
  it('should have the link in ShopButton', () => {
    renderWithTheme(<CategoryCard {...args} />)
    expect(screen.getByLabelText(/Shop Button/i).getAttribute('href')).toBe(
      '/headphones'
    )
  })
})
