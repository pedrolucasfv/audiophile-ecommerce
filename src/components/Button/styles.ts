import styled, { css, DefaultTheme } from 'styled-components'

type ColorProps = {
  color: 'primary' | 'white' | 'black'
}

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.accent};
    &:hover {
      background: ${theme.colors.accentLight};
    }
  `,
  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.bg};
    color: ${theme.colors.black};
    border: 0.1rem solid ${theme.colors.black};
    &:hover {
      background: ${theme.colors.black};
      color: ${theme.colors.white};
    }
  `,
  black: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
    &:hover {
      background: ${theme.colors.darkGray};
    }
  `
}

export const Wrapper = styled.a<ColorProps>`
  ${({ theme, color }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    border: 0;
    cursor: pointer;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    text-decoration: none;

    ${color && wrapperModifiers[color](theme)}
  `}
`
