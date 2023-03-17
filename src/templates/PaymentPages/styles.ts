import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const BlackContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`
export const Text = styled.h2`
  ${({ theme }) => css`
    font-size: 5rem;
    margin: ${theme.spacings.xsmall} 0;
    font-weight: ${theme.font.bold};
    margin-left: 5rem;
    ${media.lessThan('medium')`
    font-size: 3rem;
    `}
  `}
`
export const Info = styled.div`
  display: flex;
  margin-top: 10rem;
  justify-content: center;
  align-items: center;
  ${media.lessThan('medium')`
  svg {
    height: 15rem;
    width: 15rem;
  }
    `}
`

export const Button = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 0 auto;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    background-color: ${theme.colors.accent};
    text-decoration: none;
    :hover {
      background-color: ${theme.colors.accentLight};
    }
    margin-top: 5rem;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
