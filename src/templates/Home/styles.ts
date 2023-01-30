import styled, { css } from 'styled-components'
export const Wrapper = styled.main``

export const ContainerTop = styled.div`
  ${({ theme }) => css`
    height: 100rem;
    background-color: ${theme.colors.black};
  `}
`
