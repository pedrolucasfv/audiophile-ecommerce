import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  ${media.greaterThan('medium')`
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 5rem;
  `}
  ${media.lessThan('medium')`
  grid-template-row: 1fr 1fr;
  grid-row-gap: 5rem;
  `}
`

export const RightContent = styled.div`
  ${media.between('small', 'medium')`
  display: grid;
  grid-template-columns: 3fr 4fr;
  `}
  ${media.lessThan('medium')`
  display: grid;
  grid-template-rows: 1fr 2fr;
  `}
`
export const LeftContent = styled.div``
export const Title = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
export const Items = styled.div``

export const Item = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    span {
      color: ${theme.colors.accent};
      font-weight: ${theme.font.bold};
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`
export const Text = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
  `}
`
