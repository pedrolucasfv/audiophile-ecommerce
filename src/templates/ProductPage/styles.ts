import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Button = styled.div``

export const BlackContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`
export const CategoryCard = styled.div`
  padding: 20rem 10rem;
  display: flex;
  justify-content: space-between;
`
