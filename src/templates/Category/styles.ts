import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const BlackContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    position: relative;
    padding-bottom: 20rem;
  `}
`
export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 4rem;
    position: absolute;
    bottom: 25%;
    right: 45%;
    text-transform: uppercase;
  `}
`
export const BannerContent = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-gap: 15rem;
`
export const CategoryCard = styled.div`
  padding: 20rem 10rem;
  display: flex;
  justify-content: space-between;
`
export const Content = styled.div`
  padding: 10rem;
  padding-bottom: 20rem;
`
