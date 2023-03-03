import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 50rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const RemoveAll = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: ${theme.colors.accent};
    }
  `}
`

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

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const ContentItem = styled.div`
  flex-grow: 1;
  padding-left: 1.3rem;
`

export const NameProduct = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.darkGray};
  `}
`

export const TotalContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.large};
  `}
`
export const PriceTotal = styled.h4`
  color: black;
`
export const Total = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    color: ${theme.colors.darkGray};
  `}
`
