import styled, { css, DefaultTheme } from 'styled-components'

type ColorProps = {
  color: 'primary' | 'white' | 'black' | 'none'
}
type WrapperProps = {
  invert: boolean
  withSvg: boolean
} & ColorProps

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    height: 60rem;
    width: 100%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.accent};
    ${ImageBox} {
      height: 45rem;
      width: 45rem;
      position: absolute;
      bottom: 0%;
      left: 10%;
    }
    ${Description} {
      color: ${theme.colors.white};
    }
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.gray};
  `,
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  `,
  none: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    background-color: none;
  `,
  invert: () => css`
    direction: rtl;
  `,
  withSvg: () => css`
    svg {
      display: block;
      position: absolute;
      left: -10%;
      z-index: 0;
    }
  `
}
export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color, invert, withSvg }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${invert && wrapperModifiers.invert()}
    ${color && wrapperModifiers[color](theme)}
    position: relative;
    svg {
      display: none;
    }
    ${withSvg && wrapperModifiers.withSvg}
  `}
`
export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: ${theme.spacings.large};
    a {
      text-decoration: none;
    }
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
  `,
  none: (theme: DefaultTheme) => css`
    color: ${theme.colors.accent};
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
