import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <Banner
        nameProduct="headphone"
        title="new product"
        description="here is"
      />
    )
    expect(
      screen.getByRole('heading', { name: /headphone/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /new product/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /here is/i })
    ).toBeInTheDocument()
  })
  it('should render with color black by default', () => {
    const { container } = renderWithTheme(<Banner nameProduct="headphone" />)
    expect(
      screen.getByRole('heading', { name: /headphone/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'background-color': '#191919'
    })
  })
})
