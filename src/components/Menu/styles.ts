import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    background-color: ${theme.colors.black};
    border-bottom: solid 0.1rem ${theme.colors.darkGray};
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

export const MenuNav = styled.div``

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
type CartProps = {
  isCartOpen: boolean
}

export const Cart = styled.div<CartProps>`
  ${({ isCartOpen }) => css`
    position: absolute;
    right: 0%;
    z-index: 50;
    width: 38rem;
    ${media.greaterThan('medium')`
    width: 50rem;
   right: 60%;
  `}
    transition: transform 0.5s, opacity 0.7s ease-in-out;
    opacity: ${isCartOpen ? 1 : 0};
    transform: ${isCartOpen ? 'translateX(0)' : 'translateX(3rem)'};
    pointer-events: ${isCartOpen ? 'all' : 'none'};
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    position: relative;
    color: white;
    display: flex;
    svg {
      margin-right: 1rem;
      cursor: pointer;
      &:hover {
        color: ${theme.colors.accent};
      }
    }
  `}
`

type MenuToggleProps = {
  isOpenMenu: boolean
}
export const MenuToggle = styled.nav<MenuToggleProps>`
  ${({ isOpenMenu }) => css`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 20;
    width: 42%;
    left: 0;
    top: 0;

    bottom: 0;
    height: 100vh;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpenMenu ? 1 : 0};
    pointer-events: ${isOpenMenu ? 'all' : 'none'};

    > svg {
      margin: 1.5rem;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem;
      flex: 1;
    }
    ${MenuLink} {
      color: black;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      transform: ${isOpenMenu ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const CartIcon = styled.div`
  cursor: pointer;
`

export const Sombra = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 40;
`
type AccountProps = {
  isAccountOpen: boolean
}

export const Account = styled.div<AccountProps>`
  ${({ isAccountOpen }) => css`
    position: absolute;
    right: 0%;
    z-index: 50;
    width: 38rem;
    ${media.greaterThan('medium')`
      right: 100%;
  `}
    transition: transform 0.5s, opacity 0.7s ease-in-out;
    opacity: ${isAccountOpen ? 1 : 0};
    transform: ${isAccountOpen ? 'translateX(0)' : 'translateX(3rem)'};
    pointer-events: ${isAccountOpen ? 'all' : 'none'};
  `}
`
