import { screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

const args = {
  text: 'Audiophile is an all in one stop to fulfill your audio needs.',
  socialNetworks: {
    facebook: 'facebook.com',
    instagram: 'instagram.com',
    twitter: 'twitter.com'
  }
}

describe('<Footer />', () => {
  it('should render Footer correctly', () => {
    renderWithTheme(<Footer {...args} />)
    expect(screen.getByRole('img', { name: /Audiophile/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/Facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Twitter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Instagram/i)).toBeInTheDocument()
  })
  it('should receive the correct links of social networks', () => {
    renderWithTheme(<Footer {...args} />)
    expect(screen.getByLabelText(/Facebook/i).getAttribute('href')).toBe(
      'facebook.com'
    )
    expect(screen.getByLabelText(/Twitter/i).getAttribute('href')).toBe(
      'twitter.com'
    )
    expect(screen.getByLabelText(/Instagram/i).getAttribute('href')).toBe(
      'instagram.com'
    )
  })
})
