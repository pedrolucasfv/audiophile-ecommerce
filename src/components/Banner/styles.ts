import styled, { css, DefaultTheme } from 'styled-components'
import theme from 'styles/theme'

type ColorProps = {
  color: 'primary' | 'white' | 'black'
}
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
  `
}
export const Wrapper = styled.main<ColorProps>`
  ${({ theme, color }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${color && wrapperModifiers[color](theme)}
  `}
`
export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding: ${theme.spacings.large};
  `}
`
export const Title = styled.h4``

export const NameProduct = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
  `}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    height: 30rem;
    background: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
  `}
`
