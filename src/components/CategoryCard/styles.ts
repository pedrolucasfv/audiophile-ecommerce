import styled, { css } from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  background: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20rem;
  width: 34rem;
  border-radius: 1rem;
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    margin-top: -5rem;
    height: 15rem;
    width: 15rem;
    background-image: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
  `}
`

export const Title = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    letter-spacing: 0.1rem;
    color: ${theme.colors.black};
    margin-top: -5rem;
  `}
`

export const Shop = styled.a`
  ${({ theme }) => css`
    margin-top: -3rem;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    text-decoration: none;
    cursor: pointer;
    svg {
      color: ${theme.colors.accent};
      margin-left: 0.5rem;
      margin-bottom: 0.2rem;
    }
    &:hover {
      color: ${theme.colors.accent};
    }
  `}
`
