//import { render, screen } from '@testing-library/react'

import Input from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<Input />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Input
        name="name"
        label="Product Name"
        placeholder="COLOCA O NOME AI"
        type="text"
      />
    )
  })
})
