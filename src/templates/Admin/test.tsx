//import { render, screen } from '@testing-library/react'

import Admin from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<Admin />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Admin />)
  })
})
