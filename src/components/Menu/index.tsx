import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

import { PersonFill } from '@styled-icons/bootstrap/PersonFill'
import { MenuButtonWide } from '@styled-icons/bootstrap/MenuButtonWide'
import { ArrowDownSquare } from '@styled-icons/bootstrap/ArrowDownSquare'

import { useState } from 'react'
import Cart from 'components/Cart'
import CartIcon from 'components/CartIcon'
import SignIn from 'components/SignIn'
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsCartOpen(false)
    setIsAccountOpen(false)
  }
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium" onClick={() => setIsMenuOpen(true)}>
        <MenuButtonWide size={18} color="white" aria-label="open menu" />
      </MediaMatch>

      <Image
        height={50}
        width={150}
        src="/img/logo-audiophile.png"
        alt="logo audiophile"
        objectFit="contain"
        aria-label="audiophile"
      />

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>home</S.MenuLink>
          </Link>
          <Link href="/category/headphones" passHref>
            <S.MenuLink>headphones</S.MenuLink>
          </Link>
          <Link href="/category/speakers" passHref>
            <S.MenuLink>speakers</S.MenuLink>
          </Link>
          <Link href="/category/earphones" passHref>
            <S.MenuLink>earphones</S.MenuLink>
          </Link>
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
        <S.MenuNav onClick={() => closeMenu()}>
          <Link href="/" passHref>
            <S.MenuLink>home</S.MenuLink>
          </Link>
          <Link href="/category/headphones" passHref>
            <S.MenuLink>headphones</S.MenuLink>
          </Link>
          <Link href="/category/speakers" passHref>
            <S.MenuLink>speakers</S.MenuLink>
          </Link>
          <Link href="/category/earphones" passHref>
            <S.MenuLink>earphones</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuToggle>
      {[isCartOpen, isAccountOpen, isMenuOpen].includes(true) && (
        <S.Sombra onClick={() => closeMenu()} />
      )}
    </S.Wrapper>
  )
}
export default Menu
