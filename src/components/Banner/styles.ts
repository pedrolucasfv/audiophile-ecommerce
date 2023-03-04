import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type ColorProps = {
  color: 'primary' | 'white' | 'black' | 'none'
}
type WrapperProps = {
  invert: boolean
  withSvg: boolean
  halfHeight: boolean
} & ColorProps

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    height: 60rem;
    width: 100%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.accent};
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
    ${media.greaterThan('medium')`
  direction: rtl;
  `}
  `,
  withSvg: () => css`
    ${ImageBox} {
      height: 45rem;
      width: 45rem;
      position: absolute;
      bottom: 0%;
      left: 10%;
      z-index: 1;
    }
    ${Info} {
      z-index: 1;
    }
    svg {
      display: block;
      position: absolute;
      left: -10%;
      z-index: 0;
    }
  `,
  halfHeight: () => css`
    height: 30rem;
    ${NameProduct} {
      font-size: 3.5rem;
      margin-bottom: 0;
    }
    ${ImageBox} {
      height: 100%;
      width: 45rem;
    }
    ${Info} {
      height: 30rem;
    }
  `
}
export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color, invert, withSvg, halfHeight }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    ${invert && wrapperModifiers.invert()}
    ${color && wrapperModifiers[color](theme)}
    position: relative;
    ${halfHeight && wrapperModifiers.halfHeight}
    svg {
      display: none;
    }
    ${withSvg && wrapperModifiers.withSvg}
    overflow: hidden;
    ${media.lessThan('medium')`
    width: 40rem;
  `}
  `}
`
export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    ${media.lessThan('medium')`
    align-items: center;
   `}
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
    ${media.lessThan('medium')`
    font-size: 4rem;
    text-align: center;
    `}
  `}
`
export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.darkGray};
    ${media.lessThan('medium')`
    text-align: center;
    `}
  `}
`

export const ImageBox = styled.div`
  width: 60rem;
  height: 60rem;
  ${media.lessThan('medium')`
    width: 40rem;
   height: 40rem;
  `}
  animation: hoverAnimation 2s forwards;
  @keyframes hoverAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
