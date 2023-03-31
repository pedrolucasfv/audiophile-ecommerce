import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    padding: 3rem 5rem;
    border: solid 0.4rem ${theme.colors.accent};
  `}
`

export const Content = styled.div`
  display: flex;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 5rem;
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: 5.5rem;
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.white};

    ${media.lessThan('medium')`
    font-size: 4rem;
    text-align: center;
    `}
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    height: 40rem;
    @media (min-width: 1500px) {
      width: 60rem;
    }
    ${media.lessThan('medium')`
      width: 35rem;
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
    `}
    position: relative;
    border: solid 0.5rem ${theme.colors.accent};
    border-radius: 1rem;
    transition: 2s opacity;
  `}
`

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: 5.5rem;
    margin-bottom: ${theme.spacings.medium};
    color: ${theme.colors.accent};
  `}
`

export const Text = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.darkGray};
    span {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const Products = styled.div``

export const NameItem = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`
export const PriceItem = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.accent};
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    background: linear-gradient(
      to left top,
      #e3e3e3,
      #dedede,
      #e5e5e5,
      #ececec,
      #f5f5f5
    );
    border-radius: 1rem;
    padding: 1rem 2rem;
    border: solid 0.4rem ${theme.colors.accent};
  `}
  cursor: pointer;
`

export const ContentItem = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    padding-left: 1.3rem;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
    *:nth-child(1) {
      color: black;
    }
  `}
`
export const ImageProduct = styled.div`
  ${({ theme }) => css`
    width: 7rem;
    height: 7rem;

    ${media.lessThan('medium')`
      width: 35rem;
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
    `}
    position: relative;
    border-radius: 0.5rem;
    transition: 2s opacity;
    border: solid 0.1rem ${theme.colors.accent};
  `}
`
