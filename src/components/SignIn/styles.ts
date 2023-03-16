import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.bg};
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
  `}
`

export const Text = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    padding-bottom: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.small};
    border-bottom: 0.1rem ${theme.colors.lightGray} solid;
    span {
      color: ${theme.colors.accent};
    }
  `}
`

export const Button = styled.div`
  align-self: center;
`
