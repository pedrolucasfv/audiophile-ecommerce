import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<Button />', () => {
  it('should render the color primary by default', () => {
    renderWithTheme(<Button text="SEE PRODUCT" />)

    expect(screen.getByLabelText('button')).toHaveStyle({
      background: '#d87d4a'
    })
    expect(screen.getByLabelText('button')).toHaveStyleRule(
      'background',
      '#fbaf85',
      {
        modifier: ':hover'
      }
    )
  })
  it('should render the black color', () => {
    renderWithTheme(<Button text="SEE PRODUCT" color="black" />)

    expect(screen.getByLabelText('button')).toHaveStyle({
      background: '#191919'
    })
    expect(screen.getByLabelText('button')).toHaveStyleRule(
      'background',
      '#7f7f7f',
      {
        modifier: ':hover'
      }
    )
  })
  it('should render the white color', () => {
    renderWithTheme(<Button text="SEE PRODUCT" color="white" />)

    expect(screen.getByLabelText('button')).toHaveStyle({
      background: '#fafafa'
    })
    expect(screen.getByLabelText('button')).toHaveStyleRule(
      'background',
      '#191919',
      {
        modifier: ':hover'
      }
    )
  })
  it('should render the white color', () => {
    renderWithTheme(<Button text="SEE PRODUCT" link="/link" />)

    expect(screen.getByLabelText('button')).toHaveAttribute('href', '/link')
  })
})

/* 
import { render, screen } from 'utils/test-utils'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
 */
