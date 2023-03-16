import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.bg};
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
    border-radius: 0.5rem;
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
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 0 auto;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    background-color: ${theme.colors.accent};
    :hover {
      background-color: ${theme.colors.accentLight};
    }
  `}
`
