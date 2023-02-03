//import { render, screen } from '@testing-library/react'

import Category from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<Category />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Category />)
  })
})
