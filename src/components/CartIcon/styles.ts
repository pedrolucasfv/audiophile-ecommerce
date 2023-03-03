import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    height: ${theme.spacings.small};
    width: ${theme.spacings.small};
  `}
`

export const Badge = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -${theme.spacings.xxsmall};
    right: -${theme.spacings.xxsmall};

    font-size: ${theme.font.sizes.xsmall};
    height: ${theme.spacings.xsmall};
    width: ${theme.spacings.small};
    color: ${theme.colors.white};
    background-color: ${theme.colors.accent};
    border-radius: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
