import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

import { PersonFill } from '@styled-icons/bootstrap/PersonFill'
import { MenuButtonWide } from '@styled-icons/bootstrap/MenuButtonWide'
import { ArrowDownSquare } from '@styled-icons/bootstrap/ArrowDownSquare'

import { useState } from 'react'
import Cart from 'components/Cart'
import CartIcon from 'components/CartIcon'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium" onClick={() => setIsOpen(true)}>
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
        <PersonFill size={20} />
        <S.CartIcon onClick={() => setIsCartOpen(!isCartOpen)}>
          <CartIcon />
        </S.CartIcon>
        <S.Cart>{isCartOpen && <Cart />}</S.Cart>
      </S.MenuGroup>

      <S.MenuToggle aria-hidden={!isOpen} isOpenMenu={isOpen}>
        <ArrowDownSquare
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="/">home</S.MenuLink>
          <S.MenuLink href="/category/headphones">headphones</S.MenuLink>
          <S.MenuLink href="/category/speakers">speakers</S.MenuLink>
          <S.MenuLink href="/category/earphones">earphones</S.MenuLink>
        </S.MenuNav>
      </S.MenuToggle>
    </S.Wrapper>
  )
}
export default Menu
