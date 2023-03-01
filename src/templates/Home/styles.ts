import { Wrapper as BannerWrapperStyles } from 'components/Banner/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const BlackContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`
export const CategoryCard = styled.div`
  padding: 0 10rem;
  padding-top: 15rem;
  display: flex;
  justify-content: space-between;
`

export const BannerContent = styled.div`
  padding: 20rem 10rem;
  ${BannerWrapperStyles} {
    margin-bottom: 6rem;
  }
`
export const Content = styled.div`
  padding: 20rem 10rem;
`
