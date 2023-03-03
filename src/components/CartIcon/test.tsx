import { screen } from '@testing-library/react'

import CartIcon from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<CartIcon />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/Cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })
})
