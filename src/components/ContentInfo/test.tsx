import { screen } from '@testing-library/react'

import ContentInfo from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

const args = {
  image: '/img/image-best-gear.jpg',
  title: 'BRINGING YOU THE BEST AUDIO GEAR',
  text: 'Located at the heart of New York City.'
}

describe('<ContentInfo />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ContentInfo {...args} />)
    expect(
      screen.getByRole('img', { name: /Image ContentInfo/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Bringing you the best audio gear/i })
    ).toBeInTheDocument()
  })
})
