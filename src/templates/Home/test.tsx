//import { screen } from '@testing-library/react'

import Home from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />)
  })
})
