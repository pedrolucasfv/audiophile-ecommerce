import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
  flex-direction: row-reverse;
  `}
  align-items: center;
`

export const Image = styled.div`
  margin-top: 0.6rem;
  height: 35rem;
  position: relative;
  ${media.greaterThan('medium')`
    height: 50rem;
    width: 100%;
    min-width: 54rem;
  `}
`

export const Info = styled.div`
  padding-top: 3rem;
  ${media.greaterThan('medium')`
    padding: 5rem;
  `}
`

export const Title = styled.h5`
  ${({ theme }) => css`
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    letter-spacing: 0.1rem;
    color: ${theme.colors.black};
    margin-bottom: 3rem;
    ${media.lessThan('medium')`
    text-align: center;
  `}

    span {
      color: ${theme.colors.accent};
    }
  `}
`

export const Text = styled.text`
  ${({ theme }) => css`
    justify-self: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.darkGray};
    span {
      color: ${theme.colors.accent};
    }
  `}
`
