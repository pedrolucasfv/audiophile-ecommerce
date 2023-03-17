//import { render, screen } from '@testing-library/react'

import PaymentPages from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<PaymentPages />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PaymentPages type="sucess" />)
  })
})
