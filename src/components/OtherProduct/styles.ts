import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  height: 100%;
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NameProduct = styled.h2`
  ${({ theme }) => css`
    margin: 2rem 0;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`
