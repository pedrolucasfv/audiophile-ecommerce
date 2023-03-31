import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const BlackContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    position: relative;
    padding-bottom: 20rem;
  `}
`
export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 4rem;
    position: absolute;
    bottom: 25%;
    left: 40%;
    text-transform: uppercase;
    ${media.lessThan('medium')`
      left: 18%;
    `}
  `}
`
export const ProductList = styled.div`
  margin-top: 20rem;
  margin-bottom: 20rem;
`
