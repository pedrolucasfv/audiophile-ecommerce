import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  ${media.lessThan('medium')`
  display: flex;
  flex-direction: column;
  align-items: center;
  `}
  grid-gap: 2rem;
`
export const Text = styled.div`
  ${({ theme }) => css`
    grid-column: 1/6;
    grid-row: 2;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const MenuNav = styled.div`
  grid-column: 3/6;
  display: flex;
  align-items: center;
  ${media.lessThan('medium')`
  flex-direction: column;
  `}
`
export const SocialNetworks = styled.div`
  grid-column: 5/6;
  grid-row: 3;
  display: flex;
  justify-content: flex-end;
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    grid-column: 1/3;
    grid-row: 3;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.4rem;
    margin: 0.3rem 2.8rem 0;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
    &:hover {
      color: ${theme.colors.accent};
    }
  `}
`

export const Logo = styled.div`
  margin-top: 0.6rem;
  height: 5rem;
  width: 15rem;
  background-image: url('/img/logo-audiophile.png');
  background-size: contain;
  background-repeat: no-repeat;
`
