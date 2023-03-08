import { Wrapper as BannerWrapperStyles } from 'components/Banner/styles'
import {
  Info as BannerInfo,
  ImageBox as BannerImageBox
} from 'components/Banner/styles'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section``

export const BlackContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`
export const CategoryCard = styled.div`
  padding: 15rem 10rem 0rem 10rem;
  display: flex;
  ${media.lessThan('medium')`
    flex-direction: column;
  padding: 15rem 0rem 0rem 2rem;
  `}
  justify-content: space-between;
`

export const BannerContent = styled.div`
  padding: 10rem 10rem;
  ${media.lessThan('medium')`
  padding: 10rem 0;
  `}
  padding-top: 20rem;
  ${BannerWrapperStyles} {
    margin-bottom: 5rem;
  }
`
export const MainBanner = styled.div`
  ${media.lessThan('medium')`
  ${BannerWrapperStyles} {
    grid-template-columns: 1fr;
  }
  ${BannerInfo} {
    grid-column: 1;
    grid-row: 1;
    z-index: 2;
  }
  ${BannerImageBox} {
    grid-column: 1;
    grid-row: 1;
    z-index: 1;
  }
  `}
`

export const SecondBanner = styled.div`
  ${media.lessThan('medium')`
  ${BannerWrapperStyles} {
    width: 38rem;
    ${media.lessThan('medium')`
    width: 35rem;
  `}
  }
  ${BannerImageBox} {
    display: none;
  }
  `}
`
export const ThirdBanner = styled.div`
  ${media.lessThan('medium')`
  ${BannerWrapperStyles} {
    width: 38rem;
    grid-template-columns: 1fr;
    ${media.lessThan('medium')`
    width: 35rem;
  `}
  }
  ${BannerImageBox} {
    display: none;
  }
`}
`

export const Content = styled.div`
  padding: 0rem 10rem;
  margin-bottom: 15rem;
`

export const SimpleBanner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
     grid-template-rows: 1fr 2fr;
     grid-row-gap: 2rem;
  ${BannerWrapperStyles} {
    width: 35rem;
  }
  `}
`

type ImageProps = {
  src?: string
}

export const ImageBox = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 50rem;
    height: 40rem;
    ${media.lessThan('medium')`
    width: 35rem;
    height: 23rem;
  `}
    background: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 0.8rem;
  `}
`
