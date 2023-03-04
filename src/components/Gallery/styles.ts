import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type ImageProps = {
  src: string
}

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 3rem;
  width: 113rem;
  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  grid-gap: 0;
  grid-template-rows: 1fr 1fr;
  `}
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const RightContent = styled.div``

export const ImageBox = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 45rem;
    height: 29rem;
    ${media.lessThan('medium')`
    width: 40rem;
    margin-bottom: 1rem;
    `}
    background: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.8rem;
  `}
`

export const MainImage = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 65rem;
    height: 60rem;
    ${media.lessThan('medium')`
    width: 40rem;
    height: 40rem;
    `}
    background: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.8rem;
  `}
`
