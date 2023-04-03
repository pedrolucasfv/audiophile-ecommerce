import * as S from './styles'
import { Facebook } from '@styled-icons/bootstrap/Facebook'
import { Twitter } from '@styled-icons/bootstrap/Twitter'
import { Instagram } from '@styled-icons/bootstrap/Instagram'
import Image from 'next/image'

type socialNetworkProps = {
  facebook: string
  twitter: string
  instagram: string
}

export type FooterProps = {
  text: string
  socialNetworks: socialNetworkProps
}

const Footer = ({ text, socialNetworks }: FooterProps) => (
  <S.Wrapper>
    <Image
      height={50}
      width={150}
      src="/img/logo-audiophile.png"
      objectFit="contain"
      aria-label="audiophile"
    />

    <S.MenuNav>
      <S.MenuLink href="/">home</S.MenuLink>
      <S.MenuLink href="/category/headphones">headphones</S.MenuLink>
      <S.MenuLink href="/category/speakers">speakers</S.MenuLink>
      <S.MenuLink href="/category/earphones">earphones</S.MenuLink>
    </S.MenuNav>
    <S.Text>{text}</S.Text>
    <S.SocialNetworks>
      <S.MenuLink href={socialNetworks.facebook} aria-label="Facebook">
        <Facebook size={20} />
      </S.MenuLink>
      <S.MenuLink href={socialNetworks.instagram} aria-label="Instagram">
        <Instagram size={20} />
      </S.MenuLink>
      <S.MenuLink href={socialNetworks.twitter} aria-label="Twitter">
        <Twitter size={20} />
      </S.MenuLink>
    </S.SocialNetworks>
    <S.Copyright>Copyright 2021. All Rights Reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
