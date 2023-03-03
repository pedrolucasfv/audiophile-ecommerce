import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  `}
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 50rem;
    height: 50rem;
    background: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
    ${media.lessThan('medium')`
      width: 40rem;
  `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.medium};
    align-self: center;
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.medium};
    letter-spacing: ${theme.spacings.xxsmall};
    color: ${theme.colors.accent};
  `}
`

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: 5rem;
    margin: ${theme.spacings.xsmall} 0;
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    line-height: 2.5rem;
    width: 80%;
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    margin: ${theme.spacings.medium} 0;
  `}
`

export const Buttons = styled.div`
  display: flex;
`

export const UnitSelector = styled.div`
  width: 15rem;
  margin-right: 3rem;
`
export const Button = styled.div``
