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
  padding: 10rem 10rem;
  padding-top: 20rem;
  ${BannerWrapperStyles} {
    margin-bottom: 5rem;
  }
`
export const Content = styled.div`
  padding: 0rem 10rem;
  margin-bottom: 15rem;
`

export const SimpleBanner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

type ImageProps = {
  src?: string
}

export const ImageBox = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 50rem;
    height: 40rem;
    background: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 0.8rem;
  `}
`
