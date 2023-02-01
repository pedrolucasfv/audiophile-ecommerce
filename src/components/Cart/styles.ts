import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 40rem;
`

export const Header = styled.div``

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    height: 8rem;
    width: 8rem;
    background: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
  `}
`

export const Title = styled.h4``

export const Item = styled.div``

export const Price = styled.div``
