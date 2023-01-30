import styled, { css, DefaultTheme } from 'styled-components'

type ColorProps = {
  color: 'primary' | 'white' | 'black'
}
type WrapperProps = {
  invert: boolean
} & ColorProps

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    color: white;
    background-color: ${theme.colors.accent};
  `,
  white: (theme: DefaultTheme) => css`
    color: black;
    background-color: ${theme.colors.white};
  `,
  black: (theme: DefaultTheme) => css`
    color: white;
    background-color: ${theme.colors.black};
  `,
  invert: () => css`
    direction: rtl;
  `
}
export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color, invert }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${invert && wrapperModifiers.invert()}
    ${color && wrapperModifiers[color](theme)}
  `}
`
export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: ${theme.spacings.large};
  `}
`

const titleModifiers = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.accent};
  `,
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.darkGray};
  `
}
export const Title = styled.h4<ColorProps>`
  ${({ theme, color }) => css`
    letter-spacing: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.large};
    ${color && titleModifiers[color](theme)}
    text-transform: uppercase;
  `}
`

export const NameProduct = styled.h2`
  ${({ theme }) => css`
    font-size: 5.5rem;
    margin: ${theme.spacings.xsmall} 0;
  `}
`
export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.darkGray};
  `}
`

export const ImageBox = styled.div`
  width: 60rem;
  height: 60rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
