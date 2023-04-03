import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  animation: cartAnime 1s both;
  @keyframes cartAnime {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  border-radius: 0.5rem;
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

export const RemoveAll = styled.div`
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

export const Button = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 0 auto;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    background-color: ${theme.colors.accent};
    :hover {
      background-color: ${theme.colors.accentLight};
    }
  `}
`
