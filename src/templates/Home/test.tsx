//import { screen } from '@testing-library/react'

import Home from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'
import HomePageMock from './mock'

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home {...HomePageMock[0]} />)
  })
})
