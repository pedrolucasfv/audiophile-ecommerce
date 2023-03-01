//import { render, screen } from '@testing-library/react'

import Category from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'
import CategoryPageMock from './mock'

describe('<Category />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Category {...CategoryPageMock[0]} />)
  })
})
