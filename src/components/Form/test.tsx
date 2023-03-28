//import { render, screen } from '@testing-library/react'

import Form from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<Form />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Form />)
  })
})
