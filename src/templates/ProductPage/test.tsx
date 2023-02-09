//import { screen } from '@testing-library/react'

import ProductPage from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<ProductPage />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProductPage />)
  })
})
