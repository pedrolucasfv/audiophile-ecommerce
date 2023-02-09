import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Button = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} 0;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.large};
    a {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const BlackContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`
export const CategoryCard = styled.div`
  padding: 5rem 10rem;
  display: flex;
  justify-content: space-between;
`
export const ProductInfo = styled.div`
  margin: 10rem 0;
`
export const ContentInfo = styled.div`
  margin: 10rem 0;
`
