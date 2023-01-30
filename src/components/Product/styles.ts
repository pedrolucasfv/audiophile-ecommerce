import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    height: 30rem;
    width: 50rem;
    background: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.medium};
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
    font-size: ${theme.font.sizes.xxlarge};
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const Description = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Buttons = styled.div`
  display: flex;
`

export const UnitSelector = styled.div`
  width: 15rem;
  margin-right: 3rem;
`
