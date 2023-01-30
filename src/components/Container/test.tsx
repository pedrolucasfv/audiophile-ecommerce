import { Container } from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Audiophile</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule('max-width', '130rem')

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Audiophile
        </span>
      </div>
    `)
  })
})
