import styled, { css } from 'styled-components'

import { Wrapper as BannerWrapperStyles } from 'components/Banner/styles'
import {
  Info as BannerInfo,
  ImageBox as BannerImageBox
} from 'components/Banner/styles'
import media from 'styled-media-query'

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
    left: 40%;
    text-transform: uppercase;
    ${media.lessThan('medium')`
      left: 18%;
    `}
  `}
`
export const BannerContent = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-gap: 15rem;
  ${media.lessThan('medium')`
  ${BannerWrapperStyles} {
    grid-template-rows: 1fr 1fr;
  }
  ${BannerInfo} {
    grid-column: 1;
    grid-row: 2;
  }
  ${BannerImageBox} {
    grid-column: 1;
    grid-row: 1;
  }
  `}
`
export const CategoryCard = styled.div`
  padding: 20rem 10rem;
  display: flex;
  justify-content: space-between;
  ${media.lessThan('medium')`
    flex-direction: column;
    padding: 20rem 2rem;
  `}
`
export const Content = styled.div`
  padding: 10rem;
  padding-bottom: 20rem;
`
