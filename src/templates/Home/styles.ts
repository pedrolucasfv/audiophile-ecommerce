import styled, { css } from 'styled-components'
export const Wrapper = styled.main``

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

export const BannerContent = styled.div`
  padding: 20rem 10rem;
`
export const Content = styled.div`
  padding: 20rem 10rem;
`
