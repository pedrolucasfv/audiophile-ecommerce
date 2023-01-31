import { screen } from '@testing-library/react'

import ProductInfo from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

const args = {
  text: 'Featuring a genuine leather',
  items: [
    {
      item: 'Headphone Unit',
      quantity: 5
    },
    {
      item: 'Replacement Earcups',
      quantity: 5
    },
    {
      item: 'User Manual',
      quantity: 5
    }
  ]
}

describe('<ProductInfo />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ProductInfo {...args} />)
    expect(
      screen.getByRole('heading', { name: /Features/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /In the Box/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Featuring a genuine leather/i })
    ).toBeInTheDocument()
  })
  it('should render with correctly quantities', () => {
    renderWithTheme(<ProductInfo {...args} />)
    expect(screen.getAllByText(/5x/i)).toHaveLength(3)
  })
})
