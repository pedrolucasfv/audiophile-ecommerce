import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  height: 100%;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    height: 30rem;
    width: 30rem;
    background-image: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
  `}
`

export const NameProduct = styled.h2`
  ${({ theme }) => css`
    margin: 2rem 0;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
