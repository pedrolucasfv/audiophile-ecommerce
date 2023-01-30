import { screen, fireEvent } from '@testing-library/react'

import UnitSelector from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<UnitSelector />', () => {
  it('should render correctly and with 0 units by default', () => {
    renderWithTheme(<UnitSelector />)
    expect(screen.getByLabelText('Plus')).toBeInTheDocument()
    expect(screen.getByLabelText('Sub')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /0/ })).toBeInTheDocument()
  })
  it('should handle the unit when click on sub or plus and start with a initial value', () => {
    renderWithTheme(<UnitSelector unit={5} />)

    // verificar o valor inicial da unidade
    expect(screen.getByRole('heading', { name: /5/ })).toBeInTheDocument()
    // clicar no botão Plus deverá somar uma unidade
    fireEvent.click(screen.getByLabelText(/Plus/i))
    expect(screen.getByRole('heading', { name: /6/ })).toBeInTheDocument()
    // clicar no botão Sub deverá subtrair uma unidade
    fireEvent.click(screen.getByLabelText(/Sub/i))
    expect(screen.getByRole('heading', { name: /5/ })).toBeInTheDocument()
  })
  it('should not sub with 0 units', () => {
    renderWithTheme(<UnitSelector />)
    fireEvent.click(screen.getByLabelText(/Sub/i))
    expect(screen.getByRole('heading', { name: /0/ })).toBeInTheDocument()
  })
})
