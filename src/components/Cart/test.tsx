import Cart from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<Cart />', () => {
  it('should render the headings', () => {
    renderWithTheme(<Cart />)
  })
})
