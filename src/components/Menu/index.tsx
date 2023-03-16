import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

import { PersonFill } from '@styled-icons/bootstrap/PersonFill'
import { MenuButtonWide } from '@styled-icons/bootstrap/MenuButtonWide'
import { ArrowDownSquare } from '@styled-icons/bootstrap/ArrowDownSquare'

import { useState } from 'react'
import Cart from 'components/Cart'
import CartIcon from 'components/CartIcon'
import SignIn from 'components/SignIn'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium" onClick={() => setIsMenuOpen(true)}>
        <MenuButtonWide size={18} color="white" aria-label="open menu" />
      </MediaMatch>

      <S.Logo role="img" aria-label="Audiophile" />

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/">home</S.MenuLink>
          <S.MenuLink href="/category/headphones">headphones</S.MenuLink>
          <S.MenuLink href="/category/speakers">speakers</S.MenuLink>
          <S.MenuLink href="/category/earphones">earphones</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <PersonFill size={20} onClick={() => setIsAccountOpen(true)} />
        <S.Account isAccountOpen={isAccountOpen} aria-hidden={!isAccountOpen}>
          <SignIn />
        </S.Account>
        <S.CartIcon onClick={() => setIsCartOpen(true)}>
          <CartIcon />
        </S.CartIcon>
        <S.Cart isCartOpen={isCartOpen} aria-hidden={!isCartOpen}>
          <Cart />
        </S.Cart>
      </S.MenuGroup>

      <S.MenuToggle aria-hidden={!isMenuOpen} isOpenMenu={isMenuOpen}>
        <ArrowDownSquare
          aria-label="Close Menu"
          onClick={() => setIsMenuOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="/">home</S.MenuLink>
          <S.MenuLink href="/category/headphones">headphones</S.MenuLink>
          <S.MenuLink href="/category/speakers">speakers</S.MenuLink>
          <S.MenuLink href="/category/earphones">earphones</S.MenuLink>
        </S.MenuNav>
      </S.MenuToggle>
      {isCartOpen && <S.Sombra onClick={() => setIsCartOpen(false)} />}
      {isAccountOpen && <S.Sombra onClick={() => setIsAccountOpen(false)} />}
    </S.Wrapper>
  )
}
export default Menu
