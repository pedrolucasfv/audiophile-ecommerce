//import { screen } from '@testing-library/react'

import ProductPage from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'
import ProductPageMock from './mock'

describe('<ProductPage />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProductPage {...ProductPageMock[0]} />)
  })
})
