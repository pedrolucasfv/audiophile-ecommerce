import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.gray};
  `}
`

export const Number = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`

export const Plus = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    cursor: pointer;
    &:hover {
      color: ${theme.colors.accent};
      background-color: lightgray;
    }
  `}
`
export const Sub = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    cursor: pointer;
    &:hover {
      color: ${theme.colors.accent};
      background-color: lightgray;
    }
  `}
`
