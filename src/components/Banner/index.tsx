import Button from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import * as S from './styles'

export type BannerProps = {
  slug: string
  nameProduct: string
  title?: string
  description?: string
  image?: string
  invert?: boolean
  color?: 'primary' | 'white' | 'black' | 'none'
  withSVG?: boolean
  halfHeight?: boolean
}

const Banner = ({
  slug,
  nameProduct,
  description,
  image = '/',
  title,
  invert = false,
  color = 'black',
  withSVG = false,
  halfHeight = false
}: BannerProps) => {
  const [buttonColor, setButtonColor] = useState<'black' | 'white' | 'primary'>(
    'black'
  )
  useEffect(() => {
    async function getColors() {
      if (color == 'black' || color == 'none') setButtonColor('primary')
      else if (color == 'white') setButtonColor('white')
      else if (color == 'primary') setButtonColor('black')
    }
    getColors()
  }, [color])

  return (
    <S.Wrapper
      color={color}
      invert={invert}
      withSvg={withSVG}
      halfHeight={halfHeight}
    >
      <S.Info>
        <S.Title color={color}>{title}</S.Title>
        <S.NameProduct>{nameProduct}</S.NameProduct>
        <S.Description>{description}</S.Description>
        <Link href={`/product/${slug}`} passHref>
          <a>
            <Button text="SEE PRODUCT" color={buttonColor} />
          </a>
        </Link>
      </S.Info>
      <S.ImageBox>
        <Image
          src={image}
          width={650}
          height={650}
          alt="image of a product in a banner"
        />
      </S.ImageBox>
      <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#FFF" fill="none" opacity=".202">
          <circle cx="472" cy="472" r="235.5" />
          <circle cx="472" cy="472" r="270.5" />
          <circle cx="472" cy="472" r="471.5" />
        </g>
      </svg>
    </S.Wrapper>
  )
}
export default Banner
