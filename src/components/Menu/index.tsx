import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

import { Cart } from '@styled-icons/bootstrap/Cart'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'
import { MenuButtonWide } from '@styled-icons/bootstrap/MenuButtonWide'
import { ArrowDownSquare } from '@styled-icons/bootstrap/ArrowDownSquare'

import { useState } from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium" onClick={() => setIsOpen(true)}>
        <MenuButtonWide size={18} color="white" aria-label="open menu" />
      </MediaMatch>

      <S.Logo role="img" aria-label="Audiophile" />

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">home</S.MenuLink>
          <S.MenuLink href="#">headphones</S.MenuLink>
          <S.MenuLink href="#">speakers</S.MenuLink>
          <S.MenuLink href="#">earphones</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <PersonFill size={20} />
        <Cart size={20} aria-label="Cart" />
      </S.MenuGroup>

      <S.MenuToggle aria-hidden={!isOpen} isOpenMenu={isOpen}>
        <ArrowDownSquare
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="#">Colletions</S.MenuLink>
          <S.MenuLink href="#">Men</S.MenuLink>
          <S.MenuLink href="#">Women</S.MenuLink>
          <S.MenuLink href="#">About</S.MenuLink>
          <S.MenuLink href="#">Contact</S.MenuLink>
        </S.MenuNav>
      </S.MenuToggle>
    </S.Wrapper>
  )
}
export default Menu
