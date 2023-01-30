import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.gray};
    padding: ${theme.spacings.xsmall};
  `}
`

export const Number = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Plus = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    &:hover {
      color: ${theme.colors.accent};
    }
  `}
`
export const Sub = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    &:hover {
      color: ${theme.colors.accent};
    }
  `}
`
