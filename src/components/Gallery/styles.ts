import styled from 'styled-components'
import media from 'styled-media-query'

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

export const ImageBox = styled.div`
  width: 45rem;
  height: 29rem;
  ${media.lessThan('medium')`
    width: 40rem;
    height: 27rem;
  `}
`

export const MainImage = styled.div`
  ${media.lessThan('medium')`
    width: 40rem;
  `}
`
