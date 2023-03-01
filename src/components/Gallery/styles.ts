import styled, { css } from 'styled-components'

type ImageProps = {
  src: string
}

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
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
    background: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1rem;
  `}
`

export const MainImage = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 65rem;
    height: 60rem;
    background: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1rem;
  `}
`
